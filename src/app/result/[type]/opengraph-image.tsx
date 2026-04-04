import { ImageResponse } from "next/og";
import { results, resultTypes } from "@/lib/results";
import type { ResultType } from "@/lib/results";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "忙しさの正体タロット 診断結果";

export function generateStaticParams() {
  return resultTypes.map((type) => ({ type }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const card = results[type as ResultType];

  if (!card) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0B0D17",
            color: "#E8DCC8",
            fontSize: 48,
          }}
        >
          忙しさの正体タロット
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(135deg, ${card.gradFrom} 0%, ${card.gradVia} 50%, ${card.gradTo} 100%)`,
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 16, display: "flex" }}>{card.symbol}</div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(212,175,120,0.9)",
            letterSpacing: "0.1em",
            marginBottom: 12,
            display: "flex",
          }}
        >
          忙しさの正体タロット
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.1em",
            marginBottom: 16,
            display: "flex",
          }}
        >
          あなたは【{card.name}】でした
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          ― {card.sub} ―
        </div>
      </div>
    ),
    { ...size }
  );
}
