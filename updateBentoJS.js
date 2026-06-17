const fs = require('fs');

const newJS = `
// ────────────────────────────────────────────────────
// REDESIGN: PROCESS PIPELINE INTERACTION
// ────────────────────────────────────────────────────
(function initPipeline() {
  const nodes = document.querySelectorAll('.p-node');
  const progress = document.getElementById('pipe-progress');
  if (!progress || nodes.length === 0) return;

  function setPipeline(activeIndex) {
    nodes.forEach((node, idx) => {
      if (idx <= activeIndex) {
        node.classList.add('lit');
      } else {
        node.classList.remove('lit');
      }
    });
    
    const pct = (activeIndex / (nodes.length - 1)) * 100;
    if (window.innerWidth <= 768) {
      progress.style.width = '100%';
      progress.style.height = pct + '%';
    } else {
      progress.style.height = '100%';
      progress.style.width = pct + '%';
    }
  }

  // Initialize to first step
  setPipeline(0);

  nodes.forEach((node, index) => {
    node.addEventListener('mouseenter', () => {
      setPipeline(index);
    });
    // For mobile touch
    node.addEventListener('click', () => {
      setPipeline(index);
    });
  });

  // Handle resize to fix progress bar direction
  window.addEventListener('resize', () => {
    let activeIdx = 0;
    nodes.forEach((n, i) => { if (n.classList.contains('lit')) activeIdx = i; });
    setPipeline(activeIdx);
  });
})();
`;

fs.appendFileSync('main.js', newJS);
console.log('main.js appended with Pipeline interaction logic.');
