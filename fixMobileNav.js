const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const fixCSS = `
/* Hide mobile bottom nav on desktop */
@media (min-width: 901px) {
  .mobile-bottom-nav {
    display: none !important;
  }
}
`;

fs.appendFileSync('style.css', fixCSS);
console.log("Appended fix for mobile nav on desktop.");
