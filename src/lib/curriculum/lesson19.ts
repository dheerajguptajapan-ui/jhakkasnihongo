import { Item } from '../../types';

export const lesson19: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl19-v1', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'のぼります', readings: ['noborimasu'], meanings: ['climb', 'ascend'], explanation: '登る.' },
  { id: 'nl19-v2', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'とまります', readings: ['tomarimasu'], meanings: ['stay [at a hotel]'], explanation: '泊まる.' },
  { id: 'nl19-v3', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'そうじします', readings: ['souji shimasu'], meanings: ['clean (a room)'] },
  { id: 'nl19-v4', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'せんたくします', readings: ['sentaku shimasu'], meanings: ['wash (clothes)'] },
  { id: 'nl19-v5', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'なります', readings: ['narimasu'], meanings: ['become'] },
  { id: 'nl19-v6', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'ねむい', readings: ['nemui'], meanings: ['sleepy'] },
  { id: 'nl19-v9', lessonNumber: 19, type: 'vocabulary', level: 1, character: '練習', readings: ['renshuu'], meanings: ['practice'] },
  { id: 'nl19-v12', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'お茶', readings: ['ocha'], meanings: ['tea ceremony'] },
  { id: 'nl19-v13', lessonNumber: 19, type: 'vocabulary', level: 1, character: '日', readings: ['hi'], meanings: ['day', 'date'] },
  { id: 'nl19-v15', lessonNumber: 19, type: 'vocabulary', level: 1, character: '一度', readings: ['ichido'], meanings: ['once'] },
  { id: 'nl19-v17', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'だんだん', readings: ['dandan'], meanings: ['gradually'] },
  { id: 'nl19-v18', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'もうすぐ', readings: ['mou sugu'], meanings: ['soon'] },
  { id: 'nl19-v21', lessonNumber: 19, type: 'vocabulary', level: 1, character: 'ダイエット', readings: ['daietto'], meanings: ['diet'] },

  // --- GRAMMAR ---
  {
    id: 'nl19-g1',
    lessonNumber: 19,
    type: 'grammar',
    level: 1,
    character: 'V-た ことが あります',
    readings: ['V-ta koto ga arimasu'],
    meanings: ['Have done [Verb]'],
    explanation: 'Expressing past experience.',
    sentences: [
      {
        japanese: [
          { text: '日本', reading: 'にほん' }, { text: 'へ', reading: null }, { text: '行った', reading: 'いった' }, { text: 'こと', reading: null }, { text: 'が', reading: null }, { text: 'あります', reading: null }, { text: '。', reading: null }
        ],
        english: 'I have been to Japan.'
      }
    ]
  },
  {
    id: 'nl19-g2',
    lessonNumber: 19,
    type: 'grammar',
    level: 1,
    character: 'V1-た り、V2-た り します',
    readings: ['V1-ta ri, V2-ta ri shimasu'],
    meanings: ['Do things like V1 and V2'],
    explanation: 'Listing representative actions.',
    sentences: [
      {
        japanese: [
          { text: '日曜日', reading: 'にちようび' }, { text: 'は', reading: null }, { text: '掃除したり', reading: 'そうじしたり' }, { text: '、', reading: null }, { text: '洗濯したり', reading: 'せんたくしたり' }, { text: 'します', reading: null }, { text: '。', reading: null }
        ],
        english: 'On Sundays, I do things like cleaning and laundry.'
      }
    ]
  },
];