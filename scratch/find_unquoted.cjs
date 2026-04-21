const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\trajk\\OneDrive\\Desktop\\jhakkas nihongo\\src\\lib\\curriculum';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        if (line.includes('furigana:')) {
            const part = line.split('furigana:')[1].trim();
            if (part && !part.startsWith("'") && !part.startsWith('"') && !part.startsWith('{') && !part.startsWith('[')) {
                console.log(`${file}:${i + 1}: ${line.trim()}`);
            }
        }
    });
});
