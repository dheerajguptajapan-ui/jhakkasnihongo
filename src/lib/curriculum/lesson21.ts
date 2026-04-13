import { Item } from '../../types';

export const lesson21: Item[] = [
  {
    id: 'mn21-v1',
    lessonNumber: 21,
    type: 'vocabulary',
    character: 'おもいます',
    readings: ['omoimasu'],
    meanings: ['think'],
    explanation: '思う. Used for opinions.',
    sentences: [{ japanese: 'あした 雨が 降ると 思います。', english: 'I think it will rain tomorrow.' }]
  },
  {
    id: 'mn21-d1',
    lessonNumber: 21,
    type: 'dokkai',
    character: '私もそう思います',
    readings: ['Watashi mo sou omoimasu'],
    meanings: ['I think so too'],
    content: 'ミラー：日本についてどう思いますか。\nサントス：物価が高いですが、便利だと思います。\nミラー：そうですか。マリアさんは？\nマリア：私は食べ物がおいしいと思います。',
    translation: 'Miller: What do you think about Japan?\nSantos: Prices are high, but I think it\'s convenient.\nMiller: I see. Maria?\nMaria: I think the food is delicious.',
    questions: [
      {
        question: 'サントスさんは日本についてどう思っていますか。',
        options: ['不便だと思います', '物価が高いですが便利だと思います', '食べ物がおいしいと思います', 'あまりおもしろくないです'],
        answerIndex: 1
      }
    ]
  }
];
