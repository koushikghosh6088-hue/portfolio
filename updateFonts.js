const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldFont = 'family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap';
const newFont = 'family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap';

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf-8');
  let original = content;
  
  // Replace font link
  if (content.includes(oldFont)) {
    content = content.replace(oldFont, newFont);
  }
  
  // Replace founder name in index.html specifically
  if (file === 'index.html') {
    content = content.replace('Rajdeep Mondal', 'Anirban Roy');
    content = content.replace('Rajdeep drives', 'Anirban drives');
  }
  
  if (content !== original) {
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
  }
});

console.log('Done.');
