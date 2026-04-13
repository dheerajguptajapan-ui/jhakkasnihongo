import { Item } from '../../types';

export const lesson8: Item[] = [
  // Vocabulary
  {
    id: 'mn8-v1',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'しずか [な]',
    readings: ['shizuka [na]'],
    meanings: ['quiet'],
    explanation: '静か.'
  },
  {
    id: 'mn8-v2',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'にぎやか [な]',
    readings: ['nigiyaka [na]'],
    meanings: ['lively'],
    explanation: '賑やか.'
  },
  {
    id: 'mn8-v3',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'きれい [な]',
    readings: ['kirei [na]'],
    meanings: ['beautiful', 'clean'],
    explanation: '綺麗.'
  },
  {
    id: 'mn8-v4',
    lessonNumber: 8,
    type: 'vocabulary',
    character: 'しんせつ [な]',
    readings: ['shinsetsu [na]'],
    meanings: ['kind'],
    explanation: '親切.'
  },

  // Grammar
  {
    id: 'mn8-g1',
    lessonNumber: 8,
    type: 'grammar',
    character: 'N は Adj です',
    readings: ['N wa Adj desu'],
    meanings: ['Noun is Adjective'],
    explanation: 'How to use I-adjectives and Na-adjectives in sentences.',
    sentences: [{ japanese: 'この花は きれいです。', english: 'This flower is beautiful.', furigana: 'この花[はな]はきれいです。' }]
  },

  // Kanji (Unit 8)
  {
    id: 'mn8-k1',
    lessonNumber: 8,
    type: 'kanji',
    character: '近',
    readings: ['きん', 'ちか'],
    meanings: ['Near', 'Close', 'Recent'],
    level: 1,
    radical: '⻌',
    mnemonic: 'An axe (斤) on the road (⻌) representing short distance/nearness.',
    combinations: [{ word: '近く', reading: 'chikaku', meaning: 'Nearby' }]
  },
  {
    id: 'mn8-k2',
    lessonNumber: 8,
    type: 'kanji',
    character: '間',
    readings: ['かん', 'けん', 'あいだ', 'ま'],
    meanings: ['Between', 'Interval', 'Space'],
    level: 1,
    radical: '門',
    mnemonic: 'The sun (日) visible through a gate (門), indicating an interval.',
    combinations: [{ word: '時間', reading: 'jikan', meaning: 'Time' }]
  },
  {
    id: 'mn8-k3',
    lessonNumber: 8,
    type: 'kanji',
    character: '右',
    readings: ['う', 'ゆう', 'みぎ'],
    meanings: ['Right'],
    level: 1,
    radical: '口',
    mnemonic: 'The hand (top part) used to put food in the mouth (口) - the right hand.',
    combinations: [{ word: '右手', reading: 'migite', meaning: 'Right hand' }]
  },
  {
    id: 'mn8-k4',
    lessonNumber: 8,
    type: 'kanji',
    character: '左',
    readings: ['さ', 'ひだり'],
    meanings: ['Left'],
    level: 1,
    radical: '工',
    mnemonic: 'The hand used to hold a tool (工) while the right hand works.',
    combinations: [{ word: '左手', reading: 'hidarite', meaning: 'Left hand' }]
  },
  {
    id: 'mn8-k5',
    lessonNumber: 8,
    type: 'kanji',
    character: '外',
    readings: ['がい', 'げ', 'そと', 'ほか'],
    meanings: ['Outside', 'Other', 'Foreign'],
    level: 1,
    radical: '夕',
    mnemonic: 'Smoking outside in the evening.',
    combinations: [{ word: '外国人', reading: 'gaikokujin', meaning: 'Foreigner' }]
  },
  {
    id: 'mn8-k6',
    lessonNumber: 8,
    type: 'kanji',
    character: '男',
    readings: ['だん', 'なん', 'おとこ'],
    meanings: ['Man', 'Male'],
    level: 1,
    radical: '田',
    mnemonic: 'Strength (力) used in the rice field (田).',
    combinations: [{ word: '男の人', reading: 'otoko no hito', meaning: 'Man' }]
  },
  {
    id: 'mn8-k7',
    lessonNumber: 8,
    type: 'kanji',
    character: '女',
    readings: ['じょ', 'にょ', 'おんな', 'め'],
    meanings: ['Woman', 'Female'],
    level: 1,
    radical: '女',
    mnemonic: 'A woman sitting gracefully.',
    combinations: [{ word: '女の人', reading: 'onna no hito', meaning: 'Woman' }]
  },
  {
    id: 'mn8-k8',
    lessonNumber: 8,
    type: 'kanji',
    character: '犬',
    readings: ['けん', 'いぬ'],
    meanings: ['Dog'],
    level: 1,
    radical: '大',
    mnemonic: 'A big (大) animal with a mark (tail).',
    combinations: [{ word: '子犬', reading: 'koinu', meaning: 'Puppy' }]
  }
];
