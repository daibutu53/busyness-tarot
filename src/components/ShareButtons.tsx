"use client";

import type { ResultType } from "@/lib/results";

type Props = {
  resultType: ResultType;
};

export default function ShareButtons({ resultType }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const url = `${baseUrl}/result/${resultType}`;

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="flex gap-3 justify-center mt-6">
      <button
        onClick={shareFacebook}
        className="flex items-center gap-2 text-sm text-[var(--color-txt)] bg-[rgba(212,175,120,0.08)] border border-[rgba(212,175,120,0.2)] py-3 px-6 rounded-full cursor-pointer tracking-wider hover:bg-[rgba(212,175,120,0.15)] transition-colors"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Facebookでシェア
      </button>
    </div>
  );
}
