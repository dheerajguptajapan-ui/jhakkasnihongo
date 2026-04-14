import { Item } from '../../types';

export const n2chapter11: Item[] = [
  {
    id: 'tr2-ch11-v1',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 4,
    character: '相互理解',
    readings: ['sougo rikai'],
    meanings: ['mutual understanding']
  },
  {
    id: 'tr2-ch11-v2',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 4,
    character: '謙虚',
    readings: ['kenkyo'],
    meanings: ['humble', 'modest']
  },
  {
    id: 'tr2-ch11-v3',
    lessonNumber: 11,
    type: 'vocabulary',
    level: 4,
    character: '信頼関係',
    readings: ['shinrai kankei'],
    meanings: ['relationship of trust']
  },
  {
    id: 'tr2-ch11-g1',
    lessonNumber: 11,
    type: 'grammar',
    level: 4,
    character: '〜をはじめ (Starting with / Including)',
    readings: ['~o hajime'],
    meanings: ['Starting with / Primarily / As well as'],
    explanation: 'Used to provide a representative example first, followed by others in the same category.',
    sentences: [
      { japanese: '社長を はじめ、社員 全員が 会議に 出席した。', english: 'Starting with the president, all employees attended the meeting.', furigana: '社長[しゃちょう]をはじめ、社員[しゃいん]全員[ぜんいん]が会議[かいぎ]に出席[しゅっせき]した。' }
    ]
  },
  {
    id: 'tr2-ch11-g2',
    lessonNumber: 11,
    type: 'grammar',
    level: 4,
    character: '〜にかわって (Instead of / In place of)',
    readings: ['~ni kawatte'],
    meanings: ['Instead of / On behalf of'],
    explanation: 'Used when someone does something as a substitute for another person or thing.',
    sentences: [
      { japanese: '父に かわって、私が 挨拶しました。', english: 'Instead of my father, I gave the greeting.', furigana: '父[ちち]にかわって、私[わたし]が挨拶[あいさつ]しました。' }
    ]
  },
  {
    id: 'tr2-ch11-d1',
    lessonNumber: 11,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '国境を越えた友情',
    meanings: ['Friendship Beyond Borders'],
    content: '良好な 人間関係を 築くためには、まず 相手を はじめ 周囲に 対する 謙虚な 姿勢が 欠かせません。言葉に かわって 笑顔で 接することも、相互理解の 第一歩に なります。',
    translation: 'To build good human relationships, first of all, a humble attitude toward those around you, starting with the person in front of you, is indispensable. Approaching with a smile instead of words also becomes the first step toward mutual understanding.',
    questions: [
      {
        question: '相互理解のために 何が 大切だと言っていますか。',
        options: ['謙虚な 姿勢や 笑顔', 'たくさん 話すこと', 'プレゼントを あげること', '分からない'],
        answerIndex: 0
      }
    ]
  }
];
