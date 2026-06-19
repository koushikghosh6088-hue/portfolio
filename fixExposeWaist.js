const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');

const cssOverrides = `
/* =========================================================
   FINAL MOBILE LAYOUT REFINEMENT: EXPOSE WAIST & 1-LINE HEADING
   ========================================================= */

@media (max-width: 900px) {
  /* 1. Ensure robot is positioned perfectly */
  .global-robot-wrap {
    margin-top: -20px !important; 
    margin-bottom: -10px !important; /* Don't pull text up too much, expose the waist */
  }

  /* 2. Push text down so we can see the robot's waist */
  .hero-content-left {
    margin-top: 0px !important; /* Removed the heavy negative margin */
  }

  /* 3. Make "That Grow Your Business." fit on one line */
  .h-heading {
    font-size: 1.6rem !important; /* Smaller so it fits on one line */
    line-height: 1.1 !important;
    white-space: nowrap !important; /* Force it to stay on one line */
  }
  
  .h-badge {
    margin-bottom: 5px !important;
    font-size: 0.65rem !important; /* Shrink badge slightly */
    padding: 4px 10px !important;
  }

  /* 4. Shrink the paragraph heavily to save vertical space */
  .h-sub {
    font-size: 0.7rem !important;
    line-height: 1.3 !important;
    margin-top: 5px !important;
    margin-bottom: 10px !important;
    padding: 0 5px !important;
    white-space: normal !important;
  }

  /* 5. Keep buttons side-by-side but reduce top margin */
  .h-ctas {
    margin-top: 10px !important; /* Reduced from 30px */
  }
  .h-ctas .h-btn-primary, .h-ctas .h-btn-secondary {
    padding: 10px 5px !important;
    font-size: 0.75rem !important;
  }

  /* 6. Pull the marquee up so it fits above the bottom nav */
  .h-trust {
    margin-top: 15px !important; /* Reduced from 40px */
    padding-bottom: 5px !important; /* Reduced padding */
  }

  /* 7. Completely hide social proof to save space */
  .h-social-proof {
    display: none !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to expose waist, 1-line heading, and squeeze lower elements.');
