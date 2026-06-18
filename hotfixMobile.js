const fs = require('fs');

let text = fs.readFileSync('index.html', 'utf8');

// 1. Remove o-fade-up from portfolio to prevent IntersectionObserver bugs on mobile
text = text.replace(/<section class="o-section o-fade-up" id="portfolio">/g, '<section class="o-section" id="portfolio" style="opacity:1 !important; transform:none !important;">');

// 2. Ensure all o-cs-card are visible by default
text = text.replace(/<div class="o-cs-card"/g, '<div class="o-cs-card" style="opacity:1; transform:scale(1);"');

// Write back
fs.writeFileSync('index.html', text);

// 3. Add ultra-safe mobile CSS to style.css
const safeCss = `
/* ULTRA SAFE MOBILE OVERRIDES */
@media (max-width: 900px) {
  #portfolio {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .o-cs-list {
    display: flex !important;
    flex-direction: column !important;
    gap: 30px !important;
  }
  .o-cs-card {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }
  .o-cs-left {
    display: block !important;
    width: 100% !important;
    flex: none !important;
    padding: 20px !important;
  }
  .o-cs-right {
    display: block !important;
    width: 100% !important;
    flex: none !important;
    padding: 20px !important;
    background: #080B14 !important;
    overflow: hidden !important;
  }
  .p-mock-browser, .p-mock-wa, .p-mock-mobile, .p-mock-bot {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto !important;
    transform: scale(0.9) !important;
    transform-origin: top center !important;
  }
}
`;
fs.appendFileSync('style.css', '\n' + safeCss);

console.log("Applied hotfix for mobile visibility");
