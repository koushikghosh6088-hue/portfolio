const fs = require('fs');

const newJS = `
// ────────────────────────────────────────────────────
// NEW ABOUT ANIMATIONS
// ────────────────────────────────────────────────────
(function initNewAbout() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle generic fade/slide elements
        if (entry.target.classList.contains('fade-up-elem') || entry.target.classList.contains('slide-in-left') || entry.target.classList.contains('slide-in-right')) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }

        // Handle Stats Counters
        if (entry.target.classList.contains('a-stats-grid')) {
          const counters = entry.target.querySelectorAll('.a-counter');
          counters.forEach(c => animateAboutCounter(c));
          io.unobserve(entry.target);
        }

        // Handle Timeline
        if (entry.target.classList.contains('a-timeline')) {
          entry.target.classList.add('draw-line');
          const nodes = entry.target.querySelectorAll('.a-node');
          let delay = 500;
          nodes.forEach(node => {
            setTimeout(() => node.classList.add('show'), delay);
            delay += 300;
          });
          io.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up-elem, .slide-in-left, .slide-in-right, .a-stats-grid, .a-timeline').forEach(el => io.observe(el));

  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  function animateAboutCounter(obj) {
    const target = parseInt(obj.getAttribute('data-target'));
    const duration = 2000;
    const start = Date.now();
    
    function step() {
      const p = Math.min((Date.now() - start) / duration, 1);
      const easedP = easeOutQuart(p);
      const val = Math.floor(easedP * target);
      obj.textContent = val;
      
      if (p < 1) requestAnimationFrame(step);
      else obj.textContent = target;
    }
    requestAnimationFrame(step);
  }
})();
`;

fs.appendFileSync('main.js', newJS);
console.log('main.js appended with About JS successfully.');
