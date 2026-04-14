import { Item } from '../../types';

export const n3chapter9: Item[] = [
  {
    id: 'tr3-ch9-v1',
    lessonNumber: 9,
    type: 'vocabulary',
    level: 3,
    character: 'お花見',
    readings: ['ohanami'],
    meanings: ['cherry blossom viewing']
  },
  {
    id: 'tr3-ch9-v2',
    lessonNumber: 9,
    type: 'vocabulary',
    level: 3,
    character: '満開',
    readings: ['mankai'],
    meanings: ['full bloom']
  },
  {
    id: 'tr3-ch9-v3',
    lessonNumber: 9,
    type: 'vocabulary',
    level: 3,
    character: '散る',
    readings: ['chiru'],
    meanings: ['to fall', 'to scatter (petals)']
  },
  {
    id: 'tr3-ch9-g1',
    lessonNumber: 9,
    type: 'grammar',
    level: 3,
    character: '〜まま (As it is)',
    readings: ['~mama'],
    meanings: ['While something remains as it is'],
    explanation: 'Used when an action is performed or a state remains without changing a previous condition.',
    sentences: [
      { japanese: '靴の まま、家の中に 入らないで ください。', english: 'Please do not enter the house with your shoes on.', furigana: '靴[くつ]のまま、家[いえ]の中[なか]に入[はい]らないでください。' }
    ]
  },
  {
    id: 'tr3-ch9-g2',
    lessonNumber: 9,
    type: 'grammar',
    level: 3,
    character: '〜きり (Only/Since)',
    readings: ['~kiri'],
    meanings: ['Only / Since doing something and nothing more'],
    explanation: 'Expresses that only one thing exists or that a state has continued since a specific action.',
    sentences: [
      { japanese: '二人きりで 話したいです。', english: 'I want to talk with just the two of us.', furigana: '二[ふた]りきりで話[はな]したいです。' }
    ]
  },
  {
    id: 'tr3-ch9-d1',
    lessonNumber: 9,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: 'お花見',
    meanings: ['Flower Viewing'],
    content: '先週末、公園へ お花見に 行きました。桜は 満開で、とても 綺麗でした。あまりに 綺麗だったので、立ち去るのが 寂しくて、ずっと 立ったまま 眺めていました。',
    translation: 'Last weekend, I went to the park for flower viewing. The cherry blossoms were in full bloom and were very beautiful. Because they were so beautiful, it was lonely to leave, so I stood there for a long time watching them as they were.',
    questions: [
      {
        question: '桜は どんな 状態でしたか。',
        options: ['満開', 'まだ咲いていない', '散ってしまった', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
