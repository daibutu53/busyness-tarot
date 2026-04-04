"use client";

import type { Question } from "@/lib/questions";
import { kanjiNumbers } from "@/lib/questions";
import ProgressBar from "./ProgressBar";

type Props = {
  question: Question;
  index: number;
  total: number;
  onPick: (label: "A" | "B" | "C") => void;
};

export default function QuestionScreen({ question, index, total, onPick }: Props) {
  return (
    <div className="w-full">
      <ProgressBar current={index} total={total} />

      <div className="text-center text-xs text-[var(--color-gold)] tracking-[0.2em] mb-2">
        {"第" + kanjiNumbers[index] + "問"}
      </div>
      <div className="text-center text-xl font-bold mb-6 text-[var(--color-txt)]">
        {question.title}
      </div>
      <div className="text-center text-[15px] leading-[2.1] text-[var(--color-sub)] mb-9 whitespace-pre-line">
        {question.scene}
      </div>

      <div className="flex flex-col gap-3">
        {question.choices.map((c) => (
          <button
            key={c.label}
            onClick={() => onPick(c.label)}
            className="choice-btn w-full text-left text-[15px] leading-[1.7] text-[var(--color-txt)] bg-[rgba(212,175,120,0.06)] border border-[rgba(212,175,120,0.15)] py-4 px-5 rounded-xl cursor-pointer"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <span className="font-bold text-[var(--color-gold)] mr-2.5 text-sm">
              {c.label}.
            </span>
            {c.text}
          </button>
        ))}
      </div>
    </div>
  );
}
