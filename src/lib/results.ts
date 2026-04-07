export type ResultType = "kiri" | "honoo" | "izumi" | "hakari" | "nagare";

export type ResultCard = {
  name: string;
  symbol: string;
  image: string;
  grad: string;
  gradFrom: string;
  gradVia: string;
  gradTo: string;
  sub: string;
  body: string;
  keyMsg: string;
  step: string;
  ctaUrl?: string;
  ctaLabel?: string;
};

export const results: Record<ResultType, ResultCard> = {
  kiri: {
    name: "霧のカード",
    symbol: "\u{1F32B}\u{FE0F}",
    image: "/cards/kiri.webp",
    grad: "linear-gradient(135deg, #2C3E50 0%, #4A6274 50%, #7B8FA1 100%)",
    gradFrom: "#2C3E50",
    gradVia: "#4A6274",
    gradTo: "#7B8FA1",
    sub: "忙しさの中で、方向を見失っている状態",
    body: "あなたは今、ちゃんと頑張っているにもかかわらず、どこに向かっているのかが見えにくくなっています。\n\n一日があっという間に終わる。\nやることはこなしている。\nでも、なぜか手応えがない。\n\nそれは「能力」や「努力」の問題ではありません。\n\n流れが見えていないだけです。\n\n目の前のことに反応し続けるほど、大事なものは後ろに流れていきます。",
    keyMsg: "まずは「何に時間とお金が流れているのか」を知ること",
    step: "1週間だけでいいので、自分が何に時間を使っているかを書き出してみてください",
    ctaUrl: "https://www.reservestock.jp/subscribe/NGUwNDFhMTZjN",
    ctaLabel: "霧を晴らすための無料メール講座を受け取る",
  },
  honoo: {
    name: "炎のカード",
    symbol: "\u{1F525}",
    image: "/cards/honoo.webp",
    grad: "linear-gradient(135deg, #4A1A1A 0%, #8B2500 50%, #E74C3C 100%)",
    gradFrom: "#4A1A1A",
    gradVia: "#8B2500",
    gradTo: "#E74C3C",
    sub: "力はあるのに、使い方で消耗している状態",
    body: "あなたにはすでに、結果を出す力があります。\n\nただ今はその力を、あちこちに使いすぎています。\n\n頼まれたら断れない。\n気づけば予定が埋まる。\n全部に応えようとしてしまう。\n\nそれ自体は強みです。\nですが同時に、あなたを消耗させています。",
    keyMsg: "増やす前に「減らすこと」が必要なタイミング",
    step: "「やらなくてもいいこと」を1つだけ決めて手放してみてください",
    ctaUrl: "https://www.reservestock.jp/subscribe/YmE1Y2E2MTdhN",
    ctaLabel: "炎を整えるための無料メール講座を受け取る",
  },
  izumi: {
    name: "泉のカード",
    symbol: "\u{1F4A7}",
    image: "/cards/izumi.webp",
    grad: "linear-gradient(135deg, #1A2A3A 0%, #1B4F72 50%, #3498DB 100%)",
    gradFrom: "#1A2A3A",
    gradVia: "#1B4F72",
    gradTo: "#3498DB",
    sub: "与えすぎて、自分が枯れかけている状態",
    body: "あなたの仕事ぶりを見れば、お客様に喜ばれているのは間違いありません。\n\nでも、ふと立ち止まると…\n「これだけやってるのに、なんでお金が残らないんだろう」\nという感覚がありませんか？\n\nそれは実力がないからではありません。\n\n届けている価値に対して、受け取る量が少なすぎるんです。\n\nサービスに追加しすぎていたり、本来有料の相談を無料でやっていたり、「この値段じゃ申し訳ない」が口癖になっていませんか？",
    keyMsg: "足りないのは努力ではなく「受け取る設計」",
    step: "今の仕事を1つ選んで、「この仕事に何時間使っているか」と「時給はいくらか」を出してみてください",
    ctaUrl: "https://www.reservestock.jp/subscribe/MTY1NTQ1NjJjY",
    ctaLabel: "枯れない泉をつくるための無料メール講座を受け取る",
  },
  hakari: {
    name: "秤のカード",
    symbol: "\u{2696}\u{FE0F}",
    image: "/cards/hakari.webp",
    grad: "linear-gradient(135deg, #3A2A0A 0%, #7D5A0B 50%, #F39C12 100%)",
    gradFrom: "#3A2A0A",
    gradVia: "#7D5A0B",
    gradTo: "#F39C12",
    sub: "見えているのに、微妙なズレが残っている状態",
    body: "あなたはすでに、自分の働き方をある程度理解しています。\n\n何が原因かも、なんとなく分かっているはずです。\n\nそれでも楽にならないのは、ほんの少しのズレが積み重なっているから。\n\n時間の使い方\n仕事の配分\n受け取る量\n\nどれも間違ってはいない。\nでも、どこか噛み合っていない。",
    keyMsg: "整えることで一気に軽くなる段階",
    step: "今やっている仕事を「増やす・維持・減らす」に分けてみてください",
    ctaUrl: "https://www.reservestock.jp/subscribe/NDQzMTg1OWJmN",
    ctaLabel: "バランスを整えるための無料メール講座を受け取る",
  },
  nagare: {
    name: "流れのカード",
    symbol: "\u{1F30A}",
    image: "/cards/nagare.webp",
    grad: "linear-gradient(135deg, #0A3A1A 0%, #1B6B3A 50%, #2ECC71 100%)",
    gradFrom: "#0A3A1A",
    gradVia: "#1B6B3A",
    gradTo: "#2ECC71",
    sub: "無理をしなくても、回り始めている状態",
    body: "あなたはすでに、整った流れの中にいます。\n\n頑張りすぎなくても、必要なことが自然と回っていく状態。\n\nここまで来ている方は少数です。\n\nただしここから先は、「なんとなく」では伸びません。",
    keyMsg: "どこに集中するかで未来が変わる段階",
    step: "今の中で一番伸ばしたいものを1つ決めて、そこに集中してください",
    ctaUrl: "https://www.reservestock.jp/subscribe/NDYxYThhM2U1N",
    ctaLabel: "流れを加速させるための無料メール講座を受け取る",
  },
};

export const resultTypes: ResultType[] = ["kiri", "honoo", "izumi", "hakari", "nagare"];
