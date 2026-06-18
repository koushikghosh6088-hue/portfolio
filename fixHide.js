const fs = require('fs');

const fixCss = `
/* ULTIMATE MOBILE HIDE FIX */
.o-cs-card.hide {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
}
@media (max-width: 900px) {
  .o-cs-card.hide {
    display: none !important;
  }
}
`;

fs.appendFileSync('style.css', '\n' + fixCss);
console.log("Appended ultimate hide fix");
