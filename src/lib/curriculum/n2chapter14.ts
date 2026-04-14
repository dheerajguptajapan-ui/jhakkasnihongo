import { Item } from '../../types';

export const n2chapter14: Item[] = [
  {
    id: 'tr2-ch14-v1',
    lessonNumber: 14,
    type: 'vocabulary',
    level: 4,
    character: '包括的',
    readings: ['houkatsuteki'],
    meanings: ['comprehensive', 'inclusive']
  },
  {
    id: 'tr2-ch14-v2',
    lessonNumber: 14,
    type: 'vocabulary',
    level: 4,
    character: '達成',
    readings: ['tassei'],
    meanings: ['achievement', 'attainment']
  },
  {
    id: 'tr2-ch14-v3',
    lessonNumber: 14,
    type: 'vocabulary',
    level: 4,
    character: '展望',
    readings: ['tenbou'],
    meanings: ['outlook', 'prospect']
  },
  {
    id: 'tr2-ch14-g1',
    lessonNumber: 14,
    type: 'grammar',
    level: 4,
    character: '〜といった (Such as)',
    readings: ['~to itta'],
    meanings: ['Such as / Like'],
    explanation: 'Used to provide examples that belong to a certain category.',
    sentences: [
      { japanese: 'テニスや サッカーといった スポーツを 楽しむ。', english: 'To enjoy sports such as tennis and soccer.', furigana: 'テニスやサッカーといったスポーツを楽[たの]しむ。' }
    ]
  },
  {
    id: 'tr2-ch14-g2',
    lessonNumber: 14,
    type: 'grammar',
    level: 4,
    character: '〜に違いない (Must be)',
    readings: ['~ni chigai nai'],
    meanings: ['Must be / Without a doubt'],
    explanation: 'Expresses a strong conviction or certainty about a state or fact.',
    sentences: [
      { japanese: '犯人は 彼に 違いない。', english: 'The culprit must be him.', furigana: '犯人[はんにん]は彼[かれ]に違[ちが]いない。' }
    ]
  },
  {
    id: 'tr2-ch14-d1',
    lessonNumber: 14,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: 'これからの社会と課題',
    meanings: ['Future Society and Challenges'],
    content: '環境や 経済と いった 包括的な 視点で 社会を 見ることが 必要です。目標の 達成に むけて、私たちは 努力し 続けなければ ならないに 違いない。輝かしい 未来を 共に 作りましょう。',
    translation: 'It is necessary to look at society from comprehensive perspectives such as environment and economy. Toward achieving goals, we must without a doubt continue to make effort. Let us build a brilliant future together.',
    questions: [
      {
        question: '包括的な 視点とは 何についてですか。',
        options: ['環境や 経済', '食べ物', '遊び', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
