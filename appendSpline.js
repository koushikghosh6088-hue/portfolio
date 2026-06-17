const fs = require('fs');

let js = fs.readFileSync('main.js', 'utf8');

const appendText = `
// ────────────────────────────────────────────────────
// 13. CONDITIONAL SPLINE LOAD (PERFORMANCE OPTIMIZATION)
// ────────────────────────────────────────────────────
(function loadSplineOnDesktop() {
  if (window.innerWidth > 900) {
    const robotWrap = document.getElementById('global-robot');
    if (robotWrap) {
      robotWrap.innerHTML = '<spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" loading="lazy" events-target="global"></spline-viewer><div class="spline-watermark-hider"></div>';
    }
  }
})();
`;

if (!js.includes('loadSplineOnDesktop')) {
  fs.appendFileSync('main.js', appendText);
  console.log('Appended Spline script successfully');
}
