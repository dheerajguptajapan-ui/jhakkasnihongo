import { Item } from '../../types';

export const lesson19: Item[] = [
  // Vocabulary
  {
    id: 'mn19-v1',
    lessonNumber: 19,
    type: 'vocabulary',
    character: 'のぼります [やまに〜]',
    readings: ['noborimasu'],
    meanings: ['climb [a mountain]'],
    explanation: '登る.'
  },
  {
    id: 'mn19-v2',
    lessonNumber: 19,
    type: 'vocabulary',
    character: 'とまります [ホテルに〜]',
    readings: ['tomarimasu'],
    meanings: ['stay [at a hotel]'],
    explanation: '泊まる.'
  },

  // Grammar
  {
    id: 'mn19-g1',
    lessonNumber: 19,
    type: 'grammar',
    character: 'V (ta-form) ことが あります',
    readings: ['V koto ga arimasu'],
    meanings: ['Have done [Verb]'],
    explanation: 'Expressing experience.',
    sentences: [{ japanese: '日本へ 行ったことが あります。', english: 'I have been to Japan.', furigana: '日本[にほん]へ行[い]ったことがあります。' }]
  },

  // Kanji (Unit 15 - Part 1)
  {
    id: 'mn19-k1',
    lessonNumber: 19,
    type: 'kanji',
    character: '東',
    readings: ['とう', 'ひがし'],
    meanings: ['East'],
    level: 1,
    radical: '木',
    mnemonic: 'The sun (middle part) rising through a tree (木) in the east.',
    combinations: [{ word: '東京', reading: 'toukyou', meaning: 'Tokyo' }]
  },
  {
    id: 'mn19-k2',
    lessonNumber: 19,
    type: 'kanji',
    character: '西',
    readings: ['せい', 'さい', 'にし'],
    meanings: ['West'],
    level: 1,
    radical: '襾',
    mnemonic: 'A bird returning to its nest in the west as evening falls.',
    combinations: [{ word: '関西', reading: 'kansai', meaning: 'Kansai region' }]
  },
  {
    id: 'mn19-k3',
    lessonNumber: 19,
    type: 'kanji',
    character: '南',
    readings: ['なん', 'な', 'みなみ'],
    meanings: ['South'],
    level: 1,
    radical: '十',
    mnemonic: 'A path through the vegetation in the warm south.',
    combinations: [{ word: '南口', reading: 'minamiguchi', meaning: 'South exit' }]
  },
  {
    id: 'mn19-k4',
    lessonNumber: 19,
    type: 'kanji',
    character: '北',
    readings: ['ほく', 'ほう', 'きた'],
    meanings: ['North'],
    level: 1,
    radical: '匕',
    mnemonic: 'Two people sitting back-to-back because of the cold north wind.',
    combinations: [{ word: '北海道', reading: 'hokkaido', meaning: 'Hokkaido' }]
  },
  {
    id: 'mn19-k5',
    lessonNumber: 19,
    type: 'kanji',
    character: '京',
    readings: ['きょう', 'けい', 'みやこ'],
    meanings: ['Capital city', 'Metropolis'],
    level: 1,
    radical: '亠',
    mnemonic: 'A prominent building in the capital city.',
    combinations: [{ word: '京都', reading: 'kyouto', meaning: 'Kyoto' }]
  },
  {
    id: 'mn19-k6',
    lessonNumber: 19,
    type: 'kanji',
    character: '夜',
    readings: ['や', 'よ', 'よる'],
    meanings: ['Night', 'Evening'],
    level: 1,
    radical: '夕',
    mnemonic: 'Evening (夕) falling under a roof.',
    combinations: [{ word: '夜食', reading: 'yashoku', meaning: 'Midnight snack' }]
  }
];
