import { Item } from '../../types';

export const n3chapter7: Item[] = [
  {
    id: 'tr3-ch7-v1',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 3,
    character: '不動産屋',
    readings: ['fudousanya'],
    meanings: ['real estate agent']
  },
  {
    id: 'tr3-ch7-v2',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 3,
    character: '家賃',
    readings: ['yachin'],
    meanings: ['rent']
  },
  {
    id: 'tr3-ch7-v3',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 3,
    character: '敷金',
    readings: ['shikikin'],
    meanings: ['security deposit']
  },
  {
    id: 'tr3-ch7-v4',
    lessonNumber: 7,
    type: 'vocabulary',
    level: 3,
    character: '契約',
    readings: ['keiyaku'],
    meanings: ['contract']
  },
  {
    id: 'tr3-ch7-g1',
    lessonNumber: 7,
    type: 'grammar',
    level: 3,
    character: '〜ようがない (No way to)',
    readings: ['~you ga nai'],
    meanings: ['There is no way to / Cannot possibly'],
    explanation: 'Used when an action is impossible despite wanting to do it or having a reason to.',
    sentences: [
      { japanese: '連絡先が 分からないので、連絡しようがありません。', english: 'Since I don\'t know the contact info, there is no way to contact them.', furigana: '連絡[れんらく]先[さき]が分[わ]からないので、連絡[れんらく]しようがありません。' }
    ]
  },
  {
    id: 'tr3-ch7-g2',
    lessonNumber: 7,
    type: 'grammar',
    level: 3,
    character: '〜はずだ (Expectation)',
    readings: ['~hazu da'],
    meanings: ['It should be / It is expected that'],
    explanation: 'Expresses a strong expectation or logical conclusion based on facts.',
    sentences: [
      { japanese: '今日は 休みですから、店は 閉まっている はずです。', english: 'Since today is a holiday, the store should be closed.', furigana: '今日[きょう]は休[やす]みですから、店[みせ]は閉[し]まっているはずです。' }
    ]
  },
  {
    id: 'tr3-ch7-d1',
    lessonNumber: 7,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '不動産屋で',
    meanings: ['At the Real Estate Agent'],
    content: '新しい アパートを 探しに 不動産屋へ 行きました。家賃が 安くて 広い 部屋は なかなか ありません。いい 部屋が 見つからなければ、引っ越ししようがありません。明日は 別の 店へ 行く はずです。',
    translation: 'I went to a real estate agent to look for a new apartment. Cheap and spacious rooms are hard to find. If I can\'t find a good room, there is no way to move. I should be going to a different shop tomorrow.',
    questions: [
      {
        question: 'どうして 引っ越ししようがありませんか。',
        options: ['いい 部屋が 見つからない', 'お金がない', '忙しい', '病気'],
        answerIndex: 0
      }
    ]
  }
];
