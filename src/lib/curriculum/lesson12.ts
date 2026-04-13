import { Item } from '../../types';

export const lesson12: Item[] = [
  {
    id: 'mn12-v1',
    lessonNumber: 12,
    type: 'vocabulary',
    character: 'かんたん [な]',
    readings: ['kantan [na]'],
    meanings: ['easy', 'simple'],
    explanation: '簡単.',
    sentences: [{ japanese: 'テストは 簡単でした。', english: 'The test was easy.' }]
  },
  {
    id: 'mn12-d1',
    lessonNumber: 12,
    type: 'dokkai',
    character: 'お祭りはどうでしたか',
    readings: ['Omatsuri wa dou deshita ka'],
    meanings: ['How was the festival?'],
    content: 'ミラー：ただいま。\n佐藤：おかえりなさい。お祭りはどうでしたか。\nミラー：とてもにぎやかでした。楽しかったです。\n佐藤：そうですか。人は多かったですか。\nミラー：ええ、とても多かったです。',
    translation: 'Miller: I\'m back.\nSato: Welcome back. How was the festival?\nMiller: It was very lively. It was fun.\nSato: I see. Were there many people?\nMiller: Yes, very many.',
    questions: [
      {
        question: 'お祭りはどうでしたか。',
        options: ['しずかでした', 'にぎやかで楽しかったです', 'あまりおもしろくなかったです', '大変でした'],
        answerIndex: 1
      }
    ]
  }
];
