const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const mobilePortFix = `
/* =========================================================
   MOBILE PORTFOLIO FIX
   ========================================================= */
@media (max-width: 900px) {
  .p-port-showcase {
    min-height: 800px !important; /* Give it enough room to show at least one card */
    overflow: visible !important;
  }
  .p-port-scroll {
    max-height: 800px !important;
    padding: 10px !important;
  }
  .p-port-panel {
    position: absolute !important;
    height: 100% !important;
  }
}
`;

if(!css.includes('MOBILE PORTFOLIO FIX')) {
  css += mobilePortFix;
  fs.writeFileSync('style.css', css);
  console.log("Applied mobile portfolio fix to CSS");
}
