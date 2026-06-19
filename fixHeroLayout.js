const fs = require('fs');
const path = require('path');

// 1. Modifying index.html
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Strip the absolute hero-top-offerings completely
html = html.replace(/<div class="hero-top-offerings">[\s\S]*?<\/div>/, '');

// Change POWERED BY to OUR SERVICES
html = html.replace('<span class="h-trust-label">POWERED BY:</span>', '<span class="h-trust-label">OUR SERVICES:</span>');

// Define the new bright badges for the marquee
const newMarqueeItems = `
  <span class="hto-badge web"><span class="hto-icon">🌐</span> Web Apps</span>
  <span class="hto-badge ai"><span class="hto-icon">🤖</span> AI Agents</span>
  <span class="hto-badge auto"><span class="hto-icon">⚡</span> Automations</span>
  <span class="hto-badge web"><span class="hto-icon">📱</span> Mobile Apps</span>
  <span class="hto-badge ai"><span class="hto-icon">💬</span> Chatbots</span>
  <span class="hto-badge auto"><span class="hto-icon">⚙️</span> Custom Software</span>
`;

// Replace both h-trust-items contents
html = html.replace(/<div class="h-trust-items">\s*<span>Next\.js<\/span>[\s\S]*?<\/div>/g, \`<div class="h-trust-items">\n\${newMarqueeItems}\n</div>\`);

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Updated index.html: Removed absolute tags and added them to marquee.');

// 2. Modifying style.css
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = \`
/* =========================================================
   MOBILE HERO LAYOUT ADJUSTMENTS
   ========================================================= */

/* Pull the entire hero section up on mobile so everything fits in the viewport */
@media (max-width: 900px) {
  .hero {
    padding-top: 30px !important;
    min-height: auto !important;
    height: 100vh !important;
  }
  .hero-container {
    padding-top: 10px !important;
  }
  /* Optional: Move the robot itself up slightly */
  .global-robot-wrap {
    transform: translateY(-25px);
  }
  /* Pull the social proof up */
  .h-social-proof {
    margin-top: 10px !important;
    margin-bottom: 30px !important;
  }
  /* Ensure CTA area is tight */
  .h-ctas {
    margin-top: 15px !important;
  }
}

/* Ensure the marquee container properly lays out the complex badges */
.h-trust-items {
  display: flex !important;
  align-items: center !important;
  gap: 15px !important; /* Space between badges */
}

/* Ensure the badges don't look weird inside the marquee */
.h-trust-items .hto-badge {
  flex-shrink: 0; /* Prevent them from squishing */
  margin: 0;
  white-space: nowrap;
}

/* Change marquee text color if needed */
.h-trust-label {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 800 !important;
  letter-spacing: 1px !important;
}
\`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to pull hero up and style marquee badges.');
