const parseFurigana = (input) => {
  if (!input) return [];
  
  const segments = [];
  // Split into alternating parts: text and brackets
  // Example: "A[B]C[D:E]F" -> ["A", "[B]", "C", "[D:E]", "F"]
  const parts = input.split(/(\[[^\]]+\])/g).filter(Boolean);
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    if (part.startsWith('[') && part.endsWith(']')) {
      const content = part.slice(1, -1);
      if (content.includes(':')) {
        // Case: [Base:Reading]
        const [base, reading] = content.split(':');
        segments.push({ text: base, reading });
      } else {
        // Case: Base[Reading]
        // Look at the previous segment. If it was plain text, it's our base.
        const prev = segments[segments.length - 1];
        if (prev && prev.reading === null) {
          prev.reading = content;
        } else {
          // Orphaned reading? Treat bracket content as text or handle fallback
          segments.push({ text: part, reading: null });
        }
      }
    } else {
      // Plain text
      segments.push({ text: part, reading: null });
    }
  }
  
  return segments;
};

const testCases = [
  "あの[人:ひと]は[誰:だれ]ですか？",
  "明日[あした]はいい天気です。",
  "[私:わたし]はエンジニアです。",
  "おはようございます",
  "東京[とうきょう]に行[い]きます。",
  "[私:わたし]たちは[学生:がくせい]です。",
  "[私:わたし]たちは[同:おな]じチームです。"
];

const stripFurigana = (input) => {
  if (!input) return '';
  return input
    .replace(/\[([^:\]]+):[^\]]+\]/g, '$1') // [Base:Reading] -> Base
    .replace(/([^\[\]]+?)\[[^:\]]+\]/g, '$1') // Base[Reading] -> Base
    .replace(/[\[\]]/g, ''); // Clean up any stray brackets
};

testCases.forEach(tc => {
  console.log(`Input: ${tc}`);
  const segments = parseFurigana(tc);
  console.log('Segments:', JSON.stringify(segments, null, 2));
  console.log('Stripped:', stripFurigana(tc));
  console.log('---');
});
