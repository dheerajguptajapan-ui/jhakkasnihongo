import { Item } from '../../types';

export const lesson2: Item[] = [
  // Vocabulary
  {
    id: 'mn2-v1',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'これ',
    readings: ['kore'],
    meanings: ['this (thing here)'],
    explanation: 'A demonstrative pronoun referring to a thing near the speaker.',
    sentences: [{ japanese: 'これは 辞書です。', english: 'This is a dictionary.' }]
  },
  {
    id: 'mn2-v2',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'それ',
    readings: ['sore'],
    meanings: ['that (thing near you)'],
    explanation: 'A demonstrative pronoun referring to a thing near the listener.',
    sentences: [{ japanese: 'それは わたしの 傘です。', english: 'That is my umbrella.' }]
  },
  {
    id: 'mn2-v3',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'あれ',
    readings: ['are'],
    meanings: ['that (thing over there)'],
    explanation: 'A demonstrative pronoun referring to a thing far from both speaker and listener.',
    sentences: [{ japanese: 'あれは わたしの かばんです。', english: 'That over there is my bag.' }]
  },
  {
    id: 'mn2-v4',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'この〜',
    readings: ['kono'],
    meanings: ['this ~'],
    explanation: 'A demonstrative adjective modifying a noun near the speaker.',
    sentences: [{ japanese: 'この 本は わたしのです。', english: 'This book is mine.' }]
  },
  {
    id: 'mn2-v5',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'つくえ',
    readings: ['tsukue'],
    meanings: ['desk'],
    explanation: '机.'
  },
  {
    id: 'mn2-v6',
    lessonNumber: 2,
    type: 'vocabulary',
    character: 'とけい',
    readings: ['tokei'],
    meanings: ['watch', 'clock'],
    explanation: '時計.'
  },

  // Grammar
  {
    id: 'mn2-g1',
    lessonNumber: 2,
    type: 'grammar',
    character: 'N1 は 何ですか',
    readings: ['N1 wa nan desu ka'],
    meanings: ['What is N1?'],
    explanation: 'Interrogative sentence using "nan" (what).',
    sentences: [{ japanese: 'それは 何ですか。', english: 'What is that?', furigana: 'それは何[なん]ですか。' }]
  },

  // Kanji (Unit 2)
  {
    id: 'mn2-k1',
    lessonNumber: 2,
    type: 'kanji',
    character: '一',
    readings: ['いち', 'いつ', 'ひと'],
    meanings: ['One'],
    level: 1,
    radical: '一',
    mnemonic: 'A single horizontal line representing the number one.'
  },
  {
    id: 'mn2-k2',
    lessonNumber: 2,
    type: 'kanji',
    character: '二',
    readings: ['に', 'じ', 'ふた'],
    meanings: ['Two'],
    level: 1,
    radical: '二',
    mnemonic: 'Two horizontal lines representing the number two.'
  },
  {
    id: 'mn2-k3',
    lessonNumber: 2,
    type: 'kanji',
    character: '三',
    readings: ['さん', 'み'],
    meanings: ['Three'],
    level: 1,
    radical: '一',
    mnemonic: 'Three horizontal lines representing the number three.'
  },
  {
    id: 'mn2-k4',
    lessonNumber: 2,
    type: 'kanji',
    character: '四',
    readings: ['し', 'よ', 'よん', 'よっ'],
    meanings: ['Four'],
    level: 1,
    radical: '囗',
    mnemonic: 'A box with two lines inside, representing four directions.'
  },
  {
    id: 'mn2-k5',
    lessonNumber: 2,
    type: 'kanji',
    character: '五',
    readings: ['ご', 'いつ'],
    meanings: ['Five'],
    level: 1,
    radical: '二',
    mnemonic: 'Five strokes form this kanji.'
  },
  {
    id: 'mn2-k6',
    lessonNumber: 2,
    type: 'kanji',
    character: '六',
    readings: ['ろく', 'りく', 'む'],
    meanings: ['Six'],
    level: 1,
    radical: '八',
    mnemonic: 'A top hat with legs.'
  },
  {
    id: 'mn2-k7',
    lessonNumber: 2,
    type: 'kanji',
    character: '七',
    readings: ['しち', 'なな', 'なの'],
    meanings: ['Seven'],
    level: 1,
    radical: '一',
    mnemonic: 'An upside-down number seven.'
  },
  {
    id: 'mn2-k8',
    lessonNumber: 2,
    type: 'kanji',
    character: '八',
    readings: ['はち', 'や', 'よう'],
    meanings: ['Eight'],
    level: 1,
    radical: '八',
    mnemonic: 'Two sides of a mountain or an open space.'
  },
  {
    id: 'mn2-k9',
    lessonNumber: 2,
    type: 'kanji',
    character: '九',
    readings: ['きゅう', 'く', 'ここの'],
    meanings: ['Nine'],
    level: 1,
    radical: '乙',
    mnemonic: 'A hook with a stroke.'
  },
  {
    id: 'mn2-k10',
    lessonNumber: 2,
    type: 'kanji',
    character: '十',
    readings: ['じゅう', 'じっ', 'とお', 'と'],
    meanings: ['Ten'],
    level: 1,
    radical: '十',
    mnemonic: 'A cross representing the intersection of two bundles of five.'
  },
  {
    id: 'mn2-k11',
    lessonNumber: 2,
    type: 'kanji',
    character: '百',
    readings: ['ひゃく', 'びゃく', 'ぴゃく', 'もも'],
    meanings: ['Hundred'],
    level: 1,
    radical: '白',
    mnemonic: 'The number one over white (representing a clear value).'
  },
  {
    id: 'mn2-k12',
    lessonNumber: 2,
    type: 'kanji',
    character: '千',
    readings: ['せん', 'ぜん', 'ち'],
    meanings: ['Thousand'],
    level: 1,
    radical: '十',
    mnemonic: 'Ten with an extra stroke for magnitude.'
  },
  {
    id: 'mn2-k13',
    lessonNumber: 2,
    type: 'kanji',
    character: '万',
    readings: ['まん', 'ばん', 'よろず'],
    meanings: ['Ten thousand', 'Myriad'],
    level: 1,
    radical: '一',
    mnemonic: 'A flag representing a large gathering.'
  },
  {
    id: 'mn2-k14',
    lessonNumber: 2,
    type: 'kanji',
    character: '円',
    readings: ['えん', 'まる'],
    meanings: ['Yen', 'Circle', 'Round'],
    level: 1,
    radical: '冂',
    mnemonic: 'A coin-shaped box representing currency.'
  }
];
