import { Item } from '../../types';

export const lesson5: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl5-v1', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'いきます', readings: ['ikimasu'], meanings: ['go'], explanation: '行く.' },
  { id: 'nl5-v2', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'きます', readings: ['kimasu'], meanings: ['come'], explanation: '来る.' },
  { id: 'nl5-v3', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'かえります', readings: ['kaerimasu'], meanings: ['go back', 'return'], explanation: '帰る.' },
  { id: 'nl5-v4', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'がっこう', readings: ['gakkou'], meanings: ['school'], explanation: '学校.' },
  { id: 'nl5-v5', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'スーパー', readings: ['su-pa-'], meanings: ['supermarket'] },
  { id: 'nl5-v6', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'えき', readings: ['eki'], meanings: ['station'], explanation: '駅.' },
  { id: 'nl5-v7', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ひこうき', readings: ['hikouki'], meanings: ['airplane'] },
  { id: 'nl5-v8', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ふね', readings: ['fune'], meanings: ['ship', 'boat'] },
  { id: 'nl5-v9', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'でんしゃ', readings: ['densha'], meanings: ['electric train'] },
  { id: 'nl5-v10', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ちかてつ', readings: ['chikatetsu'], meanings: ['subway'] },
  { id: 'nl5-v11', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'しんかんせん', readings: ['shinkansen'], meanings: ['bullet train'] },
  { id: 'nl5-v14', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'じてんしゃ', readings: ['jitensha'], meanings: ['bicycle'] },
  { id: 'nl5-v15', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'あるいて', readings: ['aruite'], meanings: ['on foot'] },
  { id: 'nl5-v16', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ひと', readings: ['hito'], meanings: ['person'] },
  { id: 'nl5-v17', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ともだち', readings: ['tomodachi'], meanings: ['friend'] },
  { id: 'nl5-v20', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'かぞく', readings: ['kazoku'], meanings: ['family'] },
  { id: 'nl5-v21', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ひとりで', readings: ['hitoride'], meanings: ['alone'] },
  { id: 'nl5-v22', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'せんしゅう', readings: ['senshuu'], meanings: ['last week'] },
  { id: 'nl5-v23', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'こんしゅう', readings: ['konshuu'], meanings: ['this week'] },
  { id: 'nl5-v24', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'らいしゅう', readings: ['raishuu'], meanings: ['next week'] },
  { id: 'nl5-v28', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'きょねん', readings: ['kyonen'], meanings: ['last year'] },
  { id: 'nl5-v29', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'ことし', readings: ['kotoshi'], meanings: ['this year'] },
  { id: 'nl5-v30', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'らいねん', readings: ['rainen'], meanings: ['next year'] },
  { id: 'nl5-v47', lessonNumber: 5, type: 'vocabulary', level: 5, character: 'たんじょうび', readings: ['tanjoubi'], meanings: ['birthday'] },

  // --- GRAMMAR ---
  {
    id: 'nl5-g1',
    lessonNumber: 5,
    type: 'grammar',
    level: 5,
    character: 'Place へ いきます / きます / かえります',
    readings: ['Place e ikimasu / kimasu / kaerimasu'],
    meanings: ['Go / Come / Return to [Place]'],
    explanation: 'The particle へ indicates direction.',
    sentences: [
      {
        japanese: [
          { text: 'Aalindさんは', reading: 'Aalind-san wa' }, { text: '京都', reading: 'きょうと' }, { text: 'へ', reading: null }, { text: '行きます。', reading: 'いきます' }
        ],
        english: 'Aalind goes to Kyoto.'
      }
    ]
  },
  {
    id: 'nl5-g3',
    lessonNumber: 5,
    type: 'grammar',
    level: 5,
    character: 'Vehicle で いきます',
    readings: ['Vehicle de ikimasu'],
    meanings: ['Go by [Vehicle]'],
    explanation: 'Particle で indicates means of transport.',
    sentences: [
      {
        japanese: [
          { text: 'Dheerajさんは', reading: 'Dheeraj-san wa' }, { text: '新幹線', reading: 'しんかんせん' }, { text: 'で', reading: null }, { text: '行きます。', reading: 'いきます' }
        ],
        english: 'Dheeraj goes by bullet train.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl5-d1',
    lessonNumber: 5,
    type: 'dokkai',
    level: 5,
    character: 'リヤの旅行',
    meanings: ['Riya\'s Trip'],
    content: [
      { text: '私は', reading: 'わたしは' }, { text: '明日', reading: 'あした' }, { text: '東京', reading: 'とうきょう' }, { text: 'へ', reading: null }, { text: '行きます。', reading: 'いきます' },
      { text: '\n', reading: null },
      { text: '一人で', reading: 'ひとりで' }, { text: '行きます。', reading: 'いきます' }, { text: '新幹線', reading: 'しんかんせん' }, { text: 'で', reading: null }, { text: '行きます。', reading: 'いきます' },
      { text: '\n', reading: null },
      { text: '日曜日', reading: 'にちようび' }, { text: 'に', reading: null }, { text: 'うち', reading: null }, { text: 'へ', reading: null }, { text: '帰ります。', reading: 'かえります' }
    ],
    translation: 'I will go to Tokyo tomorrow. I will go alone. I will go by bullet train. I will return home on Sunday.',
    questions: [
      {
        question: 'Riyaさんは 何で 東京へ 行きますか。',
        options: ['新幹線', '飛行機', 'バス', '電車'],
        answerIndex: 0
      }
    ]
  }
];
