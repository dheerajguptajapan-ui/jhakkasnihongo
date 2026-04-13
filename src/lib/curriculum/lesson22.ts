import { Item } from '../../types';

export const lesson22: Item[] = [
  // Vocabulary
  {
    id: 'mn22-v1',
    lessonNumber: 22,
    type: 'vocabulary',
    character: 'きります [シャツを〜]',
    readings: ['kirimasu'],
    meanings: ['wear [a shirt]'],
    explanation: '着る.'
  },
  {
    id: 'mn22-v2',
    lessonNumber: 22,
    type: 'vocabulary',
    character: 'はきます [くつを〜]',
    readings: ['hakimasu'],
    meanings: ['wear [shoes, pants]'],
    explanation: '履く.'
  },

  // Grammar
  {
    id: 'mn22-g1',
    lessonNumber: 22,
    type: 'grammar',
    character: 'Noun modifying clause',
    readings: ['Short form + Noun'],
    meanings: ['Noun modified by a verb/adjective'],
    explanation: 'How to create relative clauses in Japanese.',
    sentences: [{ japanese: 'これは 私が 撮った 写真です。', english: 'This is a photo that I took.', furigana: 'これは私[わたし]が撮[と]った写[しゃ]真[しん]です。' }]
  },

  // Kanji (Unit 17)
  {
    id: 'mn22-k1',
    lessonNumber: 22,
    type: 'kanji',
    character: '飲',
    readings: ['いん', 'の'],
    meanings: ['Drink'],
    level: 1,
    radical: '食',
    mnemonic: 'Drinking food/liquid.',
    combinations: [{ word: '飲み物', reading: 'nomimono', meaning: 'Drink' }]
  },
  {
    id: 'mn22-k2',
    lessonNumber: 22,
    type: 'kanji',
    character: '濯',
    readings: ['たく', 'すす'],
    meanings: ['Laundry', 'Wash', 'Rinse'],
    level: 1,
    radical: '水',
    mnemonic: 'Water (氵) used to wash clothes.',
    combinations: [{ word: '洗濯', reading: 'sentaku', meaning: 'Laundry' }]
  },
  {
    id: 'mn22-k3',
    lessonNumber: 22,
    type: 'kanji',
    character: '町',
    readings: ['ちょう', 'まち'],
    meanings: ['Town', 'Block', 'Street'],
    level: 1,
    radical: '田',
    mnemonic: 'A field (田) with a street (nail part) showing a town layout.',
    combinations: [{ word: '下町', reading: 'shitamachi', meaning: 'Downtown' }]
  },
  {
    id: 'mn22-k4',
    lessonNumber: 22,
    type: 'kanji',
    character: '銀',
    readings: ['ぎん'],
    meanings: ['Silver'],
    level: 1,
    radical: '金',
    mnemonic: 'Metal (金) that is not quite gold (艮).',
    combinations: [{ word: '銀行', reading: 'ginkou', meaning: 'Bank' }]
  },
  {
    id: 'mn22-k5',
    lessonNumber: 22,
    type: 'kanji',
    character: '住',
    readings: ['じゅう', 'ちゅう', 'す'],
    meanings: ['Live', 'Reside', 'Inhabit'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) and a lamp (主) indicating staying in one place.',
    combinations: [{ word: '住所', reading: 'juusho', meaning: 'Address' }]
  },
  {
    id: 'mn22-k6',
    lessonNumber: 22,
    type: 'kanji',
    character: '度',
    readings: ['ど', 'たく', 'と', 'たび'],
    meanings: ['Degree', 'Occurrence', 'Time', 'Limit'],
    level: 1,
    radical: '广',
    mnemonic: 'Measuring things in a building (广).',
    combinations: [{ word: '今度', reading: 'kondo', meaning: 'Next time/This time' }]
  },
  {
    id: 'mn22-k7',
    lessonNumber: 22,
    type: 'kanji',
    character: '服',
    readings: ['ふく'],
    meanings: ['Clothing', 'Admit', 'Obey'],
    level: 1,
    radical: '月',
    mnemonic: 'Clothes covering the body (月/flesh).',
    combinations: [{ word: '洋服', reading: 'youfuku', meaning: 'Western clothes' }]
  },
  {
    id: 'mn22-k8',
    lessonNumber: 22,
    type: 'kanji',
    character: '着',
    readings: ['ちゃく', 'じゃく', 'き', 'つ'],
    meanings: ['Wear', 'Arrive', 'Don'],
    level: 1,
    radical: '目',
    mnemonic: 'Sheep (wool) and eyes (looking at what to wear).',
    combinations: [{ word: '到着', reading: 'touchaku', meaning: 'Arrival' }]
  },
  {
    id: 'mn22-k9',
    lessonNumber: 22,
    type: 'kanji',
    character: '音',
    readings: ['おん', 'いん', 'おと', 'ね'],
    meanings: ['Sound', 'Noise'],
    level: 1,
    radical: '音',
    mnemonic: 'A stand (立) with a mouth (口) making sound.',
    combinations: [{ word: '音楽', reading: 'ongaku', meaning: 'Music' }]
  },
  {
    id: 'mn22-k10',
    lessonNumber: 22,
    type: 'kanji',
    character: '楽',
    readings: ['がく', 'らく', 'たの'],
    meanings: ['Music', 'Comfort', 'Ease', 'Enjoy'],
    level: 1,
    radical: '木',
    mnemonic: 'Playing music on a wooden structure.',
    combinations: [{ word: '楽しい', reading: 'tanoshii', meaning: 'Fun/Enjoyable' }]
  },
  {
    id: 'mn22-k11',
    lessonNumber: 22,
    type: 'kanji',
    character: '持',
    readings: ['じ', 'も'],
    meanings: ['Hold', 'Have', 'Possess'],
    level: 1,
    radical: '手',
    mnemonic: 'A hand (扌) holding something at a temple (寺).',
    combinations: [{ word: '気持ち', reading: 'kimochi', meaning: 'Feeling' }]
  }
];
