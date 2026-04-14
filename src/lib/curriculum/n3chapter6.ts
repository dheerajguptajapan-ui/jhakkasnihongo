import { Item } from '../../types';

export const n3chapter6: Item[] = [
  {
    id: 'tr3-ch6-v1',
    lessonNumber: 6,
    type: 'vocabulary',
    level: 3,
    character: '里山',
    readings: ['satoyama'],
    meanings: ['undiscovered countryside area']
  },
  {
    id: 'tr3-ch6-v2',
    lessonNumber: 6,
    type: 'vocabulary',
    level: 3,
    character: '生態系',
    readings: ['seitaikei'],
    meanings: ['ecosystem']
  },
  {
    id: 'tr3-ch6-v3',
    lessonNumber: 6,
    type: 'vocabulary',
    level: 3,
    character: '環境',
    readings: ['kankyou'],
    meanings: ['environment']
  },
  {
    id: 'tr3-ch6-g1',
    lessonNumber: 6,
    type: 'grammar',
    level: 3,
    character: '〜っけ (Confirming memory)',
    readings: ['~kke'],
    meanings: ['Did I...? / Was it...?'],
    explanation: 'Used to confirm something that the speaker has forgotten or is unsure about.',
    sentences: [
      { japanese: '明日の 会議、何時だったっけ？', english: 'What time was tomorrow\'s meeting again?', furigana: '明日[あした]の会議[かいぎ]、何時[なんじ]だったっけ？' }
    ]
  },
  {
    id: 'tr3-ch6-g2',
    lessonNumber: 6,
    type: 'grammar',
    level: 3,
    character: '〜ばかり (Nothing but/Only)',
    readings: ['~bakari'],
    meanings: ['Only / Just / Nothing but'],
    explanation: 'Used to indicate that something consists entirely of one thing or action.',
    sentences: [
      { japanese: '遊んでばかりいないで、勉強しなさい。', english: 'Don\'t just play all the time; study.', furigana: '遊[あそ]んでばかりいないで、勉強[べんきょう]しなさい。' }
    ]
  },
  {
    id: 'tr3-ch6-d1',
    lessonNumber: 6,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '里山について',
    meanings: ['About Satoyama'],
    content: '里山は 人と 自然が 共生する 場所です。昔は たくさんの 人が 里山を 利用していました。最近は 忘れられつつありますが、大切な 環境です。あそこに あった 森、何て 名前だったっけ？',
    translation: 'Satoyama is a place where humans and nature coexist. In the past, many people utilized Satoyama. Recently it is being forgotten, but it is an important environment. That forest over there, what was its name again?',
    questions: [
      {
        question: '里山は どんな 場所ですか。',
        options: ['人と 自然が 共生する', '都会の 中心', '砂漠', '海'],
        answerIndex: 0
      }
    ]
  }
];
