import { Item } from '../../types';

export const n3chapter8: Item[] = [
  {
    id: 'tr3-ch8-v1',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 3,
    character: '就職',
    readings: ['shuushoku'],
    meanings: ['finding employment', 'getting a job']
  },
  {
    id: 'tr3-ch8-v2',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 3,
    character: '面接',
    readings: ['mensetsu'],
    meanings: ['interview']
  },
  {
    id: 'tr3-ch8-v3',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 3,
    character: '履歴書',
    readings: ['rirekisho'],
    meanings: ['resume', 'CV']
  },
  {
    id: 'tr3-ch8-v4',
    lessonNumber: 8,
    type: 'vocabulary',
    level: 3,
    character: '志望動機',
    readings: ['shibou douki'],
    meanings: ['reason for application', 'motivation']
  },
  {
    id: 'tr3-ch8-g1',
    lessonNumber: 8,
    type: 'grammar',
    level: 3,
    character: '〜ことになっている (Rule/Schedule)',
    readings: ['~koto ni natte iru'],
    meanings: ['It has been decided that / It is a rule that'],
    explanation: 'Used for rules, social norms, or schedules that have been established by others or as a general rule.',
    sentences: [
      { japanese: 'この 会社では、仕事中 携帯電話を 使わない ことになって います。', english: 'In this company, it is a rule not to use mobile phones during work.', furigana: 'この会社[かいしゃ]では、仕事中[しごとちゅう]携帯電話[けいたいでんわ]を使[つか]わないことになっています。' }
    ]
  },
  {
    id: 'tr3-ch8-g2',
    lessonNumber: 8,
    type: 'grammar',
    level: 3,
    character: '〜ことにしている (Personal Habit)',
    readings: ['~koto ni shite iru'],
    meanings: ['To make it a rule to / To have decided as a habit'],
    explanation: 'Used to express a personal decision or a habit that the speaker has set for themselves.',
    sentences: [
      { japanese: '健康の ために、毎日 １時間は 歩く ことに して います。', english: 'For the sake of health, I make it a rule to walk for an hour every day.', furigana: '健康[けんこう]のために、毎日[まいにち]１時間[いちじかん]は歩[ある]くことにしています。' }
    ]
  },
  {
    id: 'tr3-ch8-d1',
    lessonNumber: 8,
    type: 'dokkai',
    level: 3,
    readings: [],
    character: '就職の 面接',
    meanings: ['Job Interview'],
    content: '明日は 銀行の 面接が あります。この 銀行では、スーツを 着て 行く ことに なっています。私は 毎日 鏡の 前で あいさつの 練習を することに しています。合格したいです。',
    translation: 'Tomorrow I have an interview at a bank. At this bank, it is a rule to go wearing a suit. I make it a rule to practice my greetings in front of the mirror every day. I want to pass.',
    questions: [
      {
        question: '明日は どんな 服で 行かなければ なりませんか。',
        options: ['スーツ', '私服', '着物', '何でもいい'],
        answerIndex: 0
      }
    ]
  }
];
