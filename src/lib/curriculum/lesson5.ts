import { Item } from '../../types';

export const lesson5: Item[] = [
  // --- VOCABULARY ---
  { 
    id: 'nl5-v1', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'いきます', 
    readings: ['ikimasu'], 
    meanings: ['go'], 
    explanation: 'Polite form of 行く (iku). Indicates movement away from the current location toward a destination.',
    sentences: [
      { japanese: '明日、東京へいきます。', furigana: '[明日:あした]、[東京:とうきょう]へ[行:い]きます。', english: 'I will go to Tokyo tomorrow.' },
      { japanese: '銀行へいきます。', furigana: '[銀行:ぎんこう]へ[行:い]きます。', english: 'I am going to the bank.' }
    ]
  },
  { 
    id: 'nl5-v2', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'きます', 
    readings: ['kimasu'], 
    meanings: ['come'], 
    explanation: 'Polite form of 来る (kuru). Indicates movement toward the current location of the speaker. Dheeraj is coming to my place!',
    sentences: [
      { japanese: 'デレジさんはうちへきます。', furigana: 'デレジさんはうちへ[来:き]ます。', english: 'Mr. Dheeraj is coming to my house.' },
      { japanese: 'いつ日本へきましたか？', furigana: 'いつ[日本:にほん]へ[来:き]ましたか？', english: 'When did you come to Japan?' }
    ]
  },
  { 
    id: 'nl5-v3', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かえります', 
    readings: ['kaerimasu'], 
    meanings: ['go back', 'return'], 
    explanation: 'Polite form of 帰る (kaeru). Used for returning to one\'s home, country, or base.',
    sentences: [
      { japanese: '６時にうちへかえります。', furigana: '６[時:じ]にうちへ[帰:かえ]ります。', english: 'I will return home at 6.' },
      { japanese: '来年、インドへかえります。', furigana: '[来年:らいねん]、インドへ[帰:かえ]ります。', english: 'I will return to India next year.' }
    ]
  },
  { 
    id: 'nl5-v4', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'がっこう', 
    readings: ['gakkou'], 
    meanings: ['school'], 
    explanation: 'General term for school (学校).',
    sentences: [
      { japanese: 'がっこうへいきます。', furigana: '[学校:がっこう]へ[行:い]きます。', english: 'I am going to school.' },
      { japanese: 'この学校はきれいです。', furigana: 'この[学校:がっこう]はきれいです。', english: 'This school is beautiful.' }
    ]
  },
  { 
    id: 'nl5-v5', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'スーパー', 
    readings: ['su-pa-'], 
    meanings: ['supermarket'], 
    explanation: 'Borrowed from English. Standard place to buy groceries in Tokyo.',
    sentences: [
      { japanese: 'スーパーへ買い物にいきます。', furigana: 'スーパーへ[買:か]い[物:もの]に[行:い]きます。', english: 'I am going to the supermarket to shop.' },
      { japanese: 'あのスーパーは安いです。', furigana: 'あのスーパーは[安:やす]いです。', english: 'That supermarket is cheap.' }
    ]
  },
  { 
    id: 'nl5-v6', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'えき', 
    readings: ['eki'], 
    meanings: ['station'], 
    explanation: 'Train station (駅). Heart of Japanese transportation.',
    sentences: [
      { japanese: 'えきはどこですか？', furigana: '[駅:えき]はどこですか？', english: 'Where is the station?' },
      { japanese: '新宿（しんじゅく）駅まで歩きます。', furigana: '[新宿:しんじゅく][駅:えき]まで[歩:ある]きます。', english: 'I walk to Shinjuku station.' }
    ]
  },
  { 
    id: 'nl5-v7', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ひこうき', 
    readings: ['hikouki'], 
    meanings: ['airplane'], 
    explanation: 'Airplane (飛行機). Flying into Narita or Haneda.',
    sentences: [
      { japanese: 'ひこうきで日本へきました。', furigana: '[飛行機:ひこうき]で[日本:にほん]へ[来:き]ましたか。', english: 'Did you come to Japan by airplane?' },
      { japanese: 'ひこうきは速いですね。', furigana: '[飛行機:ひこうき]は[速:はや]いですね。', english: 'Airplanes are fast, aren\'t they?' }
    ]
  },
  { 
    id: 'nl5-v8', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ふね', 
    readings: ['fune'], 
    meanings: ['ship', 'boat'], 
    explanation: 'Ship or boat (船).',
    sentences: [
      { japanese: 'ふねで島へいきます。', furigana: '[船:ふね]で[島:しま]へ[行:い]きます。', english: 'I go to the island by boat.' },
      { japanese: '大きいふねが見えます。', furigana: '[大:おお]きい[船:ふね]が[見:み]えます。', english: 'I can see a large ship.' }
    ]
  },
  { 
    id: 'nl5-v9', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'でんしゃ', 
    readings: ['densha'], 
    meanings: ['electric train'], 
    explanation: 'Train (電車). Essential for city life in Japan.',
    sentences: [
      { japanese: 'でんしゃで会社へいきます。', furigana: '[電車:でんしゃ]で[会社:かいしゃ]へ[行:い]きます。', english: 'I go to the company by train.' },
      { japanese: 'でんしゃはとても混んでいます。', furigana: '[電車:でんしゃ]はとても[混:こ]んでいます。', english: 'The train is very crowded.' }
    ]
  },
  { 
    id: 'nl5-v10', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ちかてつ', 
    readings: ['chikatetsu'], 
    meanings: ['subway'], 
    explanation: 'Subway (地下鉄). Literal "underground iron."',
    sentences: [
      { japanese: 'ちかてつは便利です。', furigana: '[地下鉄:ちかてつ]は[便利:べんり]です。', english: 'The subway is convenient.' },
      { japanese: 'ちかてつで銀座へいきます。', furigana: '[地下鉄:ちかてつ]で[銀座:ぎんざ]へ[行:い]きます。', english: 'I go to Ginza by subway.' }
    ]
  },
  { 
    id: 'nl5-v11', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'しんかんせん', 
    readings: ['shinkansen'], 
    meanings: ['bullet train'], 
    explanation: 'Bullet Train (新幹線). High-speed rail connecting major cities.',
    sentences: [
      { japanese: 'しんかんせんはとても速いです。', furigana: '[新幹線:しんかんせん]はとても[速:はや]いです。', english: 'The Shinkansen is very fast.' },
      { japanese: 'しんかんせんで大阪へいきましょう。', furigana: '[新幹線:しんかんせん]で[大阪:おおさか]へ[行:い]きましょう。', english: "Let's go to Osaka by bullet train." }
    ]
  },
  { 
    id: 'nl5-v12', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'バス', 
    readings: ['basu'], 
    meanings: ['bus'], 
    explanation: 'Bus. Useful for areas without many train lines.',
    sentences: [
      { japanese: 'バスで会社へ行きます。', furigana: 'バスで[会社:かいしゃ]へ[行:い]きます。', english: 'I go to the company by bus.' },
      { japanese: 'バスは８時半に来ます。', furigana: 'バスは８[時:じ][半:はん]に[来:き]ます。', english: 'The bus comes at 8:30.' }
    ]
  },
  { 
    id: 'nl5-v13', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'タクシー', 
    readings: ['takushii'], 
    meanings: ['taxi'], 
    explanation: 'Taxi. High quality in Japan!',
    sentences: [
      { japanese: 'タクシーでえきへ行きました。', furigana: 'タクシーで[駅:えき]へ[行:い]きました。', english: 'I went to the station by taxi.' },
      { japanese: 'タクシーは高いです。', furigana: 'タクシーは[高:たか]いです。', english: 'Taxis are expensive.' }
    ]
  },
  { 
    id: 'nl5-v14', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'じてんしゃ', 
    readings: ['jitensha'], 
    meanings: ['bicycle'], 
    explanation: 'Bicycle (自転車). Very popular for commuting in Japan.',
    sentences: [
      { japanese: 'じてんしゃで学校へいきます。', furigana: '[自転車:じてんしゃ]で[学校:がっこう]へ[行:い]きます。', english: 'I go to school by bicycle.' },
      { japanese: 'あたらしい自転車がほしいです。', furigana: '[新:あたら]しい[自転車:じてんしゃ]がほしいです。', english: 'I want a new bicycle.' }
    ]
  },
  { 
    id: 'nl5-v15', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'あるいて', 
    readings: ['aruite'], 
    meanings: ['on foot'], 
    explanation: 'Walking (歩いて). Does NOT take the particle "de"!',
    sentences: [
      { japanese: '駅からうちまであるいてかえります。', furigana: '[駅:えき]からうちまで[歩:ある]いて[帰:かえ]ります。', english: 'I walk home from the station.' },
      { japanese: '会社まで歩いて行きます。', furigana: '[会社:かいしゃ]まで[歩:ある]いて[行:い]きます。', english: 'I go to the company on foot.' }
    ]
  },
  { 
    id: 'nl5-v16', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ひと', 
    readings: ['hito'], 
    meanings: ['person'], 
    explanation: 'Person or human (人).',
    sentences: [
      { japanese: 'あのひとは誰ですか？', furigana: 'あの[人:ひと]は[誰:だれ]ですか？', english: 'Who is that person?' },
      { japanese: 'たくさんの人がいます。', furigana: 'たくさんの[人:ひと]がい[ます:ます]。', english: 'There are many people.' }
    ]
  },
  { 
    id: 'nl5-v17', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ともだち', 
    readings: ['tomodachi'], 
    meanings: ['friend'], 
    explanation: 'Friend (友達). Dheeraj meets his tomodachi for lunch.',
    sentences: [
      { japanese: 'ともだちと映画を見ます。', furigana: '[友達:ともだち]と[映画:えいが]を[見:み]ます。', english: 'I will watch a movie with a friend.' },
      { japanese: '彼女は私のいいともだちです。', furigana: '[彼女:かのじょ]は[私:わたし]のいい[友達:ともだち]です。', english: 'She is my good friend.' }
    ]
  },
  { 
    id: 'nl5-v18', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かれ', 
    readings: ['kare'], 
    meanings: ['he', 'boyfriend'], 
    explanation: 'He or boyfriend (彼).',
    sentences: [
      { japanese: '彼は学生です。', furigana: '[彼:かれ]は[学生:がくせい]です。', english: 'He is a student.' },
      { japanese: '彼と学校へいきます。', furigana: '[彼:かれ]と[学校:がっこう]へ[行:い]きます。', english: 'I go to school with him.' }
    ]
  },
  { 
    id: 'nl5-v19', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かのじょ', 
    readings: ['kanojo'], 
    meanings: ['she', 'girlfriend'], 
    explanation: 'She or girlfriend (彼女).',
    sentences: [
      { japanese: '彼女は先生です。', furigana: '[彼女:かのじょ]は[先生:せんせい]です。', english: 'She is a teacher.' },
      { japanese: '彼女はきれいです。', furigana: '[彼女:かのじょ]はきれいです。', english: 'She is beautiful.' }
    ]
  },
  { 
    id: 'nl5-v20', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'かぞく', 
    readings: ['kazoku'], 
    meanings: ['family'], 
    explanation: 'Family (家族). Useful when talking about where your family lives.',
    sentences: [
      { japanese: 'かぞくはインドにいます。', furigana: '[家族:かぞく]はインドにい[ます:ます]。', english: 'My family is in India.' },
      { japanese: '家族と旅行します。', furigana: '[家族:かぞく]と[旅行:りょこう]します。', english: 'I travel with my family.' }
    ]
  },
  { 
    id: 'nl5-v21', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ひとりで', 
    readings: ['hitoride'], 
    meanings: ['alone', 'by oneself'], 
    explanation: 'Doing something alone (一人で).',
    sentences: [
      { japanese: 'ひとりでデパートへいきました。', furigana: '[一人:ひとり]でデパートへ[行:い]きました。', english: 'I went to the department store alone.' },
      { japanese: 'ひとりで勉強しますか。', furigana: '[一人:ひとり]で[勉強:べんきょう]しますか。', english: 'Do you study alone?' }
    ]
  },
  { 
    id: 'nl5-v22', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'せんしゅう', 
    readings: ['senshuu'], 
    meanings: ['last week'], 
    explanation: 'Last week (先週).',
    sentences: [
      { japanese: 'せんしゅう、京都へいきました。', furigana: '[先週:せんしゅう]、[京都:きょうと]へ[行:い]きました。', english: 'I went to Kyoto last week.' },
      { japanese: '先週、会社をやすみました。', furigana: '[先週:せんしゅう]、[会社:かいしゃ]を[休:やす]みました。', english: 'I rested from the company last week.' }
    ]
  },
  { 
    id: 'nl5-v23', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'こんしゅう', 
    readings: ['konshuu'], 
    meanings: ['this week'], 
    explanation: 'This week (今週).',
    sentences: [
      { japanese: 'こんしゅうは忙しいです。', furigana: '[今週:こんしゅう]は[忙:いそが]しいです。', english: 'I am busy this week.' },
      { japanese: '今週の土曜日に会いましょう。', furigana: '[今週:こんしゅう]の[土曜日:どようび]に[会:あ]いましょう。', english: "Let's meet this Saturday." }
    ]
  },
  { 
    id: 'nl5-v24', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'らいしゅう', 
    readings: ['raishuu'], 
    meanings: ['next week'], 
    explanation: 'Next week (来週).',
    sentences: [
      { japanese: 'らいしゅう、東京へいきます。', furigana: '[来週:らいしゅう]、[東京:とうきょう]へ[行:い]きます。', english: 'I will go to Tokyo next week.' },
      { japanese: 'らいしゅうはやすみです。', furigana: '[来週:らいしゅう]は[休:やす]みです。', english: 'Next week is a holiday/break.' }
    ]
  },
  { 
    id: 'nl5-v25', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'せんげつ', 
    readings: ['sengetsu'], 
    meanings: ['last month'], 
    explanation: 'Last month (先月).',
    sentences: [
      { japanese: 'せんげつ、カメラを買いました。', furigana: '[先月:せんげつ]、カメラを[買:か]いました。', english: 'I bought a camera last month.' },
      { japanese: '先月、京都へ行きました。', furigana: '[先月:せんげつ]、[京都:きょうと]へ[行:い]きました。', english: 'I went to Kyoto last month.' }
    ]
  },
  { 
    id: 'nl5-v26', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'こんげつ', 
    readings: ['kongetsu'], 
    meanings: ['this month'], 
    explanation: 'This month (今月).',
    sentences: [
      { japanese: 'こんげつは何月ですか。', furigana: '[今月:こんげつ]は[何月:なんがつ]ですか。', english: 'What month is this month?' },
      { japanese: '今月も頑張りましょう！', furigana: '[今月:こんげつ]も[頑:がん][張:ば]りましょう！', english: "Let's do our best this month too!" }
    ]
  },
  { 
    id: 'nl5-v27', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'らいげつ', 
    readings: ['raigetsu'], 
    meanings: ['next month'], 
    explanation: 'Next month (来月).',
    sentences: [
      { japanese: 'らいげつ、結婚しますか。', furigana: '[来月:らいげつ]、[結婚:けっこん]しますか。', english: 'Will you get married next month?' },
      { japanese: '来月はインドへ帰ります。', furigana: '[来月:らいげつ]はインドへ[帰:かえ]ります。', english: 'I will return to India next month.' }
    ]
  },
  { 
    id: 'nl5-v28', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'きょねん', 
    readings: ['kyonen'], 
    meanings: ['last year'], 
    explanation: 'Last year (去年).',
    sentences: [
      { japanese: 'きょねん、日本へきました。', furigana: '[去年:きょねん]、[日本:にほん]へ[来:き]ました。', english: 'I came to Japan last year.' },
      { japanese: '去年は学生でした。', furigana: '[去年:きょねん]は[学生:がくせい]でした。', english: 'I was a student last year.' }
    ]
  },
  { 
    id: 'nl5-v29', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'ことし', 
    readings: ['kotoshi'], 
    meanings: ['this year'], 
    explanation: 'This year (今年).',
    sentences: [
      { japanese: 'ことし、２５歳になります。', furigana: '[今年:ことし]、２５[歳:さい]になり[ます:ます]。', english: "I'll turn 25 this year." },
      { japanese: 'ことしはいい年ですね。', furigana: '[今年:ことし]はいい[年:とし]ですね。', english: "It's a good year, isn't it?" }
    ]
  },
  { 
    id: 'nl5-v30', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'らいねん', 
    readings: ['rainen'], 
    meanings: ['next year'], 
    explanation: 'Next year (来年).',
    sentences: [
      { japanese: 'らいねん、日本へいきます。', furigana: '[来年:らいねん]、[日本:にほん]へ[行:い]きます。', english: 'I will go to Japan next year.' },
      { japanese: 'らいねんはどこへいきますか？', furigana: '[来年:らいねん]はどこへ[行:い]きますか？', english: 'Where will you go next year?' }
    ]
  },
  { 
    id: 'nl5-v31', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: '～月', 
    readings: ['-gatsu'], 
    meanings: ['～ month of the year'], 
    explanation: 'Suffix for months (January to December). Note the irregulars for 4 (shigatsu), 7 (shichigatsu), and 9 (kugatsu).',
    sentences: [
      { japanese: '今は４月です。', furigana: 'いまは４[月:がつ]です。', english: "It's April now." },
      { japanese: 'わたしの誕生日は７月です。', furigana: 'わたしの[誕生日:たんじょうび]は７[月:がつ]です。', english: 'My birthday is in July.' }
    ]
  },
  { 
    id: 'nl5-v32', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'いつ', 
    readings: ['itsu'], 
    meanings: ['when'], 
    explanation: 'Question word for time (When). Does NOT take the particle "ni"!',
    sentences: [
      { japanese: 'いつ日本へきましたか。', furigana: 'いつ[日本:にほん]へ[来:き]ましたか。', english: 'When did you come to Japan?' },
      { japanese: 'いつ会いましょうか？', furigana: 'いつ[会:あ]いましょうか？', english: 'When shall we meet?' }
    ]
  },
  { 
    id: 'nl5-v47', 
    lessonNumber: 5, 
    type: 'vocabulary', 
    level: 5, 
    character: 'たんじょうび', 
    readings: ['tanjoubi'], 
    meanings: ['birthday'], 
    explanation: 'Birthday (誕生日). A day for celebration!',
    sentences: [
      { japanese: 'たんじょうびおめでとう！', furigana: '[誕生日:たんじょうび]おめでとう！', english: 'Happy Birthday!' },
      { japanese: 'デレジさんのたんじょうびはいつですか？', furigana: 'デレジさんの[誕生日:たんじょうび]はいつですか？', english: "When is Dheeraj's birthday?" }
    ]
  },

  // --- GRAMMAR ---
  {
    id: 'nl5-g1',
    lessonNumber: 5,
    type: 'grammar',
    level: 5,
    character: 'Place へ いきます / きます / かえります',
    readings: ['Place e ikimasu / kimasu / kaerimasu'],
    meanings: ['Go / Come / Return to [Place]'],
    explanation: 'The particle 「へ」 (pronounced "e") indicates the direction or destination of movement. Use it with movement verbs.',
    sentences: [
      {
        japanese: 'デレジさんは京都へ行きます。',
        furigana: 'デレジさんは[京都:きょうと]へ[行:い]きます。',
        english: 'Mr. Dheeraj goes to Kyoto.',
        segments: [
          { text: 'デレジさん', reading: null }, { text: 'は', reading: null }, { text: '京都', reading: 'きょうと' }, { text: 'へ', reading: null }, { text: '行きます', reading: 'いきます' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl5-g2',
    lessonNumber: 5,
    type: 'grammar',
    level: 5,
    character: 'N(Person) と Verb',
    readings: ['N(Person) to Verb'],
    meanings: ['Do [Verb] with [Person]'],
    explanation: 'The particle 「と」 indicates the person with whom an action is performed.',
    sentences: [
      {
        japanese: '友達と日本へ来ました。',
        furigana: '[友達:ともだち]と[日本:にほん]へ[来:き]ました。',
        english: 'I came to Japan with a friend.',
        segments: [
          { text: '友達', reading: 'ともだち' }, { text: 'と', reading: null }, { text: '日本', reading: 'にほん' }, { text: 'へ', reading: null }, { text: '来ました', reading: 'きました' }, { text: '。', reading: null }
        ]
      }
    ]
  },
  {
    id: 'nl5-g3',
    lessonNumber: 5,
    type: 'grammar',
    level: 5,
    character: 'Vehicle で いきます',
    readings: ['Vehicle de ikimasu'],
    meanings: ['Go by [Vehicle]'],
    explanation: 'The particle 「で」 indicates the means of transportation.',
    sentences: [
      {
        japanese: 'デレジさんは新幹線で行きます。',
        furigana: 'デレジさんは[新幹線:しんかんせん]で[行:い]きます。',
        english: 'Mr. Dheeraj goes by bullet train.',
        segments: [
          { text: 'デレジさん', reading: null }, { text: 'は', reading: null }, { text: '新幹線', reading: 'しんかんせん' }, { text: 'で', reading: null }, { text: '行きます', reading: 'いきます' }, { text: '。', reading: null }
        ]
      }
    ]
  }
];