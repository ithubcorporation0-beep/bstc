import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateConsultationForm } from "@/lib/validation";
import { getServiceBySlug } from "@/data";
import { siteSettings } from "@/data/settings";

/**
 * In-memory sliding-window IP rate limiter.
 * Max 5 submissions per 15 minutes per IP.
 */
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (record && now > record.resetAt) {
    rateLimitMap.delete(ip);
  }

  const current = rateLimitMap.get(ip);
  if (!current) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true; // Allowed
  }

  if (current.count >= MAX_SUBMISSIONS) {
    return false; // Blocked (Rate limited)
  }

  current.count += 1;
  return true; // Allowed
}

export async function POST(req: NextRequest) {
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  const timestamp = new Date().toISOString();

  try {
    // 1. Enforce IP Rate Limiting
    if (!checkRateLimit(clientIp)) {
      console.warn(`[API /api/contact] Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        {
          error:
            "Too many consultation requests submitted. Please wait 15 minutes or reach us directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON Payload
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    // 3. Server-Side Validation
    const validation = validateConsultationForm(body);
    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, phone, email, service, message, company } =
      validation.sanitizedData;

    // 4. Honeypot Anti-Spam Check
    // If the hidden 'company' field is filled, return 200 success silently to trick bots
    if (company && company.trim().length > 0) {
      console.log(`[API /api/contact] Spam bot caught via honeypot from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: true,
          message: "Thank you. Your consultation request has been received.",
        },
        { status: 200 }
      );
    }

    // 5. Lookup Service Title
    const matchedService = getServiceBySlug(service);
    const serviceTitle = matchedService ? matchedService.title : "General Tax & Corporate Advisory";

    // 6. PRD §6.4 Audit Logging: Full submission payload logged for recovery
    console.log("[API /api/contact] New Consultation Submission:", {
      timestamp,
      clientIp,
      firstName,
      lastName,
      phone,
      email: email || "(Not provided)",
      serviceSlug: service,
      serviceTitle,
      message: message || "(None)",
    });

    // 7. Dispatch Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || siteSettings.email;
    const senderEmail =
      process.env.RESEND_FROM_EMAIL || "BSTC Inquiries <onboarding@resend.dev>";

    if (!resendApiKey) {
      // In development without a key, log warning and return success for client testing
      console.warn(
        "[API /api/contact] RESEND_API_KEY is not set in environment. Simulated success."
      );
      return NextResponse.json({
        success: true,
        message: "Consultation request logged successfully (Dev Simulation).",
      });
    }

    const resend = new Resend(resendApiKey);

    const emailSubject = `Consultation Request: ${serviceTitle} — ${firstName} ${lastName}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #0a0a0a; background: #f8fafc; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; }
            .header { background: linear-gradient(135deg, #1e3a8a, #1d4ed8); color: #ffffff; padding: 28px; text-align: center; }
            .content { padding: 32px; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: #84cc16; color: #0a0a0a; font-weight: bold; font-size: 12px; }
            .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            .table td { padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .table td.label { font-weight: bold; color: #64748b; width: 35%; }
            .message-box { background: #f8fafc; border-left: 4px solid #1d4ed8; padding: 16px; border-radius: 8px; margin-top: 20px; font-size: 14px; line-height: 1.6; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 22px;">New Consultation Request</h1>
              <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">Business Solutions Tax Consultants (BSTC)</p>
            </div>
            <div class="content">
              <div style="text-align: right;">
                <span class="badge">${serviceTitle}</span>
              </div>
              <table class="table">
                <tr>
                  <td class="label">Client Name:</td>
                  <td><strong>${firstName} ${lastName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp:</td>
                  <td><a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #1d4ed8; font-weight: bold;">${phone}</a></td>
                </tr>
                <tr>
                  <td class="label">Email Address:</td>
                  <td>${email ? `<a href="mailto:${email}">${email}</a>` : "<em>Not provided</em>"}</td>
                </tr>
                <tr>
                  <td class="label">Requested Service:</td>
                  <td><strong>${serviceTitle}</strong> (Slug: ${service})</td>
                </tr>
                <tr>
                  <td class="label">Submission Time:</td>
                  <td>${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })} PKT</td>
                </tr>
              </table>

              <h3 style="margin-top: 24px; font-size: 14px; color: #0a0a0a;">Client Inquiry Note:</h3>
              <div class="message-box">
                ${message ? message.replace(/\n/g, "<br>") : "<em>No additional details provided.</em>"}
              </div>
            </div>
            <div class="footer">
              This message was sent from the BSTC Website Consultation Form.<br>
              Direct phone: ${siteSettings.phone} | Address: ${siteSettings.address}
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: resendResult, error: resendError } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email || undefined,
      subject: emailSubject,
      html: emailHtml,
      text: `
New Consultation Request - BSTC
--------------------------------------------------
Client Name: ${firstName} ${lastName}
Phone / WhatsApp: ${phone}
Email: ${email || "Not provided"}
Service Requested: ${serviceTitle}
Submission Time: ${timestamp}

Client Note:
${message || "None"}
--------------------------------------------------
      `.trim(),
    });

    if (resendError) {
      console.error("[API /api/contact] Resend API Error:", resendError);
      return NextResponse.json(
        {
          error:
            "Unable to deliver consultation request via email. Please contact our office directly on WhatsApp or phone.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been received. Our advisory team will contact you shortly.",
        id: resendResult?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API /api/contact] Unhandled Server Error:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred while processing your request. Please call our office directly.",
      },
      { status: 500 }
    );
  }
}
