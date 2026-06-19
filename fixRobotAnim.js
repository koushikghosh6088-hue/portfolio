const fs = require('fs');
const path = require('path');

// 1. Fix main.js to remove lazy loading
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');
mainJs = mainJs.replace(/loading="lazy"/g, 'loading="eager"');
fs.writeFileSync(mainJsFile, mainJs, 'utf8');
console.log('Fixed main.js: Removed lazy loading for instant robot render.');

// 2. Add preload to index.html to fetch robot model immediately
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');
const preloadLink = '\n  <link rel="preload" href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" as="fetch" crossorigin="anonymous">';
if (!html.includes('scene.splinecode" as="fetch"')) {
  html = html.replace('</head>', preloadLink + '\n</head>');
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Added Spline model preload to index.html.');
}

// 3. Add CSS floating animation
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   ROBOT ANIMATION: DRIFTING TOWARDS LOGO & INSTANT LOAD
   ========================================================= */

@keyframes reachForLogo {
  0%, 100% { 
    transform: translateY(-20px) translateX(0px); 
  }
  50% { 
    transform: translateY(-32px) translateX(-8px) rotate(-1deg); /* Subtle drift up and left towards logo */
  }
}

@media (max-width: 900px) {
  .global-robot-wrap {
    /* Use pure GPU-accelerated transform animation to ensure 0 lag */
    animation: reachForLogo 6s ease-in-out infinite !important;
    will-change: transform;
  }
}

/* Also ensure desktop robot subtly floats if it wasn't already */
@keyframes reachForLogoDesktop {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-15px) translateX(-5px); }
}

@media (min-width: 901px) {
  .global-robot-wrap {
    animation: reachForLogoDesktop 7s ease-in-out infinite;
    will-change: transform;
  }
}
`;

fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Added lag-free GPU floating animation to style.css.');
