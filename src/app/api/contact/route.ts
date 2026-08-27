import { NextResponse } from "next/server";
import { validateConsultationForm, type ConsultationFormData } from "@/lib/validation";

// Simple in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. IP & Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many consultation requests from this connection. Please try again in 1 minute or call directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse Payload
    const body = (await request.json()) as Partial<ConsultationFormData>;

    // 3. Validate Payload (Client + Server Shared Schema)
    const validation = validateConsultationForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // 4. Sanitize Input
    const sanitizedLead = {
      leadId: `BSTC-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      name: body.name?.trim().slice(0, 80),
      email: body.email?.trim().toLowerCase().slice(0, 100),
      phone: body.phone?.trim().slice(0, 20),
      service: body.service?.trim().slice(0, 100) || "General Tax & Corporate Inquiry",
      message: body.message?.trim().slice(0, 2000),
      urgent: Boolean(body.urgent),
      submittedAt: new Date().toISOString(),
      sourceIp: ip,
    };

    // 5. Simulated Dispatch / Webhook Trigger (e.g. Discord, Slack, CRM)
    console.log("[BSTC Lead Ingestion]", JSON.stringify(sanitizedLead, null, 2));

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📢 **New Consultation Request**: ${sanitizedLead.name} (${sanitizedLead.phone}) - Service: ${sanitizedLead.service} ${sanitizedLead.urgent ? "🚨 [URGENT]" : ""}`,
          }),
        });
      } catch (webhookError) {
        console.error("[BSTC Webhook Error]", webhookError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been successfully submitted.",
        leadId: sanitizedLead.leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[BSTC Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
