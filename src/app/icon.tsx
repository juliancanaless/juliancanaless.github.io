import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 18,
            color: "#fe8019",
            fontFamily: "Permanent Marker",
            letterSpacing: -1,
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
