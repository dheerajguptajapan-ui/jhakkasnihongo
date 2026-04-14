import { Item } from '../../types';

export const n2chapter2: Item[] = [
  {
    id: 'tr2-ch2-v1',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 4,
    character: '絶滅',
    readings: ['zetsumetsu'],
    meanings: ['extinction']
  },
  {
    id: 'tr2-ch2-v2',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 4,
    character: '生態系',
    readings: ['seitaikei'],
    meanings: ['ecosystem']
  },
  {
    id: 'tr2-ch2-v3',
    lessonNumber: 2,
    type: 'vocabulary',
    level: 4,
    character: '調整',
    readings: ['chousei'],
    meanings: ['adjustment', 'regulation']
  },
  {
    id: 'tr2-ch2-g1',
    lessonNumber: 2,
    type: 'grammar',
    level: 4,
    character: '〜に限って (Particularly/Unexpectedly)',
    readings: ['~ni kagitte'],
    meanings: ['Only when / Particularly when (often implies an unfortunate coincidence)'],
    explanation: 'Used to express that an unusual or unfortunate event happens precisely because of a specific timing or condition.',
    sentences: [
      { japanese: '傘を 持ってこなかった 日に 限って、雨が 降る。', english: 'Particularly on days I don\'t bring an umbrella, it rains.', furigana: '傘[かさ]をもってこなかった日[ひ]に限[かぎ]って、雨[あめ]が降[ふ]る。' }
    ]
  },
  {
    id: 'tr2-ch2-g2',
    lessonNumber: 2,
    type: 'grammar',
    level: 4,
    character: '〜に応じて (Depending on)',
    readings: ['~ni oujite'],
    meanings: ['In response to / Depending on'],
    explanation: 'Expresses that something changes or is done in accordance with a situation, variety, or request.',
    sentences: [
      { japanese: '予算に 応じて、コースを 選んで ください。', english: 'Please choose the course depending on your budget.', furigana: '予算[よさん]に応[おう]じて、コースを選[えら]んでください。' }
    ]
  },
  {
    id: 'tr2-ch2-d1',
    lessonNumber: 2,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: 'オオカミと生態系',
    meanings: ['Wolves and the Ecosystem'],
    content: 'ある 地域で オオカミが 絶滅した ことで、生態系の バランスが 崩れました。自然は 状況に 応じて 変化して いますが、急な 絶滅に 限って 深刻な 問題を 引き起こします。',
    translation: 'The extinction of wolves in a certain area caused the balance of the ecosystem to collapse. Nature changes depending on the situation, but particularly sudden extinctions cause serious problems.',
    questions: [
      {
        question: '何が 原因で バランスが 崩れましたか。',
        options: ['オオカミの 絶滅', '雨が 降ったこと', '暑かったこと', '人が 増えたこと'],
        answerIndex: 0
      }
    ]
  }
];
