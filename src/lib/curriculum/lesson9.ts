import { Item } from '../../types';

export const lesson9: Item[] = [
  {
    id: 'mn9-v1',
    lessonNumber: 9,
    type: 'vocabulary',
    character: 'わかります',
    readings: ['wakarimasu'],
    meanings: ['understand'],
    explanation: '分かります.',
    sentences: [{ japanese: '日本語が わかります。', english: 'I understand Japanese.' }]
  },
  {
    id: 'mn9-d1',
    lessonNumber: 9,
    type: 'dokkai',
    character: '残念です',
    readings: ['Zannen desu'],
    meanings: ['I\'m sorry to hear that / That\'s a pity'],
    content: 'ミラー：もしもし、ミラーです。\n木村：あ、ミラーさん、こんにちは。\nミラー：木村さん、いっしょにサッカーを見に行きませんか。\n木村：いいですね。いつですか。\nミラー：来週の土曜日です。\n木村：土曜日はちょっと・・・家族と食事に行きます。\nミラー：そうですか。残念ですね。\n木村：ええ。また今度お願いします。',
    translation: 'Miller: Hello, this is Miller.\nKimura: Oh, Mr. Miller, hello.\nMiller: Mr. Kimura, won\'t you go see soccer with me?\nKimura: That sounds good. When is it?\nMiller: Next Saturday.\nKimura: Saturday is a bit... I\'m going to dinner with my family.\nMiller: I see. That\'s a pity.\nKimura: Yes. Next time, please.',
    questions: [
      {
        question: '木村さんは土曜日に何をしますか。',
        options: ['サッカーを見に行きます', '家族と食事に行きます', '会社で働きます', '家で寝ます'],
        answerIndex: 1
      },
      {
        question: '二人はサッカーを見に行きますか。',
        options: ['はい、行きます', 'いいえ、行きません', 'まだわかりません', '一人で行きます'],
        answerIndex: 1
      }
    ]
  }
];
