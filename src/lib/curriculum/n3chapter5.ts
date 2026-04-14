import { Item } from '../../types';

export const n3chapter5: Item[] = [
  {
    id: 'tr3-ch5-v1',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 3,
    character: '材料',
    readings: ['zairyou'],
    meanings: ['ingredients', 'materials']
  },
  {
    id: 'tr3-ch5-v2',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 3,
    character: '醤油',
    readings: ['shouyu'],
    meanings: ['soy sauce']
  },
  {
    id: 'tr3-ch5-v3',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 3,
    character: '煮る',
    readings: ['niru'],
    meanings: ['to boil', 'to stew']
  },
  {
    id: 'tr3-ch5-v4',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 3,
    character: '焼く',
    readings: ['yaku'],
    meanings: ['to grill', 'to bake']
  },
  {
    id: 'tr3-ch5-v5',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 3,
    character: '混ぜる',
    readings: ['mazeru'],
    meanings: ['to mix']
  },
  {
    id: 'tr3-ch5-g1',
    lessonNumber: 5,
    type: 'grammar',
    level: 3,
    character: '〜くらい / 〜ぐらい (Extent)',
    readings: ['~kurai'],
    meanings: ['About / To the extent that'],
    explanation: 'Used to express the approximate degree or extent of a state.',
    sentences: [
      { japanese: 'お腹が すいて、動けない くらいです。', english: 'I am so hungry that I can hardly move.', furigana: 'お腹[なか]がすいて、動[うご]けないくらいです。' }
    ]
  },
  {
    id: 'tr3-ch5-g2',
    lessonNumber: 5,
    type: 'grammar',
    level: 3,
    character: '〜ほど (Extent)',
    readings: ['~hodo'],
    meanings: ['To the extent that / So... that...'],
    explanation: 'Similar to kurai but often used for more intense or extreme degrees.',
    sentences: [
      { japanese: '死ぬ ほど 忙しいです。', english: 'I am busy to the point of dying.', furigana: '死[し]ぬほど忙[いそが]しいです。' }
    ]
  },
  {
    id: 'tr3-ch5-d1',
    lessonNumber: 5,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '手作りハムの レシピ',
    meanings: ['Handmade Ham Recipe'],
    content: 'この レシピは とても 簡単に ハムが 作れます。肉を 醤油と 砂糖で 煮るだけです。あまりの 美味しさに、毎日 食べたい くらいです。',
    translation: 'This recipe allows you to make ham very easily. You just boil the meat with soy sauce and sugar. It is so delicious that I want to eat it every day.',
    questions: [
      {
        question: 'ハムの 作り方は どうですか。',
        options: ['簡単', '難しい', '時間がかかる', '高い'],
        answerIndex: 0
      }
    ]
  }
];
