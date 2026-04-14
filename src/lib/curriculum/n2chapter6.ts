import { Item } from '../../types';

export const n2chapter6: Item[] = [
  {
    id: 'tr2-ch6-v1',
    lessonNumber: 6,
    type: 'vocabulary',
    level: 4,
    character: '流行',
    readings: ['ryuukou'],
    meanings: ['trend', 'fashion', 'vogue']
  },
  {
    id: 'tr2-ch6-v2',
    lessonNumber: 6,
    type: 'vocabulary',
    level: 4,
    character: '影響',
    readings: ['eikyou'],
    meanings: ['influence', 'impact']
  },
  {
    id: 'tr2-ch6-v3',
    lessonNumber: 6,
    type: 'vocabulary',
    level: 4,
    character: '反映',
    readings: ['han'ei'],
    meanings: ['reflection']
  },
  {
    id: 'tr2-ch6-g1',
    lessonNumber: 6,
    type: 'grammar',
    level: 4,
    character: '〜にこたえて (In response to)',
    readings: ['~ni kotaete'],
    meanings: ['In response to / To meet (a request, expectation)'],
    explanation: 'Used when doing something to satisfy a desire, expectation, or demand.',
    sentences: [
      { japanese: 'ファンの 期待に こたえて、歌手は アンコールを 歌った。', english: 'In response to the fans\' expectations, the singer sang an encore.', furigana: 'ファンの期待[きたい]にこたえて、歌手[かしゅ]はアンコールを歌[うた]った。' }
    ]
  },
  {
    id: 'tr2-ch6-g2',
    lessonNumber: 6,
    type: 'grammar',
    level: 4,
    character: '〜をもとに（して） (Based on)',
    readings: ['~o moto ni'],
    meanings: ['Based on / From (a source material)'],
    explanation: 'Used when something is created or developed using something else as a basis or starting point.',
    sentences: [
      { japanese: '事実に もとにした 映画を 制作する。', english: 'To produce a movie based on facts.', furigana: '事実[じじつ]にもとにした映画[えいが]を制作[せいさく]する。' }
    ]
  },
  {
    id: 'tr2-ch6-d1',
    lessonNumber: 6,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '若者の流行と社会',
    meanings: ['Youth Trends and Society'],
    content: '新しい 流行は、常に 社会の 変化を もとに 生まれます。消費者の 要望に こたえて 新しい サービスが 次々と 登場して いますが、一時の 流行に 終わる ものも 少なくありません。',
    translation: 'New trends are always born based on changes in society. New services appear one after another in response to consumer demands, but not a few end as temporary trends.',
    questions: [
      {
        question: '流行について 何が 言われていますか。',
        options: ['社会の 変化を もとに 生まれる', '絶対に 変わらない', '人が 決める', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
