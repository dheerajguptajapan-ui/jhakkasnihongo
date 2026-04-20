import { Item } from '../../types';

export const lesson11: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl11-v1', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'います', readings: ['imasu'], meanings: ['have [a child]', 'stay', 'be'], explanation: 'Exist (animate).' },
  { id: 'nl11-v3', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'かかります', readings: ['kakarimasu'], meanings: ['take (time)', 'cost (money)'] },
  { id: 'nl11-v5', lessonNumber: 11, type: 'vocabulary', level: 1, character: '１つ', readings: ['hitotsu'], meanings: ['one (thing)'] },
  { id: 'nl11-v6', lessonNumber: 11, type: 'vocabulary', level: 1, character: '２つ', readings: ['futatsu'], meanings: ['two (things)'] },
  { id: 'nl11-v7', lessonNumber: 11, type: 'vocabulary', level: 1, character: '３つ', readings: ['mittsu'], meanings: ['three (things)'] },
  { id: 'nl11-v15', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'いくつ', readings: ['ikutsu'], meanings: ['how many'] },
  { id: 'nl11-v16', lessonNumber: 11, type: 'vocabulary', level: 1, character: '１人', readings: ['hitori'], meanings: ['one person'] },
  { id: 'nl11-v17', lessonNumber: 11, type: 'vocabulary', level: 1, character: '２人', readings: ['futari'], meanings: ['two people'] },
  { id: 'nl11-v18', lessonNumber: 11, type: 'vocabulary', level: 1, character: '～人', readings: ['-nin'], meanings: ['～ people'] },
  { id: 'nl11-v19', lessonNumber: 11, type: 'vocabulary', level: 1, character: '～台', readings: ['-dai'], meanings: ['～ machines, vehicles'] },
  { id: 'nl11-v20', lessonNumber: 11, type: 'vocabulary', level: 1, character: '～枚', readings: ['-mai'], meanings: ['～ thin, flat objects'] },
  { id: 'nl11-v22', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'りんご', readings: ['ringo'], meanings: ['apple'] },
  { id: 'nl11-v27', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'きって', readings: ['kitte'], meanings: ['postage stamp'] },
  { id: 'nl11-v30', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'りょうしん', readings: ['ryoushin'], meanings: ['parents'] },
  { id: 'nl11-v40', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'がいこく', readings: ['gaikoku'], meanings: ['foreign country'] },
  { id: 'nl11-v41', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'どのくらい', readings: ['dono kurai'], meanings: ['how long'] },
  { id: 'nl11-v42', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'ぜんぶで', readings: ['zenbu de'], meanings: ['in total'] },
  { id: 'nl11-v44', lessonNumber: 11, type: 'vocabulary', level: 1, character: 'だけ', readings: ['dake'], meanings: ['only'] },

  // --- GRAMMAR ---
  {
    id: 'nl11-g1',
    lessonNumber: 11,
    type: 'grammar',
    level: 1,
    character: 'Counting Objects (～つ)',
    readings: ['hitotsu, futatsu...'],
    meanings: ['Generic Counter'],
    explanation: 'Used for general objects.',
    sentences: [
      {
        japanese: [
          { text: 'りんごを', reading: null }, { text: '４つ', reading: 'よっつ' }, { text: '買いました', reading: 'かいました' }, { text: '。', reading: null }
        ],
        english: 'I bought four apples.'
      }
    ]
  },
  {
    id: 'nl11-g4',
    lessonNumber: 11,
    type: 'grammar',
    level: 1,
    character: 'どのくらい V ますか',
    readings: ['dono kurai V masu ka'],
    meanings: ['How long do you V?'],
    explanation: 'Asking for duration.',
    sentences: [
      {
        japanese: [
          { text: 'どのくらい', reading: null }, { text: '日本語', reading: 'にほんご' }, { text: 'を', reading: null }, { text: '勉強しましたか', reading: 'べんきょうしましたか' }, { text: '。', reading: null }
        ],
        english: 'How long have you studied Japanese?'
      }
    ]
  },
];