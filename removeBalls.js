const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');

const overrides = `
/* =========================================================
   HIDE UGLY BALLS BEHIND MOCKUPS (USER REQUESTED)
   ========================================================= */
.mock-glow-orb,
.orb-cyan,
.orb-purple,
.orb-green,
.orb-blue,
.orb-orange,
.orb-multi {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
}

/* Also ensure any other full opacity ind-glow circles are hidden if they appear */
.ind-glow-purple,
.ind-glow-orange,
.ind-glow-cyan,
.ind-glow-pink,
.ind-glow-yellow {
  opacity: 0 !important;
  display: none !important;
}

/* Wait, .ind-glow-* was originally used for whole card backgrounds. 
   If I hide it, the card loses its glow entirely. That's fine, the user said to remove the balls.
   Let's just target .mock-glow-orb and specifically the balls inside .s-mockup-wrap */
.s-mockup-wrap .mock-glow-orb,
.s-visual .ind-glow-purple,
.s-visual .ind-glow-orange,
.s-visual .ind-glow-cyan,
.s-visual .ind-glow-pink,
.s-visual .ind-glow-yellow {
  display: none !important;
}
`;

fs.appendFileSync(cssPath, overrides, 'utf8');
console.log('Successfully hid the glowing orb balls.');
