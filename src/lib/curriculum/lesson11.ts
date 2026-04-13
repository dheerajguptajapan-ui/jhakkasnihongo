import { Item } from '../../types';

export const lesson11: Item[] = [
  {
    id: 'mn11-v1',
    lessonNumber: 11,
    type: 'vocabulary',
    character: 'います',
    readings: ['imasu'],
    meanings: ['have (children)', 'stay'],
    explanation: '子どもが います. Indicates possession of animate beings or existence.',
    sentences: [{ japanese: '子どもが います。', english: 'I have children.' }]
  },
  {
    id: 'mn11-v2',
    lessonNumber: 11,
    type: 'vocabulary',
    character: 'かかります',
    readings: ['kakarimasu'],
    meanings: ['take (time or money)'],
    explanation: 'Used for duration or cost.',
    sentences: [{ japanese: 'お金が かかります。', english: 'It takes money.' }]
  },
  {
    id: 'mn11-d1',
    lessonNumber: 11,
    type: 'dokkai',
    character: 'これをお願いします',
    readings: ['Kore o onegai shimasu'],
    meanings: ['This, please'],
    content: '外国人：すみません。これを航空便でお願いします。\n局員：はい。船便はいくらですか。\n外国人：船便は５００円ですが、一ヶ月かかります。\n局員：航空便はいくらですか。\n外国人：航空便は１,２００円ですが、一週間で着きます。\n局員：じゃ、航空便でお願いします。',
    translation: 'Foreigner: Excuse me. This by airmail, please.\nClerk: Yes. How much is surface mail?\nForeigner: Surface mail is 500 yen, but it takes one month.\nClerk: How much is airmail?\nForeigner: Airmail is 1,200 yen, but it arrives in one week.\nClerk: Well then, airmail please.',
    questions: [
      {
        question: '船便はいくらですか。',
        options: ['５００円', '１,２００円', '１,５0０円', '２,０００円'],
        answerIndex: 0
      },
      {
        question: '航空便はどのくらいかかりますか。',
        options: ['一ヶ月', '一週間', '二週間', '三日'],
        answerIndex: 1
      }
    ]
  }
];
