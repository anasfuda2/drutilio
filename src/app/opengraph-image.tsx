import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 100%)",
          color: "#f8fafc",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              color: "#6ee7b7",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Free Financial Calculators
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#cbd5e1",
              lineHeight: 1.4,
              maxWidth: 920,
            }}
          >
            Mortgage, loans, savings, retirement, and student loan tools
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {[
            "US-focused",
            "Educational estimates",
            "No signup required",
            "Free to use",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 22,
                color: "#e2e8f0",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
