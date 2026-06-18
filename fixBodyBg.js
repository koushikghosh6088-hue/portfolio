const fs = require('fs');
let cssText = fs.readFileSync('style.css', 'utf8');

// Revert html and body base variables back to solid colors so the site doesn't turn white!
cssText = cssText.replace(/--bg:\s*rgba\(3, 7, 18, 0.6\);/g, '--bg: #030712;');
cssText = cssText.replace(/--dark:\s*rgba\(7, 11, 20, 0.6\);/g, '--dark: #070b14;');

// Make sure .site-bg is above the body background but below the sections
// z-index: 0 works fine for .site-bg since sections usually have z-index > 0 or position: relative
cssText = cssText.replace(/\.site-bg\s*{\s*z-index:\s*-10\s*!important;\s*opacity:\s*0\.8;\s*/g, '.site-bg { z-index: 0; opacity: 0.8; ');

// Make sure sections sit above site-bg
cssText = cssText.replace(/\.o-section\s*{\s*background:\s*transparent;/g, '.o-section { background: transparent; position: relative; z-index: 1;');

fs.writeFileSync('style.css', cssText);
console.log("Fixed solid backgrounds for html/body");
