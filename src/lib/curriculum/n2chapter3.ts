import { Item } from '../../types';

export const n2chapter3: Item[] = [
  {
    id: 'tr2-ch3-v1',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 4,
    character: '人工知能',
    readings: ['jinkou chinou'],
    meanings: ['artificial intelligence', 'AI']
  },
  {
    id: 'tr2-ch3-v2',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 4,
    character: '利便性',
    readings: ['ribensei'],
    meanings: ['convenience']
  },
  {
    id: 'tr2-ch3-v3',
    lessonNumber: 3,
    type: 'vocabulary',
    level: 4,
    character: '効率',
    readings: ['kouritsu'],
    meanings: ['efficiency']
  },
  {
    id: 'tr2-ch3-g1',
    lessonNumber: 3,
    type: 'grammar',
    level: 4,
    character: '〜にかかわらず (Regardless of)',
    readings: ['~ni kakawarazu'],
    meanings: ['Regardless of / No matter whether'],
    explanation: 'Used when a situation or action is independent of a certain factor or variety.',
    sentences: [
      { japanese: '天候に かかわらず、試合は 行われます。', english: 'Regardless of the weather, the match will be held.', furigana: '天候[てんこう]にかかわらず、試合[しあい]は行[おこな]われます。' }
    ]
  },
  {
    id: 'tr2-ch3-g2',
    lessonNumber: 3,
    type: 'grammar',
    level: 4,
    character: '〜において (At / In)',
    readings: ['~ni oite'],
    meanings: ['At / In / In terms of (Formal)'],
    explanation: 'A formal way to specify a place, time, or field where something happens or exists.',
    sentences: [
      { japanese: '現代社会に おいて、ITは 欠かせません。', english: 'In modern society, IT is indispensable.', furigana: '現代[げんだい]社会[しゃかい]において、ITは欠[か]かせません。' }
    ]
  },
  {
    id: 'tr2-ch3-d1',
    lessonNumber: 3,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: 'AIと現代の生活',
    meanings: ['AI and Modern Life'],
    content: '現在、あらゆる 分野に おいて ＡＩの 導入が 進んでいます。個人の 好みに かかわらず、利便性が 向上して いますが、同時に 人の 仕事が 分奪われる との 懸念も あります。',
    translation: 'Currently, the introduction of AI is progressing in every field. Regardless of individual preferences, convenience is improving, but at the same time, there are concerns that human jobs will be taken away.',
    questions: [
      {
        question: 'ＡＩの 導入に ついて 何が 言われていますか。',
        options: ['利便性が 向上している', '仕事が 増えている', '不便に なっている', '何も 変わっていない'],
        answerIndex: 0
      }
    ]
  }
];
