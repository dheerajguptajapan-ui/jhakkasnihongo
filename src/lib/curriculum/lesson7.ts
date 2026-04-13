import { Item } from '../../types';

export const lesson7: Item[] = [
  // Vocabulary
  {
    id: 'mn7-v1',
    lessonNumber: 7,
    type: 'vocabulary',
    character: 'きります',
    readings: ['kirimasu'],
    meanings: ['cut', 'slice'],
    explanation: '切る.'
  },
  {
    id: 'mn7-v2',
    lessonNumber: 7,
    type: 'vocabulary',
    character: 'おくります',
    readings: ['okurimasu'],
    meanings: ['send'],
    explanation: '送る.'
  },
  {
    id: 'mn7-v3',
    lessonNumber: 7,
    type: 'vocabulary',
    character: 'あげます',
    readings: ['agemasu'],
    meanings: ['give'],
    explanation: 'あげる.'
  },
  {
    id: 'mn7-v4',
    lessonNumber: 7,
    type: 'vocabulary',
    character: 'もらいます',
    readings: ['moraimasu'],
    meanings: ['receive'],
    explanation: 'もらう.'
  },

  // Grammar
  {
    id: 'mn7-g1',
    lessonNumber: 7,
    type: 'grammar',
    character: 'N1 (tool/手段) で V',
    readings: ['N1 de V'],
    meanings: ['Do [Verb] with [Tool]'],
    explanation: 'The particle で indicates the tool or means.',
    sentences: [{ japanese: 'はしで 食べます。', english: 'I eat with chopsticks.', furigana: 'はしで食[た]べます。' }]
  },

  // Kanji (Unit 7)
  {
    id: 'mn7-k1',
    lessonNumber: 7,
    type: 'kanji',
    character: '上',
    readings: ['じょう', 'うえ', 'あ', 'うわ'],
    meanings: ['Up', 'Above', 'On'],
    level: 1,
    radical: '一',
    mnemonic: 'A line above the ground.',
    combinations: [{ word: '上着', reading: 'uwagi', meaning: 'Jacket/Outerwear' }]
  },
  {
    id: 'mn7-k2',
    lessonNumber: 7,
    type: 'kanji',
    character: '下',
    readings: ['か', 'げ', 'した', 'しも', 'さ'],
    meanings: ['Down', 'Below', 'Under'],
    level: 1,
    radical: '一',
    mnemonic: 'A line below the ground.',
    combinations: [{ word: '地下鉄', reading: 'chikatetsu', meaning: 'Subway' }]
  },
  {
    id: 'mn7-k3',
    lessonNumber: 7,
    type: 'kanji',
    character: '父',
    readings: ['ふ', 'ちち', 'おとう'],
    meanings: ['Father'],
    level: 1,
    radical: '父',
    mnemonic: 'A person holding two sticks (authority).',
    combinations: [{ word: 'お父さん', reading: 'otousan', meaning: 'Father (someone else\'s)' }]
  },
  {
    id: 'mn7-k4',
    lessonNumber: 7,
    type: 'kanji',
    character: '母',
    readings: ['ぼ', 'はは', 'おかあ'],
    meanings: ['Mother'],
    level: 1,
    radical: '毋',
    mnemonic: 'A woman with breasts, nurturing a child.',
    combinations: [{ word: 'お母さん', reading: 'okaasan', meaning: 'Mother (someone else\'s)' }]
  },
  {
    id: 'mn7-k5',
    lessonNumber: 7,
    type: 'kanji',
    character: '子',
    readings: ['し', 'す', 'こ'],
    meanings: ['Child'],
    level: 1,
    radical: '子',
    mnemonic: 'A baby in swaddling clothes with arms out.',
    combinations: [{ word: '子供', reading: 'kodomo', meaning: 'Child' }]
  },
  {
    id: 'mn7-k6',
    lessonNumber: 7,
    type: 'kanji',
    character: '手',
    readings: ['しゅ', 'て', 'た'],
    meanings: ['Hand'],
    level: 1,
    radical: '手',
    mnemonic: 'The lines on a palm.',
    combinations: [{ word: '上手', reading: 'jouzu', meaning: 'Skillful' }]
  },
  {
    id: 'mn7-k7',
    lessonNumber: 7,
    type: 'kanji',
    character: '好',
    readings: ['こう', 'す', 'よ'],
    meanings: ['Like', 'Favorite', 'Fond'],
    level: 1,
    radical: '女',
    mnemonic: 'A woman (女) holding a child (子), representing love/liking.',
    combinations: [{ word: '好き', reading: 'suki', meaning: 'Like' }]
  },
  {
    id: 'mn7-k8',
    lessonNumber: 7,
    type: 'kanji',
    character: '主',
    readings: ['しゅ', 'ぬし'],
    meanings: ['Main', 'Master', 'Owner', 'Lord'],
    level: 1,
    radical: '丶',
    mnemonic: 'A lamp with a wick, showing the central focus/master.',
    combinations: [{ word: '主人', reading: 'shujin', meaning: 'Husband' }]
  },
  {
    id: 'mn7-k9',
    lessonNumber: 7,
    type: 'kanji',
    character: '肉',
    readings: ['にく'],
    meanings: ['Meat', 'Flesh'],
    level: 1,
    radical: '肉',
    mnemonic: 'A slice of meat with lines.',
    combinations: [{ word: '牛肉', reading: 'gyuuniku', meaning: 'Beef' }]
  },
  {
    id: 'mn7-k10',
    lessonNumber: 7,
    type: 'kanji',
    character: '魚',
    readings: ['ぎょ', 'さかな', 'うお'],
    meanings: ['Fish'],
    level: 1,
    radical: '魚',
    mnemonic: 'A fish with head, body, and tail.',
    combinations: [{ word: '金魚', reading: 'kingyo', meaning: 'Goldfish' }]
  },
  {
    id: 'mn7-k11',
    lessonNumber: 7,
    type: 'kanji',
    character: '食',
    readings: ['しょく', 'じき', 'た', 'く'],
    meanings: ['Eat', 'Food'],
    level: 1,
    radical: '食',
    mnemonic: 'Food under a roof.',
    combinations: [{ word: '食べる', reading: 'taberu', meaning: 'To eat' }]
  },
  {
    id: 'mn7-k12',
    lessonNumber: 7,
    type: 'kanji',
    character: '飲',
    readings: ['いん', 'の'],
    meanings: ['Drink'],
    level: 1,
    radical: '食',
    mnemonic: 'Drinking food/drink.',
    combinations: [{ word: '飲み物', reading: 'nomimono', meaning: 'Drink' }]
  },
  {
    id: 'mn7-k13',
    lessonNumber: 7,
    type: 'kanji',
    character: '物',
    readings: ['ぶつ', 'もつ', 'もの'],
    meanings: ['Thing', 'Object', 'Matter'],
    level: 1,
    radical: '牛',
    mnemonic: 'A cow (牛) and another part representing things in general.',
    combinations: [{ word: '食べ物', reading: 'tabemono', meaning: 'Food' }]
  }
];
