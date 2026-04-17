const fs = require('fs');
const path = require('path');

const curriculumDir = './src/lib/curriculum';

// Normalization Schema:
// Original: N1=5, N2=4, N3=3, N4=2, N5=1
// Goal:     N1=1, N2=2, N3=3, N4=4, N5=5

const replacements = [
  { glob: /lesson\d+\.ts|n5.*\.ts/, from: /level: 1/g, to: 'level: 5' },
  { glob: /n4.*\.ts/, from: /level: 2/g, to: 'level: 4' },
  { glob: /n2.*\.ts/, from: /level: 4/g, to: 'level: 2' },
  { glob: /n1.*\.ts/, from: /level: 5/g, to: 'level: 1' },
];

fs.readdirSync(curriculumDir).forEach(file => {
  const filePath = path.join(curriculumDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  replacements.forEach(r => {
    if (r.glob.test(file)) {
      if (r.from.test(content)) {
        content = content.replace(r.from, r.to);
        changed = true;
      }
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});
