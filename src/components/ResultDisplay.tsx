"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ResultCard, ResultType } from "@/lib/results";

type Props = {
  resultType: ResultType;
  card: ResultCard;
};

function InfoBox({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(212,175,120,0.06)] border border-[rgba(212,175,120,0.12)] rounded-[14px] py-5 px-[22px] mb-4">
      <div className="text-xs text-[var(--color-gold)] tracking-[0.15em] mb-2">
        {icon} {label}
      </div>
      <div className="text-[15px] leading-[1.9] text-[var(--color-txt)]">{children}</div>
    </div>
  );
}

export default function ResultDisplay({ resultType, card }: Props) {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowDetail(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full text-center">
      <div className="animate-card-reveal">
        <div className="mx-auto max-w-[280px] mb-6">
          <Image
            src={card.image}
            alt={card.name}
            width={560}
            height={980}
            priority
            className="w-full h-auto rounded-lg"
            style={{
              boxShadow: "0 8px 40px rgba(212,175,120,0.25), 0 0 60px rgba(212,175,120,0.1)",
            }}
          />
        </div>
        <div className="text-2xl font-bold tracking-[0.15em] text-[var(--color-gold)] mb-2.5">
          {card.name}
        </div>
        <div className="text-[13px] text-[var(--color-sub)] tracking-wider">
          {"― " + card.sub + " ―"}
        </div>
      </div>

      {showDetail && (
        <div className="mt-9 text-left animate-detail-fade">
          <div className="text-[15px] leading-[2.2] text-[var(--color-sub)] whitespace-pre-line mb-8">
            {card.body}
          </div>
          <InfoBox icon="🔑" label="このカードが伝えていること">
            {card.keyMsg}
          </InfoBox>
          <InfoBox icon="🌿" label="最初の一歩">
            {card.step}
          </InfoBox>

          {card.ctaUrl && (
            <div className="text-center mt-8 mb-4">
              <p className="text-[13px] text-[var(--color-dim)] tracking-wider mb-4">
                このカードが気になったあなたへ
              </p>
              <a
                href={card.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base font-bold text-[var(--color-bg)] tracking-[0.08em] no-underline py-4 px-10 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
                  boxShadow: "0 4px 24px rgba(212,175,120,0.3)",
                }}
              >
                {card.ctaLabel || "無料メール講座を受け取る"}
              </a>
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-block text-sm text-[var(--color-gold)] bg-transparent border border-[rgba(212,175,120,0.3)] py-3 px-9 rounded-full cursor-pointer tracking-[0.1em] hover:bg-[rgba(212,175,120,0.08)] transition-colors no-underline"
            >
              自分も診断する
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
