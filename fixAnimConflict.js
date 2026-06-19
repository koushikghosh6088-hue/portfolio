const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');

const cssOverrides = `
/* =========================================================
   FIX FOR ROBOT ANIMATION (AVOIDING !IMPORTANT TRANSFORM CONFLICTS)
   ========================================================= */

/* The previous animation was blocked by the !important transforms used for layout sizing. 
   By applying the animation directly to the spline-viewer canvas, it bypasses the conflict! */

@keyframes reachForLogoSpline {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) rotate(0deg); 
  }
  50% { 
    /* Float up and heavily towards the left logo, rotating slightly to look like it's reaching */
    transform: translateY(-25px) translateX(-15px) rotate(-1.5deg); 
  }
}

spline-viewer {
  animation: reachForLogoSpline 5s ease-in-out infinite !important;
  will-change: transform;
  display: block; /* Ensure transform applies cleanly */
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to animate the spline-viewer directly to fix the blocked animation bug.');
