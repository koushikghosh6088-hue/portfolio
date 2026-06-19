const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   CLEANUP: REMOVE BOUNDING BOX FROM TAGS & ADD ANIMATION
   ========================================================= */

/* Forcefully remove the dark square background inherited from the old styles */
.hero-top-offerings {
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* Add a beautiful floating animation to the individual tags */
.hto-badge {
  animation: floatBadge 4s ease-in-out infinite;
}

/* Stagger the animations so they float organically, not together */
.hto-badge.web { animation-delay: 0s; }
.hto-badge.ai { animation-delay: 1.3s; }
.hto-badge.auto { animation-delay: 2.6s; }

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.hto-badge:hover {
  /* Pause or override the float on hover to prioritize the hover effect */
  animation-play-state: paused;
  transform: translateY(-2px) scale(1.05);
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to remove square box and add floating animation.');
