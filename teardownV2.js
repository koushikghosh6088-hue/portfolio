const fs = require('fs');
const path = require('path');

// --- 1. INDEX.HTML CLEANUP ---
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Strip loader
html = html.replace(/<!-- ═══ PAGE LOADER ═══ -->[\s\S]*?<\/div>\s*<\/div>/, '<!-- Page Loader Removed -->');

// Strip Mobile HUD
html = html.replace(/<!-- ═══ MOBILE HUD \(FILLS THE VOID\) ═══ -->[\s\S]*?<!-- ═══ HERO/, '<!-- ═══ HERO');

// Strip V2 Section and Banner
const bannerStart = html.indexOf('<div style="background:#8B5CF6;');
if (bannerStart !== -1) {
  const v2End = html.indexOf('</section>', html.indexOf('<section id="home-v2"'));
  if (v2End !== -1) {
    html = html.substring(0, bannerStart) + html.substring(v2End + 10);
  }
}

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Cleaned index.html');


// --- 2. STYLE.CSS CLEANUP ---
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Fix desktop orb color
css = css.replace(/\.orb-1\s*\{[\s\S]*?background:\s*var\(--cyan\);/g, (match) => {
  return match.replace('var(--cyan)', 'var(--purple)');
});

// Restore mobile floating cards
css = css.replace(/\/\* Hide the clunky old floating cards on mobile \*\/[\s\S]*?@media\s*\(max-width:\s*900px\)\s*\{\s*\.h-card\s*\{\s*display:\s*none\s*!important;\s*\}\s*\}/g, '/* Restored mobile floating cards */');

// Remove V2 CSS
const v2CssStart = css.indexOf('/* =========================================================\n   HERO SECTION V2 (A/B TESTING)');
if (v2CssStart !== -1) {
  css = css.substring(0, v2CssStart);
}

fs.writeFileSync(cssFile, css, 'utf8');
console.log('Cleaned style.css');


// --- 3. MAIN.JS CLEANUP ---
const jsFile = path.join(__dirname, 'main.js');
let js = fs.readFileSync(jsFile, 'utf8');

// Add safety to loader logic so it doesn't crash when loader is gone
if (!js.includes('if (!loader) return;')) {
  js = js.replace(/const loader = document\.getElementById\('loader'\);/g, "const loader = document.getElementById('loader');\n  if (!loader) return;");
}

// Strip V2 Logic
const v2JsStart = js.indexOf('/* =========================================================\n   HERO SECTION V2 (A/B TESTING)');
if (v2JsStart !== -1) {
  js = js.substring(0, v2JsStart);
}

fs.writeFileSync(jsFile, js, 'utf8');
console.log('Cleaned main.js');
