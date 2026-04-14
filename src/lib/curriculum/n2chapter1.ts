import { Item } from '../../types';

export const n2chapter1: Item[] = [
  {
    id: 'tr2-ch1-v1',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 4,
    character: 'につき',
    readings: ['ni tsuki'],
    meanings: ['due to', 'per']
  },
  {
    id: 'tr2-ch1-v2',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 4,
    character: '会場',
    readings: ['kaijou'],
    meanings: ['venue', 'meeting place']
  },
  {
    id: 'tr2-ch1-v3',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 4,
    character: '募集',
    readings: ['boshuu'],
    meanings: ['recruitment', 'taking applications']
  },
  {
    id: 'tr2-ch1-v4',
    lessonNumber: 1,
    type: 'vocabulary',
    level: 4,
    character: '条件',
    readings: ['jouken'],
    meanings: ['conditions', 'terms']
  },
  {
    id: 'tr2-ch1-g1',
    lessonNumber: 1,
    type: 'grammar',
    level: 4,
    character: '〜につき (Due to / Formal)',
    readings: ['~ni tsuki'],
    meanings: ['Because of / Due to (Formal)'],
    explanation: 'Used in formal announcements or signs to state a reason for a current state or action.',
    sentences: [
      { japanese: '工事中に つき、通行止めです。', english: 'Due to construction, the road is closed.', furigana: '工事[こうじ]中[ちゅう]につき、通行止[つうこうど]めです。' }
    ]
  },
  {
    id: 'tr2-ch1-g2',
    lessonNumber: 1,
    type: 'grammar',
    level: 4,
    character: '〜を問わず (Regardless of)',
    readings: ['~o towazu'],
    meanings: ['Regardless of / Irrespective of'],
    explanation: 'Expresses that something applies regardless of age, gender, nationality, or other categories.',
    sentences: [
      { japanese: '経験を 問わず、誰でも 応募できます。', english: 'Anyone can apply, regardless of experience.', furigana: '経験[けいけん]を問[と]わず、誰[だれ]でも応募[おうぼ]できます。' }
    ]
  },
  {
    id: 'tr2-ch1-d1',
    lessonNumber: 1,
    type: 'dokkai',
    level: 4,
    readings: [],
    character: '市民センターからのお知らせ',
    meanings: ['Announcement from the Community Center'],
    content: '清掃中に つき、ロビーの 使用は できません。なお、午後の イベントには 年齢を 問わず 参加可能です。会場は ３階です。ご協力 よろしく お願いします。',
    translation: 'Due to cleaning, the lobby cannot be used. Additionally, you can participate in the afternoon event regardless of age. The venue is on the 3rd floor. Thank you for your cooperation.',
    questions: [
      {
        question: 'どうして ロビーが 使えませんか。',
        options: ['清掃中だから', 'イベントがあるから', '休みだから', '壊れているから'],
        answerIndex: 0
      }
    ]
  }
];
