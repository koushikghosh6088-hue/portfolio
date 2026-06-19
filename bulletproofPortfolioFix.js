const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const bulletproofPortfolioCss = `
/* =========================================================
   BULLETPROOF PORTFOLIO REDESIGN
   ========================================================= */

#portfolio .p-ind-showcase {
  background: linear-gradient(160deg, rgba(15, 21, 38, 0.8) 0%, rgba(8, 11, 20, 0.9) 100%) !important;
  backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
  border-radius: 24px !important;
  min-height: auto !important;
  position: relative !important;
  overflow: hidden !important;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5) !important;
}

#portfolio .p-ind-panel {
  position: static !important; /* Remove absolute positioning! */
  display: none !important; /* Hide by default */
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
  padding: 0 !important;
  pointer-events: auto !important;
}

#portfolio .p-ind-panel.active {
  display: block !important; /* Only show active */
}

#portfolio .p-port-scroll {
  max-height: 800px;
  overflow-y: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 900px) {
  #portfolio .p-ind-showcase {
    min-height: auto !important;
    overflow: visible !important;
  }
  #portfolio .p-port-scroll {
    max-height: none !important;
    overflow-y: visible !important;
    padding: 15px !important;
  }
  #portfolio .o-cs-card {
    flex-direction: column !important;
    width: 100% !important;
    margin: 0 !important;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    display: flex !important;
  }
}
`;

css += bulletproofPortfolioCss;
fs.writeFileSync('style.css', css);
console.log("Applied bulletproof portfolio CSS");
