const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// 1. Remove leftover loader text
const loaderStart = html.indexOf('<!-- Page Loader Removed -->');
const loaderEnd = html.indexOf('<!-- ═══ CSS BACKGROUND ═══ -->');
if (loaderStart !== -1 && loaderEnd !== -1) {
  html = html.substring(0, loaderStart) + '\n<!-- Page Loader Fully Removed -->\n' + html.substring(loaderEnd);
  console.log('Removed leftover loader text.');
}

// 2. Remove mobile-hud completely
const hudStart = html.indexOf('<div class="mobile-hud"');
if (hudStart !== -1) {
  // Let's find the closing div of mobile-hud. It has 3 nested divs: hud-left, hud-right, etc.
  // A simple way is to use regex for the whole block:
  html = html.replace(/<div class="mobile-hud"[\s\S]*?<div class="hud-badge">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');
  console.log('Removed mobile-hud.');
}

// 3. Remove 3D Cube completely
const cubeStart = html.indexOf('<!-- ═══ TOP RIGHT TECH VISUAL (3D CUBE) ═══ -->');
if (cubeStart !== -1) {
  const cubeEnd = html.indexOf('<div class="hero-container">');
  if (cubeEnd !== -1) {
    html = html.substring(0, cubeStart) + html.substring(cubeEnd);
    console.log('Removed 3D Cube.');
  }
}

// 4. Inject clean Offerings Badge
const newBadge = `
  <!-- ═══ HERO TOP OFFERINGS ═══ -->
  <div class="hero-top-offerings">
    <span class="hto-item">Web Apps</span>
    <span class="hto-dot">·</span>
    <span class="hto-item">AI Agents</span>
    <span class="hto-dot">·</span>
    <span class="hto-item">Automations</span>
  </div>
`;
// Inject it after the mobile-top-logo
const logoEnd = html.indexOf('</div>', html.indexOf('<div class="mobile-top-logo"'));
if (logoEnd !== -1 && !html.includes('hero-top-offerings')) {
  html = html.substring(0, logoEnd + 6) + '\n' + newBadge + '\n' + html.substring(logoEnd + 6);
  console.log('Injected clean Offerings Badge.');
}

fs.writeFileSync(indexFile, html, 'utf8');

// --- CSS for the new badge ---
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   HERO TOP OFFERINGS BADGE
   ========================================================= */
.hero-top-offerings {
  position: absolute;
  top: 30px;
  right: 5%;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(10, 10, 20, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 18px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.hto-item {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.hto-dot {
  color: #00d4ff;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 900px) {
  .hero-top-offerings {
    top: 25px;
    right: 15px;
    padding: 6px 12px;
    gap: 8px;
  }
  .hto-item {
    font-size: 9px;
  }
  .hto-dot {
    font-size: 12px;
  }
}
`;
fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS for Offerings Badge.');

// Hide old hud tags via CSS just in case they survived the regex
const extraCss = `
.mobile-hud { display: none !important; opacity: 0 !important; }
.hero-tech-visual { display: none !important; opacity: 0 !important; }
.loader-text { display: none !important; opacity: 0 !important; }
`;
fs.appendFileSync(cssFile, extraCss, 'utf8');

