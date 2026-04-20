import { Item } from '../../types';

export const lesson22: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl22-v1', lessonNumber: 22, type: 'vocabulary', level: 5, character: '着ます', readings: ['kimasu'], meanings: ['wear (shirt/top)'], explanation: '着る.' },
  { id: 'nl22-v2', lessonNumber: 22, type: 'vocabulary', level: 5, character: '履きます', readings: ['hakimasu'], meanings: ['wear (shoes/bottoms)'], explanation: '履く.' },
  { id: 'nl22-v3', lessonNumber: 22, type: 'vocabulary', level: 5, character: '被ります', readings: ['kaburimasu'], meanings: ['wear (hat)'] },
  { id: 'nl22-v4', lessonNumber: 22, type: 'vocabulary', level: 5, character: '掛けます', readings: ['kakemasu'], meanings: ['put on (glasses)'] },
  { id: 'nl22-v5', lessonNumber: 22, type: 'vocabulary', level: 5, character: '生まれます', readings: ['umaremasu'], meanings: ['be born'] },
  { id: 'nl22-v9', lessonNumber: 22, type: 'vocabulary', level: 5, character: '帽子', readings: ['boushi'], meanings: ['hat', 'cap'] },
  { id: 'nl22-v10', lessonNumber: 22, type: 'vocabulary', level: 5, character: '眼鏡', readings: ['megane'], meanings: ['glasses'] },
  { id: 'nl22-v14', lessonNumber: 1, type: 'vocabulary', level: 5, character: '家賃', readings: ['yachin'], meanings: ['rent'] },
  { id: 'nl22-v19', lessonNumber: 22, type: 'vocabulary', level: 5, character: 'アパート', readings: ['apa-to'], meanings: ['apartment'] },
  { id: 'nl22-v26', lessonNumber: 22, type: 'vocabulary', level: 5, character: '道', readings: ['michi'], meanings: ['road', 'way'] },
  { id: 'nl22-v28', lessonNumber: 22, type: 'vocabulary', level: 5, character: '信号', readings: ['shingou'], meanings: ['traffic light'] },

  // --- GRAMMAR ---
  {
    id: 'nl22-g1',
    lessonNumber: 22,
    type: 'grammar',
    level: 5,
    character: 'Noun Modifying Clause (Relative Clause)',
    readings: ['V-Plain N'],
    meanings: ['[Noun] that [does/is Verb]'],
    explanation: 'Using plain form verbs to modify nouns.',
    sentences: [
      {
        japanese: [
          { text: 'これ', reading: null }, { text: 'は', reading: null }, { text: 'Aalindさんが', reading: null }, { text: '住んで', reading: 'すんで' }, { text: 'いた', reading: null }, { text: '家', reading: 'いえ' }, { text: 'です', reading: null }, { text: '。', reading: null }
        ],
        english: 'This is the house where Aalind used to live.'
      }
    ]
  },
  {
    id: 'nl22-g3',
    lessonNumber: 22,
    type: 'grammar',
    level: 5,
    character: 'V-Plain N wa [Adj/V] desu',
    readings: ['V-Plain N wa ...'],
    meanings: ['The [Noun] that [does V] is...'],
    explanation: 'Using modified noun as subject.',
    sentences: [
      {
        japanese: [
          { text: '昨日', reading: 'きのう' }, { text: '見た', reading: 'みた' }, { text: '映画', reading: 'えいが' }, { text: 'は', reading: null }, { text: 'とても', reading: null }, { text: '面白かったです', reading: 'おもしろかったです' }, { text: '。', reading: null }
        ],
        english: 'The movie I saw yesterday was very interesting.'
      }
    ]
  },
];