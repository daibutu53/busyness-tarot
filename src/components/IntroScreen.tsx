"use client";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <div className="text-[64px] mb-4">🌙</div>
      <h1 className="text-[30px] font-bold tracking-[0.15em] mb-1.5 text-[var(--color-gold)]">
        忙しさの正体タロット
      </h1>
      <p className="text-[16px] text-[var(--color-dim)] tracking-[0.08em] mb-9">
        10の問いがあなたの本質を映し出す
      </p>
      <div className="text-[18px] leading-[2.2] text-[var(--color-sub)] mb-10">
        毎日がんばっているのに、<br />なぜか楽にならない。
        <br /><br />
        その理由は「忙しさの正体」が<br />見えていないからかもしれません。
        <br /><br />
        10のシーンに直感で答えてみてください。<br />
        あなたの忙しさが何タイプか、<br />カードが教えてくれます。
      </div>
      <button
        onClick={onStart}
        className="text-[18px] font-bold text-[var(--color-bg)] tracking-[0.12em] border-none py-4 px-12 rounded-full cursor-pointer"
        style={{
          background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
          boxShadow: "0 4px 24px rgba(212,175,120,0.3)",
        }}
      >
        カードを引く
      </button>
    </div>
  );
}
