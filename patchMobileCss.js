const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// The new responsive rules to append
const newResponsiveCss = `

/* ── HERO RESPONSIVE OVERRIDES ── */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .hero-visual-right {
    height: 450px;
    margin-top: 2rem;
  }
  .global-robot-wrap {
    height: 100%;
  }
  .h-card {
    display: none !important; /* Hide floating cards on mobile */
  }
  .hero {
    padding: 120px 5% 40px;
  }
  .h-heading {
    font-size: clamp(32px, 8vw, 48px);
  }
  .h-rotator-wrap {
    height: clamp(38px, 9vw, 56px);
  }
  .h-ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  .h-btn-primary, .h-btn-secondary {
    text-align: center;
    width: 100%;
  }
  .h-social-proof {
    justify-content: center;
  }
}
`;

// Now let's remove the old `.hero` overrides in the media queries manually to avoid syntax issues.
// Let's just append the new overrides at the bottom, which will override the old ones due to CSS specificity and order.
// But the old ones might interfere if they target classes we still use. We changed all classes (e.g. .h-heading instead of .hero-heading).
// The only ones we kept are `.hero` and `.global-robot-wrap`.
// The old .hero at 900px: `padding-top: 0; text-align: center; overflow-x: hidden; justify-content: flex-start; min-height: 100vh; position: relative;`
// The old .global-robot-wrap at 900px: `height: 100vh; top: 0; bottom: auto; ...`
// The old .hero at 600px: `padding-top: 6.5rem; gap: 2.5rem;`
// The old .global-robot-wrap at 600px: `height: 45vh; transform: scale(1.2);`

// We can just add `!important` or make sure the new overrides are stronger or placed after.
// Appending them at the end of the file is usually enough. But wait, `height: 100vh !important` was used in the old `.global-robot-wrap`? No, wait. I added `height: 100vh` without `!important` but `transform: translateX(0) scale(1) !important` to fix it earlier.
// Let's do a precise string replacement for the specific old lines.

css = css.replace('.hero { padding-top: 0; text-align: center; overflow-x: hidden; justify-content: flex-start; min-height: 100vh; position: relative; }', '');
css = css.replace('.global-robot-wrap { \n    height: 100vh; top: 0; bottom: auto; \n    align-items: flex-start; \n    justify-content: center;\n    animation: none !important; \n    opacity: 1 !important; \n    transform: translateX(0) scale(1) !important; \n    z-index: 0;\n  }', '');

css = css.replace('.hero { padding-top: 6.5rem; gap: 2.5rem; }', '');
css = css.replace('.global-robot-wrap { height: 45vh; transform: scale(1.2); }', '');

// Append new responsive CSS
css += newResponsiveCss;

fs.writeFileSync('style.css', css, 'utf8');
console.log('Mobile CSS patched successfully.');
