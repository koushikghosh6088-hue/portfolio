const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove .site-bg completely
html = html.replace(/<div class="site-bg"[^>]*>[\s\S]*?<\/div>\s*(?=<!--)/, '');

// 2. Extract hero backgrounds
const orbsMatch = html.match(/<div class="hero-orbs">[\s\S]*?<\/div>\s*<\/div>/); // Wait, orbs has two inner divs.
// Let's use a safer regex or string replacement.

let newHtml = html;

const orbsStr = `
      <div class="hero-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>
`;
const gridStr = `      <div class="hero-grid-lines"></div>\n`;
const canvasStr = `      <canvas id="hero-particles"></canvas>\n`;

// Remove them from their original spot in <section id="home">
newHtml = newHtml.replace(orbsStr, '');
newHtml = newHtml.replace(gridStr, '');
newHtml = newHtml.replace(canvasStr, '');

// If the exact string replace didn't work because of indentation, let's use regex:
newHtml = newHtml.replace(/<div class="hero-orbs">[\s\S]*?<\/div>\s*<\/div>/, '');
newHtml = newHtml.replace(/<div class="hero-grid-lines"><\/div>/, '');
newHtml = newHtml.replace(/<canvas id="hero-particles"><\/canvas>/, '');

// 3. Inject them into a new global container right after <body>
const globalBg = `
  <!-- GLOBAL HERO BACKGROUND ANIMATION -->
  <div class="global-hero-bg" aria-hidden="true">
    <div class="hero-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
    </div>
    <div class="hero-grid-lines"></div>
    <canvas id="hero-particles"></canvas>
  </div>
`;

newHtml = newHtml.replace(/(<body[^>]*>)/, '$1\n' + globalBg);

fs.writeFileSync('index.html', newHtml);
console.log("Updated index.html to use global-hero-bg");

// 4. Update CSS
let css = fs.readFileSync('style.css', 'utf8');

css += `
/* Global Hero Background Container */
.global-hero-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Ensure these elements behave nicely in the fixed container */
.global-hero-bg .hero-orbs, 
.global-hero-bg .hero-grid-lines, 
.global-hero-bg #hero-particles {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

/* Make sure the hero section content sits above the new global bg */
.hero-container {
  position: relative;
  z-index: 1;
}
`;

fs.writeFileSync('style.css', css);
console.log("Updated style.css for global-hero-bg");
