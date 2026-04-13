import { Item } from '../../types';

export const lesson1: Item[] = [
  // Vocabulary
  {
    id: 'mn1-v1',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'わたし',
    readings: ['watashi'],
    meanings: ['I'],
    explanation: 'Personal pronoun referring to oneself. (私 in Kanji).'
  },
  {
    id: 'mn1-v2',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'わたしたち',
    readings: ['watashitachi'],
    meanings: ['we'],
    explanation: 'Plural form of "watashi".'
  },
  {
    id: 'mn1-v3',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'あなた',
    readings: ['anata'],
    meanings: ['you'],
    explanation: 'Note: Use name + san instead of "anata" when possible.'
  },
  {
    id: 'mn1-v4',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'せんせい',
    readings: ['sensei'],
    meanings: ['teacher', 'instructor'],
    explanation: '先生. Not used for one\'s own job.'
  },
  {
    id: 'mn1-v5',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'がくせい',
    readings: ['gakusei'],
    meanings: ['student'],
    explanation: '学生.'
  },
  {
    id: 'mn1-v6',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'かいしゃいん',
    readings: ['kaishain'],
    meanings: ['company employee'],
    explanation: '会社員.'
  },
  {
    id: 'mn1-v7',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'ぎんこういん',
    readings: ['ginkouin'],
    meanings: ['bank employee'],
    explanation: '銀行員.'
  },
  {
    id: 'mn1-v8',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'いしゃ',
    readings: ['isha'],
    meanings: ['doctor'],
    explanation: '医者.'
  },
  {
    id: 'mn1-v9',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'エンジニア',
    readings: ['enjinia'],
    meanings: ['engineer']
  },
  {
    id: 'mn1-v10',
    lessonNumber: 1,
    type: 'vocabulary',
    character: 'だいがく',
    readings: ['daigaku'],
    meanings: ['university'],
    explanation: '大学.'
  },

  // Grammar
  {
    id: 'mn1-g1',
    lessonNumber: 1,
    type: 'grammar',
    character: 'N1 は N2 です',
    readings: ['N1 wa N2 desu'],
    meanings: ['Noun 1 is Noun 2'],
    explanation: 'は is the topic marker. です is a copula indicating assertion.',
    sentences: [{ japanese: '私は 会社員です。', english: 'I am a company employee.', furigana: '私[わたし]は会[かい]社[しゃ]員[いん]です。' }]
  },
  {
    id: 'mn1-g2',
    lessonNumber: 1,
    type: 'grammar',
    character: 'N1 は N2 じゃ ありません',
    readings: ['N1 wa N2 ja arimasen'],
    meanings: ['Noun 1 is not Noun 2'],
    explanation: 'Negative form of です. Formal version is では ありません.',
    sentences: [{ japanese: 'サントスさんは 先生じゃありません。', english: 'Mr. Santos is not a teacher.', furigana: 'サントスさんは先[せん]生[せい]じゃありません。' }]
  },

  // Kanji (Unit 1)
  {
    id: 'mn1-k1',
    lessonNumber: 1,
    type: 'kanji',
    character: '日',
    readings: ['にち', 'じつ', 'ひ', 'び'],
    meanings: ['Day', 'Sun', 'Japan'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun is a circle with a line in the middle, stylized as a box.',
    combinations: [{ word: '日本', reading: 'にほん', meaning: 'Japan' }]
  },
  {
    id: 'mn1-k2',
    lessonNumber: 1,
    type: 'kanji',
    character: '月',
    readings: ['げつ', 'がつ', 'つき'],
    meanings: ['Month', 'Moon'],
    level: 1,
    radical: '月',
    mnemonic: 'A crescent moon with two marks.',
    combinations: [{ word: '一月', reading: 'いちがつ', meaning: 'January' }]
  },
  {
    id: 'mn1-k3',
    lessonNumber: 1,
    type: 'kanji',
    character: '火',
    readings: ['か', 'ひ', 'ほ'],
    meanings: ['Fire'],
    level: 1,
    radical: '火',
    mnemonic: 'Flames rising up from a central point.',
    combinations: [{ word: '火曜日', reading: 'かようび', meaning: 'Tuesday' }]
  },
  {
    id: 'mn1-k4',
    lessonNumber: 1,
    type: 'kanji',
    character: '水',
    readings: ['すい', 'みず'],
    meanings: ['Water'],
    level: 1,
    radical: '水',
    mnemonic: 'Water splashing or flowing in a stream.',
    combinations: [{ word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' }]
  },
  {
    id: 'mn1-k5',
    lessonNumber: 1,
    type: 'kanji',
    character: '木',
    readings: ['もく', 'ぼく', 'き'],
    meanings: ['Tree', 'Wood'],
    level: 1,
    radical: '木',
    mnemonic: 'A tree with branches and roots.',
    combinations: [{ word: '木曜日', reading: 'もくようび', meaning: 'Thursday' }]
  },
  {
    id: 'mn1-k6',
    lessonNumber: 1,
    type: 'kanji',
    character: '金',
    readings: ['きん', 'こん', 'かね'],
    meanings: ['Gold', 'Money'],
    level: 1,
    radical: '金',
    mnemonic: 'Gold nuggets in the earth under a roof.',
    combinations: [{ word: 'お金', reading: 'おかね', meaning: 'Money' }]
  },
  {
    id: 'mn1-k7',
    lessonNumber: 1,
    type: 'kanji',
    character: '土',
    readings: ['ど', 'と', 'つち'],
    meanings: ['Earth', 'Soil', 'Ground'],
    level: 1,
    radical: '土',
    mnemonic: 'A sprout growing out of the earth.',
    combinations: [{ word: '土曜日', reading: 'どようび', meaning: 'Saturday' }]
  },
  {
    id: 'mn1-k8',
    lessonNumber: 1,
    type: 'kanji',
    character: '山',
    readings: ['さん', 'やま'],
    meanings: ['Mountain'],
    level: 1,
    radical: '山',
    mnemonic: 'Three peaks of a mountain range.',
    combinations: [{ word: '富士山', reading: 'ふじさん', meaning: 'Mt. Fuji' }]
  },
  {
    id: 'mn1-k9',
    lessonNumber: 1,
    type: 'kanji',
    character: '川',
    readings: ['せん', 'かわ'],
    meanings: ['River'],
    level: 1,
    radical: '川',
    mnemonic: 'Flowing lines of a river.',
    combinations: [{ word: 'ミシシッピ川', reading: 'ミシシッピがわ', meaning: 'Mississippi River' }]
  },
  {
    id: 'mn1-k10',
    lessonNumber: 1,
    type: 'kanji',
    character: '田',
    readings: ['でん', 'た'],
    meanings: ['Rice field'],
    level: 1,
    radical: '田',
    mnemonic: 'A rice field divided into four sections.',
    combinations: [{ word: '田中さん', reading: 'たなかさん', meaning: 'Mr./Ms. Tanaka' }]
  }
];
