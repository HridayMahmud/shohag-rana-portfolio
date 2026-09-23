import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          color: "#f0b45c",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          borderRadius: 14,
        }}
      >
        SR
      </div>
    ),
    size,
  );
}
