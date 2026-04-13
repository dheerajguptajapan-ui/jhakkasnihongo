import { Item } from '../../types';

export const lesson18: Item[] = [
  // Vocabulary
  {
    id: 'mn18-v1',
    lessonNumber: 18,
    type: 'vocabulary',
    character: 'できます',
    readings: ['dekimasu'],
    meanings: ['can (do)', 'be able to'],
    explanation: '出来る.'
  },
  {
    id: 'mn18-v2',
    lessonNumber: 18,
    type: 'vocabulary',
    character: 'あらいます',
    readings: ['araimasu'],
    meanings: ['wash'],
    explanation: '洗う.'
  },

  // Grammar
  {
    id: 'mn18-g1',
    lessonNumber: 18,
    type: 'grammar',
    character: 'V (dictionary-form) ことが できます',
    readings: ['V koto ga dekimasu'],
    meanings: ['Can [Verb]'],
    explanation: 'Expressing potential.',
    sentences: [{ japanese: '車を 運転することが できます。', english: 'I can drive a car.', furigana: '車[くるま]を運[うん]転[てん]することがあります。' }]
  },

  // Kanji (Unit 14)
  {
    id: 'mn18-k1',
    lessonNumber: 18,
    type: 'kanji',
    character: '便',
    readings: ['べん', 'びん', 'たより'],
    meanings: ['Convenience', 'Mail', 'Service', 'Flight'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) and something convenient or useful.',
    combinations: [{ word: '便利', reading: 'benri', meaning: 'Convenient' }]
  },
  {
    id: 'mn18-k2',
    lessonNumber: 18,
    type: 'kanji',
    character: '利',
    readings: ['り', 'き'],
    meanings: ['Profit', 'Advantage', 'Benefit', 'Effective'],
    level: 1,
    radical: '刀',
    mnemonic: 'Using a blade (刀) to harvest grain (禾) for profit.',
    combinations: [{ word: '利用', reading: 'riyou', meaning: 'Use/Utilization' }]
  },
  {
    id: 'mn18-k3',
    lessonNumber: 18,
    type: 'kanji',
    character: '親',
    readings: ['しん', 'おや', 'した'],
    meanings: ['Parent', 'Intimacy', 'Relative', 'Kindness'],
    level: 1,
    radical: '見',
    mnemonic: 'A parent standing (立) on a tree (木) and watching over (見) their child.',
    combinations: [{ word: '親切', reading: 'shinsetsu', meaning: 'Kind' }]
  },
  {
    id: 'mn18-k4',
    lessonNumber: 18,
    type: 'kanji',
    character: '有',
    readings: ['ゆう', 'う', 'あ'],
    meanings: ['Have', 'Exist', 'Possession'],
    level: 1,
    radical: '月',
    mnemonic: 'A hand (top part) holding the moon, representing possession.',
    combinations: [{ word: '有名', reading: 'yuumei', meaning: 'Famous' }]
  },
  {
    id: 'mn18-k5',
    lessonNumber: 18,
    type: 'kanji',
    character: '名',
    readings: ['めい', 'みょう', 'な'],
    meanings: ['Name', 'Title', 'Famous'],
    level: 1,
    radical: '口',
    mnemonic: 'Speaking (口) one\'s identity in the evening (夕).',
    combinations: [{ word: '名前', reading: 'namae', meaning: 'Name' }]
  },
  {
    id: 'mn18-k6',
    lessonNumber: 18,
    type: 'kanji',
    character: '地',
    readings: ['ち', 'じ'],
    meanings: ['Ground', 'Earth', 'Land'],
    level: 1,
    radical: '土',
    mnemonic: 'Earth (土) stretching out like a scorpion tail.',
    combinations: [{ word: '地下鉄', reading: 'chikatetsu', meaning: 'Subway' }]
  },
  {
    id: 'mn18-k7',
    lessonNumber: 18,
    type: 'kanji',
    character: '鉄',
    readings: ['てつ', 'くろがね'],
    meanings: ['Iron', 'Steel'],
    level: 1,
    radical: '金',
    mnemonic: 'Metal (金) representing iron.',
    combinations: [{ word: '鉄道', reading: 'tetsudou', meaning: 'Railway' }]
  },
  {
    id: 'mn18-k8',
    lessonNumber: 18,
    type: 'kanji',
    character: '仕',
    readings: ['し', 'じ', 'つか'],
    meanings: ['Serve', 'Official', 'Work'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) serving a samurai (士).',
    combinations: [{ word: '仕事', reading: 'shigoto', meaning: 'Work' }]
  },
  {
    id: 'mn18-k9',
    lessonNumber: 18,
    type: 'kanji',
    character: '事',
    readings: ['じ', 'ず', 'こと', 'つか'],
    meanings: ['Matter', 'Thing', 'Fact', 'Business'],
    level: 1,
    radical: '亅',
    mnemonic: 'Records hanging on a hook.',
    combinations: [{ word: '仕事', reading: 'shigoto', meaning: 'Work/Job' }]
  }
];
