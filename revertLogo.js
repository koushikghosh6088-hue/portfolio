const fs = require('fs');
const path = require('path');

// 1. Revert index.html
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Swap back to loading_logo.png
html = html.replace(/new_logo\.png/g, 'loading_logo.png');

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Reverted index.html back to loading_logo.png');

// 2. Revert style.css
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Remove the block that was added for new_logo.png
const blockToRemove = `/* =========================================================
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
}`;

css = css.replace(blockToRemove, '');
fs.writeFileSync(cssFile, css, 'utf8');
console.log('Removed sizing CSS for new_logo.png from style.css');
