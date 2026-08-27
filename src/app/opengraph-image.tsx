import { ImageResponse } from "next/og";
import { siteSettings } from "@/data/settings";

export const alt = `${siteSettings.siteName} — ${siteSettings.companyName}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #1e3a8a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Bar: Brand Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255, 255, 255, 0.15)",
            padding: "10px 24px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#84cc16",
            }}
          />
          <span style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "2px" }}>
            {siteSettings.siteName} PAKISTAN
          </span>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "18px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              color: "#ffffff",
              textShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            {siteSettings.companyName}
          </h1>

          <p
            style={{
              fontSize: "26px",
              color: "#bfdbfe",
              maxWidth: "900px",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Income Tax Returns • Sales Tax • SECP Incorporation • Corporate Advisory
          </p>
        </div>

        {/* Bottom Authority Tags Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#a3e635",
            fontWeight: "bold",
          }}
        >
          <span>FBR Compliance</span>
          <span>•</span>
          <span>SECP Corporate</span>
          <span>•</span>
          <span>PRA • SRB • KPRA • BRA</span>
          <span>•</span>
          <span>Registered ITP Advisory</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
