const fs = require('fs');
let js = fs.readFileSync('main.js', 'utf8');

const str1 = '// ────────────────────────────────────────────────────\n// 9. CHATBOT DEMO ANIMATION';
const str2 = '// ────────────────────────────────────────────────────\n// 11. SHOWCASE TABS';

const idx1 = js.indexOf(str1);
const idx2 = js.indexOf(str2);

if (idx1 !== -1 && idx2 !== -1) {
  // Remove the old demo logic
  js = js.substring(0, idx1) + js.substring(idx2);
  
  // Now add the new Intersection Observer logic at the end of the file or right where we deleted it
  const newJS = `
// ────────────────────────────────────────────────────
// NEW SERVICES ANIMATIONS
// ────────────────────────────────────────────────────
(function initNewServices() {
  const cards = document.querySelectorAll('.s-card');
  const cta = document.querySelector('.s-bottom-cta');
  const dashBars = document.querySelectorAll('.mock-dash');
  const phoneVals = document.querySelectorAll('.mp-st-val');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('s-card')) {
          const delay = Array.from(cards).indexOf(entry.target) * 100;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('s-bottom-cta')) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('mock-dash')) {
          setTimeout(() => entry.target.classList.add('animate'), 300);
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('mp-st-val')) {
          animateValue(entry.target);
          observer.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(c => observer.observe(c));
  if(cta) observer.observe(cta);
  dashBars.forEach(d => observer.observe(d));
  phoneVals.forEach(v => observer.observe(v));

  function animateValue(obj) {
    const target = parseInt(obj.getAttribute('data-target'));
    const duration = 2000;
    const start = Date.now();
    
    function step() {
      const p = Math.min((Date.now() - start) / duration, 1);
      const val = Math.floor(p * target);
      if (target > 1000) {
        // Format as Indian currency style or standard thousands (e.g. 48500 -> 48.5K or 48,500)
        obj.textContent = target >= 10000 ? '₹' + (val / 1000).toFixed(1) + 'K' : val;
      } else {
        obj.textContent = val + (obj.classList.contains('v-ord') ? '' : '+');
      }
      if (p < 1) requestAnimationFrame(step);
      else {
        // Final format
        if (target === 48500) obj.textContent = '₹48.5K';
        if (target === 124) obj.textContent = '124';
        if (target === 890) obj.textContent = '890+';
      }
    }
    requestAnimationFrame(step);
  }
})();

`;

  js = js.substring(0, idx1) + newJS + js.substring(idx1);
  fs.writeFileSync('main.js', js);
  console.log('main.js updated successfully.');
} else {
  console.log('Could not find markers', idx1, idx2);
}
