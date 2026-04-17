import { Item } from '../../types';

export const lesson16: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl16-v1', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'のります', readings: ['norimasu'], meanings: ['ride', 'get on'], explanation: '乗る.' },
  { id: 'nl16-v2', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'おります', readings: ['orimasu'], meanings: ['get off'], explanation: '降りる.' },
  { id: 'nl16-v3', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'のりかえます', readings: ['norikaemasu'], meanings: ['transfer', 'change trains'] },
  { id: 'nl16-v4', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'あびます', readings: ['abimasu'], meanings: ['take [a shower]'], explanation: '浴びる.' },
  { id: 'nl16-v5', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'いれます', readings: ['iremasu'], meanings: ['put in', 'insert'] },
  { id: 'nl16-v6', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'だします', readings: ['dashimasu'], meanings: ['take out', 'withdraw'] },
  { id: 'nl16-v11', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'わかい', readings: ['wakai'], meanings: ['young'] },
  { id: 'nl16-v12', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'ながい', readings: ['nagai'], meanings: ['long'] },
  { id: 'nl16-v13', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'みじかい', readings: ['mijikai'], meanings: ['short'] },
  { id: 'nl16-v14', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'あかるい', readings: ['akarui'], meanings: ['bright'] },
  { id: 'nl16-v15', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'くらい', readings: ['kurai'], meanings: ['dark'] },
  { id: 'nl16-v16', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'せたかい', readings: ['se ga takai'], meanings: ['tall'] },
  { id: 'nl16-v17', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'からだ', readings: ['karada'], meanings: ['body'] },
  { id: 'nl16-v32', lessonNumber: 16, type: 'vocabulary', level: 1, character: '留学生', readings: ['ryuugakusei'], meanings: ['foreign student'] },
  { id: 'nl16-v33', lessonNumber: 16, type: 'vocabulary', level: 1, character: 'どうやって', readings: ['dou yatte'], meanings: ['how', 'in what way'] },

  // --- GRAMMAR ---
  {
    id: 'nl16-g1',
    lessonNumber: 16,
    type: 'grammar',
    level: 1,
    character: 'V1-て、V2-て、V3',
    readings: ['V1-te, V2-te, V3'],
    meanings: ['Sequence of actions'],
    explanation: 'Joining verbs in order of occurrence.',
    sentences: [
      {
        japanese: [
          { text: '朝', reading: 'あさ' }, { text: '起きて', reading: 'おきて' }, { text: '、ジョギングをして、シャワーを', reading: null }, { text: '浴びます', reading: 'あびます' }, { text: '。', reading: null }
        ],
        english: 'In the morning I wake up, jog, and then take a shower.'
      }
    ]
  },
  {
    id: 'nl16-g3',
    lessonNumber: 16,
    type: 'grammar',
    level: 1,
    character: 'N1 は N2 が Adj です',
    readings: ['N1 wa N2 ga Adj desu'],
    meanings: ['Describing features'],
    explanation: 'Used to specify a trait of a subject.',
    sentences: [
      {
        japanese: [
          { text: 'Riyaさんは', reading: 'Riya-san wa' }, { text: '髪', reading: 'かみ' }, { text: 'が', reading: null }, { text: '長い', reading: 'ながい' }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'Riya has long hair.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl16-d1',
    lessonNumber: 16,
    type: 'dokkai',
    level: 1,
    character: 'Dheerajさんの紹介',
    meanings: ['Introduction of Dheeraj'],
    content: [
      { text: 'Dheerajさんは', reading: 'Dheeraj-san wa' }, { text: 'エンジニアで、', reading: null }, { text: '背', reading: 'せ' }, { text: 'が', reading: null }, { text: '高い', reading: 'たかい' }, { text: 'です。', reading: null },
      { text: '\n', reading: null },
      { text: 'とても', reading: null }, { text: '親切', reading: 'しんせつ' }, { text: 'で、明るい', reading: 'あかるい' }, { text: '人', reading: 'ひと' }, { text: 'です。', reading: null }
    ],
    translation: 'Dheeraj is an engineer and he is tall. He is very kind and a cheerful person.',
    questions: [
      {
        question: 'Dheerajさんは どんな 人ですか。',
        options: ['背が 低くて、静かな 人', '背が 高くて、明るい 人', '若くて、怖い 人', '髪が 長くて、きれいな 人'],
        answerIndex: 1
      }
    ]
  }
];
