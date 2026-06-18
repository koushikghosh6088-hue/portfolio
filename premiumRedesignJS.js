const fs = require('fs');

let js = fs.readFileSync('main.js', 'utf8');

const premiumJS = `
/* =========================================================
   PREMIUM REDESIGN SCRIPTS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Industries Sticky Showcase Logic
  const indBtns = document.querySelectorAll('.p-ind-btn');
  const indPanels = document.querySelectorAll('.p-ind-panel');

  if(indBtns.length > 0 && indPanels.length > 0) {
    indBtns.forEach(btn => {
      // Switch on click and hover for a more premium fluid feel
      btn.addEventListener('click', () => switchIndustry(btn));
      btn.addEventListener('mouseenter', () => switchIndustry(btn));
    });

    function switchIndustry(activeBtn) {
      const targetInd = activeBtn.getAttribute('data-ind');
      
      // Update buttons
      indBtns.forEach(b => b.classList.remove('active'));
      activeBtn.classList.add('active');

      // Update panels
      indPanels.forEach(p => {
        if(p.id === 'panel-' + targetInd) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }
  }

  // 2. Process Vertical Timeline Logic
  const procWrap = document.querySelector('.p-proc-wrap');
  const procLineFill = document.getElementById('proc-line-fill');
  const procSteps = document.querySelectorAll('.p-proc-step');

  if(procWrap && procLineFill && procSteps.length > 0) {
    // Handle Scroll for the Neon Line
    window.addEventListener('scroll', () => {
      const wrapRect = procWrap.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline we have scrolled past
      // Start filling when the top of the timeline hits the middle of the screen
      let fillPercentage = 0;
      
      const startPoint = wrapRect.top - (windowHeight / 2);
      const totalHeight = wrapRect.height;
      
      if(startPoint < 0) {
        fillPercentage = Math.min(100, Math.max(0, (Math.abs(startPoint) / totalHeight) * 100));
      }
      
      procLineFill.style.height = fillPercentage + '%';
    });

    // Handle IntersectionObserver for fading in the cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px"
    });

    procSteps.forEach(step => {
      observer.observe(step);
    });
  }

});
`;

js += "\n" + premiumJS;
fs.writeFileSync('main.js', js);
console.log("Updated main.js with premium logic");
