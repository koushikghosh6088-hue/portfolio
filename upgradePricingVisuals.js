const fs = require('fs');
const path = require('path');

const cssOverrides = `
/* =========================================================
   PRICING VISUAL UPGRADE (OVERRIDING OLD STYLES)
   ========================================================= */

/* PREMIUM SEGMENTED CONTROL TABS */
#pricing .port-tab-bar {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px) !important;
  padding: 8px !important;
  border-radius: 40px !important;
  display: inline-flex !important;
  gap: 8px !important;
}

.price-tab {
  background: transparent !important;
  border: none !important;
  color: var(--o-mut) !important;
  padding: 14px 28px !important;
  border-radius: 30px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.price-tab:hover {
  color: #fff !important;
}

.price-tab.active {
  background: rgba(255, 255, 255, 0.15) !important;
  color: #fff !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2) !important;
  transform: scale(1.02) !important;
}

/* MASSIVE ZERO-LAG AMBIENT GLOWS */
#pricing .o-pr-card {
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}

#pricing .o-pr-card::before {
  content: '' !important;
  position: absolute !important;
  top: -50% !important; left: -50% !important;
  width: 200% !important; height: 200% !important;
  border-radius: 0 !important;
  opacity: 0.15 !important;
  transition: opacity 0.5s ease !important;
}

#pricing .o-pr-card[data-category="wa"]::before { background: radial-gradient(circle at center, rgba(37,211,102,0.9) 0%, transparent 60%) !important; }
#pricing .o-pr-card[data-category="erp"]::before { background: radial-gradient(circle at center, rgba(249,115,22,0.9) 0%, transparent 60%) !important; }
#pricing .o-pr-card[data-category="web"]::before { background: radial-gradient(circle at center, rgba(6,182,212,0.9) 0%, transparent 60%) !important; }
#pricing .o-pr-card[data-category="bot"]::before { background: radial-gradient(circle at center, rgba(236,72,153,0.9) 0%, transparent 60%) !important; }

#pricing .o-pr-card:hover::before {
  opacity: 0.4 !important;
}

/* FEATURE LIST ICONS GLOW */
#pricing .o-pr-feat li span {
  font-size: 16px !important;
  margin-right: 12px !important;
  text-shadow: 0 0 12px currentColor !important;
}

/* MAKE CENTER CARD POP MORE */
#pricing .o-pr-card.popular {
  transform: scale(1.05) !important;
  z-index: 5 !important;
}
#pricing .o-pr-card.popular:hover {
  transform: scale(1.08) !important;
}

@media (max-width: 900px) {
  #pricing .port-tab-bar {
    width: 100% !important;
    border-radius: 20px !important;
    padding: 10px !important;
  }
  .price-tab {
    padding: 12px 20px !important;
    font-size: 14px !important;
  }
  #pricing .o-pr-card.popular {
    transform: scale(1) !important;
  }
  #pricing .o-pr-card.popular:hover {
    transform: scale(1.02) !important;
  }
}
`;

const stylePath = path.join(__dirname, 'style.css');
fs.appendFileSync(stylePath, cssOverrides, 'utf8');
console.log('Successfully appended pricing visual upgrades.');

// Wait, the .port-tab-bar inside #pricing needs to be centered.
// Let's modify index.html slightly to wrap the .port-tab-bar in a centering div if it isn't already.
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
// It already has <div class="port-tab-bar" style="margin-top: 40px; margin-bottom: 50px;">
// But to center it using inline-flex we should wrap it.
// Let's just wrap it.
if (html.includes('<div class="port-tab-bar" style="margin-top: 40px; margin-bottom: 50px;">')) {
  html = html.replace('<div class="port-tab-bar" style="margin-top: 40px; margin-bottom: 50px;">', '<div style="text-align: center;"><div class="port-tab-bar" style="margin-top: 40px; margin-bottom: 50px; display: inline-flex;">');
  // Also we need to find the closing div for port-tab-bar
  // It's followed by <div class="price-wrap">
  html = html.replace('</div>\n\n  <div class="price-wrap">', '</div></div>\n\n  <div class="price-wrap">');
  fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
  console.log('HTML updated to center tab bar.');
} else {
  // It might have been updated already.
  console.log('HTML not matching exactly, assuming it is fine.');
}
