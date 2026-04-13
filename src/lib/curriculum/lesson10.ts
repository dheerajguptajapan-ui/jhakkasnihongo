import { Item } from '../../types';

export const lesson10: Item[] = [
  // Vocabulary
  {
    id: 'mn10-v1',
    lessonNumber: 10,
    type: 'vocabulary',
    character: 'あります',
    readings: ['arimasu'],
    meanings: ['be', 'exist', 'have'],
    explanation: 'Exist (inanimate objects).'
  },
  {
    id: 'mn10-v2',
    lessonNumber: 10,
    type: 'vocabulary',
    character: 'います',
    readings: ['imasu'],
    meanings: ['be', 'exist', 'have'],
    explanation: 'Exist (animate objects).'
  },

  // Grammar
  {
    id: 'mn10-g1',
    lessonNumber: 10,
    type: 'grammar',
    character: 'Place に N が あります/います',
    readings: ['Place ni N ga arimasu/imasu'],
    meanings: ['There is N in [Place]'],
    explanation: 'Used to indicate the existence of a thing or person in a place.',
    sentences: [{ japanese: '机の上に 本が あります。', english: 'There is a book on the desk.', furigana: '机[つくえ]の上[うえ]に本[ほん]があります。' }]
  },

  // Kanji (Unit 10)
  {
    id: 'mn10-k1',
    lessonNumber: 10,
    type: 'kanji',
    character: '茶',
    readings: ['ちゃ', 'さ'],
    meanings: ['Tea'],
    level: 1,
    radical: '艸',
    mnemonic: 'Leaves (艸) gathered from a tree (木).',
    combinations: [{ word: 'お茶', reading: 'ocha', meaning: 'Tea' }]
  },
  {
    id: 'mn10-k2',
    lessonNumber: 10,
    type: 'kanji',
    character: '酒',
    readings: ['しゅ', 'さけ', 'ざけ'],
    meanings: ['Sake', 'Alcohol', 'Liquor'],
    level: 1,
    radical: '水',
    mnemonic: 'Water (氵) fermented in a jar (酉).',
    combinations: [{ word: '日本酒', reading: 'nihonshu', meaning: 'Japanese sake' }]
  },
  {
    id: 'mn10-k3',
    lessonNumber: 10,
    type: 'kanji',
    character: '写',
    readings: ['しゃ', 'うつ'],
    meanings: ['Copy', 'Photograph', 'Be photographed'],
    level: 1,
    radical: '冖',
    mnemonic: 'Giving a representation/copy under a roof.',
    combinations: [{ word: '写真', reading: 'shashin', meaning: 'Photograph' }]
  },
  {
    id: 'mn10-k4',
    lessonNumber: 10,
    type: 'kanji',
    character: '真',
    readings: ['しん', 'ま', 'こと'],
    meanings: ['True', 'Reality', 'Pure'],
    level: 1,
    radical: '目',
    mnemonic: 'A spoon over a box with eyes (seeing the truth).',
    combinations: [{ word: '写真', reading: 'shashin', meaning: 'Photograph' }]
  },
  {
    id: 'mn10-k5',
    lessonNumber: 10,
    type: 'kanji',
    character: '紙',
    readings: ['し', 'かみ'],
    meanings: ['Paper'],
    level: 1,
    radical: '糸',
    mnemonic: 'Fiber/silk (糸) pressed flat on a board.',
    combinations: [{ word: '手紙', reading: 'tegami', meaning: 'Letter' }]
  },
  {
    id: 'mn10-k6',
    lessonNumber: 10,
    type: 'kanji',
    character: '映',
    readings: ['えい', 'うつ'],
    meanings: ['Reflect', 'Projection', 'Reflection'],
    level: 1,
    radical: '日',
    mnemonic: 'Sun (日) reflecting off something representing movies.',
    combinations: [{ word: '映画', reading: 'eiga', meaning: 'Movie' }]
  },
  {
    id: 'mn10-k7',
    lessonNumber: 10,
    type: 'kanji',
    character: '画',
    readings: ['が', 'かく'],
    meanings: ['Painting', 'Picture', 'Stroke'],
    level: 1,
    radical: '田',
    mnemonic: 'A field within a frame.',
    combinations: [{ word: '映画', reading: 'eiga', meaning: 'Movie' }]
  },
  {
    id: 'mn10-k8',
    lessonNumber: 10,
    type: 'kanji',
    character: '英',
    readings: ['えい'],
    meanings: ['English', 'Hero', 'Outstanding'],
    level: 1,
    radical: '艸',
    mnemonic: 'Flowers representing excellence.',
    combinations: [{ word: '英語', reading: 'eigo', meaning: 'English language' }]
  },
  {
    id: 'mn10-k9',
    lessonNumber: 10,
    type: 'kanji',
    character: '店',
    readings: ['てん', 'みせ'],
    meanings: ['Store', 'Shop', 'Establishment'],
    level: 1,
    radical: '广',
    mnemonic: 'A fortune-teller (占) in a building (广).',
    combinations: [{ word: '店員', reading: 'ten\'in', meaning: 'Shop assistant' }]
  },
  {
    id: 'mn10-k10',
    lessonNumber: 10,
    type: 'kanji',
    character: '語',
    readings: ['ご', 'かた'],
    meanings: ['Language', 'Word', 'Speak'],
    level: 1,
    radical: '言',
    mnemonic: 'Words (言) representing numbers (五) and mouths (口).',
    combinations: [{ word: '日本語', reading: 'nihongo', meaning: 'Japanese language' }]
  }
];
