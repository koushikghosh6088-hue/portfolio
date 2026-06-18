const fs = require('fs');

function rebrandToPurple(content) {
  let text = content;
  
  // 1. Replace Hex Colors
  text = text.replace(/#00F5C4/gi, '#8B5CF6'); // Teal -> Purple
  text = text.replace(/#00d4ff/gi, '#8B5CF6'); // Cyan -> Purple
  text = text.replace(/#00ff88/gi, '#D8B4FE'); // Green -> Light Purple (for gradients)
  text = text.replace(/#0066ff/gi, '#7C3AED'); // Dark Blue -> Dark Purple

  // 2. Replace RGBA Colors
  text = text.replace(/rgba\(0\s*,\s*245\s*,\s*196\s*,/g, 'rgba(139, 92, 246,'); // Teal rgb
  text = text.replace(/rgba\(0\s*,\s*212\s*,\s*255\s*,/g, 'rgba(139, 92, 246,'); // Cyan rgb

  // 3. Make Section Backgrounds Transparent so site-bg animation shows
  text = text.replace(/--o-bg:\s*#080B14;/g, '--o-bg: rgba(8, 11, 20, 0.3);');
  text = text.replace(/--o-surf:\s*#0F1526;/g, '--o-surf: rgba(15, 21, 38, 0.4);');
  
  // 4. Change base darks to be slightly transparent
  text = text.replace(/--bg:\s*#030712;/g, '--bg: rgba(3, 7, 18, 0.6);');
  text = text.replace(/--dark:\s*#070b14;/g, '--dark: rgba(7, 11, 20, 0.6);');
  
  // 5. Change accent variable if it exists
  text = text.replace(/--accent:\s*var\(--cyan\);/g, '--accent: var(--purple);');

  return text;
}

// Update style.css
try {
  let cssText = fs.readFileSync('style.css', 'utf8');
  cssText = rebrandToPurple(cssText);
  
  // Explicitly make .o-section background transparent
  cssText = cssText.replace(/\.o-section\s*{\s*background:\s*var\(--o-bg\);/g, '.o-section { background: transparent;');
  
  // Fix specific hardcoded backgrounds in my overhaul that might block the hero animation
  cssText = cssText.replace(/background:\s*#0A0D14;/g, 'background: rgba(10, 13, 20, 0.5);');
  
  // Explicitly ensure site-bg stays fully in background and sections don't block it
  cssText = cssText.replace(/\.site-bg\s*{/g, '.site-bg { z-index: -10 !important; opacity: 0.8; ');

  fs.writeFileSync('style.css', cssText);
  console.log("Updated style.css");
} catch (e) {
  console.log("Error updating style.css", e);
}

// Update index.html
try {
  let htmlText = fs.readFileSync('index.html', 'utf8');
  htmlText = rebrandToPurple(htmlText);
  fs.writeFileSync('index.html', htmlText);
  console.log("Updated index.html");
} catch (e) {
  console.log("Error updating index.html", e);
}
