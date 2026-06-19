const fs = require('fs');
const path = require('path');

// 1. Update index.html
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Replace canvas with lag-free cyber grid
html = html.replace('<canvas id="hero-particles"></canvas>', '<div class="cyber-grid-wrap"><div class="cyber-grid"></div></div>');

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Replaced canvas with cyber grid in index.html');

// 2. Remove laggy JS loop from main.js
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

// Extract the exact block to delete
const startMarker = '// --- Particle Canvas ---';
const endMarker = '// --- Text Rotator ---';
const startIndex = mainJs.indexOf(startMarker);
const endIndex = mainJs.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const toDelete = mainJs.substring(startIndex, endIndex);
  mainJs = mainJs.replace(toDelete, '');
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('Removed heavy O(n^2) particle JS loop to fix CPU lag.');
} else {
  console.log('Could not find particle block in main.js');
}

// 3. Add CSS for Cyber Grid
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   LAG-FREE GPU CYBER GRID BACKGROUND (AI / MATRIX THEME)
   ========================================================= */

/* The wrapper creates a mask so the grid fades out smoothly at the top */
.cyber-grid-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65%; /* Only takes up the bottom section under the robot */
  overflow: hidden;
  z-index: 1;
  mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  pointer-events: none;
}

/* The actual 3D perspective grid */
.cyber-grid {
  position: absolute;
  bottom: -20%;
  left: -50%;
  width: 200%;
  height: 150%;
  /* Cyan and Purple brand colors */
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.25) 1px, transparent 1px);
  background-size: 50px 50px;
  /* Tilt the floor backward to create 3D depth */
  transform-origin: center center;
  transform: perspective(500px) rotateX(75deg) translateY(0);
  /* GPU-accelerated infinite scrolling animation */
  animation: cyberGridMove 8s linear infinite !important;
  will-change: transform;
}

@keyframes cyberGridMove {
  0% { transform: perspective(500px) rotateX(75deg) translateY(0); }
  100% { transform: perspective(500px) rotateX(75deg) translateY(50px); } /* Translate exact amount of background-size to loop seamlessly */
}

/* Make it tighter on mobile for better perspective */
@media (max-width: 900px) {
  .cyber-grid {
    background-size: 35px 35px;
  }
  @keyframes cyberGridMove {
    0% { transform: perspective(400px) rotateX(75deg) translateY(0); }
    100% { transform: perspective(400px) rotateX(75deg) translateY(35px); }
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended zero-lag cyber grid CSS.');
