"use client";

import type { ResultCard, ResultType } from "@/lib/results";

type Props = {
  resultType: ResultType;
  card: ResultCard;
};

export default function ShareButtons({ resultType, card }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const url = `${baseUrl}/result/${resultType}`;
  const text = `🌙忙しさの正体タロット\n私の結果は【${card.name}】でした\n― ${card.sub} ―\nあなたの忙しさの正体は？`;

  const shareX = () => {
    const params = new URLSearchParams({ text, url });
    window.open(`https://twitter.com/intent/tweet?${params.toString()}`, "_blank");
  };

  const shareLine = () => {
    const lineText = `${text}\n${url}`;
    window.open(
      `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(lineText)}`,
      "_blank"
    );
  };

  return (
    <div className="flex gap-3 justify-center mt-6">
      <button
        onClick={shareX}
        className="flex items-center gap-2 text-sm text-[var(--color-txt)] bg-[rgba(212,175,120,0.08)] border border-[rgba(212,175,120,0.2)] py-3 px-6 rounded-full cursor-pointer tracking-wider hover:bg-[rgba(212,175,120,0.15)] transition-colors"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Xでシェア
      </button>
      <button
        onClick={shareLine}
        className="flex items-center gap-2 text-sm text-[var(--color-txt)] bg-[rgba(212,175,120,0.08)] border border-[rgba(212,175,120,0.2)] py-3 px-6 rounded-full cursor-pointer tracking-wider hover:bg-[rgba(212,175,120,0.15)] transition-colors"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#06C755">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        LINEでシェア
      </button>
    </div>
  );
}
