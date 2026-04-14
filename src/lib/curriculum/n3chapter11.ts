import { Item } from '../../types';

export const n3chapter11: Item[] = [
  {
    id: 'tr3-ch11-v1',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 3,
    character: 'お見舞い',
    readings: ['omimai'],
    meanings: ['visiting a sick person']
  },
  {
    id: 'tr3-ch11-v2',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 3,
    character: '入院',
    readings: ['nyuuin'],
    meanings: ['hospitalization']
  },
  {
    id: 'tr3-ch11-v3',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 3,
    character: '退院',
    readings: ['taiin'],
    meanings: ['discharge from hospital']
  },
  {
    id: 'tr3-ch11-v4',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 3,
    character: '手術',
    readings: ['shujutsu'],
    meanings: ['surgery']
  },
  {
    id: 'tr3-ch11-g1',
    lessonNumber: 11,
    type: 'grammar',
    level: 3,
    character: '〜つもりだった (Unfulfilled Intention)',
    readings: ['~tsumori datta'],
    meanings: ['I intended to... (but didn\'t)'],
    explanation: 'Used when an original plan or intention was not carried out.',
    sentences: [
      { japanese: 'もっと 早く 来る つもりだったのですが、道が 混んでいました。', english: 'I intended to come earlier, but the roads were crowded.', furigana: 'もっと早[はや]く来[く]るつもりだったのですが、道[みち]が混[こ]んでいました。' }
    ]
  },
  {
    id: 'tr3-ch11-g2',
    lessonNumber: 11,
    type: 'grammar',
    level: 3,
    character: '〜はずがない (Impossible)',
    readings: ['~hazu ga nai'],
    meanings: ['Impossible for it to be / Cannot be'],
    explanation: 'Expresses a strong conviction that something is impossible based on evidence or logic.',
    sentences: [
      { japanese: '彼が 嘘を つく はずがありません。', english: 'It is impossible that he is lying.', furigana: '彼[かれ]が嘘[うそ]をつくはずがありません。' }
    ]
  },
  {
    id: 'tr3-ch11-d1',
    lessonNumber: 11,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '友だちのお見舞い',
    meanings: ['Visiting a Friend in the Hospital'],
    content: '友達の 田中君が 入院したと 聞いて、お見舞いに 行きました。昨日 退院する つもりだった そうですが、少し 熱が あったので 延びたそうです。明日には 退院できる はずです。',
    translation: 'Hearing that my friend Tanaka-kun was hospitalized, I went to visit him. I heard he intended to be discharged yesterday, but since he had a slight fever, it was delayed. He should be able to be discharged tomorrow.',
    questions: [
      {
        question: '田中君は どうして まだ 入院していますか。',
        options: ['熱が あったから', '手術をしたから', '病院が 好きだから', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
