const fs = require('fs');

// 1. UPDATE CSS
let css = fs.readFileSync('style.css', 'utf8');

const arrowCss = `
/* =========================================================
   PORTFOLIO SLIDER ARROWS
   ========================================================= */
.p-port-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(15, 20, 35, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 20;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
}
.p-port-arrow:hover {
  background: rgba(139, 92, 246, 0.8);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
  transform: translateY(-50%) scale(1.1);
}
.p-port-arrow.prev { left: 10px; }
.p-port-arrow.next { right: 10px; }

@media (max-width: 900px) {
  .p-port-arrow {
    width: 36px;
    height: 36px;
    font-size: 16px;
    top: 40%; /* Slightly higher on mobile to align with mockup */
  }
  .p-port-arrow.prev { left: 5px; }
  .p-port-arrow.next { right: 5px; }
}
`;
css += arrowCss;
fs.writeFileSync('style.css', css);


// 2. UPDATE MAIN.JS
let js = fs.readFileSync('main.js', 'utf8');

const arrowJs = `
  // 3. Portfolio Arrows Logic
  const portPanelsArrow = document.querySelectorAll('.p-port-panel');
  portPanelsArrow.forEach(panel => {
    const scrollBox = panel.querySelector('.p-port-scroll');
    if(!scrollBox) return;

    // Create Prev Button
    const prevBtn = document.createElement('div');
    prevBtn.className = 'p-port-arrow prev';
    prevBtn.innerHTML = '&#10094;'; // Left chevron
    
    // Create Next Button
    const nextBtn = document.createElement('div');
    nextBtn.className = 'p-port-arrow next';
    nextBtn.innerHTML = '&#10095;'; // Right chevron

    panel.appendChild(prevBtn);
    panel.appendChild(nextBtn);

    // Scroll Logic
    prevBtn.addEventListener('click', () => {
      // Scroll exactly 1 card width
      const cardWidth = scrollBox.querySelector('.o-cs-card').offsetWidth + 40;
      scrollBox.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      const cardWidth = scrollBox.querySelector('.o-cs-card').offsetWidth + 40;
      scrollBox.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  });
`;

// Inject into main.js inside DOMContentLoaded
js = js.replace("}); // end DOMContentLoaded", arrowJs + "\n}); // end DOMContentLoaded");
fs.writeFileSync('main.js', js);

console.log("Applied functional glowing arrows to portfolio slider");
