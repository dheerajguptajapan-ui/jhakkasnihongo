import { Item } from '../../types';

export const n2chapter7: Item[] = [
  {
    id: 'tr2-ch7-v1',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 4,
    character: '規則正しい',
    readings: ['kisoku tadashii'],
    meanings: ['regular', 'disciplined']
  },
  {
    id: 'tr2-ch7-v2',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 4,
    character: '生活習慣',
    readings: ['seikatsu shuukan'],
    meanings: ['lifestyle habits']
  },
  {
    id: 'tr2-ch7-v3',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 4,
    character: '向上',
    readings: ['koujou'],
    meanings: ['improvement', 'elevation']
  },
  {
    id: 'tr2-ch7-g1',
    lessonNumber: 7,
    type: 'grammar',
    level: 4,
    character: '〜に沿って (Along with / According to)',
    readings: ['~ni sotte'],
    meanings: ['Along with / According to (followed by a plan, rule, or path)'],
    explanation: 'Used when something is done while adhering to a specific line, policy, or guideline.',
    sentences: [
      { japanese: 'マニュアルに 沿って、組み立ててください。', english: 'Please assemble it according to the manual.', furigana: 'マニュアルに沿[そ]って、組[く]み立[た]ててください。' }
    ]
  },
  {
    id: 'tr2-ch7-g2',
    lessonNumber: 7,
    type: 'grammar',
    level: 4,
    character: '〜にかけては (When it comes to)',
    readings: ['~ni kakete wa'],
    meanings: ['When it comes to / In the field of'],
    explanation: 'Used to indicate that someone is excellent or has superior skill in a certain specific area.',
    sentences: [
      { japanese: '料理の 手際に かけては、彼女が 一番だ。', english: 'When it comes to cooking efficiency, she is the best.', furigana: '料理[りょうり]の手際[てぎわ]にかけては、彼女[かのじょ]が一番[いちばん]だ。' }
    ]
  },
  {
    id: 'tr2-ch7-d1',
    lessonNumber: 7,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '理想の生活リズム',
    meanings: ['Ideal Life Rhythm'],
    content: '健康を 維持するためには、自分なりの 計画に 沿って 規則正しい 生活を 送ることが 大切です。時間の 管理に かけては 自信が あるという 人でも、体調管理には 注意が 必要です。',
    translation: 'To maintain health, it is important to lead a disciplined life according to your own plan. Even for those who have confidence when it comes to time management, caution is necessary for physical condition management.',
    questions: [
      {
        question: '健康を 維持するために 何が 大切ですか。',
        options: ['規則正しい 生活', 'たくさん 食べること', 'ずっと 寝ること', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
