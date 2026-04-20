import { Item } from '../../types';

export const lesson21: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl21-v1', lessonNumber: 21, type: 'vocabulary', level: 5, character: '思います', readings: ['omoimasu'], meanings: ['think'], explanation: '思う.' },
  { id: 'nl21-v2', lessonNumber: 21, type: 'vocabulary', level: 5, character: '言います', readings: ['iimasu'], meanings: ['say'], explanation: '言う.' },
  { id: 'nl21-v3', lessonNumber: 21, type: 'vocabulary', level: 5, character: '足ります', readings: ['tarimasu'], meanings: ['be enough'] },
  { id: 'nl21-v4', lessonNumber: 21, type: 'vocabulary', level: 5, character: '勝ちます', readings: ['kachimasu'], meanings: ['win'] },
  { id: 'nl21-v5', lessonNumber: 21, type: 'vocabulary', level: 5, character: '負けます', readings: ['makemasu'], meanings: ['lose (match)'] },
  { id: 'nl21-v7', lessonNumber: 21, type: 'vocabulary', level: 5, character: '役に立ちます', readings: ['yaku ni tachimasu'], meanings: ['be useful'] },
  { id: 'nl21-v10', lessonNumber: 21, type: 'vocabulary', level: 5, character: '同じ', readings: ['onaji'], meanings: ['same'] },
  { id: 'nl21-v11', lessonNumber: 21, type: 'vocabulary', level: 5, character: 'すごい', readings: ['sugoi'], meanings: ['amazing', 'great'] },
  { id: 'nl21-v15', lessonNumber: 21, type: 'vocabulary', level: 5, character: 'ニュース', readings: ['nyu-su'], meanings: ['news'] },
  { id: 'nl21-v17', lessonNumber: 21, type: 'vocabulary', level: 5, character: '試合', readings: ['shiai'], meanings: ['match', 'game'] },
  { id: 'nl21-v19', lessonNumber: 21, type: 'vocabulary', level: 5, character: '意見', readings: ['iken'], meanings: ['opinion'] },
  { id: 'nl21-v25', lessonNumber: 21, type: 'vocabulary', level: 5, character: '最近', readings: ['saikin'], meanings: ['recently'] },
  { id: 'nl21-v26', lessonNumber: 21, type: 'vocabulary', level: 5, character: 'たぶん', readings: ['tabun'], meanings: ['probably'] },

  // --- GRAMMAR ---
  {
    id: 'nl21-g1',
    lessonNumber: 21,
    type: 'grammar',
    level: 5,
    character: 'Sentence と 思います',
    readings: ['Sentence to omoimasu'],
    meanings: ['I think that...'],
    explanation: 'Used to express opinions or conjectures.',
    sentences: [
      {
        japanese: [
          { text: '日本', reading: 'にほん' }, { text: 'は', reading: null }, { text: '便利', reading: 'べんり' }, { text: 'だ', reading: null }, { text: 'と', reading: null }, { text: '思います', reading: 'おもいます' }, { text: '。', reading: null }
        ],
        english: 'I think Japan is convenient.'
      }
    ]
  },
  {
    id: 'nl21-g2',
    lessonNumber: 21,
    type: 'grammar',
    level: 5,
    character: 'Sentence と 言いました',
    readings: ['Sentence to iimashita'],
    meanings: ['Someone said that...'],
    explanation: 'Reported speech.',
    sentences: [
      {
        japanese: [
          { text: 'Aalindさんは', reading: 'Aalind-san wa' }, { text: '「明日', reading: 'あした' }, { text: '休みます', reading: 'やすみます' }, { text: '」と', reading: null }, { text: '言いました', reading: 'いいました' }, { text: '。', reading: null }
        ],
        english: 'Aalind said, "I will be absent tomorrow."'
      }
    ]
  },
];