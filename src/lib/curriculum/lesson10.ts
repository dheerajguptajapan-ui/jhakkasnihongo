import { Item } from '../../types';

export const lesson10: Item[] = [
  {
    id: 'mn10-v1',
    lessonNumber: 10,
    type: 'vocabulary',
    character: 'あります',
    readings: ['arimasu'],
    meanings: ['exist', 'be (inanimate)'],
    explanation: 'Used for things that do not move on their own.',
    sentences: [{ japanese: '机の上に 本が あります。', english: 'There is a book on the desk.' }]
  },
  {
    id: 'mn10-v2',
    lessonNumber: 10,
    type: 'vocabulary',
    character: 'います',
    readings: ['imasu'],
    meanings: ['exist', 'be (animate)'],
    explanation: 'Used for people and animals.',
    sentences: [{ japanese: '庭に 犬が います。', english: 'There is a dog in the garden.' }]
  },
  {
    id: 'mn10-d1',
    lessonNumber: 10,
    type: 'dokkai',
    character: 'チリソースはありませんか',
    readings: ['Chiri soosu wa arimasen ka'],
    meanings: ['Do you have any chili sauce?'],
    content: 'ミラー：すみません。チリソースはありますか。\n店員：はい、あちらにあります。\nミラー：あちらですね。どうも。\n***\nミラー：すみません。チリソースはどこですか。\n店員：えーと。スパイスのコーナーです。\nミラー：スパイスのコーナー？\n店員：はい。右奥の棚です。上から２番目です。',
    translation: 'Miller: Excuse me. Do you have chili sauce?\nStaff: Yes, it\'s over there.\nMiller: Over there. Thanks.\n***\nMiller: Excuse me. Where is the chili sauce?\nStaff: Uh, it\'s in the spice corner.\nMiller: Spice corner?\nStaff: Yes. It\'s the shelf in the back right. Second from the top.',
    questions: [
      {
        question: 'チリソースはどこにありますか。',
        options: ['野菜のコーナー', '飲み物のコーナー', 'スパイスのコーナー', 'お菓子のコーナー'],
        answerIndex: 2
      },
      {
        question: '棚のどの位置にありますか。',
        options: ['一番上', '上から２番目', '一番下', '真ん中'],
        answerIndex: 1
      }
    ]
  },
  {
    id: 'mn10-k1',
    lessonNumber: 10,
    level: 1,
    type: 'kanji',
    character: '田',
    readings: ['でん', 'た', 'だ'],
    meanings: ['Rice field'],
    radical: '田',
    mnemonic: 'Bird\'s eye view of a rice field.',
    combinations: [{ word: '田んぼ', reading: 'たんぼ', meaning: 'Rice field' }]
  },
  {
    id: 'mn10-k2',
    lessonNumber: 10,
    level: 1,
    type: 'kanji',
    character: '山',
    readings: ['さん', 'やま'],
    meanings: ['Mountain'],
    radical: '山',
    mnemonic: 'Three peaks of a mountain.',
    combinations: [{ word: '富士山', reading: 'ふじさん', meaning: 'Mt. Fuji' }]
  }
];
