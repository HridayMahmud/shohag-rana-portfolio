import { ImageResponse } from "next/og";

import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
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
          background: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(240,180,92,0.22), transparent 55%), radial-gradient(circle at 4% 96%, rgba(240,180,92,0.12), transparent 45%)",
          padding: "72px 80px",
          color: "#ededf1",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.22)",
              color: "#f0b45c",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            SR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a2a2ae",
            }}
          >
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              color: "#f0b45c",
              letterSpacing: "-0.01em",
            }}
          >
            {profile.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 1, background: "rgba(255,255,255,0.14)" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 28,
              fontSize: 21,
              color: "#a2a2ae",
              letterSpacing: "0.04em",
            }}
          >
            <div style={{ display: "flex" }}>{profile.focus}</div>
            <div style={{ display: "flex" }}>github.com/{profile.githubHandle}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
