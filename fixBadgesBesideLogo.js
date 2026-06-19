const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   UI TWEAK: BADGES HORIZONTAL BESIDE LOGO & BRIGHTER
   ========================================================= */

/* Position Badges Beside the Logo and force horizontal layout */
.hero-top-offerings {
  top: 30px !important;
  right: auto !important;
  left: 200px !important; /* Put beside desktop logo */
  flex-direction: row !important; /* Side by side */
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 12px !important;
}

/* Make badges significantly brighter and more attractive */
.hto-badge {
  background: rgba(25, 25, 45, 0.95) !important;
  border-width: 1px !important;
  border-style: solid !important;
  padding: 8px 16px !important;
  font-weight: 800 !important;
  font-size: 11px !important;
  color: #ffffff !important;
}

.hto-badge.web {
  border-color: rgba(0, 212, 255, 1) !important;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.5) inset, 0 0 25px rgba(0, 212, 255, 0.4) !important;
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.8) !important;
}
.hto-badge.ai {
  border-color: rgba(168, 85, 247, 1) !important;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.5) inset, 0 0 25px rgba(168, 85, 247, 0.4) !important;
  text-shadow: 0 0 8px rgba(168, 85, 247, 0.8) !important;
}
.hto-badge.auto {
  border-color: rgba(0, 255, 136, 1) !important;
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.5) inset, 0 0 25px rgba(0, 255, 136, 0.4) !important;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.8) !important;
}

/* Mobile adjustments to fit side-by-side beside logo */
@media (max-width: 900px) {
  .mobile-top-logo {
    left: 10px !important;
    top: 20px !important;
  }
  .hero-top-offerings {
    top: 25px !important;
    left: 140px !important; /* Closer to the smaller mobile logo */
    gap: 6px !important;
  }
  .hto-badge {
    padding: 6px 10px !important;
    font-size: 9px !important;
  }
}

/* Very small screens: squish them so they don't wrap terribly */
@media (max-width: 400px) {
  .hero-top-offerings {
    left: 120px !important;
    gap: 4px !important;
  }
  .hto-badge {
    padding: 4px 6px !important;
    font-size: 8px !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to align badges horizontally beside logo and make them incredibly bright.');
