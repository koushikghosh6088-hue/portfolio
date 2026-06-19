const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   DESKTOP ALIGNMENT FIXES (LOGO & TAGS)
   ========================================================= */

/* 1. Make the glowing neon logo visible on Desktop too, and hide the old dull SVG logo */
.mobile-top-logo {
  display: block !important;
  position: absolute !important;
  top: 15px !important;
  left: 20px !important;
  transform: none !important;
  width: auto !important;
  z-index: 9999 !important; /* Ensure it stays above everything */
}
.nav-logo {
  display: none !important;
}

/* 2. Move the Offerings Badges down on Desktop so they don't overlap the Top Navbar */
.hero-top-offerings {
  top: 120px !important; /* Pushed below the navbar on desktop */
  right: 5% !important;
  flex-direction: column !important; /* Stack them vertically to match the cool mobile HUD look */
  align-items: flex-end !important;
  gap: 12px !important;
}

/* Restore top position ONLY for mobile since the navbar is at the bottom on mobile */
@media (max-width: 900px) {
  .hero-top-offerings {
    top: 20px !important;
    right: 15px !important;
    gap: 8px !important;
  }
}

/* Ensure the navbar doesn't cover the glowing logo if it's sticky */
#navbar {
  z-index: 9000 !important;
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Successfully appended desktop alignment CSS fixes.');
