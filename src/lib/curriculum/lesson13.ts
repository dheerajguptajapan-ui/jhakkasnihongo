import { Item } from '../../types';

export const lesson13: Item[] = [
  {
    id: 'mn13-v1',
    lessonNumber: 13,
    type: 'vocabulary',
    character: 'あそびます',
    readings: ['asobimasu'],
    meanings: ['play', 'visit'],
    explanation: '遊びます.',
    sentences: [{ japanese: '公園で 遊びます。', english: 'I play in the park.' }]
  },
  {
    id: 'mn13-d1',
    lessonNumber: 13,
    type: 'dokkai',
    character: '別々にお願いします',
    readings: ['Betsubetsu ni onegai shimasu'],
    meanings: ['Separately, please'],
    content: '店員：いらっしゃいませ。ご注文は？\nミラー：私は天ぷら定食。 \nカリナ：私は牛丼をお願いします。\n***\n店員：天ぷら定食と牛丼ですね。かしこまりました。\n***\n店員：１,８００円でございます。\nミラー：すみません。別々にお願いします。',
    translation: 'Server: Welcome. Your order?\nMiller: Tempura set for me.\nKarina: Gyudon for me, please.\n***\nServer: Tempura set and Gyudon. Understood.\n***\nServer: That will be 1,800 yen.\nMiller: Excuse me. Separately, please.',
    questions: [
      {
        question: 'ミラーさんは何を食べましたか。',
        options: ['牛丼', '天ぷら定食', 'うどん', 'ラーメン'],
        answerIndex: 1
      },
      {
        question: 'お金はどう払いましたか。',
        options: ['いっしょに払いました', '別々に払いました', 'カードで払いました', 'サントスさんが払いました'],
        answerIndex: 1
      }
    ]
  }
];
