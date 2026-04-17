const fs = require('fs');
const js = fs.readFileSync('scratch_sodachi.js', 'utf8');

const regex = /.{0,50}furi.{0,50}/g;
const matches = [];
let match;
let i = 0;
while ((match = regex.exec(js)) !== null && i < 20) {
  matches.push(match[0]);
  i++;
}
console.log(matches.join('\n---\n'));
