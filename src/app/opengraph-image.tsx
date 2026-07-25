import { ImageResponse } from "next/og";
import { siteConfig as site } from "@/lib/site-config";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0d14",
          backgroundImage:
            "radial-gradient(900px 420px at 18% 6%, rgba(99,102,241,0.34), transparent 70%), radial-gradient(760px 380px at 88% 96%, rgba(34,211,238,0.24), transparent 70%)",
          color: "#eceef2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#6366f1,#22d3ee)",
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            AK
          </div>
          <div style={{ fontSize: 28, color: "#8593aa" }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
            }}
          >
            AI Engineer
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              background: "linear-gradient(100deg,#818cf8,#22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            &amp; Full Stack Developer
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: "#8593aa", maxWidth: 900 }}>
            {`${site.stack} — ${site.location}`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 22,
            color: "#b0b9c9",
          }}
        >
          {["React", "Redux", "Node.js", "MongoDB", "Tailwind"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(236,238,242,0.14)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
