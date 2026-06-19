const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   FIX FOR TAG CLIPPING & ROBOT SIZING
   ========================================================= */

/* 1. Prevent the old h-trust span CSS from destroying the new tags */
.h-trust-items span {
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  color: inherit !important;
}

/* Re-apply the pill background ONLY to the badge container itself */
.hto-badge {
  background: rgba(20, 20, 30, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 8px 18px !important;
  color: #e2e8f0 !important;
}
.hto-icon {
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
}

/* 2. Shrink the robot significantly and pull text up so it physically fits on small screens */
@media (max-width: 900px) {
  .hero {
    height: auto !important; /* Don't force 100vh if it causes clipping */
    min-height: 100vh !important;
  }
  .global-robot-wrap {
    transform: translateY(-40px) scale(0.65) !important; /* Scale it down massively */
    margin-bottom: -120px !important; /* Pull the text up aggressively */
  }
  .h-heading {
    margin-top: 0 !important;
  }
  .h-trust-track {
    padding-bottom: 20px !important; /* Give the tags breathing room so they don't clip at the bottom */
  }
  /* Optional: ensure badges are padded enough to not get clipped by overflow */
  .h-trust-slider {
    padding: 5px 0 !important;
    overflow: visible !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to fix tag clipping and pull robot up.');
