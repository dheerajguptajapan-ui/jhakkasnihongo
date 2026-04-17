import { TextSegment } from '../types';

export interface GrammarSentence {
  id: string;
  english: string;
  japanese: TextSegment[];
  correctSequence: TextSegment[];
}

/**
 * MANDATORY: Detailed Kanji distribution intended for N5 Lesson 1.
 * Themes: Tech / Tokyo Life
 * Characters: Dheeraj, Riya, Aalind
 */
export const lesson1KanjiDistribution = [
  '日', '本', '語', '人', '私', '何', '学', '生', '大', '一', 'ニ', '三', '四', '五', '六', '七', '八', '九', '十'
];

export const grammarSentences: GrammarSentence[] = [
  {
    id: 'n5_1_1',
    english: 'Dheeraj is an engineer.',
    japanese: [
      { text: 'Dheeraj', reading: null },
      { text: 'は', reading: null },
      { text: 'エンジニア', reading: null },
      { text: 'です', reading: null },
      { text: '。', reading: null }
    ],
    correctSequence: [
      { text: 'Dheeraj', reading: null },
      { text: 'は', reading: null },
      { text: 'エンジニア', reading: null },
      { text: 'です', reading: null },
      { text: '。', reading: null }
    ]
  },
  {
    id: 'n5_1_2',
    english: 'Riya and Aalind are students.',
    japanese: [
      { text: 'Riya', reading: null },
      { text: 'と', reading: null },
      { text: 'Aalind', reading: null },
      { text: 'は', reading: null },
      { text: '学生', reading: 'がくせい' },
      { text: 'です', reading: null },
      { text: '。', reading: null }
    ],
    correctSequence: [
      { text: 'Riya', reading: null },
      { text: 'と', reading: null },
      { text: 'Aalind', reading: null },
      { text: 'は', reading: null },
      { text: '学生', reading: 'がくせい' },
      { text: 'です', reading: null },
      { text: '。', reading: null }
    ]
  },
  {
    id: 'n5_1_3',
    english: 'Are you Riya?',
    japanese: [
      { text: 'あなた', reading: null },
      { text: 'は', reading: null },
      { text: 'Riya', reading: null },
      { text: 'ですか', reading: null },
      { text: '？', reading: null }
    ],
    correctSequence: [
      { text: 'あなた', reading: null },
      { text: 'は', reading: null },
      { text: 'Riya', reading: null },
      { text: 'ですか', reading: null },
      { text: '？', reading: null }
    ]
  }
];
