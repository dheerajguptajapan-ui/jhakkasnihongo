import { Item } from '../types';

export const INITIAL_ITEMS: Item[] = [
  // Level 1 Radicals
  { id: 'r1', type: 'radical', character: '一', meanings: ['Ground'], readings: [], level: 1, mnemonic: 'This radical looks like a flat line on the ground.' },
  { id: 'r2', type: 'radical', character: '二', meanings: ['Two'], readings: [], level: 1, mnemonic: 'Two lines, two things.' },
  { id: 'r3', type: 'radical', character: '三', meanings: ['Three'], readings: [], level: 1, mnemonic: 'Three lines, three things.' },
  { id: 'r4', type: 'radical', character: '十', meanings: ['Cross'], readings: [], level: 1, mnemonic: 'Looks like a cross or the number ten.' },
  { id: 'r5', type: 'radical', character: '口', meanings: ['Mouth'], readings: [], level: 1, mnemonic: 'A square hole, like an open mouth.' },
  
  // Level 1 Kanji (N5)
  { 
    id: 'k1', 
    type: 'kanji', 
    character: '一', 
    meanings: ['One'], 
    readings: ['いち', 'いつ', 'ひと'], 
    level: 1, 
    radical: '一',
    mnemonic: 'The ground radical is also the kanji for one. Imagine a single line representing the start of everything.',
    combinations: [
      { word: '一日', reading: 'ついたち', meaning: 'First day of the month' },
      { word: '一人', reading: 'ひとり', meaning: 'One person' }
    ],
    sentences: [
      { japanese: 'りんごを一つください。', english: 'One apple, please.', furigana: 'りんごを一[ひと]つください。' },
      { japanese: '一日は二十四時間です。', english: 'One day is twenty-four hours.', furigana: '一[いち]日[にち]は二十四[にじゅうよん]時[じ]間[かん]です。' }
    ],
    dayToDayUses: ['Counting items', 'Dates', 'Expressing unity']
  },
  { 
    id: 'k2', 
    type: 'kanji', 
    character: '二', 
    meanings: ['Two'], 
    readings: ['に', 'ふた'], 
    level: 1, 
    radical: '二',
    mnemonic: 'Two lines for the number two. Simple and direct.',
    combinations: [
      { word: '二日', reading: 'ふつか', meaning: 'Second day of the month' },
      { word: '二人', reading: 'ふたり', meaning: 'Two people' }
    ],
    sentences: [
      { japanese: '二人の学生がいます。', english: 'There are two students.', furigana: '二[ふたり]の学[がく]生[せい]がいます。' },
      { japanese: '二月は寒いです。', english: 'February is cold.', furigana: '二[に]月[がつ]は寒[さむ]いです。' }
    ],
    dayToDayUses: ['Counting people', 'Months', 'Pairs']
  },
  { 
    id: 'k3', 
    type: 'kanji', 
    character: '日', 
    meanings: ['Sun', 'Day'], 
    readings: ['にち', 'じつ', 'ひ', 'び'], 
    level: 1, 
    radical: '日',
    mnemonic: 'A window with a bar across it, looking out at the sun.',
    combinations: [
      { word: '日本', reading: 'にほん', meaning: 'Japan' },
      { word: '今日', reading: 'きょう', meaning: 'Today' },
      { word: '日曜日', reading: 'にちようび', meaning: 'Sunday' }
    ],
    sentences: [
      { japanese: '今日はいい天気です。', english: 'Today is good weather.', furigana: '今[きょう]日[び]はいい天[てん]気[き]です。' },
      { japanese: '日本に行きたいです。', english: 'I want to go to Japan.', furigana: '日[に]本[ほん]に行[い]きたいです。' }
    ],
    dayToDayUses: ['Days of the week', 'Country names', 'Time expressions']
  },
  { 
    id: 'k4', 
    type: 'kanji', 
    character: '本', 
    meanings: ['Book', 'Origin', 'Main'], 
    readings: ['ほん', 'もと'], 
    level: 1, 
    radical: '木',
    mnemonic: 'A tree (木) with a mark at the bottom showing its roots or origin.',
    combinations: [
      { word: '本屋', reading: 'ほんや', meaning: 'Bookstore' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese language' }
    ],
    sentences: [
      { japanese: '本を読みます。', english: 'I read a book.', furigana: '本[ほん]を読[よ]みます。' },
      { japanese: '日本語を勉強しています。', english: 'I am studying Japanese.', furigana: '日[に]本[ほん]語[ご]を勉[べん]強[きょう]しています。' }
    ],
    dayToDayUses: ['Talking about books', 'Languages', 'Counter for long objects']
  },
  { 
    id: 'k5', 
    type: 'kanji', 
    character: '学', 
    meanings: ['Study', 'Learning'], 
    readings: ['がく', 'まな'], 
    level: 1, 
    radical: '子',
    mnemonic: 'A child (子) under a roof with three marks representing knowledge or sparks of learning.',
    combinations: [
      { word: '学校', reading: 'がっこう', meaning: 'School' },
      { word: '学生', reading: '学[がく]生[せい]', meaning: 'Student' },
      { word: '大学', reading: 'だいがく', meaning: 'University' }
    ],
    sentences: [
      { japanese: '学校に行きます。', english: 'I go to school.', furigana: '学[がっ]校[こう]に行[い]きます。' },
      { japanese: '私は学生です。', english: 'I am a student.', furigana: '私[わたし]は学[がく]生[せい]です。' }
    ],
    dayToDayUses: ['Education', 'Academic subjects', 'Institutions']
  },
  { 
    id: 'k6', 
    type: 'kanji', 
    character: '人', 
    meanings: ['Person'], 
    readings: ['じん', 'にん', 'ひと'], 
    level: 1, 
    radical: '人',
    mnemonic: 'A person standing on two legs.',
    combinations: [
      { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
      { word: '一人', reading: 'ひとり', meaning: 'One person' },
      { word: '大人', reading: 'おとな', meaning: 'Adult' }
    ],
    sentences: [
      { japanese: 'あの人は誰ですか。', english: 'Who is that person?', furigana: 'あの人[ひと]は誰[だれ]ですか。' },
      { japanese: '日本人が好きです。', english: 'I like Japanese people.', furigana: '日[に]本[ほん]人[じん]が好[す]きです。' }
    ],
    dayToDayUses: ['Nationality', 'Counting people', 'Talking about individuals']
  },
  { 
    id: 'k7', 
    type: 'kanji', 
    character: '月', 
    meanings: ['Moon', 'Month'], 
    readings: ['げつ', 'がつ', 'つき'], 
    level: 1, 
    radical: '月',
    mnemonic: 'A crescent moon with two clouds passing over it.',
    combinations: [
      { word: '一月', reading: 'いちがつ', meaning: 'January' },
      { word: '月曜日', reading: 'げつようび', meaning: 'Monday' },
      { word: '今月', reading: 'こんげつ', meaning: 'This month' }
    ],
    sentences: [
      { japanese: '月がれいです。', english: 'The moon is beautiful.', furigana: '月[つき]がれいです。' },
      { japanese: '月曜日にテストがあります。', english: 'There is a test on Monday.', furigana: '月[げつ]曜[よう]日[び]にテストがあります。' }
    ],
    dayToDayUses: ['Months of the year', 'Days of the week', 'Astronomy']
  },
  { 
    id: 'k8', 
    type: 'kanji', 
    character: '火', 
    meanings: ['Fire'], 
    readings: ['か', 'ひ', 'び'], 
    level: 1, 
    radical: '火',
    mnemonic: 'A campfire with sparks flying off.',
    combinations: [
      { word: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
      { word: '火山', reading: 'かざん', meaning: 'Volcano' },
      { word: '花火', reading: 'はなび', meaning: 'Fireworks' }
    ],
    sentences: [
      { japanese: '火曜日はひまです。', english: 'I am free on Tuesday.', furigana: '火[か]曜[よう]日[び]はひまです。' },
      { japanese: '花火を見ました。', english: 'I saw fireworks.', furigana: '花[はな]火[び]を見[み]ました。' }
    ],
    dayToDayUses: ['Days of the week', 'Cooking', 'Nature']
  },
  { 
    id: 'k9', 
    type: 'kanji', 
    character: '水', 
    meanings: ['Water'], 
    readings: ['すい', 'みず'], 
    level: 1, 
    radical: '水',
    mnemonic: 'Water splashing in four directions.',
    combinations: [
      { word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' },
      { word: '水泳', reading: 'すいえい', meaning: 'Swimming' },
      { word: '水道', reading: 'すいどう', meaning: 'Water supply' }
    ],
    sentences: [
      { japanese: '水を飲みます。', english: 'I drink water.', furigana: '水[みず]を飲[の]みます。' },
      { japanese: '水曜日に会いましょう。', english: 'Let\'s meet on Wednesday.', furigana: '水[すい]曜[よう]日[び]に会[あ]いましょう。' }
    ],
    dayToDayUses: ['Days of the week', 'Beverages', 'Daily life']
  },
  { 
    id: 'k10', 
    type: 'kanji', 
    character: '木', 
    meanings: ['Tree', 'Wood'], 
    readings: ['もく', 'ぼく', 'き'], 
    level: 1, 
    radical: '木',
    mnemonic: 'A tree with its trunk and branches.',
    combinations: [
      { word: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
      { word: '木村さん', reading: 'きむらさん', meaning: 'Mr./Ms. Kimura' }
    ],
    sentences: [
      { japanese: '大きな木があります。', english: 'There is a large tree.', furigana: '大[おお]きな木[き]があります。' },
      { japanese: '木曜日は忙しいです。', english: 'I am busy on Thursday.', furigana: '木[もく]曜[よう]日[び]は忙[いそが]しいです。' }
    ],
    dayToDayUses: ['Days of the week', 'Nature', 'Materials']
  },
  { 
    id: 'k11', 
    type: 'kanji', 
    character: '金', 
    meanings: ['Gold', 'Money'], 
    readings: ['きん', 'こん', 'かね'], 
    level: 1, 
    radical: '金',
    mnemonic: 'Gold nuggets buried under a roof.',
    combinations: [
      { word: '金曜日', reading: 'きんようび', meaning: 'Friday' },
      { word: 'お金', reading: 'おかね', meaning: 'Money' },
      { word: 'お金持ち', reading: 'おかねもち', meaning: 'Rich person' }
    ],
    sentences: [
      { japanese: '金曜日にパーティーに行きます。', english: 'I\'m going to a party on Friday.', furigana: '金[きん]曜[よう]日[び]にパーティーに行[い]きます。' },
      { japanese: 'お金がありません。', english: 'I don\'t have money.', furigana: 'お金[かね]がありません。' }
    ],
    dayToDayUses: ['Days of the week', 'Finance', 'Shopping']
  },
  { 
    id: 'k12', 
    type: 'kanji', 
    character: '土', 
    meanings: ['Soil', 'Earth', 'Ground'], 
    readings: ['ど', 'と', 'つち'], 
    level: 1, 
    radical: '土',
    mnemonic: 'A plant growing out of the ground.',
    combinations: [
      { word: '土曜日', reading: 'どようび', meaning: 'Saturday' },
      { word: '土地', reading: 'とち', meaning: 'Land' }
    ],
    sentences: [
      { japanese: '土曜日は休みです。', english: 'Saturday is a holiday.', furigana: '土[ど]曜[よう]日[び]は休[やす]みです。' },
      { japanese: '土をいじります。', english: 'I play with the soil.', furigana: '土[つち]をいじります。' }
    ],
    dayToDayUses: ['Days of the week', 'Nature', 'Construction']
  },
  { 
    id: 'k13', 
    type: 'kanji', 
    character: '山', 
    meanings: ['Mountain'], 
    readings: ['さん', 'やま'], 
    level: 1, 
    radical: '山',
    mnemonic: 'Three peaks of a mountain.',
    combinations: [
      { word: '富士山', reading: 'ふじさん', meaning: 'Mt. Fuji' },
      { word: '山道', reading: 'やまみち', meaning: 'Mountain path' }
    ],
    sentences: [
      { japanese: '山に登ります。', english: 'I climb a mountain.', furigana: '山[やま]に登[のぼ]ります。' },
      { japanese: '富士山はきれいです。', english: 'Mt. Fuji is beautiful.', furigana: '富[ふ]士[じ]山[さん]はきれいです。' }
    ],
    dayToDayUses: ['Geography', 'Hiking', 'Surnames']
  },
  { 
    id: 'k14', 
    type: 'kanji', 
    character: '川', 
    meanings: ['River'], 
    readings: ['せん', 'かわ'], 
    level: 1, 
    radical: '川',
    mnemonic: 'The flow of water in a riverbed.',
    combinations: [
      { word: '小川', reading: 'おがわ', meaning: 'Brook/Stream' },
      { word: '川岸', reading: 'かわぎし', meaning: 'Riverbank' }
    ],
    sentences: [
      { japanese: '川で泳ぎます。', english: 'I swim in the river.', furigana: '川[かわ]で泳[およ]ぎます。' },
      { japanese: 'きれいな川ですね。', english: 'It\'s a beautiful river, isn\'t it?', furigana: 'きれいな川[かわ]ですね。' }
    ],
    dayToDayUses: ['Geography', 'Nature', 'Surnames']
  },
  { 
    id: 'k15', 
    type: 'kanji', 
    character: '元', 
    meanings: ['Origin', 'Former'], 
    readings: ['げん', 'がん', 'もと'], 
    level: 1, 
    radical: '儿',
    mnemonic: 'Two lines over a person, representing the foundation or origin.',
    combinations: [
      { word: '元気', reading: 'げんき', meaning: 'Healthy/Energetic' },
      { word: '元日', reading: 'がんじつ', meaning: 'New Year\'s Day' }
    ],
    sentences: [
      { japanese: 'お元気ですか。', english: 'How are you?', furigana: 'お元[げん]気[き]ですか。' },
      { japanese: '元気です。', english: 'I am fine.', furigana: '元[げん]気[き]です。' }
    ],
    dayToDayUses: ['Greetings', 'Health', 'History']
  },
  { 
    id: 'k16', 
    type: 'kanji', 
    character: '気', 
    meanings: ['Spirit', 'Mind', 'Air'], 
    readings: ['き', 'け'], 
    level: 1, 
    radical: '气',
    mnemonic: 'Steam rising from rice cooking, representing energy or spirit.',
    combinations: [
      { word: '天気', reading: 'てんき', meaning: 'Weather' },
      { word: '気持ち', reading: 'きもち', meaning: 'Feeling' },
      { word: '人気', reading: 'にんき', meaning: 'Popularity' }
    ],
    sentences: [
      { japanese: '今日はいい天気です。', english: 'Today is good weather.', furigana: '今[きょう]日[び]はいい天[てん]気[き]です。' },
      { japanese: '気分がいいです。', english: 'I feel good.', furigana: '気[き]分[ぶん]がいいです。' }
    ],
    dayToDayUses: ['Weather', 'Emotions', 'Atmosphere']
  },
  { 
    id: 'k17', 
    type: 'kanji', 
    character: '天', 
    meanings: ['Heaven'], 
    readings: ['てん', 'あめ', 'あま'], 
    level: 1, 
    radical: '大',
    mnemonic: 'A person (大) with a line over their head, representing the sky or heaven.',
    combinations: [
      { word: '天気', reading: 'てんき', meaning: 'Weather' },
      { word: '天国', reading: 'てんごく', meaning: 'Heaven' },
      { word: '天才', reading: 'てんさい', meaning: 'Genius' }
    ],
    sentences: [
      { japanese: '天気がいいですね。', english: 'The weather is nice, isn\'t it?', furigana: '天[てん]気[き]がいいですね。' },
      { japanese: '天国に行きたいです。', english: 'I want to go to heaven.', furigana: '天[てん]国[ごく]に行[い]きたいです。' }
    ],
    dayToDayUses: ['Weather', 'Religion', 'Praise']
  },
  { 
    id: 'k18', 
    type: 'kanji', 
    character: '私', 
    meanings: ['I', 'Me', 'Private'], 
    readings: ['し', 'わたし', 'わたくし'], 
    level: 1, 
    radical: '禾',
    mnemonic: 'A person holding a grain stalk, representing their own private property.',
    combinations: [
      { word: '私立大学', reading: 'しりつだいがく', meaning: 'Private university' },
      { word: '私鉄', reading: 'してつ', meaning: 'Private railroad' }
    ],
    sentences: [
      { japanese: '私は学生です。', english: 'I am a student.', furigana: '私[わたし]は学[がく]生[せい]です。' },
      { japanese: '私の本です。', english: 'It is my book.', furigana: '私[わたし]の本[ほん]です。' }
    ],
    dayToDayUses: ['Self-introduction', 'Ownership', 'Formal speech']
  },
  { 
    id: 'k19', 
    type: 'kanji', 
    character: '今', 
    meanings: ['Now'], 
    readings: ['こん', 'きん', 'いま'], 
    level: 1, 
    radical: '人',
    mnemonic: 'A clock face with hands pointing to the current moment.',
    combinations: [
      { word: '今日', reading: 'きょう', meaning: 'Today' },
      { word: '今晩', reading: 'こんばん', meaning: 'Tonight' },
      { word: '今月', reading: 'こんげつ', meaning: 'This month' }
    ],
    sentences: [
      { japanese: '今、何時ですか。', english: 'What time is it now?', furigana: '今[いま]、何[なん]時[じ]ですか。' },
      { japanese: '今日は忙しいです。', english: 'I am busy today.', furigana: '今[きょう]日[び]は忙[いそが]しいです。' }
    ],
    dayToDayUses: ['Time expressions', 'Current events', 'Daily life']
  },
  { 
    id: 'k20', 
    type: 'kanji', 
    character: '田', 
    meanings: ['Rice field'], 
    readings: ['でん', 'た', 'だ'], 
    level: 1, 
    radical: '田',
    mnemonic: 'A bird\'s eye view of a rice field divided into four plots.',
    combinations: [
      { word: '田中さん', reading: 'たなかさん', meaning: 'Mr./Ms. Tanaka' },
      { word: '山田さん', reading: 'やまださん', meaning: 'Mr./Ms. Yamada' },
      { word: '田んぼ', reading: 'たんぼ', meaning: 'Rice field' }
    ],
    sentences: [
      { japanese: '田中さんは先生です。', english: 'Mr. Tanaka is a teacher.', furigana: '田[た]中[なか]さんは先[せん]生[せい]です。' },
      { japanese: '田んぼがあります。', english: 'There is a rice field.', furigana: '田[たん]ぼがあります。' }
    ],
    dayToDayUses: ['Surnames', 'Agriculture', 'Geography']
  },
  // Level 1 Vocabulary (N5)
  {
    id: 'v1',
    type: 'vocabulary',
    character: '学生',
    meanings: ['Student'],
    readings: ['がくせい'],
    level: 1,
    mnemonic: 'Study (学) + Life/Birth (生) = Student.',
    sentences: [
      { japanese: '私は学生です。', english: 'I am a student.', furigana: '私[わたし]は学[がく]生[せい]です。' }
    ]
  },
  {
    id: 'v2',
    type: 'vocabulary',
    character: '先生',
    meanings: ['Teacher', 'Professor'],
    readings: ['せんせい'],
    level: 1,
    mnemonic: 'Before (先) + Life/Birth (生) = Someone born before you, a teacher.',
    sentences: [
      { japanese: '田中さんは先生です。', english: 'Mr. Tanaka is a teacher.', furigana: '田[た]中[なか]さんは先[せん]生[せい]です。' }
    ]
  },
  {
    id: 'v3',
    type: 'vocabulary',
    character: '日本',
    meanings: ['Japan'],
    readings: ['にほん'],
    level: 1,
    mnemonic: 'Sun (日) + Origin (本) = Land of the Rising Sun.',
    sentences: [
      { japanese: '日本に行きます。', english: 'I am going to Japan.', furigana: '日[に]本[ほん]に行[い]きます。' }
    ]
  },
  {
    id: 'v4',
    type: 'vocabulary',
    character: '日本語',
    meanings: ['Japanese language'],
    readings: ['にほんご'],
    level: 1,
    mnemonic: 'Japan (日本) + Language (語) = Japanese language.',
    sentences: [
      { japanese: '日本語を勉強します。', english: 'I study Japanese.', furigana: '日[に]本[ほん]語[ご]を勉[べん]強[きょう]します。' }
    ]
  },
  {
    id: 'v5',
    character: '今日',
    meanings: ['Today'],
    readings: ['きょう'],
    level: 1,
    type: 'vocabulary',
    mnemonic: 'Now (今) + Day (日) = Today.',
    sentences: [
      { japanese: '今日はいい天気です。', english: 'Today is good weather.', furigana: '今[きょう]日[び]はいい天[てん]気[き]です。' }
    ]
  },
  // Minna no Nihongo Lesson 1 Vocabulary
  {
    id: 'mn1-v1',
    type: 'vocabulary',
    character: '私',
    meanings: ['I', 'Me'],
    readings: ['わたし'],
    level: 1,
    mnemonic: 'Minna no Nihongo Lesson 1',
    lessonNumber: 1,
    sentences: [{ japanese: '私はマイク・ミラーです。', english: 'I am Mike Miller.', furigana: '私[わたし]はマイク・ミラーです。' }]
  },
  {
    id: 'mn1-v2',
    type: 'vocabulary',
    character: '先生',
    meanings: ['Teacher', 'Instructor'],
    readings: ['せんせい'],
    level: 1,
    mnemonic: 'Minna no Nihongo Lesson 1',
    lessonNumber: 1,
    sentences: [{ japanese: 'ワット先生は親切です。', english: 'Mr. Watt is kind.', furigana: 'ワット先[せん]生[せい]は親[しん]切[せつ]です。' }]
  },
  {
    id: 'mn1-v3',
    type: 'vocabulary',
    character: '学生',
    meanings: ['Student'],
    readings: ['がくせい'],
    level: 1,
    mnemonic: 'Minna no Nihongo Lesson 1',
    lessonNumber: 1,
    sentences: [{ japanese: 'サントスさんは学生じゃありません。', english: 'Mr. Santos is not a student.', furigana: 'サントスさんは学[がく]生[せい]じゃありません。' }]
  },
  // Minna no Nihongo Lesson 1 Grammar
  {
    id: 'mn1-g1',
    type: 'grammar',
    character: '〜は〜です',
    meanings: ['N1 is N2'],
    readings: ['wa... desu'],
    level: 1,
    explanation: 'The particle は indicates that the word before it is the topic of the sentence. です indicates judgement or assertion.',
    sentences: [
      { japanese: '私はマイク・ミラーです。', english: 'I am Mike Miller.', furigana: '私[わたし]はマイク・ミラーです。' },
      { japanese: '私はエンジニアです。', english: 'I am an engineer.', furigana: '私[わたし]はエンジニアです。' }
    ]
  },
  {
    id: 'mn1-g2',
    type: 'grammar',
    character: '〜は〜じゃ ありません',
    meanings: ['N1 is not N2'],
    readings: ['wa... ja arimasen'],
    level: 1,
    explanation: 'じゃ ありません is the negative form of です. In formal speech or writing, では ありません is used instead.',
    sentences: [
      { japanese: 'サントスさんは学生じゃありません。', english: 'Mr. Santos is not a student.', furigana: 'サントスさんは学[がく]生[せい]じゃありません。' }
    ]
  },
  {
    id: 'mn1-g3',
    type: 'grammar',
    character: '〜か',
    meanings: ['Question particle'],
    readings: ['ka'],
    level: 1,
    explanation: 'The particle か is used to express the speaker\'s doubt, question, uncertainty, etc. It is added to the end of the sentence.',
    sentences: [
      { japanese: 'ミラーさんはアメリカ人ですか。', english: 'Is Mr. Miller an American?', furigana: 'ミラーさんはアメリカ人[じん]ですか。' },
      { japanese: 'あの方はどなたですか。', english: 'Who is that person?', furigana: 'あの方[かた]はどなたですか。' }
    ]
  },
  // Minna no Nihongo Lesson 1 Dokkai
  {
    id: 'mn1-d1',
    type: 'dokkai',
    character: 'はじめまして',
    meanings: ['How do you do?'],
    readings: ['Hajimemashite'],
    level: 1,
    content: '佐藤[さとう]：おはようございます。\n山田[やまだ]：おはようございます。佐藤[さとう]さん、こちらはミラーさんです。\nミラー：はじめまして。マイク・ミラーです。アメリカから来[き]ました。どうぞよろしく。\n佐藤[さとう]：佐藤[さとう]けいこです。どうぞよろしく。',
    translation: 'Sato: Good morning.\nYamada: Good morning. Ms. Sato, this is Mr. Miller.\nMiller: How do you do? I am Mike Miller. I am from the USA. Nice to meet you.\nSato: I am Keiko Sato. Nice to meet you.',
    questions: [
      {
        question: 'ミラーさんはどこから来ましたか。',
        options: ['イギリス', 'アメリカ', 'インド', 'ブラジル'],
        answerIndex: 1
      },
      {
        question: '山田さんは誰を紹介しましたか。',
        options: ['佐藤さん', 'ミラーさん', '田中さん', 'ワットさん'],
        answerIndex: 1
      }
    ]
  },
  // Minna no Nihongo Lesson 2 Vocabulary
  {
    id: 'mn2-v1',
    type: 'vocabulary',
    character: '本',
    meanings: ['Book'],
    readings: ['ほん'],
    level: 1,
    mnemonic: 'Minna no Nihongo Lesson 2',
    sentences: [{ japanese: 'これは本です。', english: 'This is a book.', furigana: 'これは本[ほん]です。' }]
  },
  {
    id: 'mn2-v2',
    type: 'vocabulary',
    character: '辞書',
    meanings: ['Dictionary'],
    readings: ['じしょ'],
    level: 1,
    mnemonic: 'Minna no Nihongo Lesson 2',
    sentences: [{ japanese: 'それは辞書です。', english: 'That is a dictionary.', furigana: 'それは辞[じ]書[しょ]です。' }]
  },
  {
    id: 'mn2-v3',
    type: 'vocabulary',
    character: '新聞',
    meanings: ['Newspaper'],
    readings: ['しんぶん'],
    level: 1,
    mnemonic: 'Minna no Nihongo Lesson 2',
    sentences: [{ japanese: 'あれは新聞ですか。', english: 'Is that a newspaper?', furigana: 'あれは新[しん]聞[ぶん]ですか。' }]
  },
  // Minna no Nihongo Lesson 2 Grammar
  {
    id: 'mn2-g1',
    type: 'grammar',
    character: 'これ/それ/あれ',
    meanings: ['This/That/That over there'],
    readings: ['kore/sore/are'],
    level: 1,
    explanation: 'これ, それ and あれ are demonstratives. They work as nouns. これ refers to a thing near the speaker. それ refers to a thing near the listener. あれ refers to a thing far from both.',
    sentences: [
      { japanese: 'これは私の本です。', english: 'This is my book.', furigana: 'これは私[わたし]の本[ほん]です。' },
      { japanese: 'それは何ですか。', english: 'What is that?', furigana: 'それは何[なん]ですか。' }
    ]
  },
  {
    id: 'mn2-g2',
    type: 'grammar',
    character: 'この N/その N/あの N',
    meanings: ['This N/That N/That N over there'],
    readings: ['kono/sono/ano'],
    level: 1,
    explanation: 'この, その and あの modify nouns. "この N" refers to a thing or a person near the speaker.',
    sentences: [
      { japanese: 'この本は私のです。', english: 'This book is mine.', furigana: 'この本[ほん]は私[わたし]のです。' }
    ]
  },
  // --- Minna no Nihongo Lesson 1 (EXTRACTED FROM IMAGE) ---
  {
    id: 'mn1-v-1',
    type: 'vocabulary',
    character: 'わたし',
    meanings: ['I'],
    readings: ['watashi'],
    level: 1,
    explanation: 'Personal pronoun referring to oneself. Used in both formal and neutral situations.'
  },
  {
    id: 'mn1-v-2',
    type: 'vocabulary',
    character: 'わたしたち',
    meanings: ['we'],
    readings: ['watashitachi'],
    level: 1,
    explanation: 'The plural form of "watashi". Used to refer to a group including the speaker.'
  },
  {
    id: 'mn1-v-3',
    type: 'vocabulary',
    character: 'あなた',
    meanings: ['you'],
    readings: ['anata'],
    level: 1,
    explanation: 'Personal pronoun for the listener. Note: In Japanese, it is more polite to use the person\'s name + san instead of "anata".'
  },
  {
    id: 'mn1-v-4',
    type: 'vocabulary',
    character: 'あのひと',
    meanings: ['that person', 'he', 'she'],
    readings: ['ano hito'],
    level: 1,
    explanation: 'Used to refer to someone at a distance. (あの方 [ano kata] is the polite equivalent).'
  },
  {
    id: 'mn1-v-5',
    type: 'vocabulary',
    character: 'みなさん',
    meanings: ['ladies and gentlemen', 'all of you'],
    readings: ['minasan'],
    level: 1,
    explanation: 'Used when addressing or referring to a group of people. (皆さん in Kanji).'
  },
  {
    id: 'mn1-v-6',
    type: 'vocabulary',
    character: '〜さん',
    meanings: ['Mr.', 'Ms.'],
    readings: ['~san'],
    level: 1,
    explanation: 'A title of respect added to a name. It is gender-neutral and can be used for both first and last names.'
  },
  {
    id: 'mn1-v-7',
    type: 'vocabulary',
    character: '〜ちゃん',
    meanings: ['suffix for children'],
    readings: ['~chan'],
    level: 1,
    explanation: 'A suffix often added to a child\'s name instead of 〜さん to show affection or familiarity.'
  },
  {
    id: 'mn1-v-8',
    type: 'vocabulary',
    character: '〜くん',
    meanings: ['suffix for boys'],
    readings: ['~kun'],
    level: 1,
    explanation: 'A suffix often added to a boy\'s name (〜君 in Kanji).'
  },
  {
    id: 'mn1-v-9',
    type: 'vocabulary',
    character: '〜じん',
    meanings: ['national of'],
    readings: ['~jin'],
    level: 1,
    explanation: 'Suffix meaning "a national of" (〜人 in Kanji). Example: アメリカじん (an American).'
  },
  {
    id: 'mn1-v-10',
    type: 'vocabulary',
    character: 'せんせい',
    meanings: ['teacher', 'instructor'],
    readings: ['sensei'],
    level: 1,
    explanation: 'Used for teachers, doctors, or experts. (Note: Not used when referring to one\'s own job; use "kyoushi" instead). (先生 in Kanji).'
  },
  {
    id: 'mn1-v-11',
    type: 'vocabulary',
    character: 'きょうし',
    meanings: ['teacher', 'instructor'],
    readings: ['kyoushi'],
    level: 1,
    explanation: 'Used when referring to one\'s own occupation as a teacher. (教師 in Kanji).'
  },
  {
    id: 'mn1-v-12',
    type: 'vocabulary',
    character: 'がくせい',
    meanings: ['student'],
    readings: ['gakusei'],
    level: 1,
    explanation: 'A student at school or university. (学生 in Kanji).'
  },
  {
    id: 'mn1-v-13',
    type: 'vocabulary',
    character: 'かいしゃいん',
    meanings: ['company employee'],
    readings: ['kaishain'],
    level: 1,
    explanation: 'A general term for someone who works for a company. (会社員 in Kanji).'
  },
  {
    id: 'mn1-v-14',
    type: 'vocabulary',
    character: 'しゃいん',
    meanings: ['employee of ~ company'],
    readings: ['shain'],
    level: 1,
    explanation: 'Used with a company\'s name (e.g., IMCの しゃいん). (社員 in Kanji).'
  },
  {
    id: 'mn1-v-15',
    type: 'vocabulary',
    character: 'ぎんこういん',
    meanings: ['bank employee'],
    readings: ['ginkouin'],
    level: 1,
    explanation: 'Someone working at a bank. (銀行員 in Kanji).'
  },
  {
    id: 'mn1-v-16',
    type: 'vocabulary',
    character: 'いしゃ',
    meanings: ['medical doctor'],
    readings: ['isha'],
    level: 1,
    explanation: 'A medical doctor. (医者 in Kanji).'
  },
  {
    id: 'mn1-v-17',
    type: 'vocabulary',
    character: 'けんきゅうしゃ',
    meanings: ['researcher', 'scholar'],
    readings: ['kenkyuusha'],
    level: 1,
    explanation: 'Someone who conducts research or scholarly work. (研究者 in Kanji).'
  },
  {
    id: 'mn1-v-18',
    type: 'vocabulary',
    character: 'エンジニア',
    meanings: ['engineer'],
    readings: ['enjinia'],
    level: 1,
    explanation: 'A professional in the field of engineering.'
  },
  {
    id: 'mn1-v-19',
    type: 'vocabulary',
    character: 'だいがく',
    meanings: ['university'],
    readings: ['daigaku'],
    level: 1,
    explanation: 'An institution for higher education. (大学 in Kanji).'
  },
  {
    id: 'mn1-v-20',
    type: 'vocabulary',
    character: 'びょういん',
    meanings: ['hospital'],
    readings: ['byouin'],
    level: 1,
    explanation: 'A medical facility where patients receive treatment. (病院 in Kanji).'
  },
  {
    id: 'mn1-v-21',
    type: 'vocabulary',
    character: 'でんき',
    meanings: ['electricity', 'light'],
    readings: ['denki'],
    level: 1,
    explanation: 'Electricity or the electrical lights in a room. (電気 in Kanji).'
  },
  {
    id: 'mn1-v-22',
    type: 'vocabulary',
    character: 'だれ',
    meanings: ['who'],
    readings: ['dare'],
    level: 1,
    explanation: 'Interrogative for people. (どなた [donata] is the polite equivalent).',
    lessonNumber: 1
  },
  {
    id: 'mn1-v-23',
    type: 'vocabulary',
    character: '～さい',
    meanings: ['~ years old'],
    readings: ['~sai'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Suffix added to numbers to express age. (〜歳 in Kanji).'
  },
  {
    id: 'mn1-v-24',
    type: 'vocabulary',
    character: 'なんさい',
    meanings: ['how old'],
    readings: ['nansai'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Question word for age. (何歳 in Kanji). (おいくつ [oikutsu] is the polite equivalent).'
  },
  {
    id: 'mn1-v-25',
    type: 'vocabulary',
    character: 'はい',
    meanings: ['yes'],
    readings: ['hai'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Used to answer affirmatively or to show that you are listening.'
  },
  {
    id: 'mn1-v-26',
    type: 'vocabulary',
    character: 'いいえ',
    meanings: ['no'],
    readings: ['iie'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Used to answer negatively or to deny something.'
  },
  {
    id: 'mn1-v-27',
    type: 'vocabulary',
    character: 'しつれいですが',
    meanings: ['excuse me, but'],
    readings: ['shitsurei desu ga'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Used when asking for personal information like a name or address. (失礼ですが in Kanji).'
  },
  {
    id: 'mn1-v-28',
    type: 'vocabulary',
    character: 'おなまえは？',
    meanings: ['May I have your name?'],
    readings: ['o-namae wa?'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Polite way to ask someone\'s name. (お名前は？ in Kanji).'
  },
  {
    id: 'mn1-v-29',
    type: 'vocabulary',
    character: 'はじめまして',
    meanings: ['How do you do?'],
    readings: ['hajimemashite'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Literally "I am meeting you for the first time". Used as the first phrase when introducing oneself.'
  },
  {
    id: 'mn1-v-30',
    type: 'vocabulary',
    character: 'どうぞよろしく',
    meanings: ['Pleased to meet you'],
    readings: ['douzo yoroshiku'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Literally "Please be nice to me". Usually used at the end of a self-introduction.'
  },
  {
    id: 'mn1-v-31',
    type: 'vocabulary',
    character: 'こちらは～さんです',
    meanings: ['This is Mr./Ms. ~'],
    readings: ['kochira wa ~san desu'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Used when introducing someone to another person.'
  },
  {
    id: 'mn1-v-32',
    type: 'vocabulary',
    character: '～からきました',
    meanings: ['I came from ~'],
    readings: ['~kara kimashita'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Used to say where you are from. (〜から来ました in Kanji).'
  },
  {
    id: 'mn1-v-33',
    type: 'vocabulary',
    character: 'アメリカ',
    meanings: ['U.S.A.'],
    readings: ['Amerika'],
    level: 1,
    lessonNumber: 1,
    explanation: 'United States of America.'
  },
  {
    id: 'mn1-v-34',
    type: 'vocabulary',
    character: 'イギリス',
    meanings: ['U.K.'],
    readings: ['Igirisu'],
    level: 1,
    lessonNumber: 1,
    explanation: 'United Kingdom.'
  },
  {
    id: 'mn1-v-35',
    type: 'vocabulary',
    character: 'インド',
    meanings: ['India'],
    readings: ['Indo'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Republic of India.'
  },
  {
    id: 'mn1-v-36',
    type: 'vocabulary',
    character: 'インドネシア',
    meanings: ['Indonesia'],
    readings: ['Indoneshia'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Republic of Indonesia.'
  },
  {
    id: 'mn1-v-37',
    type: 'vocabulary',
    character: 'かんこく',
    meanings: ['South Korea'],
    readings: ['Kankoku'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Republic of Korea. (韓国 in Kanji).'
  },
  {
    id: 'mn1-v-38',
    type: 'vocabulary',
    character: 'タイ',
    meanings: ['Thailand'],
    readings: ['Tai'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Kingdom of Thailand.'
  },
  {
    id: 'mn1-v-39',
    type: 'vocabulary',
    character: 'ちゅうごく',
    meanings: ['China'],
    readings: ['Chuugoku'],
    level: 1,
    lessonNumber: 1,
    explanation: 'People\'s Republic of China. (中国 in Kanji).'
  },
  {
    id: 'mn1-v-40',
    type: 'vocabulary',
    character: 'ドイツ',
    meanings: ['Germany'],
    readings: ['Doitsu'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Federal Republic of Germany.'
  },
  {
    id: 'mn1-v-41',
    type: 'vocabulary',
    character: 'にほん',
    meanings: ['Japan'],
    readings: ['Nihon'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Nation of Japan. (日本 in Kanji).'
  },
  {
    id: 'mn1-v-42',
    type: 'vocabulary',
    character: 'フランス',
    meanings: ['France'],
    readings: ['Furansu'],
    level: 1,
    lessonNumber: 1,
    explanation: 'French Republic.'
  },
  {
    id: 'mn1-v-43',
    type: 'vocabulary',
    character: 'ブラジル',
    meanings: ['Brazil'],
    readings: ['Burajiru'],
    level: 1,
    lessonNumber: 1,
    explanation: 'Federative Republic of Brazil.'
  }
];
