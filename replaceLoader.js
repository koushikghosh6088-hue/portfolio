const fs = require('fs');
const path = require('path');

const index = path.join(__dirname, 'index.html');
let html = fs.readFileSync(index, 'utf8');

const oldSvgRegex = /<svg class="loader-logo"[^>]*>[\s\S]*?<\/svg>/;
const newImg = '<img src="loading_logo.png" alt="Joint AI Labs Loading" class="loader-image-new" />';

if(oldSvgRegex.test(html)) {
  html = html.replace(oldSvgRegex, newImg);
  fs.writeFileSync(index, html, 'utf8');
  console.log('Successfully replaced loader SVG with image.');
} else {
  console.log('Could not find loader SVG.');
}

const stylePath = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   NEW LOADING LOGO ANIMATION (ZERO-LAG GPU ACCELERATED)
   ========================================================= */
.loader-image-new {
  width: 250px;
  max-width: 80vw;
  height: auto;
  margin-bottom: 25px;
  animation: pulseLogo 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 10000;
}

@keyframes pulseLogo {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.03); opacity: 0.85; }
}

/* Ensure the loader bar and text look good below it */
.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

fs.appendFileSync(stylePath, cssOverrides, 'utf8');
console.log('Successfully appended loader CSS.');
