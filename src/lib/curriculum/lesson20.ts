import { Item } from '../../types';

export const lesson20: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl20-v1', lessonNumber: 20, type: 'vocabulary', level: 5, character: 'いります', readings: ['irimasu'], meanings: ['need', 'require'], explanation: '要る.' },
  { id: 'nl20-v2', lessonNumber: 20, type: 'vocabulary', level: 5, character: '調べます', readings: ['shirabemasu'], meanings: ['check', 'investigate'] },
  { id: 'nl20-v3', lessonNumber: 20, type: 'vocabulary', level: 5, character: '直します', readings: ['naoshimasu'], meanings: ['repair', 'correct'] },
  { id: 'nl20-v5', lessonNumber: 20, type: 'vocabulary', level: 5, character: '電話します', readings: ['denwa shimasu'], meanings: ['call', 'phone'] },
  { id: 'nl20-v6', lessonNumber: 20, type: 'vocabulary', level: 5, character: '僕', readings: ['boku'], meanings: ['I (male)'] },
  { id: 'nl20-v7', lessonNumber: 20, type: 'vocabulary', level: 5, character: '君', readings: ['kimi'], meanings: ['you (casual)'] },
  { id: 'nl20-v9', lessonNumber: 20, type: 'vocabulary', level: 5, character: 'うん', readings: ['un'], meanings: ['yes (casual)'] },
  { id: 'nl20-v10', lessonNumber: 20, type: 'vocabulary', level: 5, character: 'ううん', readings: ['uun'], meanings: ['no (casual)'] },
  { id: 'nl20-v11', lessonNumber: 20, type: 'vocabulary', level: 5, character: '言葉', readings: ['kotoba'], meanings: ['word', 'language'] },
  { id: 'nl20-v15', lessonNumber: 20, type: 'vocabulary', level: 5, character: 'こっち', readings: ['kocchi'], meanings: ['this way (casual)'] },
  { id: 'nl20-v20', lessonNumber: 20, type: 'vocabulary', level: 5, character: 'けど', readings: ['kedo'], meanings: ['but (casual)'] },

  // --- GRAMMAR ---
  {
    id: 'nl20-g1',
    lessonNumber: 20,
    type: 'grammar',
    level: 5,
    character: 'Plain Style Speech',
    readings: ['Futsuu-tai'],
    meanings: ['Casual speech style'],
    explanation: 'Used with friends and family.',
    sentences: [
      {
        japanese: [
          { text: '明日', reading: 'あした' }, { text: 'どこか', reading: null }, { text: '行く', reading: 'いく' }, { text: '？', reading: null },
          { text: 'うん、行く。', reading: null }
        ],
        english: 'Are you going somewhere tomorrow? Yeah, I am.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl20-d1',
    lessonNumber: 20,
    type: 'dokkai',
    level: 5,
    character: '週末どこか行った？',
    meanings: ['Did you go anywhere this weekend?'],
    content: [
      { text: 'Riya: ', reading: null }, { text: 'Dheeraj、週末どこか行った？', reading: 'shuumatsu dokoka itta?' },
      { text: '\n', reading: null },
      { text: 'Dheeraj: ', reading: null }, { text: 'うん、京都へ行った。家族と。', reading: 'un, kyouto e itta. kazoku to.' },
      { text: '\n', reading: null },
      { text: 'Riya: ', reading: null }, { text: 'そう。きれいだった？', reading: 'sou. kirei datta?' },
      { text: '\n', reading: null },
      { text: 'Dheeraj: ', reading: null }, { text: 'うん、とてもきれいだったよ。', reading: 'un, totemo kirei datta yo.' }
    ],
    translation: 'Riya: Dheeraj, did you go anywhere this weekend? Dheeraj: Yeah, I went to Kyoto with my family. Riya: I see. Was it beautiful? Dheeraj: Yeah, it was very beautiful.',
    questions: [
      {
        question: 'Dheerajさんは 週末に 何を しましたか。',
        options: ['京都へ 行った', '家で 休んだ', '仕事をした', '映画を見た'],
        answerIndex: 0
      }
    ]
  }
];
