import { Item } from '../../types';

export const lesson10: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl10-v1', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'あります', readings: ['arimasu'], meanings: ['be', 'exist', 'have'], explanation: 'Exist (inanimate).' },
  { id: 'nl10-v2', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'います', readings: ['imasu'], meanings: ['be', 'exist', 'have'], explanation: 'Exist (animate).' },
  { id: 'nl10-v3', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'いろいろ [な]', readings: ['iroiro [na]'], meanings: ['various'] },
  { id: 'nl10-v4', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'おとこのひと', readings: ['otoko no hito'], meanings: ['man'] },
  { id: 'nl10-v5', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'おんなのひと', readings: ['onna no hito'], meanings: ['woman'] },
  { id: 'nl10-v8', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'いぬ', readings: ['inu'], meanings: ['dog'] },
  { id: 'nl10-v9', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'ねこ', readings: ['neko'], meanings: ['cat'] },
  { id: 'nl10-v14', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'はこ', readings: ['hako'], meanings: ['box'] },
  { id: 'nl10-v16', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'れいぞうこ', readings: ['reizouko'], meanings: ['refrigerator'] },
  { id: 'nl10-v22', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'ビル', readings: ['biru'], meanings: ['building'] },
  { id: 'nl10-v23', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'こうえん', readings: ['kouen'], meanings: ['park'] },
  { id: 'nl10-v24', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'きっさてん', readings: ['kissaten'], meanings: ['coffee shop'] },
  { id: 'nl10-v25', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'ほんや', readings: ['hon\'ya'], meanings: ['bookshop'] },
  { id: 'nl10-v29', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'うえ', readings: ['ue'], meanings: ['above', 'on'] },
  { id: 'nl10-v30', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'した', readings: ['shita'], meanings: ['under', 'below'] },
  { id: 'nl10-v31', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'まえ', readings: ['mae'], meanings: ['front', 'before'] },
  { id: 'nl10-v32', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'うしろ', readings: ['ushiro'], meanings: ['behind', 'back'] },
  { id: 'nl10-v33', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'みぎ', readings: ['migi'], meanings: ['right'] },
  { id: 'nl10-v34', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'ひだり', readings: ['hidari'], meanings: ['left'] },
  { id: 'nl10-v35', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'なか', readings: ['naka'], meanings: ['inside', 'middle'] },
  { id: 'nl10-v37', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'となり', readings: ['tonari'], meanings: ['next to'] },
  { id: 'nl10-v38', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'ちかく', readings: ['chikaku'], meanings: ['nearby'] },
  { id: 'nl10-v39', lessonNumber: 10, type: 'vocabulary', level: 1, character: 'あいだ', readings: ['aida'], meanings: ['between'] },

  // --- GRAMMAR ---
  {
    id: 'nl10-g1',
    lessonNumber: 10,
    type: 'grammar',
    level: 1,
    character: 'Place に N が あります/います',
    readings: ['Place ni N ga arimasu/imasu'],
    meanings: ['There is N in [Place]'],
    explanation: 'Existence of objects or people.',
    sentences: [
      {
        japanese: [
          { text: '部屋', reading: 'へや' }, { text: 'に', reading: null }, { text: '机', reading: 'つくえ' }, { text: 'が', reading: null }, { text: 'あります', reading: null }, { text: '。', reading: null }
        ],
        english: 'There is a desk in the room.'
      },
      {
        japanese: [
          { text: '庭', reading: 'にわ' }, { text: 'に', reading: null }, { text: '犬', reading: 'いぬ' }, { text: 'が', reading: null }, { text: 'います', reading: null }, { text: '。', reading: null }
        ],
        english: 'There is a dog in the garden.'
      }
    ]
  },
];