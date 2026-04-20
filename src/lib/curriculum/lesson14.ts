import { Item } from '../../types';

export const lesson14: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl14-v1', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'つけます', readings: ['tsukemasu'], meanings: ['turn on'], explanation: '点ける.' },
  { id: 'nl14-v2', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'けします', readings: ['keshimasu'], meanings: ['turn off'], explanation: '消す.' },
  { id: 'nl14-v3', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'あけます', readings: ['akemasu'], meanings: ['open'], explanation: '開ける.' },
  { id: 'nl14-v4', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'しめます', readings: ['shimemasu'], meanings: ['close'], explanation: '閉める.' },
  { id: 'nl14-v5', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'いそぎます', readings: ['isogimasu'], meanings: ['hurry'], explanation: '急ぐ.' },
  { id: 'nl14-v6', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'まちます', readings: ['machimasu'], meanings: ['wait'], explanation: '待つ.' },
  { id: 'nl14-v11', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'てつだいます', readings: ['tetsudaimasu'], meanings: ['help'] },
  { id: 'nl14-v12', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'よびます', readings: ['yobimasu'], meanings: ['call'] },
  { id: 'nl14-v13', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'はなします', readings: ['hanashimasu'], meanings: ['speak', 'talk'] },
  { id: 'nl14-v17', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'ふります', readings: ['furimasu'], meanings: ['rain [fall]'] },
  { id: 'nl14-v21', lessonNumber: 14, type: 'vocabulary', level: 1, character: '名前', readings: ['namae'], meanings: ['name'] },
  { id: 'nl14-v22', lessonNumber: 14, type: 'vocabulary', level: 1, character: '住所', readings: ['juusho'], meanings: ['address'] },
  { id: 'nl14-v23', lessonNumber: 14, type: 'vocabulary', level: 1, character: '地図', readings: ['chizu'], meanings: ['map'] },
  { id: 'nl14-v28', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'ゆっくり', readings: ['yukkuri'], meanings: ['slowly'] },
  { id: 'nl14-v29', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'すぐ', readings: ['sugu'], meanings: ['immediately'] },
  { id: 'nl14-v31', lessonNumber: 14, type: 'vocabulary', level: 1, character: 'あとで', readings: ['ato de'], meanings: ['later'] },

  // --- GRAMMAR ---
  {
    id: 'nl14-g1',
    lessonNumber: 14,
    type: 'grammar',
    level: 1,
    character: 'V-て ください',
    readings: ['V-te kudasai'],
    meanings: ['Please [Verb]'],
    explanation: 'Used for requests.',
    sentences: [
      {
        japanese: [
          { text: 'ちょっと', reading: null }, { text: '待って', reading: 'まって' }, { text: 'ください', reading: null }, { text: '。', reading: null }
        ],
        english: 'Please wait a moment.'
      }
    ]
  },
  {
    id: 'nl14-g2',
    lessonNumber: 14,
    type: 'grammar',
    level: 1,
    character: 'V-て います',
    readings: ['V-te imasu'],
    meanings: ['Be [Verb]-ing'],
    explanation: 'Continuous action or state.',
    sentences: [
      {
        japanese: [
          { text: '今', reading: 'いま' }, { text: 'コードを', reading: null }, { text: '書いて', reading: 'かいて' }, { text: 'います', reading: null }, { text: '。', reading: null }
        ],
        english: 'I am writing code now.'
      }
    ]
  },
];