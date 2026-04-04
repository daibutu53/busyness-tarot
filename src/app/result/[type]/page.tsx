import { notFound } from "next/navigation";
import { results, resultTypes } from "@/lib/results";
import type { ResultType } from "@/lib/results";
import type { Metadata } from "next";
import ResultDisplay from "@/components/ResultDisplay";

export function generateStaticParams() {
  return resultTypes.map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const card = results[type as ResultType];
  if (!card) return {};

  return {
    title: `${card.name} | 忙しさの正体タロット`,
    description: `あなたの結果は【${card.name}】― ${card.sub}。10の問いがあなたの忙しさの正体を映し出します。`,
  };
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!resultTypes.includes(type as ResultType)) {
    notFound();
  }

  const card = results[type as ResultType];

  return (
    <div className="bg-mystic min-h-screen relative">
      <div className="relative z-[1] max-w-[520px] mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
        <ResultDisplay resultType={type as ResultType} card={card} />
      </div>
    </div>
  );
}
