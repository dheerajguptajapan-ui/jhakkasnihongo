import { Item } from '../../types';

export const lesson25: Item[] = [
  // Vocabulary
  {
    id: 'mn25-v1',
    lessonNumber: 25,
    type: 'vocabulary',
    character: 'もし',
    readings: ['moshi'],
    meanings: ['if']
  },
  {
    id: 'mn25-v2',
    lessonNumber: 25,
    type: 'vocabulary',
    character: 'いくら',
    readings: ['ikura'],
    meanings: ['how much', 'no matter how']
  },

  // Grammar
  {
    id: 'mn25-g1',
    lessonNumber: 25,
    type: 'grammar',
    character: 'V (ta-form) ら、 ...',
    readings: ['V tara, ...'],
    meanings: ['If/When [Verb], ...'],
    explanation: 'Conditional form.',
    sentences: [{ japanese: '雨が 降ったら、出かけません。', english: 'If it rains, I won\'t go out.', furigana: '雨[あめ]が降[ふ]ったら、出[で]かけません。' }]
  },

  // Kanji (Unit 20)
  {
    id: 'mn25-k1',
    lessonNumber: 25,
    type: 'kanji',
    character: '部',
    readings: ['ぶ'],
    meanings: ['Section', 'Department', 'Part', 'Portion', 'Member'],
    level: 1,
    radical: '邑',
    mnemonic: 'Dividing into sections.',
    combinations: [{ word: '部屋', reading: 'heya', meaning: 'Room' }]
  },
  {
    id: 'mn25-k2',
    lessonNumber: 25,
    type: 'kanji',
    character: '屋',
    readings: ['おく', 'や'],
    meanings: ['Roof', 'Shop', 'House', 'Seller'],
    level: 1,
    radical: '尸',
    mnemonic: 'A person (尸) under a roof staying in a shop or house.',
    combinations: [{ word: '部屋', reading: 'heya', meaning: 'Room' }]
  },
  {
    id: 'mn25-k3',
    lessonNumber: 25,
    type: 'kanji',
    character: '室',
    readings: ['しつ'],
    meanings: ['Room', 'Apartment', 'Chamber', 'Greenhouse'],
    level: 1,
    radical: '宀',
    mnemonic: 'A room with a roof (宀).',
    combinations: [{ word: '会議室', reading: 'kaigishitsu', meaning: 'Meeting room' }]
  },
  {
    id: 'mn25-k4',
    lessonNumber: 25,
    type: 'kanji',
    character: '窓',
    readings: ['そう', 'まど'],
    meanings: ['Window', 'Pane'],
    level: 1,
    radical: '穴',
    mnemonic: 'A hole (穴) in the roof (宀) to let in light.',
    combinations: [{ word: '窓口', reading: 'madoguchi', meaning: 'Counter/Window' }]
  },
  {
    id: 'mn25-k5',
    lessonNumber: 25,
    type: 'kanji',
    character: '開',
    readings: ['かい', 'あ', 'ひら'],
    meanings: ['Open', 'Unfold', 'Unseal'],
    level: 1,
    radical: '門',
    mnemonic: 'Opening the gates (門).',
    combinations: [{ word: '開始', reading: 'kaishi', meaning: 'Start/Opening' }]
  },
  {
    id: 'mn25-k6',
    lessonNumber: 25,
    type: 'kanji',
    character: '閉',
    readings: ['へい', 'し', 'と'],
    meanings: ['Close', 'Shut'],
    level: 1,
    radical: '門',
    mnemonic: 'Closing the gates (門).',
    combinations: [{ word: '閉店', reading: 'heiten', meaning: 'Closing shop' }]
  },
  {
    id: 'mn25-k7',
    lessonNumber: 25,
    type: 'kanji',
    character: '歌',
    readings: ['か', 'うた'],
    meanings: ['Song', 'Sing'],
    level: 1,
    radical: '欠',
    mnemonic: 'A person opening their mouth (欠) to sing over strings.',
    combinations: [{ word: '歌手', reading: 'kashu', meaning: 'Singer' }]
  },
  {
    id: 'mn25-k8',
    lessonNumber: 25,
    type: 'kanji',
    character: '意',
    readings: ['い'],
    meanings: ['Idea', 'Mind', 'Heart', 'Taste', 'Thought'],
    level: 1,
    radical: '心',
    mnemonic: 'Sound (音) in the heart (心) representing an idea.',
    combinations: [{ word: '意味', reading: 'imi', meaning: 'Meaning' }]
  },
  {
    id: 'mn25-k9',
    lessonNumber: 25,
    type: 'kanji',
    character: '味',
    readings: ['み', 'あじ'],
    meanings: ['Flavor', 'Taste', 'Experience'],
    level: 1,
    radical: '口',
    mnemonic: 'A mouth (口) tasting fruit that is not yet (未) ripe.',
    combinations: [{ word: '意味', reading: 'imi', meaning: 'Meaning' }]
  },
  {
    id: 'mn25-k10',
    lessonNumber: 25,
    type: 'kanji',
    character: '考',
    readings: ['こう', 'かんが'],
    meanings: ['Consider', 'Think', 'Idea'],
    level: 1,
    radical: '耂',
    mnemonic: 'An elder (耂) considering something carefully.',
    combinations: [{ word: '考える', reading: 'kangaeru', meaning: 'To think' }]
  },
  {
    id: 'mn25-k11',
    lessonNumber: 25,
    type: 'kanji',
    character: '天',
    readings: ['てん', 'あま', 'あめ'],
    meanings: ['Heavens', 'Sky', 'Imperial'],
    level: 1,
    radical: '大',
    mnemonic: 'A big person (大) with the vast sky (top line) above them.',
    combinations: [{ word: '天気', reading: 'tenki', meaning: 'Weather' }]
  }
];
