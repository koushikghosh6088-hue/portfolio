const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// 1. Fix mobile industries menu
const mobileMenuFix = `
/* =========================================================
   MOBILE INDUSTRIES MENU FIX
   ========================================================= */
@media (max-width: 900px) {
  .p-ind-menu {
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    overflow-x: visible !important;
    padding-bottom: 20px !important;
    gap: 10px !important;
  }
  .p-ind-btn {
    flex: 0 0 auto !important;
    font-size: 13px !important;
    padding: 10px 16px !important;
    border-radius: 999px !important;
    gap: 8px !important;
  }
  .ind-icon {
    font-size: 16px !important;
  }
}
`;
css += mobileMenuFix;

fs.writeFileSync('style.css', css);
console.log("Updated mobile css fix");
