export type Choice = {
  label: "A" | "B" | "C";
  text: string;
};

export type Question = {
  id: number;
  title: string;
  scene: string;
  choices: Choice[];
};

export const questions: Question[] = [
  {
    id: 1,
    title: "朝イチのスタート",
    scene: "朝からやる予定の仕事があったけれど、\nLINEやメール通知が来た。",
    choices: [
      { label: "A", text: "即レス大事！今すぐチェック" },
      { label: "B", text: "気になるけど、やるべきことを優先" },
      { label: "C", text: "朝は見ないようにしている" },
    ],
  },
  {
    id: 2,
    title: "カフェの誘惑",
    scene: "午前中、ブログを書こうと座ったのに、\nSNSを開いたら同業者の投稿が目に入った。",
    choices: [
      { label: "A", text: "つい読み込んで、気づいたら30分経ってた" },
      { label: "B", text: "「あとで見よう」と閉じるけど、なんかソワソワする" },
      { label: "C", text: "目に入っても「自分は自分」とスルーできる" },
    ],
  },
  {
    id: 3,
    title: "ありがたい相談",
    scene: "リピーターのお客様から\n「ちょっと相談いいですか？」とLINEが来た。\nセッション外の相談。",
    choices: [
      { label: "A", text: "すぐ丁寧に返してあげる。信頼関係だし" },
      { label: "B", text: "「次回のセッションでお話ししましょう」と返す" },
      { label: "C", text: "既読はつけるけど、返すタイミングは自分で決める" },
    ],
  },
  {
    id: 4,
    title: "講座づくりの沼",
    scene: "新しい講座のスライドを作り始めたら、\nあれもこれも入れたくなってきた。",
    choices: [
      { label: "A", text: "全部入れたい。出し惜しみしたくない性格だし" },
      { label: "B", text: "多いかなと思いつつ、削る決断ができない" },
      { label: "C", text: "「今回はここまで」と線を引いて絞る" },
    ],
  },
  {
    id: 5,
    title: "見えない時給",
    scene: "先月、ある仕事に丸3日かかった。\n報酬を時給に換算してみると…",
    choices: [
      { label: "A", text: "怖いので計算したことがない" },
      { label: "B", text: "なんとなく安い気はしてるけど目をつぶってる" },
      { label: "C", text: "把握していて、割に合わない仕事は減らしている" },
    ],
  },
  {
    id: 6,
    title: "SNS投稿のジレンマ",
    scene: "「今日は絶対インスタ投稿する！」と決めた日。\n文章を書き始めたら…",
    choices: [
      { label: "A", text: "何度も書き直して、結局2時間かかった" },
      { label: "B", text: "途中で「これでいいのかな」と手が止まる" },
      { label: "C", text: "型に当てはめてサッと出す。完璧じゃなくてOK" },
    ],
  },
  {
    id: 7,
    title: "断れないオファー",
    scene: "知り合いの起業家から\n「コラボしませんか？」とお誘いが来た。\n正直メリットは微妙。",
    choices: [
      { label: "A", text: "断るのが苦手で受けてしまう" },
      { label: "B", text: "悩んだ末に条件付きで受ける" },
      { label: "C", text: "「今は優先したいことがあるので」と断る" },
    ],
  },
  {
    id: 8,
    title: "月末の通帳",
    scene: "忙しかった1ヶ月が終わって、\nふと売上を確認すると…",
    choices: [
      { label: "A", text: "「あんなに働いたのにこれだけ？」と凹む" },
      { label: "B", text: "「まあ来月がんばろう」で流す" },
      { label: "C", text: "想定どおり。忙しさと売上がちゃんと連動してる" },
    ],
  },
  {
    id: 9,
    title: "夕方5時の自分",
    scene: "夕方、今日のタスクを振り返ると\n「一番大事な仕事」にまだ手をつけていなかった。",
    choices: [
      { label: "A", text: "「対応に追われてたら1日終わってた…」" },
      { label: "B", text: "「まあ明日やれば間に合うし…」" },
      { label: "C", text: "そうならないように、朝イチで大事な仕事を済ませている" },
    ],
  },
  {
    id: 10,
    title: "寝る前のひとりごと",
    scene: "布団に入ってスマホを置いたとき、\nふと頭をよぎるのは…",
    choices: [
      { label: "A", text: "「なんでこんなに忙しいのに、楽にならないんだろう」" },
      { label: "B", text: "「このままじゃまずい気がする。でも何を変えれば…」" },
      { label: "C", text: "「今日もやることやった。明日も大丈夫」" },
    ],
  },
];

export const kanjiNumbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
