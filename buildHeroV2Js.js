const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'main.js');
const jsLogic = `
/* =========================================================
   HERO SECTION V2 (A/B TESTING)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Spline V2 Initialization
  const robotWrap2 = document.getElementById('global-robot-v2');
  if (robotWrap2) {
    robotWrap2.innerHTML = '<spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" loading="lazy" events-target="global"></spline-viewer>';
  }

  // 2. Typewriter Logic
  const twTarget = document.getElementById('v2-tw-target');
  const phrases = [
    "Builds your website.",
    "Qualifies your leads.",
    "Books your appointments.",
    "Automates your WhatsApp."
  ];
  let currentPhrase = 0;
  let twInterval = null;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function cycleTypewriter() {
    if (isReducedMotion) return; // Respect reduced motion
    if (twTarget) {
      twTarget.classList.add('fade-out');
      setTimeout(() => {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        twTarget.textContent = phrases[currentPhrase];
        twTarget.classList.remove('fade-out');
      }, 200); // 200ms fade out duration
    }
  }

  // 3. Intersection Observer (Performance Pause)
  const v2Section = document.getElementById('home-v2');
  if (v2Section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const animatedElements = document.querySelectorAll('.v2-ambient-drift, .v2-line, .v2-status-pulse');
        
        if (!entry.isIntersecting) {
          // Pause everything
          if (twInterval) { 
            clearInterval(twInterval); 
            twInterval = null; 
          }
          animatedElements.forEach(el => el.classList.add('paused'));
        } else {
          // Resume everything
          if (!isReducedMotion && twTarget && !twInterval) {
             twInterval = setInterval(cycleTypewriter, 2500); // 2.5s loop
          }
          animatedElements.forEach(el => el.classList.remove('paused'));
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(v2Section);
  } else {
     // Fallback if observer isn't setup but we still need the typewriter to start
     if (!isReducedMotion && twTarget && !twInterval) {
       twInterval = setInterval(cycleTypewriter, 2500);
     }
  }
});
`;

fs.appendFileSync(jsPath, jsLogic, 'utf8');
console.log('Successfully appended Hero V2 JS logic to main.js');
