const fs = require('fs');
const path = require('path');

const jsToAppend = `
  // Pricing Tab Logic
  const priceBtns = document.querySelectorAll('.price-tab');
  const pricePanels = document.querySelectorAll('.price-panel');

  if (priceBtns.length > 0 && pricePanels.length > 0) {
    priceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-price');
        
        // Remove active class from all buttons and panels
        priceBtns.forEach(b => b.classList.remove('active'));
        pricePanels.forEach(p => p.classList.remove('active'));
        
        // Add active to clicked button and target panel
        btn.classList.add('active');
        const targetPanel = document.getElementById('price-' + target);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }
`;

const filePath = path.join(__dirname, 'main.js');
fs.appendFileSync(filePath, jsToAppend, 'utf8');
console.log('Successfully appended pricing JS.');
