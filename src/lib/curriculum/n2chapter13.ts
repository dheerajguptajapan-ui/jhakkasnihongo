import { Item } from '../../types';

export const n2chapter13: Item[] = [
  {
    id: 'tr2-ch13-v1',
    lessonNumber: 13,
    type: 'vocabulary',
    level: 4,
    character: '芸術的',
    readings: ['geijutsuteki'],
    meanings: ['artistic']
  },
  {
    id: 'tr2-ch13-v2',
    lessonNumber: 13,
    type: 'vocabulary',
    level: 4,
    character: '伝統文化',
    readings: ['dentou bunka'],
    meanings: ['traditional culture']
  },
  {
    id: 'tr2-ch13-v3',
    lessonNumber: 13,
    type: 'vocabulary',
    level: 4,
    character: '継承',
    readings: ['keishou'],
    meanings: ['inheritance', 'succession']
  },
  {
    id: 'tr2-ch13-g1',
    lessonNumber: 13,
    type: 'grammar',
    level: 4,
    character: '〜にわたって (Throughout / Across)',
    readings: ['~ni watatte'],
    meanings: ['Throughout / Across a whole area or time period'],
    explanation: 'Used to express that an action or state extends over a wide range of space or time.',
    sentences: [
      { japanese: '議論は １０時間に わたって 続いた。', english: 'The discussion continued over 10 hours.', furigana: '議論[ぎろん]は１０時間[じゅうじかん]にわたって続[つづ]いた。' }
    ]
  },
  {
    id: 'tr2-ch13-g2',
    lessonNumber: 13,
    type: 'grammar',
    level: 4,
    character: '〜にかかわらず (Regardless of)',
    readings: ['~ni kakawarazu'],
    meanings: ['Regardless of / Irrespective of'],
    explanation: 'Expresses that something is not affected by a certain factor or condition.',
    sentences: [
      { japanese: '天候に かかわらず、イベントは 行われます。', english: 'Regardless of the weather, the event will take place.', furigana: '天候[てんこう]にかかわらず、イベントは行[おこな]われます。' }
    ]
  },
  {
    id: 'tr2-ch13-d1',
    lessonNumber: 13,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '伝統芸術の継承',
    meanings: ['Succession of Traditional Arts'],
    content: '伝統文化は、長い 年月に わたって 守られてきました。時代の 変化に かかわらず、その 価値を 正しく 継承していくことが 私たちの 責任です。',
    translation: 'Traditional culture has been protected over many long years. Regardless of changes in the times, it is our responsibility to correctly inherit its value.',
    questions: [
      {
        question: '伝統文化に ついて 何が 言われていますか。',
        options: ['長い 年月に わたって 守られた', 'すぐに 消える', '新しく 作られた', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
