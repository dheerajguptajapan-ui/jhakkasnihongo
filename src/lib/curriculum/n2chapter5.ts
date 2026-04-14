import { Item } from '../../types';

export const n2chapter5: Item[] = [
  {
    id: 'tr2-ch5-v1',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 4,
    character: '宿泊',
    readings: ['shukuhaku'],
    meanings: ['accommodation', 'staying']
  },
  {
    id: 'tr2-ch5-v2',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 4,
    character: '目的地',
    readings: ['mokutekichi'],
    meanings: ['destination']
  },
  {
    id: 'tr2-ch5-v3',
    lessonNumber: 5,
    type: 'vocabulary',
    level: 4,
    character: '絶景',
    readings: ['zekkei'],
    meanings: ['superb view', 'picturesque scenery']
  },
  {
    id: 'tr2-ch5-g1',
    lessonNumber: 5,
    type: 'grammar',
    level: 4,
    character: '〜からして (Judging from)',
    readings: ['~kara shite'],
    meanings: ['Judging from / Even from the standpoint of'],
    explanation: 'Used to provide an example that leads to a certain judgment or overall evaluation.',
    sentences: [
      { japanese: '彼は 服装からして スポーツ選手の ようだ。', english: 'Judging from his clothing, he looks like an athlete.', furigana: '彼[かれ]は服装[ふくそう]からしてスポーツ選手[せんしゅ]のようだ。' }
    ]
  },
  {
    id: 'tr2-ch5-g2',
    lessonNumber: 5,
    type: 'grammar',
    level: 4,
    character: '〜を通じて / 〜を通して (Through / Via)',
    readings: ['~o tsuujite'],
    meanings: ['Through / Via / Throughout'],
    explanation: 'Expresses a means, medium, or a continuous state throughout a certain period.',
    sentences: [
      { japanese: 'SNSを 通じて 友達が できた。', english: 'I made friends through SNS.', furigana: 'SNSを通[つう]じて友達[ともだち]ができた。' }
    ]
  },
  {
    id: 'tr2-ch5-d1',
    lessonNumber: 5,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '一人旅の魅力',
    meanings: ['The Charm of Solo Travel'],
    content: '最近、一人旅が 人気です。行き先からして 自由に 決められるのが 魅力です。旅を 通じて 新しい 自分に 出会えるかも しれません。皆さんも ぜひ 経験して みて ください。',
    translation: 'Recently, solo travel is popular. The charm is that you can freely decide everything, starting from the destination. You might encounter a new self through the journey. Please try experiencing it by all means.',
    questions: [
      {
        question: '一人旅の 魅力は 何ですか。',
        options: ['自由に 決められること', '安く 行けること', '疲れないこと', '友達が 増えること'],
        answerIndex: 0
      }
    ]
  }
];
