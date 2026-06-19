const fs = require('fs');
const path = require('path');

// 1. Update index.html
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Replace all instances of loading_logo.png with new_logo.png
html = html.replace(/loading_logo\.png/g, 'new_logo.png');

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Updated index.html: Swapped loading_logo.png to new_logo.png');

// 2. Add sizing to style.css
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   NEW LOGO SIZING
   ========================================================= */

.hero-mobile-logo-img {
  width: auto !important;
  max-width: 200px !important; /* Large enough for desktop */
  height: auto !important;
  display: block !important;
  /* Remove any old mask effects if they were applied globally */
  -webkit-mask-image: none !important;
  mask-image: none !important;
  filter: none !important;
}

@media (max-width: 900px) {
  .hero-mobile-logo-img {
    max-width: 150px !important; /* Smaller on mobile */
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended CSS to appropriately size the new logo.');
