import { Item } from '../../types';

export const lesson25: Item[] = [
  {
    id: 'mn25-v1',
    lessonNumber: 25,
    type: 'vocabulary',
    character: 'かんがえます',
    readings: ['kangaemasu'],
    meanings: ['think', 'consider'],
    explanation: '考えます.',
    sentences: [{ japanese: '将来のことを 考えます。', english: 'I think about the future.' }]
  },
  {
    id: 'mn25-d1',
    lessonNumber: 25,
    type: 'dokkai',
    character: 'いろいろお世話になりました',
    readings: ['Iroiro osewa ni narimashita'],
    meanings: ['Thank you for everything'],
    content: 'ミラー：佐藤さん、長い間いろいろお世話になりました。\n佐藤：いいえ。あしたアメリカへ帰りますね。寂しくなりますね。\nミラー：ええ。アメリカへ行っても、日本のことを忘れません。\n佐藤：ぜひまた日本へ遊びに来てください。',
    translation: 'Miller: Ms. Sato, thank you for everything during this long time.\nSato: No, not at all. You\'re going back to America tomorrow, right? We\'ll miss you.\nMiller: Yes. Even after I go to America, I won\'t forget Japan.\nSato: Please definitely come back to visit Japan again.',
    questions: [
      {
        question: 'ミラーさんはあしたどこへ行きますか。',
        options: ['イギリス', '日本', 'アメリカ', 'ブラジル'],
        answerIndex: 2
      }
    ]
  }
];
