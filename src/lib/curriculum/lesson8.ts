import { Item } from '../../types';

export const lesson8: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl8-v1', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'ハンサム [な]', readings: ['hansamu [na]'], meanings: ['handsome'] },
  { id: 'nl8-v2', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'きれい [な]', readings: ['kirei [na]'], meanings: ['beautiful', 'clean'], explanation: '綺麗.' },
  { id: 'nl8-v3', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'しずか [な]', readings: ['shizuka [na]'], meanings: ['quiet'], explanation: '静か.' },
  { id: 'nl8-v4', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'にぎやか [な]', readings: ['nigiyaka [na]'], meanings: ['lively'], explanation: '賑やか.' },
  { id: 'nl8-v5', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'ゆうめい [な]', readings: ['yuumei [na]'], meanings: ['famous'], explanation: '有名.' },
  { id: 'nl8-v6', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'しんせつ [な]', readings: ['shinsetsu [na]'], meanings: ['kind'], explanation: '親切.' },
  { id: 'nl8-v7', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'げんき [な]', readings: ['genki [na]'], meanings: ['healthy', 'cheerful'], explanation: '元気.' },
  { id: 'nl8-v9', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'べんり [な]', readings: ['benri [na]'], meanings: ['convenient'], explanation: '便利.' },
  { id: 'nl8-v10', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'すてき [な]', readings: ['suteki [na]'], meanings: ['wonderful', 'nice'] },
  { id: 'nl8-v11', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'おおきい', readings: ['ookii'], meanings: ['big', 'large'], explanation: '大きい.' },
  { id: 'nl8-v12', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'ちいさい', readings: ['chiisai'], meanings: ['small', 'little'], explanation: '小さい.' },
  { id: 'nl8-v13', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'あたらしい', readings: ['atarashii'], meanings: ['new'], explanation: '新しい.' },
  { id: 'nl8-v14', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'ふるい', readings: ['furui'], meanings: ['old (not for people)'], explanation: '古い.' },
  { id: 'nl8-v17', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'あつい', readings: ['atsui'], meanings: ['hot'], explanation: '暑い or 熱い.' },
  { id: 'nl8-v18', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'さむい', readings: ['samui'], meanings: ['cold (weather)'], explanation: '寒い.' },
  { id: 'nl8-v19', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'つめたい', readings: ['tsumetai'], meanings: ['cold (touch)'], explanation: '冷たい.' },
  { id: 'nl8-v20', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'むずかしい', readings: ['muzukashii'], meanings: ['difficult'], explanation: '難しい.' },
  { id: 'nl8-v21', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'やさしい', readings: ['yasashii'], meanings: ['easy', 'kind'] },
  { id: 'nl8-v22', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'たかい', readings: ['takai'], meanings: ['expensive', 'high'] },
  { id: 'nl8-v23', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'やすい', readings: ['yasui'], meanings: ['cheap'] },
  { id: 'nl8-v26', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'おいしい', readings: ['oishii'], meanings: ['delicious'] },
  { id: 'nl8-v27', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'いそがしい', readings: ['isogashii'], meanings: ['busy'] },
  { id: 'nl8-v28', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'たのしい', readings: ['tanoshii'], meanings: ['fun', 'enjoyable'] },
  { id: 'nl8-v36', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'たべもの', readings: ['tabemono'], meanings: ['food'] },
  { id: 'nl8-v40', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'どう', readings: ['dou'], meanings: ['how'] },
  { id: 'nl8-v41', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'どんな～', readings: ['donna'], meanings: ['what kind of ～'] },
  { id: 'nl8-v42', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'とても', readings: ['totemo'], meanings: ['very'] },
  { id: 'nl8-v43', lessonNumber: 8, type: 'vocabulary', level: 5, character: 'あまり', readings: ['amari'], meanings: ['not so (with negative)'] },

  // --- GRAMMAR ---
  {
    id: 'nl8-g1',
    lessonNumber: 8,
    type: 'grammar',
    level: 5,
    character: 'N は Adj です',
    readings: ['N wa Adj desu'],
    meanings: ['Noun is Adjective'],
    explanation: 'Basic adjective sentence structure.',
    sentences: [
      {
        japanese: [
          { text: 'Dheerajさんは', reading: 'Dheeraj-san wa' }, { text: '親切', reading: 'しんせつ' }, { text: 'です。', reading: null }
        ],
        english: 'Dheeraj is kind.'
      },
      {
        japanese: [
          { text: 'この', reading: null }, { text: 'パソコン', reading: null }, { text: 'は', reading: null }, { text: '新しい', reading: 'あたらしい' }, { text: 'です。', reading: null }
        ],
        english: 'This computer is new.'
      }
    ]
  },
  {
    id: 'nl8-g3',
    lessonNumber: 8,
    type: 'grammar',
    level: 5,
    character: 'I-Adj [～くない です]',
    readings: ['I-Adj ~kunai desu'],
    meanings: ['Not Adjective (I)'],
    explanation: 'Negative form for I-adjectives.',
    sentences: [
      {
        japanese: [
          { text: 'この本は', reading: 'このほんは' }, { text: 'おもしろくない', reading: null }, { text: 'です。', reading: null }
        ],
        english: 'This book is not interesting.'
      }
    ]
  },
];