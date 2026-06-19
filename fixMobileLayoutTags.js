const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');

const cssOverrides = `
/* =========================================================
   FURTHER MOBILE COMPACTION AND SLEEK TAG STYLING
   ========================================================= */

@media (max-width: 900px) {
  /* Pull the whole section higher */
  .hero {
    padding-top: 15px !important; /* Extremely tight to the top */
    padding-bottom: 10px !important;
  }
  
  /* Shrink and lift the robot so it takes less vertical space */
  .global-robot-wrap {
    transform: translateY(-30px) scale(0.85);
    height: 280px !important; /* Force a smaller height so it pushes everything up */
    margin-bottom: -40px !important; /* Pull the text up into the empty space */
  }

  /* Tighten all text and margins */
  .h-badge {
    margin-bottom: 10px !important;
  }
  .h-heading {
    font-size: 2.2rem !important; /* Slightly smaller */
    line-height: 1.1 !important;
  }
  .h-sub {
    margin-top: 10px !important;
    margin-bottom: 15px !important;
    font-size: 0.85rem !important;
  }
  .h-ctas {
    margin-top: 10px !important;
    gap: 10px !important;
  }
  .h-ctas .h-btn-primary, .h-ctas .h-btn-secondary {
    padding: 12px 15px !important; /* Thinner buttons */
  }
  
  /* Pull the services marquee closer */
  .h-trust {
    margin-top: 15px !important;
    padding-bottom: 10px !important;
  }
  .h-social-proof {
    display: none !important; /* If space is absolutely critical, but let's just make it very small */
  }
}

/* Make the tags elegant, colorful, but not obnoxiously bright */
.hto-badge {
  background: rgba(20, 20, 30, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
  color: #e2e8f0 !important;
  border-radius: 40px !important;
  padding: 8px 18px !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 500 !important;
  text-shadow: none !important; /* Remove harsh text glow */
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  letter-spacing: 0.5px !important;
}

/* Subtle, classy, colorful accents on the left edge of each pill */
.hto-badge.web {
  border-left: 3px solid #00d4ff !important;
}
.hto-badge.ai {
  border-left: 3px solid #a855f7 !important;
}
.hto-badge.auto {
  border-left: 3px solid #00ff88 !important;
}

/* On mobile, make them a bit smaller to fit cleanly */
@media (max-width: 900px) {
  .hto-badge {
    padding: 6px 14px !important;
    font-size: 10px !important;
  }
  .hto-icon {
    font-size: 12px !important;
    margin-right: 4px !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to compact mobile layout and beautify tags.');

// Make sure h-social-proof is just smaller, not hidden, to keep the content.
// Actually, I'll just reduce its margin further.
const cssProof = `
@media (max-width: 900px) {
  .h-social-proof {
    display: block !important;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
    font-size: 0.7rem !important;
  }
}
`;
fs.appendFileSync(cssFile, cssProof, 'utf8');
console.log('Appended CSS to squeeze social proof.');
