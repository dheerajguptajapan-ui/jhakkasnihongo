import { Item } from '../../types';

export const lesson6: Item[] = [
  {
    id: 'mn6-v1',
    lessonNumber: 6,
    type: 'vocabulary',
    character: 'たべます',
    readings: ['tabemasu'],
    meanings: ['eat'],
    explanation: '食べます.',
    sentences: [{ japanese: 'パンを 食べます。', english: 'I eat bread.' }]
  },
  {
    id: 'mn6-v2',
    lessonNumber: 6,
    type: 'vocabulary',
    character: 'のみます',
    readings: ['nomimasu'],
    meanings: ['drink'],
    explanation: '飲みます.',
    sentences: [{ japanese: '水を 飲みます。', english: 'I drink water.' }]
  },
  {
    id: 'mn6-d1',
    lessonNumber: 6,
    type: 'dokkai',
    character: 'いっしょにいきませんか',
    readings: ['Issho ni ikimasen ka'],
    meanings: ['Won\'t you go with me?'],
    content: 'ミラー：佐藤さん。いっしょに京都へ行きませんか。\n佐藤：いいですね。いつですか。\nミラー：来週の日曜日です。\n佐藤：いいですよ。どこで会いますか。\nミラー：駅で会いませんか。\n佐藤：わかりました。',
    translation: 'Miller: Ms. Sato. Won\'t you go to Kyoto with me?\nSato: That sounds good. When is it?\nMiller: Next Sunday.\nSato: Fine. Where shall we meet?\nMiller: Shall we meet at the station?\nSato: Understood.',
    questions: [
      {
        question: '二人はどこへ行きますか。',
        options: ['大阪', '京都', '東京', 'なら'],
        answerIndex: 1
      },
      {
        question: 'いつ行きますか。',
        options: ['今週の日曜日', '来週の日曜日', '今週の土曜日', '来週の月曜日'],
        answerIndex: 1
      }
    ]
  }
];
