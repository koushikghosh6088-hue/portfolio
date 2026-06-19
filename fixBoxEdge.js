const fs = require('fs');
const path = require('path');

const styleFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   PERFECT LOADER MASKING (REMOVE IMAGE BOX EDGES)
   ========================================================= */
.loader-image-new {
  /* Use a radial mask to smoothly erase the hard square edges of the image */
  -webkit-mask-image: radial-gradient(circle at center, black 45%, transparent 65%) !important;
  mask-image: radial-gradient(circle at center, black 45%, transparent 65%) !important;
  /* Also increase contrast so if the background isn't pure black, it gets pushed closer to black for the screen blend */
  filter: brightness(1.2) contrast(1.5) !important;
}
`;

fs.appendFileSync(styleFile, cssOverrides, 'utf8');
console.log('Successfully appended perfect masking CSS.');
