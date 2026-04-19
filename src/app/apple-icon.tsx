import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fontData = await readFile(
    join(process.cwd(), "src/app/fonts/PermanentMarker-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#282828",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 90,
            color: "#fe8019",
            fontFamily: "Permanent Marker",
            letterSpacing: -4,
          }}
        >
          JC
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Permanent Marker",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
