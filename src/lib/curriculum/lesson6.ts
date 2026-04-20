import { Item } from '../../types';

export const lesson6: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl6-v1', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'たべます', readings: ['tabemasu'], meanings: ['eat'], explanation: '食べる.' },
  { id: 'nl6-v2', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'のみます', readings: ['nomimasu'], meanings: ['drink'], explanation: '飲む.' },
  { id: 'nl6-v3', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'すいます', readings: ['suimasu'], meanings: ['smoke [a cigarette]'] },
  { id: 'nl6-v4', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'みます', readings: ['mimasu'], meanings: ['see', 'look at', 'watch'], explanation: '見る.' },
  { id: 'nl6-v5', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'ききます', readings: ['kikimasu'], meanings: ['hear', 'listen'], explanation: '聞く.' },
  { id: 'nl6-v6', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'よみます', readings: ['yomimasu'], meanings: ['read'], explanation: '読む.' },
  { id: 'nl6-v7', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'かきます', readings: ['kakimasu'], meanings: ['write', 'draw', 'paint'], explanation: '書く.' },
  { id: 'nl6-v8', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'かいます', readings: ['kaimasu'], meanings: ['buy'], explanation: '買う.' },
  { id: 'nl6-v9', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'とります', readings: ['torimasu'], meanings: ['take [a photograph]'] },
  { id: 'nl6-v10', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'します', readings: ['shimasu'], meanings: ['do'] },
  { id: 'nl6-v11', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'あいます', readings: ['aimasu'], meanings: ['meet [a friend]'] },
  { id: 'nl6-v12', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'ごはん', readings: ['gohan'], meanings: ['a meal', 'rice'] },
  { id: 'nl6-v13', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'あさごはん', readings: ['asagohan'], meanings: ['breakfast'] },
  { id: 'nl6-v14', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'ひるごはん', readings: ['hirugohan'], meanings: ['lunch'] },
  { id: 'nl6-v15', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'ばんごはん', readings: ['bangohan'], meanings: ['dinner'] },
  { id: 'nl6-v16', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'パン', readings: ['pan'], meanings: ['bread'] },
  { id: 'nl6-v17', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'たまご', readings: ['tamago'], meanings: ['egg'] },
  { id: 'nl6-v18', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'にく', readings: ['niku'], meanings: ['meat'] },
  { id: 'nl6-v19', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'さかな', readings: ['sakana'], meanings: ['fish'] },
  { id: 'nl6-v20', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'やさい', readings: ['yasai'], meanings: ['vegetable'] },
  { id: 'nl6-v22', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'みず', readings: ['mizu'], meanings: ['water'] },
  { id: 'nl6-v23', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'おちゃ', readings: ['ocha'], meanings: ['tea', 'green tea'] },
  { id: 'nl6-v27', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'ビデオ', readings: ['bideo'], meanings: ['video'] },
  { id: 'nl6-v28', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'えいが', readings: ['eiga'], meanings: ['movie'] },
  { id: 'nl6-v31', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'しゃしん', readings: ['shashin'], meanings: ['photograph'] },
  { id: 'nl6-v32', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'みせ', readings: ['mise'], meanings: ['store', 'shop'] },
  { id: 'nl6-v33', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'レストラン', readings: ['resutoran'], meanings: ['restaurant'] },
  { id: 'nl6-v34', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'しゅくだい', readings: ['shukudai'], meanings: ['homework'] },
  { id: 'nl6-v38', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'いっしょに', readings: ['isshoni'], meanings: ['together'] },
  { id: 'nl6-v40', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'いつも', readings: ['itsumo'], meanings: ['always', 'usually'] },
  { id: 'nl6-v41', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'ときどき', readings: ['tokidoki'], meanings: ['sometimes'] },
  { id: 'nl6-v42', lessonNumber: 6, type: 'vocabulary', level: 5, character: 'それから', readings: ['sorekara'], meanings: ['after that', 'and then'] },

  // --- GRAMMAR ---
  {
    id: 'nl6-g1',
    lessonNumber: 6,
    type: 'grammar',
    level: 5,
    character: 'N を V',
    readings: ['N o V'],
    meanings: ['[Verb] [Noun]'],
    explanation: 'Particle を indicates the direct object.',
    sentences: [
      {
        japanese: [
          { text: 'ジュースを', reading: null }, { text: '飲みます', reading: 'のみます' }, { text: '。', reading: null }
        ],
        english: 'I drink juice.'
      },
      {
        japanese: [
          { text: 'Aalindさんは', reading: 'Aalind-san wa' }, { text: 'テニスを', reading: null }, { text: 'します。', reading: null }
        ],
        english: 'Aalind plays tennis.'
      }
    ]
  },
  {
    id: 'nl6-g3',
    lessonNumber: 6,
    type: 'grammar',
    level: 5,
    character: 'Place で V',
    readings: ['Place de V'],
    meanings: ['V at [Place]'],
    explanation: 'Particle で indicates the location of an action.',
    sentences: [
      {
        japanese: [
          { text: '駅', reading: 'えき' }, { text: 'で', reading: null }, { text: '新聞', reading: 'しんぶん' }, { text: 'を', reading: null }, { text: '買います', reading: 'かいます' }, { text: '。', reading: null }
        ],
        english: 'I buy a newspaper at the station.'
      }
    ]
  },
];