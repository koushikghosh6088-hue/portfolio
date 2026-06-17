const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('@media')) {
    console.log(`Line ${i+1}: ${lines[i].trim()}`);
  }
}
