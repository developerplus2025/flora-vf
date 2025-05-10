import { ImageResponse } from "next/og";
import "../globals.css";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "ChatHub";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function OpenGraphImage() {
  // Font
  const geistLight = fetch(
    new URL("./fonts/Geist-Bold.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <p
          style={{
            backgroundImage: "linear-gradient(to right ,#3b82f6,#10b981)",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          ChatHub
        </p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Geist",
          data: await geistLight,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
