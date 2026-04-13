import { Item } from '../../types';

export const lesson3: Item[] = [
  // Vocabulary
  {
    id: 'mn3-v1',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'ここ',
    readings: ['koko'],
    meanings: ['here'],
    explanation: 'Place near the speaker.'
  },
  {
    id: 'mn3-v2',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'そこ',
    readings: ['soko'],
    meanings: ['there'],
    explanation: 'Place near the listener.'
  },
  {
    id: 'mn3-v3',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'あそこ',
    readings: ['asoko'],
    meanings: ['over there'],
    explanation: 'Place far from both.'
  },
  {
    id: 'mn3-v4',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'うけつけ',
    readings: ['uketsuke'],
    meanings: ['reception desk'],
    explanation: '受付.'
  },
  {
    id: 'mn3-v5',
    lessonNumber: 3,
    type: 'vocabulary',
    character: 'かいぎしつ',
    readings: ['kaigishitsu'],
    meanings: ['meeting room', 'conference room'],
    explanation: '会議室.'
  },

  // Grammar
  {
    id: 'mn3-g1',
    lessonNumber: 3,
    type: 'grammar',
    character: 'N は Place です',
    readings: ['N wa Place desu'],
    meanings: ['Noun is at [Place]'],
    explanation: 'Used to indicate location.',
    sentences: [{ japanese: '受付は あそこです。', english: 'The reception desk is over there.', furigana: '受[うけ]付[つけ]はあそこです。' }]
  },

  // Kanji (Unit 3)
  {
    id: 'mn3-k1',
    lessonNumber: 3,
    type: 'kanji',
    character: '学',
    readings: ['がく', 'まな'],
    meanings: ['Study', 'Learning'],
    level: 1,
    radical: '子',
    mnemonic: 'A child under a roof learning.',
    combinations: [{ word: '学生', reading: 'がくせい', meaning: 'Student' }]
  },
  {
    id: 'mn3-k2',
    lessonNumber: 3,
    type: 'kanji',
    character: '生',
    readings: ['せい', 'しょう', 'い', 'う'],
    meanings: ['Life', 'Birth'],
    level: 1,
    radical: '生',
    mnemonic: 'A plant growing from the earth.',
    combinations: [{ word: '先生', reading: 'せんせい', meaning: 'Teacher' }]
  },
  {
    id: 'mn3-k3',
    lessonNumber: 3,
    type: 'kanji',
    character: '先',
    readings: ['せん', 'さき'],
    meanings: ['Ahead', 'Previous'],
    level: 1,
    radical: '儿',
    mnemonic: 'A person walking forward.',
    combinations: [{ word: '先日', reading: 'せんじつ', meaning: 'The other day' }]
  },
  {
    id: 'mn3-k4',
    lessonNumber: 3,
    type: 'kanji',
    character: '会',
    readings: ['かい', 'え', 'あ'],
    meanings: ['Meet', 'Society', 'Association'],
    level: 1,
    radical: '人',
    mnemonic: 'Two people under a roof meeting.',
    combinations: [{ word: '会社', reading: 'かいしゃ', meaning: 'Company' }]
  },
  {
    id: 'mn3-k5',
    lessonNumber: 3,
    type: 'kanji',
    character: '社',
    readings: ['しゃ', 'やしろ'],
    meanings: ['Company', 'Shrine'],
    level: 1,
    radical: '示',
    mnemonic: 'Indicator of a public space or company.',
    combinations: [{ word: '社員', reading: 'しゃいん', meaning: 'Employee' }]
  },
  {
    id: 'mn3-k6',
    lessonNumber: 3,
    type: 'kanji',
    character: '員',
    readings: ['いん'],
    meanings: ['Member', 'Employee', 'Official'],
    level: 1,
    radical: '口',
    mnemonic: 'A person (mouth) at a desk (box).',
    combinations: [{ word: '銀行員', reading: 'ginkouin', meaning: 'Bank employee' }]
  },
  {
    id: 'mn3-k7',
    lessonNumber: 3,
    type: 'kanji',
    character: '医',
    readings: ['い'],
    meanings: ['Doctor', 'Medicine'],
    level: 1,
    radical: '匚',
    mnemonic: 'A person with arrows (representing needles or treatment) in a box.',
    combinations: [{ word: '医者', reading: 'いしゃ', meaning: 'Doctor' }]
  },
  {
    id: 'mn3-k8',
    lessonNumber: 3,
    type: 'kanji',
    character: '者',
    readings: ['しゃ', 'もの'],
    meanings: ['Someone', 'Person'],
    level: 1,
    radical: '老',
    mnemonic: 'An elder speaking.',
    combinations: [{ word: '学者', reading: 'がくしゃ', meaning: 'Scholar' }]
  },
  {
    id: 'mn3-k9',
    lessonNumber: 3,
    type: 'kanji',
    character: '本',
    readings: ['ほん', 'もと'],
    meanings: ['Book', 'Origin', 'Main'],
    level: 1,
    radical: '木',
    mnemonic: 'A mark at the bottom of a tree showing the origin.',
    combinations: [{ word: '日本語', reading: 'にほんご', meaning: 'Japanese language' }]
  },
  {
    id: 'mn3-k10',
    lessonNumber: 3,
    type: 'kanji',
    character: '中',
    readings: ['ちゅう', 'じゅう', 'なか'],
    meanings: ['Middle', 'Inside', 'Within'],
    level: 1,
    radical: '丨',
    mnemonic: 'A line through a box, indicating the center.',
    combinations: [{ word: '中心', reading: 'ちゅうしん', meaning: 'Center' }]
  },
  {
    id: 'mn3-k11',
    lessonNumber: 3,
    type: 'kanji',
    character: '国',
    readings: ['こく', 'くに'],
    meanings: ['Country', 'Nation'],
    level: 1,
    radical: '囗',
    mnemonic: 'A king (jade) inside a fenced border (country).',
    combinations: [{ word: '中国', reading: 'ちゅうごく', meaning: 'China' }]
  },
  {
    id: 'mn3-k12',
    lessonNumber: 3,
    type: 'kanji',
    character: '人',
    readings: ['じん', 'にん', 'ひと'],
    meanings: ['Person', 'Human'],
    level: 1,
    radical: '人',
    mnemonic: 'A person standing on two legs.',
    combinations: [{ word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' }]
  }
];
