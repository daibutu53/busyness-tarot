import type { ResultType } from "./results";

type AnswerLabel = "A" | "B" | "C";

export function calcResult(answers: Record<number, AnswerLabel>): ResultType {
  const s = (i: number) => (answers[i] === "A" ? 1 : answers[i] === "B" ? 2 : 3);

  // Cluster scores (0-indexed question index)
  const kiri = s(0) + s(1) + s(8);   // Q1 + Q2 + Q9
  const honoo = s(2) + s(5) + s(6);  // Q3 + Q6 + Q7
  const izumi = s(3) + s(4) + s(7);  // Q4 + Q5 + Q8

  // Step 1: Check if any cluster <= 5
  const clusters: { k: ResultType; v: number }[] = [
    { k: "kiri", v: kiri },
    { k: "honoo", v: honoo },
    { k: "izumi", v: izumi },
  ];

  const low = clusters.filter((c) => c.v <= 5);
  if (low.length > 0) {
    // Priority: kiri > honoo > izumi
    const pri: ResultType[] = ["kiri", "honoo", "izumi"];
    low.sort((a, b) => pri.indexOf(a.k) - pri.indexOf(b.k));
    return low[0].k;
  }

  // Step 2: Total score
  let total = 0;
  for (let i = 0; i < 10; i++) total += s(i);
  return total <= 22 ? "hakari" : "nagare";
}
