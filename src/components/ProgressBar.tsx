"use client";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;

  return (
    <div className="mb-7">
      <div className="flex justify-between text-[11px] text-[var(--color-dim)] mb-2 tracking-wider">
        <span>QUESTION</span>
        <span>{current + 1} / {total}</span>
      </div>
      <div className="w-full h-[2px] bg-[rgba(212,175,120,0.15)] rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-[width] duration-500"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, var(--color-gold), var(--color-gold-light))",
          }}
        />
      </div>
    </div>
  );
}
