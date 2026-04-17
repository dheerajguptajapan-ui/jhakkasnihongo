import { Item } from '../../types';

export const lesson23: Item[] = [
  // --- VOCABULARY ---
  { id: 'nl23-v1', lessonNumber: 23, type: 'vocabulary', level: 5, character: '歩きます', readings: ['arukimasu'], meanings: ['walk'] },
  { id: 'nl23-v2', lessonNumber: 23, type: 'vocabulary', level: 5, character: '引きます', readings: ['hikimasu'], meanings: ['pull'] },
  { id: 'nl23-v3', lessonNumber: 23, type: 'vocabulary', level: 5, character: '変えます', readings: ['kaemasu'], meanings: ['change'] },
  { id: 'nl23-v4', lessonNumber: 23, type: 'vocabulary', level: 5, character: '触ります', readings: ['sawarimasu'], meanings: ['touch (machine)'] },
  { id: 'nl23-v7', lessonNumber: 23, type: 'vocabulary', level: 5, character: '渡ります', readings: ['watarimasu'], meanings: ['cross (bridge)'] },
  { id: 'nl23-v8', lessonNumber: 23, type: 'vocabulary', level: 5, character: '気をつけます', readings: ['ki o tsukemasu'], meanings: ['take care', 'be careful'] },
  { id: 'nl23-v14', lessonNumber: 23, type: 'vocabulary', level: 5, character: '機械', readings: ['kikai'], meanings: ['machine'] },
  { id: 'nl23-v15', lessonNumber: 23, type: 'vocabulary', level: 5, character: 'つまみ', readings: ['tsumami'], meanings: ['knob'] },
  { id: 'nl23-v19', lessonNumber: 23, type: 'vocabulary', level: 5, character: '信号', readings: ['shingou'], meanings: ['traffic light'] },
  { id: 'nl23-v20', lessonNumber: 23, type: 'vocabulary', level: 5, character: '角', readings: ['kado'], meanings: ['corner'] },
  { id: 'nl23-v21', lessonNumber: 23, type: 'vocabulary', level: 5, character: '橋', readings: ['hashi'], meanings: ['bridge'] },

  // --- GRAMMAR ---
  {
    id: 'nl23-g1',
    lessonNumber: 23,
    type: 'grammar',
    level: 5,
    character: 'V-辞書形 とき、Sentence',
    readings: ['V-jishokei toki, Sentence'],
    meanings: ['When [Verb], [Sentence]'],
    explanation: 'Used for setting time/occasion.',
    sentences: [
      {
        japanese: [
          { text: '分からない', reading: 'わからない' }, { text: 'とき、', reading: null }, { text: '辞書', reading: 'じしょ' }, { text: 'を', reading: null }, { text: '引きます', reading: 'ひきます' }, { text: '。', reading: null }
        ],
        english: 'When I do not understand, I look it up in a dictionary.'
      }
    ]
  },
  {
    id: 'nl23-g2',
    lessonNumber: 23,
    type: 'grammar',
    level: 5,
    character: 'V-辞書形 と、[Result]',
    readings: ['V-jishokei to...'],
    meanings: ['If/When [Verb], then [Result]'],
    explanation: 'Natural result or machine operation.',
    sentences: [
      {
        japanese: [
          { text: 'この', reading: null }, { text: 'ボタンを', reading: null }, { text: '押すと', reading: 'おすと' }, { text: '、', reading: null }, { text: '切符', reading: 'きっぷ' }, { text: 'が', reading: null }, { text: '出ます', reading: 'でます' }, { text: '。', reading: null }
        ],
        english: 'If you press this button, a ticket will come out.'
      }
    ]
  },

  // --- DOKKAI ---
  {
    id: 'nl23-d1',
    lessonNumber: 23,
    type: 'dokkai',
    level: 5,
    character: '道を 教えてください',
    meanings: ['Please Tell Me the Way'],
    content: [
      { text: 'Aalind: ', reading: null }, { text: 'すみません。市役所', reading: 'しやくしょ' }, { text: 'は どこですか。', reading: null },
      { text: '\n', reading: null },
      { text: 'Dheeraj: ', reading: null }, { text: 'この', reading: null }, { text: '道', reading: 'みち' }, { text: 'を まっすぐ行くと、', reading: 'massugu iku to' }, { text: '信号', reading: 'しんごう' }, { text: 'が あります。その信号を', reading: null }, { text: '左', reading: 'ひだり' }, { text: 'へ曲がってください。', reading: 'magatte kudasai' }
    ],
    translation: 'Aalind: Excuse me, where is the City Hall? Dheeraj: If you go straight along this road, there is a traffic light. Turn left at that light.',
    questions: [
      {
        question: '市役所は どこに ありますか。',
        options: ['信号を 左へ 曲がった所', '信号の 前', '駅の 隣', '分かりません'],
        answerIndex: 0
      }
    ]
  }
];
