import { Item } from '../../types';

export const n2chapter12: Item[] = [
  {
    id: 'tr2-ch12-v1',
    lessonNumber: 12,
    type: 'vocabulary',
    level: 4,
    character: '宇宙観測',
    readings: ['uchuu kansoku'],
    meanings: ['space observation']
  },
  {
    id: 'tr2-ch12-v2',
    lessonNumber: 12,
    type: 'vocabulary',
    level: 4,
    character: '新発見',
    readings: ['shin hakken'],
    meanings: ['new discovery']
  },
  {
    id: 'tr2-ch12-v3',
    lessonNumber: 12,
    type: 'vocabulary',
    level: 4,
    character: '未知',
    readings: ['michi'],
    meanings: ['unknown']
  },
  {
    id: 'tr2-ch12-g1',
    lessonNumber: 12,
    type: 'grammar',
    level: 4,
    character: '〜にあたって (Upon / On the occasion of)',
    readings: ['~ni atatte'],
    meanings: ['Upon / At the time of / On the occasion of (Formal)'],
    explanation: 'Used for important or formal life events or ceremonies to mark the occasion.',
    sentences: [
      { japanese: '新装開店に あたって、記念品を 配ります。', english: 'Upon the grand reopening, we will distribute commemorative gifts.', furigana: '新装[しんそう]開店[かいてん]にあたって、記念品[きねんひん]を配[くば]ります。' }
    ]
  },
  {
    id: 'tr2-ch12-g2',
    lessonNumber: 12,
    type: 'grammar',
    level: 4,
    character: '〜てはじめて (Not until)',
    readings: ['~te hajimete'],
    meanings: ['Only after doing... did I realize / Not until'],
    explanation: 'Used when someone realizes or experiences something for the first time only after a certain action or state.',
    sentences: [
      { japanese: '入院してはじめて、健康の ありがたさが 分かった。', english: 'Only after being hospitalized did I understand the value of health.', furigana: '入院[にゅういん]してはじめて、健康[けんこう]のありがたさが分[わ]かった。' }
    ]
  },
  {
    id: 'tr2-ch12-d1',
    lessonNumber: 12,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '宇宙への挑戦',
    meanings: ['Challenge to Space'],
    content: '宇宙観測は 未知の 世界を 解明する 挑戦です。探査機の 打ち上げに あたって、多くの 準備が 必要でした。成功して はじめて、研究の 成果が 証明されます。',
    translation: 'Space observation is a challenge to clarify the unknown world. At the time of launching the probe, a lot of preparation was necessary. Only after it succeeds will the results of the research be proven.',
    questions: [
      {
        question: '打ち上げに あたって 何が 必要でしたか。',
        options: ['多くの 準備', 'お金', '友達', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
