import { Item } from '../../types';

export const lesson6: Item[] = [
  // Vocabulary
  {
    id: 'mn6-v1',
    lessonNumber: 6,
    type: 'vocabulary',
    character: 'たべます',
    readings: ['tabemasu'],
    meanings: ['eat'],
    explanation: '食べる.'
  },
  {
    id: 'mn6-v2',
    lessonNumber: 6,
    type: 'vocabulary',
    character: 'のみます',
    readings: ['nomimasu'],
    meanings: ['drink'],
    explanation: '飲む.'
  },
  {
    id: 'mn6-v3',
    lessonNumber: 6,
    type: 'vocabulary',
    character: 'すいます [たばこを〜]',
    readings: ['suimasu'],
    meanings: ['smoke [a cigarette]'],
    explanation: '吸う.'
  },
  {
    id: 'mn6-v4',
    lessonNumber: 6,
    type: 'vocabulary',
    character: 'みます',
    readings: ['mimasu'],
    meanings: ['see', 'look at', 'watch'],
    explanation: '見る.'
  },

  // Grammar
  {
    id: 'mn6-g1',
    lessonNumber: 6,
    type: 'grammar',
    character: 'N を V (transitive)',
    readings: ['N o V'],
    meanings: ['[Verb] [Noun]'],
    explanation: 'The particle を indicates the direct object of a transitive verb.',
    sentences: [{ japanese: 'ジュースを 飲みます。', english: 'I drink juice.', furigana: 'ジュースを飲[の]みます。' }]
  },

  // Kanji (Unit 6)
  {
    id: 'mn6-k1',
    lessonNumber: 6,
    type: 'kanji',
    character: '高',
    readings: ['こう', 'たか'],
    meanings: ['High', 'Expensive', 'Tall'],
    level: 1,
    radical: '高',
    mnemonic: 'A tall building with a roof and windows.',
    combinations: [{ word: '高い', reading: 'takai', meaning: 'Expensive/High' }]
  },
  {
    id: 'mn6-k2',
    lessonNumber: 6,
    type: 'kanji',
    character: '安',
    readings: ['あん', 'やす'],
    meanings: ['Cheap', 'Relax', 'Quiet', 'Safe'],
    level: 1,
    radical: '女',
    mnemonic: 'A woman (女) under a roof, representing peace and safety.',
    combinations: [{ word: '安い', reading: 'yasui', meaning: 'Cheap' }]
  },
  {
    id: 'mn6-k3',
    lessonNumber: 6,
    type: 'kanji',
    character: '大',
    readings: ['だい', 'たい', 'おお'],
    meanings: ['Big', 'Large', 'Great'],
    level: 1,
    radical: '大',
    mnemonic: 'A person stretching their arms out wide.',
    combinations: [{ word: '大学', reading: 'daigaku', meaning: 'University' }]
  },
  {
    id: 'mn6-k4',
    lessonNumber: 6,
    type: 'kanji',
    character: '小',
    readings: ['しょう', 'ちい', 'こ', 'お'],
    meanings: ['Small', 'Little'],
    level: 1,
    radical: '小',
    mnemonic: 'Small bits or grains.',
    combinations: [{ word: '小学校', reading: 'shou gakkou', meaning: 'Elementary school' }]
  },
  {
    id: 'mn6-k5',
    lessonNumber: 6,
    type: 'kanji',
    character: '新',
    readings: ['しん', 'あたら', 'あら', 'にいがた'],
    meanings: ['New', 'Fresh'],
    level: 1,
    radical: '斤',
    mnemonic: 'A newly cut standing tree (立 + 木) with an axe (斤).',
    combinations: [{ word: '新聞', reading: 'shinbun', meaning: 'Newspaper' }]
  },
  {
    id: 'mn6-k6',
    lessonNumber: 6,
    type: 'kanji',
    character: '古',
    readings: ['こ', 'ふる'],
    meanings: ['Old', 'Ancient'],
    level: 1,
    radical: '口',
    mnemonic: 'Something that has been spoken (口) for ten (十) generations.',
    combinations: [{ word: '中古', reading: 'chuuko', meaning: 'Used/Second-hand' }]
  },
  {
    id: 'mn6-k7',
    lessonNumber: 6,
    type: 'kanji',
    character: '青',
    readings: ['せい', 'しょう', 'あお'],
    meanings: ['Blue', 'Green', 'Pale'],
    level: 1,
    radical: '青',
    mnemonic: 'A plant growing under the moon-like sky.',
    combinations: [{ word: '青い', reading: 'aoi', meaning: 'Blue' }]
  },
  {
    id: 'mn6-k8',
    lessonNumber: 6,
    type: 'kanji',
    character: '白',
    readings: ['はく', 'びゃく', 'しろ', 'しら'],
    meanings: ['White'],
    level: 1,
    radical: '白',
    mnemonic: 'A drop of sun/light, representing white.',
    combinations: [{ word: '白い', reading: 'shiroi', meaning: 'White' }]
  },
  {
    id: 'mn6-k9',
    lessonNumber: 6,
    type: 'kanji',
    character: '赤',
    readings: ['せき', 'しゃく', 'あか'],
    meanings: ['Red', 'Crimson'],
    level: 1,
    radical: '赤',
    mnemonic: 'Earth over fire (representing glowing red earth).',
    combinations: [{ word: '赤い', reading: 'akai', meaning: 'Red' }]
  },
  {
    id: 'mn6-k10',
    lessonNumber: 6,
    type: 'kanji',
    character: '黒',
    readings: ['こく', 'くろ'],
    meanings: ['Black'],
    level: 1,
    radical: '黒',
    mnemonic: 'Soot from a fire (represented by the bottom dots).',
    combinations: [{ word: '黒い', reading: 'kuroi', meaning: 'Black' }]
  }
];
