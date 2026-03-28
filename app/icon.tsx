import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontSize: 20,
          color: "#F5F2EE",
          fontWeight: 700,
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
