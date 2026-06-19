const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'style.css');

const cssOverrides = `
/* =========================================================
   MODERN & BIGGER TAG AESTHETIC UPGRADE
   ========================================================= */

/* Overhaul the base pill to look incredibly premium (Vercel/Apple style) */
.hto-badge {
  background: rgba(15, 15, 25, 0.8) !important; /* Darker, richer glass */
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15) !important;
  border-radius: 50px !important;
  padding: 10px 24px !important; /* Bigger padding */
  font-family: 'Inter', sans-serif !important;
  font-weight: 700 !important; /* Bolder text */
  font-size: 14px !important; /* Bigger font */
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
}

/* Remove the old solid left-border */
.hto-badge.web, .hto-badge.ai, .hto-badge.auto {
  border-left: 1px solid rgba(255, 255, 255, 0.1) !important; 
}

/* Apply stunning, highly-readable vibrant colors to the text and a delicate border glow */
.hto-badge.web { 
  color: #00d4ff !important; 
  border-color: rgba(0, 212, 255, 0.3) !important; 
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.1), inset 0 1px 1px rgba(255,255,255,0.15) !important;
}
.hto-badge.ai { 
  color: #d946ef !important; /* Bright Fuchsia/Purple */
  border-color: rgba(217, 70, 239, 0.3) !important; 
  box-shadow: 0 4px 15px rgba(217, 70, 239, 0.1), inset 0 1px 1px rgba(255,255,255,0.15) !important;
}
.hto-badge.auto { 
  color: #00ff88 !important; 
  border-color: rgba(0, 255, 136, 0.3) !important; 
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.1), inset 0 1px 1px rgba(255,255,255,0.15) !important;
}

/* Mobile specific sizing (Make them much bigger than before but still fit) */
@media (max-width: 900px) {
  .hto-badge {
    padding: 9px 20px !important;
    font-size: 11px !important;
  }
  .hto-icon {
    font-size: 14px !important;
    margin-right: 6px !important;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to enlarge tags and apply premium modern styling.');
