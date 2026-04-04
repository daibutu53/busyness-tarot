"use client";

import { useState, useCallback } from "react";
import { questions } from "@/lib/questions";
import { results } from "@/lib/results";
import { calcResult } from "@/lib/scoring";
import type { ResultType } from "@/lib/results";
import IntroScreen from "@/components/IntroScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultScreen from "@/components/ResultScreen";

type Phase = "intro" | "questions" | "result";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState<Record<number, "A" | "B" | "C">>({});
  const [resultKey, setResultKey] = useState<ResultType | null>(null);
  const [fading, setFading] = useState(false);

  const transition = useCallback((fn: () => void) => {
    setFading(true);
    setTimeout(() => {
      fn();
      setFading(false);
    }, 300);
  }, []);

  const handleStart = () => transition(() => setPhase("questions"));

  const handlePick = (label: "A" | "B" | "C") => {
    const next = { ...answers, [qi]: label };
    setAnswers(next);
    transition(() => {
      if (qi < 9) {
        setQi(qi + 1);
      } else {
        setResultKey(calcResult(next));
        setPhase("result");
      }
    });
  };

  const handleRetry = () =>
    transition(() => {
      setPhase("intro");
      setQi(0);
      setAnswers({});
      setResultKey(null);
    });

  const card = resultKey ? results[resultKey] : null;

  return (
    <div className="bg-mystic min-h-screen relative">
      <div className="relative z-[1] max-w-[520px] mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
        <div className={`w-full ${fading ? "fade-exit" : "fade-enter"}`}>
          {phase === "intro" && <IntroScreen onStart={handleStart} />}

          {phase === "questions" && (
            <QuestionScreen
              question={questions[qi]}
              index={qi}
              total={10}
              onPick={handlePick}
            />
          )}

          {phase === "result" && resultKey && card && (
            <ResultScreen
              resultType={resultKey}
              card={card}
              onRetry={handleRetry}
            />
          )}
        </div>
      </div>
    </div>
  );
}
