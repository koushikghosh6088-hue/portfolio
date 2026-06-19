const fs = require('fs');
const path = require('path');

// 1. Optimize main.js
const jsPath = path.join(__dirname, 'main.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

// Optimize Cursor
const oldCursor = `  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    dot.style.transform = \`translate3d(calc(\${x}px - 50%), calc(\${y}px - 50%), 0)\`;
    ring.style.transform = \`translate3d(calc(\${x}px - 50%), calc(\${y}px - 50%), 0)\`;
  }, { passive: true });`;

const newCursor = `  let cX = window.innerWidth/2, cY = window.innerHeight/2;
  let rafC = false;
  document.addEventListener('mousemove', e => {
    cX = e.clientX; cY = e.clientY;
    if (!rafC) {
      requestAnimationFrame(() => {
        if(dot) dot.style.transform = \`translate3d(calc(\${cX}px - 50%), calc(\${cY}px - 50%), 0)\`;
        if(ring) ring.style.transform = \`translate3d(calc(\${cX}px - 50%), calc(\${cY}px - 50%), 0)\`;
        rafC = false;
      });
      rafC = true;
    }
  }, { passive: true });`;

if (jsContent.includes("const x = e.clientX;")) {
  jsContent = jsContent.replace(oldCursor, newCursor);
}

// Optimize Scroll Navbar
const oldScroll = `  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });`;

const newScroll = `  let rafS = false;
  window.addEventListener('scroll', () => {
    if(!rafS) {
      requestAnimationFrame(() => {
        if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
        rafS = false;
      });
      rafS = true;
    }
  }, { passive: true });`;

if (jsContent.includes("navbar.classList.toggle('scrolled'")) {
  jsContent = jsContent.replace(oldScroll, newScroll);
}

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('main.js optimized.');

// 2. Optimize style.css
const cssPath = path.join(__dirname, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Massive blurs kill performance, especially on mobile.
// We replace them with a much softer approach or remove them completely if they are redundant (radial gradients already fade out).
const blursToKill = [
  /filter:\s*blur\(100px\);/g,
  /filter:\s*blur\(80px\);/g,
  /filter:\s*blur\(60px\);/g,
  /filter:\s*blur\(50px\);/g,
  /filter:\s*blur\(40px\);/g,
  /backdrop-filter:\s*blur\(100px\);/g,
  /backdrop-filter:\s*blur\(60px\);/g,
  /backdrop-filter:\s*blur\(40px\);/g
];

let blurRemovedCount = 0;
blursToKill.forEach(regex => {
  const matches = cssContent.match(regex);
  if(matches) blurRemovedCount += matches.length;
  // If we remove the blur, we ensure the radial gradient handles the soft edge.
  // We'll replace it with '/* Performance optimization: removed heavy blur */'
  cssContent = cssContent.replace(regex, '/* perf-opt: removed heavy blur */');
});

// Reduce massive box-shadow blur radius on high performance components if it's crazy high
// cssContent = cssContent.replace(/box-shadow:\s*0\s*30px\s*60px/g, 'box-shadow: 0 15px 30px');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('style.css optimized. Removed ' + blurRemovedCount + ' massive blur filters.');
