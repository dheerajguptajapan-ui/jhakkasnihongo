import { Item } from '../../types';

export const lesson9: Item[] = [
  // Vocabulary
  {
    id: 'mn9-v1',
    lessonNumber: 9,
    type: 'vocabulary',
    character: 'わかります',
    readings: ['wakarimasu'],
    meanings: ['understand'],
    explanation: '分かる.'
  },
  {
    id: 'mn9-v2',
    lessonNumber: 9,
    type: 'vocabulary',
    character: 'あります',
    readings: ['arimasu'],
    meanings: ['have', 'be', 'exist'],
    explanation: 'ある (inanimate objects).'
  },
  {
    id: 'mn9-v3',
    lessonNumber: 9,
    type: 'vocabulary',
    character: 'すき [な]',
    readings: ['suki [na]'],
    meanings: ['like'],
    explanation: '好き.'
  },

  // Grammar
  {
    id: 'mn9-g1',
    lessonNumber: 9,
    type: 'grammar',
    character: 'N1 は N2 が あります/わかります',
    readings: ['N1 wa N2 ga arimasu/wakarimasu'],
    meanings: ['N1 understands/has N2'],
    explanation: 'The particle が indicates the object of these verbs.',
    sentences: [{ japanese: '私は 日本語が わかります。', english: 'I understand Japanese.', furigana: '私[わたし]は日本[にほん]語[ご]がわかります。' }]
  },

  // Kanji (Unit 9)
  {
    id: 'mn9-k1',
    lessonNumber: 9,
    type: 'kanji',
    character: '書',
    readings: ['しょ', 'か'],
    meanings: ['Write', 'Book', 'Document'],
    level: 1,
    radical: '曰',
    mnemonic: 'A hand holding a brush over a document.',
    combinations: [{ word: '辞書', reading: 'jisho', meaning: 'Dictionary' }]
  },
  {
    id: 'mn9-k2',
    lessonNumber: 9,
    type: 'kanji',
    character: '聞',
    readings: ['ぶん', 'もん', 'き'],
    meanings: ['Hear', 'Listen', 'Ask'],
    level: 1,
    radical: '門',
    mnemonic: 'An ear (耳) within a gate (門) listening.',
    combinations: [{ word: '新聞', reading: 'shinbun', meaning: 'Newspaper' }]
  },
  {
    id: 'mn9-k3',
    lessonNumber: 9,
    type: 'kanji',
    character: '読',
    readings: ['どく', 'とく', 'とう', 'よ'],
    meanings: ['Read'],
    level: 1,
    radical: '言',
    mnemonic: 'Words (言) that are sold (売) as books to be read.',
    combinations: [{ word: '読書', reading: 'dokusho', meaning: 'Reading books' }]
  },
  {
    id: 'mn9-k4',
    lessonNumber: 9,
    type: 'kanji',
    character: '見',
    readings: ['けん', 'み'],
    meanings: ['See', 'Look', 'Watch', 'Visible'],
    level: 1,
    radical: '見',
    mnemonic: 'A large eye (目) on two legs walking to find something.',
    combinations: [{ word: '見学', reading: 'kengaku', meaning: 'Inspection/Study tour' }]
  },
  {
    id: 'mn9-k5',
    lessonNumber: 9,
    type: 'kanji',
    character: '話',
    readings: ['わ', 'はな', 'はな'] ,
    meanings: ['Talk', 'Speak', 'Story'],
    level: 1,
    radical: '言',
    mnemonic: 'Words (言) spoken from a tongue (舌).',
    combinations: [{ word: '電話', reading: 'denwa', meaning: 'Telephone' }]
  },
  {
    id: 'mn9-k6',
    lessonNumber: 9,
    type: 'kanji',
    character: '買',
    readings: ['ばい', 'か'],
    meanings: ['Buy'],
    level: 1,
    radical: '貝',
    mnemonic: 'A net (top part) catching shells (貝) to use as money to buy things.',
    combinations: [{ word: '買い物', reading: 'kaimono', meaning: 'Shopping' }]
  },
  {
    id: 'mn9-k7',
    lessonNumber: 9,
    type: 'kanji',
    character: '起',
    readings: ['き', 'お'],
    meanings: ['Wake up', 'Rise', 'Happen'],
    level: 1,
    radical: '走',
    mnemonic: 'Running (走) and standing up.',
    combinations: [{ word: '起きる', reading: 'okiru', meaning: 'To wake up' }]
  },
  {
    id: 'mn9-k8',
    lessonNumber: 9,
    type: 'kanji',
    character: '帰',
    readings: ['き', 'かえ'],
    meanings: ['Return', 'Come home'],
    level: 1,
    radical: '巾',
    mnemonic: 'A wife returning to the hearth.',
    combinations: [{ word: '帰宅', reading: 'kitaku', meaning: 'Returning home' }]
  },
  {
    id: 'mn9-k9',
    lessonNumber: 9,
    type: 'kanji',
    character: '友',
    readings: ['ゆう', 'とも'],
    meanings: ['Friend'],
    level: 1,
    radical: '又',
    mnemonic: 'Two hands clasping in friendship.',
    combinations: [{ word: '友達', reading: 'tomodachi', meaning: 'Friend' }]
  },
  {
    id: 'mn9-k10',
    lessonNumber: 9,
    type: 'kanji',
    character: '達',
    readings: ['たつ', 'だ', 'たち'],
    meanings: ['Achieve', 'Reach', 'Plural suffix'],
    level: 1,
    radical: '⻌',
    mnemonic: 'Sheep (幸/羊) on the road (⻌) reaching their destination.',
    combinations: [{ word: '友達', reading: 'tomodachi', meaning: 'Friend(s)' }]
  }
];
