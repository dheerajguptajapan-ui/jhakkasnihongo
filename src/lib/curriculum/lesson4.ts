import { Item } from '../../types';

export const lesson4: Item[] = [
  // Vocabulary
  {
    id: 'mn4-v1',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'おきます',
    readings: ['okimasu'],
    meanings: ['wake up', 'get up'],
    explanation: '起きる.'
  },
  {
    id: 'mn4-v2',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'ねます',
    readings: ['nemasu'],
    meanings: ['sleep', 'go to bed'],
    explanation: '寝る.'
  },
  {
    id: 'mn4-v3',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'はたらきます',
    readings: ['hatarakimasu'],
    meanings: ['work'],
    explanation: '働く.'
  },
  {
    id: 'mn4-v4',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'やすみます',
    readings: ['yasumimasu'],
    meanings: ['rest', 'take a holiday', 'be absent'],
    explanation: '休み.'
  },
  {
    id: 'mn4-v5',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'べんきょうします',
    readings: ['benkyou shimasu'],
    meanings: ['study'],
    explanation: '勉強.'
  },
  {
    id: 'mn4-v6',
    lessonNumber: 4,
    type: 'vocabulary',
    character: 'おわります',
    readings: ['owarimasu'],
    meanings: ['finish', 'end'],
    explanation: '終わる.'
  },

  // Grammar
  {
    id: 'mn4-g1',
    lessonNumber: 4,
    type: 'grammar',
    character: '今 〜時 〜分 です',
    readings: ['ima ~ji ~fun desu'],
    meanings: ['It is ~o\'clock ~minutes now'],
    explanation: 'Grammar point for telling time.',
    sentences: [{ japanese: '今 ９時１５分です。', english: 'It is 9:15 now.', furigana: '今[いま]９時[じ]１５分[ふん]です。' }]
  },

  // Kanji (Unit 4)
  {
    id: 'mn4-k1',
    lessonNumber: 4,
    type: 'kanji',
    character: '今',
    readings: ['こん', 'いま'],
    meanings: ['Now'],
    level: 1,
    radical: '人',
    mnemonic: 'A clock face or a person pointing to the present moment.',
    combinations: [{ word: '今日', reading: 'きょう', meaning: 'Today' }]
  },
  {
    id: 'mn4-k2',
    lessonNumber: 4,
    type: 'kanji',
    character: '朝',
    readings: ['ちょう', 'あさ'],
    meanings: ['Morning'],
    level: 1,
    radical: '月',
    mnemonic: 'The sun rising through the trees in the morning.',
    combinations: [{ word: '朝食', reading: 'ちょうしょく', meaning: 'Breakfast' }]
  },
  {
    id: 'mn4-k3',
    lessonNumber: 4,
    type: 'kanji',
    character: '昼',
    readings: ['ちゅう', 'ひる'],
    meanings: ['Noon', 'Daytime'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun is high up in the middle of the sky.',
    combinations: [{ word: '昼ご飯', reading: 'ひるごはん', meaning: 'Lunch' }]
  },
  {
    id: 'mn4-k4',
    lessonNumber: 4,
    type: 'kanji',
    character: '晩',
    readings: ['ばん'],
    meanings: ['Night', 'Evening'],
    level: 1,
    radical: '日',
    mnemonic: 'The sun going down as evening begins.',
    combinations: [{ word: '今晩', reading: 'こんばん', meaning: 'Tonight' }]
  },
  {
    id: 'mn4-k5',
    lessonNumber: 4,
    type: 'kanji',
    character: '時',
    readings: ['じ', 'とき'],
    meanings: ['Time', 'Hour'],
    level: 1,
    radical: '日',
    mnemonic: 'Sun (day) and temple (measuring time).',
    combinations: [{ word: '時間', reading: 'jikan', meaning: 'Time' }]
  },
  {
    id: 'mn4-k6',
    lessonNumber: 4,
    type: 'kanji',
    character: '分',
    readings: ['ぶん', 'ふん', 'わか'],
    meanings: ['Minute', 'Part', 'To understand'],
    level: 1,
    radical: '刀',
    mnemonic: 'A knife cutting something into parts.',
    combinations: [{ word: '半分', reading: 'hanbun', meaning: 'Half' }]
  },
  {
    id: 'mn4-k7',
    lessonNumber: 4,
    type: 'kanji',
    character: '半',
    readings: ['はん', 'なか'],
    meanings: ['Half'],
    level: 1,
    radical: '十',
    mnemonic: 'Something split right down the middle.',
    combinations: [{ word: '三時半', reading: 'sanjihan', meaning: '3:30' }]
  },
  {
    id: 'mn4-k8',
    lessonNumber: 4,
    type: 'kanji',
    character: '午',
    readings: ['ご'],
    meanings: ['Noon'],
    level: 1,
    radical: '十',
    mnemonic: 'Used for AM/PM marking.',
    combinations: [{ word: '午前', reading: 'gozen', meaning: 'AM' }]
  },
  {
    id: 'mn4-k9',
    lessonNumber: 4,
    type: 'kanji',
    character: '前',
    readings: ['ぜん', 'まえ'],
    meanings: ['In front', 'Before', 'Previous'],
    level: 1,
    radical: '刀',
    mnemonic: 'A person standing before a knife or a clock.',
    combinations: [{ word: '名前', reading: 'namae', meaning: 'Name' }]
  },
  {
    id: 'mn4-k10',
    lessonNumber: 4,
    type: 'kanji',
    character: '後',
    readings: ['ご', 'あと', 'のち', 'うし'],
    meanings: ['Behind', 'After', 'Later'],
    level: 1,
    radical: '彳',
    mnemonic: 'A person walking behind others on a path.',
    combinations: [{ word: '午後', reading: 'gogo', meaning: 'PM' }]
  },
  {
    id: 'mn4-k11',
    lessonNumber: 4,
    type: 'kanji',
    character: '休',
    readings: ['きゅう', 'やす'],
    meanings: ['Rest', 'Day off', 'Vacation'],
    level: 1,
    radical: '人',
    mnemonic: 'A person leaning against a tree to rest.',
    combinations: [{ word: '休み', reading: 'yasumi', meaning: 'Rest' }]
  },
  {
    id: 'mn4-k12',
    lessonNumber: 4,
    type: 'kanji',
    character: '毎',
    readings: ['まい'],
    meanings: ['Every'],
    level: 1,
    radical: '毋',
    mnemonic: 'Women doing chores every day.',
    combinations: [{ word: '毎日', reading: 'mainichi', meaning: 'Every day' }]
  },
  {
    id: 'mn4-k13',
    lessonNumber: 4,
    type: 'kanji',
    character: '何',
    readings: ['か', 'なに', 'なん'],
    meanings: ['What'],
    level: 1,
    radical: '人',
    mnemonic: 'A person carrying something, wondering what it is.',
    combinations: [{ word: '何か', reading: 'nanika', meaning: 'Something' }]
  }
];
