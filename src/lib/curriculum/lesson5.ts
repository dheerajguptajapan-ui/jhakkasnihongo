import { Item } from '../../types';

export const lesson5: Item[] = [
  // Vocabulary
  {
    id: 'mn5-v1',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'いきます',
    readings: ['ikimasu'],
    meanings: ['go'],
    explanation: '行く.'
  },
  {
    id: 'mn5-v2',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'きます',
    readings: ['kimasu'],
    meanings: ['come'],
    explanation: '来る.'
  },
  {
    id: 'mn5-v3',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'かえります',
    readings: ['kaerimasu'],
    meanings: ['go/come back', 'return'],
    explanation: '帰る.'
  },
  {
    id: 'mn5-v4',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'がっこう',
    readings: ['gakkou'],
    meanings: ['school'],
    explanation: '学校.'
  },
  {
    id: 'mn5-v5',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'えき',
    readings: ['eki'],
    meanings: ['station'],
    explanation: '駅.'
  },
  {
    id: 'mn5-v6',
    lessonNumber: 5,
    type: 'vocabulary',
    character: 'びょういん',
    readings: ['byouin'],
    meanings: ['hospital'],
    explanation: '病院.'
  },

  // Grammar
  {
    id: 'mn5-g1',
    lessonNumber: 5,
    type: 'grammar',
    character: 'Place へ 行きます/来ます/帰ります',
    readings: ['Place e ikimasu/kimasu/kaerimasu'],
    meanings: ['Go to / Come to / Return to [Place]'],
    explanation: 'The particle へ (pronounced "e") indicates direction.',
    sentences: [{ japanese: '京都へ 行きます。', english: 'I go to Kyoto.', furigana: '京都[きょうと]へ行[い]きます。' }]
  },

  // Kanji (Unit 5)
  {
    id: 'mn5-k1',
    lessonNumber: 5,
    type: 'kanji',
    character: '行',
    readings: ['こう', 'ぎょう', 'い', 'ゆ'],
    meanings: ['Go', 'Conduct', 'Line'],
    level: 1,
    radical: '彳',
    mnemonic: 'A crossroads where people go in different directions.',
    combinations: [{ word: '行く', reading: 'iku', meaning: 'To go' }]
  },
  {
    id: 'mn5-k2',
    lessonNumber: 5,
    type: 'kanji',
    character: '来',
    readings: ['らい', 'く', 'き', 'こ'],
    meanings: ['Come', 'Next'],
    level: 1,
    radical: '木',
    mnemonic: 'A tree with ripening fruit, representing something coming into season.',
    combinations: [{ word: '来年', reading: 'rainen', meaning: 'Next year' }]
  },
  {
    id: 'mn5-k3',
    lessonNumber: 5,
    type: 'kanji',
    character: '去',
    readings: ['きょ', 'こ', 'さ'],
    meanings: ['Gone', 'Past', 'Leave'],
    level: 1,
    radical: '厶',
    mnemonic: 'Something that has moved away.',
    combinations: [{ word: '去年', reading: 'kyonen', meaning: 'Last year' }]
  },
  {
    id: 'mn5-k4',
    lessonNumber: 5,
    type: 'kanji',
    character: '週',
    readings: ['しゅう'],
    meanings: ['Week'],
    level: 1,
    radical: '⻌',
    mnemonic: 'The road (⻌) traveled in the cycle of seven days.',
    combinations: [{ word: '今週', reading: 'konshuu', meaning: 'This week' }]
  },
  {
    id: 'mn5-k5',
    lessonNumber: 5,
    type: 'kanji',
    character: '校',
    readings: ['こう'],
    meanings: ['School'],
    level: 1,
    radical: '木',
    mnemonic: 'A building (made of wood) for education.',
    combinations: [{ word: '学校', reading: 'gakkou', meaning: 'School' }]
  },
  {
    id: 'mn5-k6',
    lessonNumber: 5,
    type: 'kanji',
    character: '年',
    readings: ['ねん', 'とし'],
    meanings: ['Year'],
    level: 1,
    radical: '干',
    mnemonic: 'The annual harvest or a person carrying rice.',
    combinations: [{ word: '今年', reading: 'kotoshi', meaning: 'This year' }]
  },
  {
    id: 'mn5-k7',
    lessonNumber: 5,
    type: 'kanji',
    character: '駅',
    readings: ['えき'],
    meanings: ['Station'],
    level: 1,
    radical: '馬',
    mnemonic: 'A horse (馬) at a relay station.',
    combinations: [{ word: '新宿駅', reading: 'shinjukueki', meaning: 'Shinjuku Station' }]
  },
  {
    id: 'mn5-k8',
    lessonNumber: 5,
    type: 'kanji',
    character: '電',
    readings: ['でん'],
    meanings: ['Electricity'],
    level: 1,
    radical: '雨',
    mnemonic: 'Rain (lightning) stored in a box.',
    combinations: [{ word: '電車', reading: 'densha', meaning: 'Train' }]
  },
  {
    id: 'mn5-k9',
    lessonNumber: 5,
    type: 'kanji',
    character: '車',
    readings: ['しゃ', 'くるま'],
    meanings: ['Car', 'Vehicle', 'Wheel'],
    level: 1,
    radical: '車',
    mnemonic: 'The view of a chariot or cart from above.',
    combinations: [{ word: '自転車', reading: 'jitensha', meaning: 'Bicycle' }]
  },
  {
    id: 'mn5-k10',
    lessonNumber: 5,
    type: 'kanji',
    character: '自',
    readings: ['じ', 'し', 'みずか'],
    meanings: ['Self', 'Oneself'],
    level: 1,
    radical: '自',
    mnemonic: 'A nose representing oneself (pointing at one\'s nose).',
    combinations: [{ word: '自分', reading: 'jibun', meaning: 'Myself' }]
  },
  {
    id: 'mn5-k11',
    lessonNumber: 5,
    type: 'kanji',
    character: '転',
    readings: ['てん', 'ころ'],
    meanings: ['Turn', 'Rotate', 'Roll'],
    level: 1,
    radical: '車',
    mnemonic: 'A wheel turning.',
    combinations: [{ word: '回転', reading: 'kaiten', meaning: 'Rotation' }]
  },
  {
    id: 'mn5-k12',
    lessonNumber: 5,
    type: 'kanji',
    character: '動',
    readings: ['どう', 'うご'],
    meanings: ['Move', 'Motion'],
    level: 1,
    radical: '力',
    mnemonic: 'Using power (力) to move something heavy (重).',
    combinations: [{ word: '動物', reading: 'doubutsu', meaning: 'Animal' }]
  }
];
