const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// 1. Add percentage to HTML
const oldText = '<p class="loader-text">Initializing AI Systems<span class="dots-anim">...</span></p>';
const newText = '<p class="loader-text">Initializing AI Systems<span class="dots-anim">...</span> <span id="loader-pct" style="color: #fff; font-weight: bold; margin-left: 8px;">0%</span></p>';

if (html.includes(oldText)) {
  html = html.replace(oldText, newText);
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Successfully updated HTML for loader percentage.');
}

// 2. Add mix-blend-mode to style.css to remove the black box
const styleFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   LOADER FIXES (REMOVE BOXY BACKGROUND & ADD PCT)
   ========================================================= */
.loader-image-new {
  /* mix-blend-mode: screen makes black pixels completely invisible! */
  mix-blend-mode: screen;
  /* removing the box-shadow since screen mode handles the glow beautifully */
  box-shadow: none !important;
  /* slight brightness bump to compensate for screen blend */
  filter: brightness(1.2);
}
`;
fs.appendFileSync(styleFile, cssOverrides, 'utf8');
console.log('Successfully appended CSS for mix-blend-mode.');

// 3. Update main.js to animate the percentage
const jsFile = path.join(__dirname, 'main.js');
let js = fs.readFileSync(jsFile, 'utf8');

const oldLoaderScript = `(function initLoader() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loader-progress');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 22;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    progress.style.width = pct + '%';
  }, 100);
  window.addEventListener('load', () => {
    setTimeout(() => { loader.classList.add('hidden'); }, 500);
  });
  setTimeout(() => loader.classList.add('hidden'), 2500);
})();`;

const newLoaderScript = `(function initLoader() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loader-progress');
  const pctText = document.getElementById('loader-pct');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 22;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    if (progress) progress.style.width = pct + '%';
    if (pctText) pctText.innerText = Math.round(pct) + '%';
  }, 100);
  
  // Also ensure the counter hits 100% on load before hiding
  window.addEventListener('load', () => {
    if (pctText) pctText.innerText = '100%';
    if (progress) progress.style.width = '100%';
    setTimeout(() => { loader.classList.add('hidden'); }, 600);
  });
  setTimeout(() => {
    if (pctText) pctText.innerText = '100%';
    if (progress) progress.style.width = '100%';
    loader.classList.add('hidden');
  }, 3000);
})();`;

if (js.includes('function initLoader()')) {
  // Try exact match or regex
  if (js.includes(oldLoaderScript)) {
    js = js.replace(oldLoaderScript, newLoaderScript);
    fs.writeFileSync(jsFile, js, 'utf8');
    console.log('Successfully updated main.js exactly.');
  } else {
    // Regex replace the initLoader block
    const initRegex = /\(function initLoader\(\) \{[\s\S]*?\}\)\(\);/;
    js = js.replace(initRegex, newLoaderScript);
    fs.writeFileSync(jsFile, js, 'utf8');
    console.log('Successfully updated main.js using regex.');
  }
}
