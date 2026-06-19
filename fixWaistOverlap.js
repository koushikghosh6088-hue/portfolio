const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');

const cssOverrides = `
/* =========================================================
   PERFECT MOBILE LAYOUT BALANCE (ROBOT WAIST OVERLAP)
   ========================================================= */

@media (max-width: 900px) {
  /* 1. Shift the robot slightly lower from the ceiling */
  .global-robot-wrap {
    margin-top: -20px !important; 
    margin-bottom: 0px !important; 
  }

  /* 2. Pull the text block heavily UP so it starts at the robot's waist */
  .hero-content-left {
    margin-top: -100px !important; /* Aggressively pull up */
    position: relative;
    z-index: 10; /* Ensure text is clickable and sits above the robot canvas */
  }

  /* 3. Lower the buttons so they have breathing room */
  .h-ctas {
    margin-top: 30px !important;
  }

  /* 4. Lower the Our Services marquee so it breathes at the bottom */
  .h-trust {
    margin-top: 40px !important;
    padding-bottom: 20px !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to balance robot, text overlap, and button spacing.');
