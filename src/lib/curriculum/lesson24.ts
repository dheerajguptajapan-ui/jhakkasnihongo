import { Item } from '../../types';

export const lesson24: Item[] = [
  // Vocabulary
  {
    id: 'mn24-v1',
    lessonNumber: 24,
    type: 'vocabulary',
    character: 'くれます',
    readings: ['kuremasu'],
    meanings: ['give [to me]'],
    explanation: 'くれる.'
  },
  {
    id: 'mn24-v2',
    lessonNumber: 24,
    type: 'vocabulary',
    character: 'つれていきます',
    readings: ['tsurete ikimasu'],
    meanings: ['take [someone]'],
    explanation: '連れて行く.'
  },

  // Grammar
  {
    id: 'mn24-g1',
    lessonNumber: 24,
    type: 'grammar',
    character: 'Giving and Receiving (polite/me-focus)',
    readings: ['V te agemasu/moraimasu/kuremasu'],
    meanings: ['Doing things for others / Others doing things for me'],
    explanation: 'Adding directional focus to actions.',
    sentences: [{ japanese: '木村さんは 私に 傘を 貸してくれました。', english: 'Ms. Kimura lent me an umbrella.', furigana: '木村さんは私に傘[かさ]を貸[か]してくれました。' }]
  },

  // Kanji (Unit 19)
  {
    id: 'mn24-k1',
    lessonNumber: 24,
    type: 'kanji',
    character: '内',
    readings: ['ない', 'うち'],
    meanings: ['Inside', 'Within', 'Between', 'Among', 'House'],
    level: 1,
    radical: '冂',
    mnemonic: 'A person (人) inside a space (冂).',
    combinations: [{ word: '案内', reading: 'annai', meaning: 'Guide/Information' }]
  },
  {
    id: 'mn24-k2',
    lessonNumber: 24,
    type: 'kanji',
    character: '家',
    readings: ['か', 'け', 'いえ', 'や', 'うち'],
    meanings: ['House', 'Home', 'Family', 'Professional'],
    level: 1,
    radical: '宀',
    mnemonic: 'A pig (bottom part) under a roof (宀).',
    combinations: [{ word: '家族', reading: 'kazoku', meaning: 'Family' }]
  },
  {
    id: 'mn24-k3',
    lessonNumber: 24,
    type: 'kanji',
    character: '族',
    readings: ['ぞく'],
    meanings: ['Tribe', 'Family', 'Clan'],
    level: 1,
    radical: '方',
    mnemonic: 'People under a flag (方) with arrows (矢) protecting each other.',
    combinations: [{ word: '家族', reading: 'kazoku', meaning: 'Family' }]
  },
  {
    id: 'mn24-k4',
    lessonNumber: 24,
    type: 'kanji',
    character: '兄',
    readings: ['けい', 'きょう', 'あに', 'にい'],
    meanings: ['Older brother'],
    level: 1,
    radical: '儿',
    mnemonic: 'A mouth (口) with legs (儿), the one who speaks first.',
    combinations: [{ word: 'お兄さん', reading: 'oniisan', meaning: 'Older brother' }]
  },
  {
    id: 'mn24-k5',
    lessonNumber: 24,
    type: 'kanji',
    character: '弟',
    readings: ['だい', 'で', 'てい', 'おとうと'],
    meanings: ['Younger brother', 'Disciple', 'Faithful service'],
    level: 1,
    radical: '弓',
    mnemonic: 'A younger brother wrapping leather around a bow.',
    combinations: [{ word: '兄弟', reading: 'kyoudai', meaning: 'Siblings' }]
  },
  {
    id: 'mn24-k6',
    lessonNumber: 24,
    type: 'kanji',
    character: '姉',
    readings: ['し', 'あね', 'ねえ'],
    meanings: ['Older sister'],
    level: 1,
    radical: '女',
    mnemonic: 'The woman (女) in charge of the city (市) or house.',
    combinations: [{ word: 'お姉さん', reading: 'oneesan', meaning: 'Older sister' }]
  },
  {
    id: 'mn24-k7',
    lessonNumber: 24,
    type: 'kanji',
    character: '妹',
    readings: ['まい', 'いもうと'],
    meanings: ['Younger sister'],
    level: 1,
    radical: '女',
    mnemonic: 'A woman (女) who is not yet (未) fully grown.',
    combinations: [{ word: '姉妹', reading: 'shimai', meaning: 'Sisters' }]
  },
  {
    id: 'mn24-k8',
    lessonNumber: 24,
    type: 'kanji',
    character: '私',
    readings: ['し', 'わたし', 'わたくし'],
    meanings: ['Private', 'I', 'Me'],
    level: 1,
    radical: '禾',
    mnemonic: 'A person holding grain (禾) for themselves.',
    combinations: [{ word: '私立', reading: 'shiritsu', meaning: 'Private' }]
  },
  {
    id: 'mn24-k9',
    lessonNumber: 24,
    type: 'kanji',
    character: '夫',
    readings: ['ふ', 'ふう', 'おっと'],
    meanings: ['Husband', 'Man'],
    level: 1,
    radical: '大',
    mnemonic: 'A big (大) man with a hairpin showing he is married.',
    combinations: [{ word: '夫婦', reading: 'fuufu', meaning: 'Married couple' }]
  },
  {
    id: 'mn24-k10',
    lessonNumber: 24,
    type: 'kanji',
    character: '妻',
    readings: ['さい', 'つま'],
    meanings: ['Wife'],
    level: 1,
    radical: '女',
    mnemonic: 'A woman (女) wearing a hairpin.',
    combinations: [{ word: '夫妻', reading: 'fusai', meaning: 'Mr. and Mrs.' }]
  },
  {
    id: 'mn24-k11',
    lessonNumber: 24,
    type: 'kanji',
    character: '奥',
    readings: ['おう', 'おく'],
    meanings: ['Inside', 'Heart', 'Interior'],
    level: 1,
    radical: '大',
    mnemonic: 'A deep space inside a building.',
    combinations: [{ word: '奥さん', reading: 'okusan', meaning: 'Wife (someone else\'s)' }]
  }
];
