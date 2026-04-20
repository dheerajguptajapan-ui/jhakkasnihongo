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
];