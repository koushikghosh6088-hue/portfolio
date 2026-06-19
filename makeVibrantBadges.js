const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

const oldBadgeRegex = /<div class="hero-top-offerings">[\s\S]*?<\/div>/;
const newBadgeHtml = `
  <div class="hero-top-offerings">
    <span class="hto-badge web"><span class="hto-icon">🌐</span> Web Apps</span>
    <span class="hto-badge ai"><span class="hto-icon">🤖</span> AI Agents</span>
    <span class="hto-badge auto"><span class="hto-icon">⚡</span> Automations</span>
  </div>
`;

if (html.match(oldBadgeRegex)) {
  html = html.replace(oldBadgeRegex, newBadgeHtml.trim());
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Replaced HTML for Offerings Badge');
} else {
  console.log('Could not find old hero-top-offerings to replace in HTML.');
}

const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Strip old CSS
const oldCssStart = css.indexOf('/* =========================================================\n   HERO TOP OFFERINGS BADGE');
if (oldCssStart !== -1) {
  css = css.substring(0, oldCssStart);
}

// Append new vibrant CSS
const cssOverrides = `
/* =========================================================
   HERO TOP OFFERINGS BADGE (VIBRANT)
   ========================================================= */
.hero-top-offerings {
  position: absolute;
  top: 30px;
  right: 5%;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hto-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(15, 15, 25, 0.7);
  border: 1px solid;
  padding: 8px 14px;
  border-radius: 30px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-family: 'Outfit', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hto-badge:hover {
  transform: translateY(-2px);
}

/* Distinct glowing borders and text colors */
.hto-badge.web {
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 0 12px rgba(0, 212, 255, 0.15) inset, 0 4px 15px rgba(0,0,0,0.5);
}
.hto-badge.web:hover { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3) inset, 0 8px 25px rgba(0, 212, 255, 0.2); }

.hto-badge.ai {
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.15) inset, 0 4px 15px rgba(0,0,0,0.5);
}
.hto-badge.ai:hover { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3) inset, 0 8px 25px rgba(168, 85, 247, 0.2); }

.hto-badge.auto {
  border-color: rgba(0, 255, 136, 0.5);
  box-shadow: 0 0 12px rgba(0, 255, 136, 0.15) inset, 0 4px 15px rgba(0,0,0,0.5);
}
.hto-badge.auto:hover { box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) inset, 0 8px 25px rgba(0, 255, 136, 0.2); }

.hto-icon {
  font-size: 14px;
}

@media (max-width: 900px) {
  .hero-top-offerings {
    top: 20px;
    right: 15px;
    flex-direction: column; /* Stack vertically to fit mobile screen cleanly */
    align-items: flex-end;
    gap: 8px;
  }
  .hto-badge {
    padding: 6px 12px;
    font-size: 10px;
  }
  .hto-icon {
    font-size: 12px;
  }
}
`;
fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended vibrant CSS for Offerings Badge.');
