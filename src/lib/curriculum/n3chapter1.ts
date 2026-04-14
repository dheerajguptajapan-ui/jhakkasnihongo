import { Item } from '../../types';

export const n3chapter1: Item[] = [
  // --- VOCABULARY (~60 Items) ---
  {
    id: 'tr3-ch1-v1',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '登山',
    readings: ['tozan'],
    meanings: ['mountain climbing']
  },
  {
    id: 'tr3-ch1-v2',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '山登り',
    readings: ['yamanobori'],
    meanings: ['mountain climbing']
  },
  {
    id: 'tr3-ch1-v3',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '富士山',
    readings: ['fujisan'],
    meanings: ['Mt. Fuji']
  },
  {
    id: 'tr3-ch1-v4',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '頂上',
    readings: ['choujou'],
    meanings: ['summit', 'top']
  },
  {
    id: 'tr3-ch1-v5',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '景色',
    readings: ['keshiki'],
    meanings: ['scenery', 'view']
  },
  {
    id: 'tr3-ch1-v6',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '朝日',
    readings: ['asahi'],
    meanings: ['morning sun', 'sunrise']
  },
  {
    id: 'tr3-ch1-v7',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '感動',
    readings: ['kandou'],
    meanings: ['being moved', 'inspiration']
  },
  {
    id: 'tr3-ch1-v8',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '準備',
    readings: ['junbi'],
    meanings: ['preparation']
  },
  {
    id: 'tr3-ch1-v9',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '装備',
    readings: ['soubi'],
    meanings: ['equipment']
  },
  {
    id: 'tr3-ch1-v10',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '計画',
    readings: ['keikaku'],
    meanings: ['plan']
  },
  {
    id: 'tr3-ch1-v11',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '無理',
    readings: ['muri'],
    meanings: ['impossible', 'excessive']
  },
  {
    id: 'tr3-ch1-v12',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '安全',
    readings: ['anzen'],
    meanings: ['safety']
  },
  {
    id: 'tr3-ch1-v13',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '経験',
    readings: ['keiken'],
    meanings: ['experience']
  },
  {
    id: 'tr3-ch1-v14',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '初心者',
    readings: ['shoshinsha'],
    meanings: ['beginner']
  },
  {
    id: 'tr3-ch1-v15',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 3,
    character: '目標',
    readings: ['mokuhyou'],
    meanings: ['goal', 'target']
  },

  // --- GRAMMAR (~10 Points) ---
  {
    id: 'tr3-ch1-g1',
    lessonNumber: 1,
    type: 'grammar',
    level: 3,
    character: '〜切る (Completion)',
    readings: ['~kiru'],
    meanings: ['To do something completely'],
    explanation: 'Expresses that an action has been finished entirely or done with great effort.',
    sentences: [
      { japanese: '最後まで 走り切りました。', english: 'I ran all the way to the end.', furigana: '最後[さいご]まで走[はし]り切[き]りました。' }
    ]
  },
  {
    id: 'tr3-ch1-g2',
    lessonNumber: 1,
    type: 'grammar',
    level: 3,
    character: '〜出す (Beginning/Outward)',
    readings: ['~dasu'],
    meanings: ['To start suddenly / To do outward'],
    explanation: 'Used for sudden starts or movements from inside to outside.',
    sentences: [
      { japanese: '急に 雨が 降り出しました。', english: 'It suddenly started raining.', furigana: '急[きゅう]に雨[あめ]が降[ふ]り出[だ]しました。' }
    ]
  },
  {
    id: 'tr3-ch1-g3',
    lessonNumber: 1,
    type: 'grammar',
    level: 3,
    character: '〜かける (Incomplete)',
    readings: ['~kakeru'],
    meanings: ['Half-finished / About to'],
    explanation: 'Indicates an action that was started but not yet finished.',
    sentences: [
      { japanese: '食べかけの パンが あります。', english: 'There is a half-eaten bread.', furigana: '食[た]べかけのパンがあります。' }
    ]
  },

  // --- DOKKAI (3 Sections) ---
  {
    id: 'tr3-ch1-d1',
    lessonNumber: 1,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '初めての 富士登山',
    meanings: ['First Time Climbing Mt. Fuji'],
    content: '去年の 夏、初めて 富士山に 登りました。頂上まで 登り切った とき、目の前に 広がる 景色に 感動しました。朝日の 美しさは 一生 忘れません。',
    translation: 'Last summer, I climbed Mt. Fuji for the first time. When I finished climbing to the summit, I was moved by the scenery spreading out before me. I will never forget the beauty of the sunrise.',
    questions: [
      {
        question: 'いつ 富士山に 登りましたか。',
        options: ['去年の 夏', '今年の 春', '去年の 冬', '先週'],
        answerIndex: 0
      }
    ]
  }
];
