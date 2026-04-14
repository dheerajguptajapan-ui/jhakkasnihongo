import { Item } from '../../types';

export const n2chapter8: Item[] = [
  {
    id: 'tr2-ch8-v1',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 4,
    character: '誠実',
    readings: ['seijitsu'],
    meanings: ['sincerity', 'honesty']
  },
  {
    id: 'tr2-ch8-v2',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 4,
    character: '責任感',
    readings: ['sekininkan'],
    meanings: ['sense of responsibility']
  },
  {
    id: 'tr2-ch8-v3',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 4,
    character: '遂行',
    readings: ['suikou'],
    meanings: ['accomplishment', 'execution']
  },
  {
    id: 'tr2-ch8-g1',
    lessonNumber: 8,
    type: 'grammar',
    level: 4,
    character: '〜を込めて (With / Full of)',
    readings: ['~o komete'],
    meanings: ['With (feeling, heart) / Full of'],
    explanation: 'Used when doing something while putting one\'s feelings or effort into it.',
    sentences: [
      { japanese: '感謝の 気持ちを 込めて、手紙を 書いた。', english: 'I wrote a letter with feelings of gratitude.', furigana: '感謝[かんしゃ]の気持[きも]ちを込[こ]めて、手紙[てがみ]を書[か]いた。' }
    ]
  },
  {
    id: 'tr2-ch8-g2',
    lessonNumber: 8,
    type: 'grammar',
    level: 4,
    character: '〜ぬく (To do completely)',
    readings: ['~nuku'],
    meanings: ['To do something all the way to the end / To do thoroughly'],
    explanation: 'Expresses that an action is completed entirely, often despite difficulty or hardship.',
    sentences: [
      { japanese: '最後まで 走りぬいた。', english: 'I ran all the way to the end.', furigana: '最後[さいご]まで走[はし]りぬいた。' }
    ]
  },
  {
    id: 'tr2-ch8-d1',
    lessonNumber: 8,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: 'プロとしての責任',
    meanings: ['Responsibility as a Professional'],
    content: 'どんな 仕事に おいても、真心を 込めて 取り組むことが 大切です。途中で 困難が あっても、最後まで 遂行しぬく 責任感が プロには 求められます。',
    translation: 'In any job, it is important to work with sincerity. Even if there are difficulties on the way, the sense of responsibility to execute until the end is required from a professional.',
    questions: [
      {
        question: 'プロに 求められる ものは 何ですか。',
        options: ['遂行しぬく 責任感', '早く 終わらせること', 'お金', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
