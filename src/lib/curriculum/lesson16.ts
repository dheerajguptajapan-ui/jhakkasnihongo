import { Item } from '../../types';

export const lesson16: Item[] = [
  // Vocabulary
  {
    id: 'mn16-v1',
    lessonNumber: 16,
    type: 'vocabulary',
    character: 'のります [でんしゃに〜]',
    readings: ['norimasu'],
    meanings: ['ride', 'get on [a train]'],
    explanation: '乗る.'
  },
  {
    id: 'mn16-v2',
    lessonNumber: 16,
    type: 'vocabulary',
    character: 'おります [でんしゃを〜]',
    readings: ['orimasu'],
    meanings: ['get off [a train]'],
    explanation: '降りる.'
  },

  // Grammar
  {
    id: 'mn16-g1',
    lessonNumber: 16,
    type: 'grammar',
    character: 'V1 (te-form), V2 (te-form), ...',
    readings: ['V1 te, V2 te, ...'],
    meanings: ['[Verb 1], [Verb 2], and then...'],
    explanation: 'Used to list actions in chronological order.',
    sentences: [{ japanese: '朝 起きて、顔を 洗って、それから 食べます。', english: 'In the morning I wake up, wash my face, and then eat.', furigana: '朝[あさ]起[お]きて、顔[かお]を洗[あら]って、それから食[た]べます。' }]
  },

  // Kanji (Unit 13 - Part 1)
  {
    id: 'mn16-k1',
    lessonNumber: 16,
    type: 'kanji',
    character: '明',
    readings: ['めい', 'みょう', 'あか', 'あ'],
    meanings: ['Bright', 'Light'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun (日) and the moon (月) together make things bright.',
    combinations: [{ word: '明日', reading: 'ashita', meaning: 'Tomorrow' }]
  },
  {
    id: 'mn16-k2',
    lessonNumber: 16,
    type: 'kanji',
    character: '暗',
    readings: ['あん', 'くら'],
    meanings: ['Dark', 'Gloomy'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun (日) is hidden by a sound/shadow.',
    combinations: [{ word: '暗い', reading: 'kurai', meaning: 'Dark' }]
  },
  {
    id: 'mn16-k3',
    lessonNumber: 16,
    type: 'kanji',
    character: '広',
    readings: ['こう', 'ひろ'],
    meanings: ['Wide', 'Broad', 'Spacious'],
    level: 1,
    radical: '广',
    mnemonic: 'A spacious building (广).',
    combinations: [{ word: '広い', reading: 'hiroi', meaning: 'Wide' }]
  },
  {
    id: 'mn16-k4',
    lessonNumber: 16,
    type: 'kanji',
    character: '多',
    readings: ['た', 'おお'],
    meanings: ['Many', 'Much', 'Frequent'],
    level: 1,
    radical: '夕',
    mnemonic: 'Two evening moons (夕) stacked up, representing "many".',
    combinations: [{ word: '多分', reading: 'tabun', meaning: 'Probably/Many parts' }]
  },
  {
    id: 'mn16-k5',
    lessonNumber: 16,
    type: 'kanji',
    character: '少',
    readings: ['しょう', 'すく', 'すこ'],
    meanings: ['Few', 'Little', 'A bit'],
    level: 1,
    radical: '小',
    mnemonic: 'Something small (小) with an extra stroke showing reduction.',
    combinations: [{ word: '少し', reading: 'sukoshi', meaning: 'A little' }]
  }
];
