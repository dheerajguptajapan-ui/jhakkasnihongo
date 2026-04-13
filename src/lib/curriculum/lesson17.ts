import { Item } from '../../types';

export const lesson17: Item[] = [
  // Vocabulary
  {
    id: 'mn17-v1',
    lessonNumber: 17,
    type: 'vocabulary',
    character: 'おぼえます',
    readings: ['oboemasu'],
    meanings: ['remember', 'memorize'],
    explanation: '覚える.'
  },
  {
    id: 'mn17-v2',
    lessonNumber: 17,
    type: 'vocabulary',
    character: 'わすれます',
    readings: ['wasuremasu'],
    meanings: ['forget'],
    explanation: '忘れる.'
  },

  // Grammar
  {
    id: 'mn17-g1',
    lessonNumber: 17,
    type: 'grammar',
    character: 'V (nai-form) で ください',
    readings: ['V nai de kudasai'],
    meanings: ['Please don\'t [Verb]'],
    explanation: 'Requesting someone not to do something.',
    sentences: [{ japanese: 'ここで 写真を 撮らないでください。', english: 'Please don\'t take photos here.', furigana: 'ここで写[しゃ]真[しん]を撮[と]らないでください。' }]
  },

  // Kanji (Unit 13 - Part 2)
  {
    id: 'mn17-k1',
    lessonNumber: 17,
    type: 'kanji',
    character: '長',
    readings: ['ちょう', 'なが'],
    meanings: ['Long', 'Chief', 'Leader'],
    level: 1,
    radical: '長',
    mnemonic: 'Long flowing hair of a leader.',
    combinations: [{ word: '校長', reading: 'kouchou', meaning: 'Principal/School head' }]
  },
  {
    id: 'mn17-k2',
    lessonNumber: 17,
    type: 'kanji',
    character: '短',
    readings: ['たん', 'みじか'],
    meanings: ['Short', 'Brief', 'Fault'],
    level: 1,
    radical: '矢',
    mnemonic: 'An arrow (矢) measure on a scale (豆).',
    combinations: [{ word: '短大', reading: 'tandai', meaning: 'Junior college' }]
  },
  {
    id: 'mn17-k3',
    lessonNumber: 17,
    type: 'kanji',
    character: '重',
    readings: ['じゅう', 'ちょう', 'おも', 'かさ'],
    meanings: ['Heavy', 'Weight', 'Important', 'Pile up'],
    level: 1,
    radical: '里',
    mnemonic: 'Stacking up things until they are heavy.',
    combinations: [{ word: '体重', reading: 'taijuu', meaning: 'Body weight' }]
  },
  {
    id: 'mn17-k4',
    lessonNumber: 17,
    type: 'kanji',
    character: '軽',
    readings: ['けい', 'かる'],
    meanings: ['Lightweight', 'Frivolous', 'Minor'],
    level: 1,
    radical: '車',
    mnemonic: 'A light vehicle (車).',
    combinations: [{ word: '軽食', reading: 'keishoku', meaning: 'Light meal/Snack' }]
  },
  {
    id: 'mn17-k5',
    lessonNumber: 17,
    type: 'kanji',
    character: '悪',
    readings: ['あく', 'お', 'わる'],
    meanings: ['Bad', 'Evil', 'Wrong', 'Vice'],
    level: 1,
    radical: '心',
    mnemonic: 'A bad feeling in the heart (心) toward others.',
    combinations: [{ word: '悪口', reading: 'waruguchi', meaning: 'Bad-mouthing/Abuse' }]
  }
];
