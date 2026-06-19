const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');

const cssOverrides = `
/* =========================================================
   ULTIMATE MOBILE HERO LAYOUT FIX (NO ROBOT SHRINKING)
   ========================================================= */

@media (max-width: 900px) {
  /* 1. Restore the robot's heroic size and pull it high up into the empty space */
  .global-robot-wrap {
    transform: translateY(-20px) scale(1) !important; /* Restore full size */
    height: 380px !important; /* Give it back its height */
    margin-top: -60px !important; /* Pull it way up under the logo */
    margin-bottom: -60px !important; /* Pull text up into the robot's legs */
  }

  /* 2. Tighten text significantly to save vertical space */
  .h-badge {
    margin-bottom: 5px !important;
  }
  .h-heading {
    font-size: 2.1rem !important;
    line-height: 1.05 !important;
    margin-bottom: 5px !important;
  }
  .h-sub {
    font-size: 0.75rem !important;
    line-height: 1.3 !important;
    margin-top: 5px !important;
    margin-bottom: 10px !important;
    padding: 0 10px !important;
  }

  /* 3. Place buttons side-by-side to save massive vertical height (50px+) */
  .h-ctas {
    display: flex !important;
    flex-direction: row !important; /* Side by side */
    justify-content: center !important;
    gap: 8px !important;
    margin-top: 10px !important;
    width: 100% !important;
  }
  .h-ctas .h-btn-primary, .h-ctas .h-btn-secondary {
    min-width: 0 !important;
    width: 48% !important; /* Split the width perfectly */
    padding: 12px 5px !important;
    font-size: 0.8rem !important;
    margin: 0 !important;
  }

  /* 4. Pull up the marquee so it's fully visible */
  .h-trust {
    margin-top: 15px !important;
    padding-bottom: 10px !important;
  }
  
  /* 5. Fix tags being cut off (override absolute heights) */
  .h-trust-slider {
    height: auto !important;
    overflow: visible !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to restore robot size and put buttons side-by-side.');
