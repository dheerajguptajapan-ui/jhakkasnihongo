import { Item } from '../../types';

export const lesson23: Item[] = [
  // Vocabulary
  {
    id: 'mn23-v1',
    lessonNumber: 23,
    type: 'vocabulary',
    character: 'ひきます [ピアノを〜]',
    readings: ['hikimasu'],
    meanings: ['play [the piano]'],
    explanation: '弾く.'
  },
  {
    id: 'mn23-v2',
    lessonNumber: 23,
    type: 'vocabulary',
    character: 'がんばります',
    readings: ['ganbarimasu'],
    meanings: ['do one\'s best'],
    explanation: '頑張る.'
  },

  // Grammar
  {
    id: 'mn23-g1',
    lessonNumber: 23,
    type: 'grammar',
    character: 'V (dictionary-form) と、 ...',
    readings: ['V to, ...'],
    meanings: ['When [Verb], [Result]'],
    explanation: 'Natural consequence or conditional relationship.',
    sentences: [{ japanese: 'このボタンを 押すと、お釣りが出ます。', english: 'If you press this button, change will come out.', furigana: 'このボタンを押[お]すと、お釣[つ]りが出[で]ます。' }]
  },

  // Kanji (Unit 18)
  {
    id: 'mn23-k1',
    lessonNumber: 23,
    type: 'kanji',
    character: '春',
    readings: ['しゅん', 'はる'],
    meanings: ['Spring'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun (日) and growing plants in spring.',
    combinations: [{ word: '春休み', reading: 'haruyasumi', meaning: 'Spring break' }]
  },
  {
    id: 'mn23-k2',
    lessonNumber: 23,
    type: 'kanji',
    character: '夏',
    readings: ['か', 'なつ'],
    meanings: ['Summer'],
    level: 1,
    radical: '夂',
    mnemonic: 'A person walking slowly in the heat.',
    combinations: [{ word: '夏休み', reading: 'natsuyasumi', meaning: 'Summer vacation' }]
  },
  {
    id: 'mn23-k3',
    lessonNumber: 23,
    type: 'kanji',
    character: '秋',
    readings: ['しゅう', 'あき'],
    meanings: ['Autumn', 'Fall'],
    level: 1,
    radical: '禾',
    mnemonic: 'Grain (禾) and fire (火) for harvest and clearing.',
    combinations: [{ word: '秋分', reading: 'shuubun', meaning: 'Autumnal equinox' }]
  },
  {
    id: 'mn23-k4',
    lessonNumber: 23,
    type: 'kanji',
    character: '冬',
    readings: ['とう', 'ふゆ'],
    meanings: ['Winter'],
    level: 1,
    radical: '冫',
    mnemonic: 'The end (夂) of the year with ice (冫).',
    combinations: [{ word: '冬休み', reading: 'fuyuyasumi', meaning: 'Winter break' }]
  },
  {
    id: 'mn23-k5',
    lessonNumber: 23,
    type: 'kanji',
    character: '道',
    readings: ['どう', 'とう', 'みち'],
    meanings: ['Road', 'Way', 'Path', 'Street', 'Method'],
    level: 1,
    radical: '⻌',
    mnemonic: 'A head (首) on the road (⻌) following a path.',
    combinations: [{ word: '水道', reading: 'suidou', meaning: 'Water supply' }]
  },
  {
    id: 'mn23-k6',
    lessonNumber: 23,
    type: 'kanji',
    character: '建',
    readings: ['けん', 'こん', 'た'],
    meanings: ['Build', 'Construct', 'Erect'],
    level: 1,
    radical: '廴',
    mnemonic: 'A writing brush (right part) and walking long distance (left part) to plan building.',
    combinations: [{ word: '建物', reading: 'tatemono', meaning: 'Building' }]
  },
  {
    id: 'mn23-k7',
    lessonNumber: 23,
    type: 'kanji',
    character: '病',
    readings: ['びょう', 'へい', 'や'],
    meanings: ['Illness', 'Sickness', 'Disease'],
    level: 1,
    radical: '疒',
    mnemonic: 'A person on a sickbed (疒).',
    combinations: [{ word: '病院', reading: 'byouin', meaning: 'Hospital' }]
  },
  {
    id: 'mn23-k8',
    lessonNumber: 23,
    type: 'kanji',
    character: '院',
    readings: ['いん'],
    meanings: ['Institution', 'Temple', 'Mansion', 'School'],
    level: 1,
    radical: '⻖',
    mnemonic: 'A large building behind a wall or mound.',
    combinations: [{ word: '大学院', reading: 'daigakuin', meaning: 'Graduate school' }]
  },
  {
    id: 'mn23-k9',
    lessonNumber: 23,
    type: 'kanji',
    character: '体',
    readings: ['たい', 'てい', 'からだ'],
    meanings: ['Body', 'Object', 'Reality'],
    level: 1,
    radical: '人',
    mnemonic: 'A person (人) and a tree (original source/source of life).',
    combinations: [{ word: '体力', reading: 'tairyoku', meaning: 'Physical strength' }]
  },
  {
    id: 'mn23-k10',
    lessonNumber: 23,
    type: 'kanji',
    character: '乗',
    readings: ['じょう', 'しょ', 'の'],
    meanings: ['Ride', 'Board', 'Mount'],
    level: 1,
    radical: '丿',
    mnemonic: 'A person riding on top of a tree/vehicle.',
    combinations: [{ word: '乗客', reading: 'joukyaku', meaning: 'Passenger' }]
  },
  {
    id: 'mn23-k11',
    lessonNumber: 23,
    type: 'kanji',
    character: '運',
    readings: ['うん', 'はこ'],
    meanings: ['Carry', 'Luck', 'Fate', 'Transport', 'Destiny'],
    level: 1,
    radical: '⻌',
    mnemonic: 'Carrying a military wagon (軍) on the road (⻌).',
    combinations: [{ word: '運転手', reading: 'untenshu', meaning: 'Driver' }]
  }
];
