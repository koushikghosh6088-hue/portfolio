const fs = require('fs');
const path = require('path');

// --- 1. INDEX.HTML MODIFICATIONS ---
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Strip Floating Cards
html = html.replace(/<!-- Floating UI Cards -->[\s\S]*?<div class="global-robot-wrap"/, '<div class="global-robot-wrap"');

// Strip Scroll Indicator
html = html.replace(/<a href="#services" class="scroll-indicator" aria-label="Scroll down">[\s\S]*?<\/a>/, '<!-- Scroll indicator removed -->');

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Cleaned index.html: Removed Floating Cards and Scroll Indicator');

// --- 2. STYLE.CSS MODIFICATIONS ---
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   HERO BUTTON VISIBILITY FIX
   ========================================================= */
.h-btn-primary {
  background: linear-gradient(135deg, #a855f7, #6d28d9) !important;
  color: #ffffff !important;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.6) !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
  opacity: 1 !important;
  font-weight: 800 !important;
  letter-spacing: 0.5px !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}
.h-btn-primary:hover {
  box-shadow: 0 0 35px rgba(168, 85, 247, 0.8) !important;
}
`;
fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Updated style.css: Enhanced Start Your Project button visibility');
