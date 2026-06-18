const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Extract the inner HTML of the portfolio section
const portStartStr = '<section class="o-section" id="portfolio"';
const portStart = html.indexOf(portStartStr);
const portEnd = html.indexOf('<section class="o-section" id="industries">'); // from previous change

if(portStart !== -1 && portEnd !== -1) {
  let portSection = html.slice(portStart, portEnd);

  let cardBlocks = portSection.split('<div class="o-cs-card"');
  cardBlocks.shift(); // remove the first chunk (header etc)
  
  let waCards = '';
  let erpCards = '';
  let webCards = '';
  let botCards = '';

  cardBlocks.forEach(block => {
    let fullCard = '<div class="o-cs-card"' + block;
    if(fullCard.includes('data-category="wa"')) { waCards += fullCard; }
    else if(fullCard.includes('data-category="erp"')) { erpCards += fullCard; }
    else if(fullCard.includes('data-category="web"')) { webCards += fullCard; }
    else if(fullCard.includes('data-category="bot"')) { botCards += fullCard; }
  });
  
  let botEndIdx = botCards.lastIndexOf('</div>\n    </div>\n  </section>');
  if(botEndIdx === -1) botEndIdx = botCards.lastIndexOf('</div>\r\n    </div>\r\n  </section>');
  if(botEndIdx === -1) botEndIdx = botCards.lastIndexOf('</div>\n</div>\n</section>');
  const endSectionIdx = botCards.indexOf('</section>');
  if (endSectionIdx !== -1) {
    botCards = botCards.substring(0, botCards.lastIndexOf('</div>', endSectionIdx) + 6);
  }

  const newPortfolioHtml = `
  <section class="o-section" id="portfolio">
    <div class="container" style="max-width: 1400px; margin: 0 auto; padding: 0 20px;">
      <span class="o-eyebrow">OUR WORK</span>
      <h2 class="o-headline" style="margin-bottom: 60px;">Real Businesses. Real Results.</h2>
      
      <div class="p-ind-wrap">
        <!-- Left Menu -->
        <div class="p-ind-menu p-port-menu">
          <button class="p-ind-btn p-port-btn active" data-port="wa">
            <span class="ind-icon">💬</span> WhatsApp AI
          </button>
          <button class="p-ind-btn p-port-btn" data-port="erp">
            <span class="ind-icon">📊</span> Business ERP
          </button>
          <button class="p-ind-btn p-port-btn" data-port="web">
            <span class="ind-icon">🌐</span> Web & Apps
          </button>
          <button class="p-ind-btn p-port-btn" data-port="bot">
            <span class="ind-icon">🤖</span> AI Chatbots
          </button>
        </div>

        <!-- Right Showcase -->
        <div class="p-ind-showcase p-port-showcase">
          
          <div class="p-ind-panel p-port-panel active" id="port-panel-wa">
            <div class="p-port-scroll">
              ${waCards}
            </div>
          </div>

          <div class="p-ind-panel p-port-panel" id="port-panel-erp">
            <div class="p-port-scroll">
              ${erpCards}
            </div>
          </div>

          <div class="p-ind-panel p-port-panel" id="port-panel-web">
            <div class="p-port-scroll">
              ${webCards}
            </div>
          </div>

          <div class="p-ind-panel p-port-panel" id="port-panel-bot">
            <div class="p-port-scroll">
              ${botCards}
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  `;

  html = html.substring(0, portStart) + newPortfolioHtml + html.substring(portEnd);
  fs.writeFileSync('index.html', html);
  console.log("Updated portfolio HTML");
} else {
  console.log("Could not find portfolio bounds", portStart, portEnd);
}

// 2. Add CSS for Portfolio Premium styling
let css = fs.readFileSync('style.css', 'utf8');
const portCss = `
/* =========================================================
   PREMIUM PORTFOLIO REDESIGN
   ========================================================= */

.p-port-panel {
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  pointer-events: none;
}
.p-port-panel.active {
  pointer-events: auto;
}

.p-port-scroll {
  max-height: 800px;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.p-port-scroll::-webkit-scrollbar {
  width: 6px;
}
.p-port-scroll::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
}
.p-port-scroll::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 10px;
}

/* Force override portfolio cards to look extremely flashy */
#portfolio .o-cs-card {
  background: linear-gradient(145deg, rgba(20, 24, 40, 0.95) 0%, rgba(8, 11, 20, 0.98) 100%) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.3) !important;
  border-radius: 24px !important;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6), inset 0 0 20px rgba(139, 92, 246, 0.1) !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  display: flex !important;
  flex-direction: row !important;
}

#portfolio .o-cs-card:hover {
  transform: translateY(-8px) scale(1.02) !important;
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.2) !important;
  border-color: rgba(139, 92, 246, 0.8) !important;
}

#portfolio .o-cs-left {
  padding: 40px !important;
  position: relative;
  z-index: 2;
  flex: 0 0 55% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#portfolio .o-cs-right {
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(8, 11, 20, 0.8) 100%) !important;
  border-left: 1px solid rgba(255,255,255,0.05) !important;
  padding: 40px !important;
  flex: 0 0 45% !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative;
}

#portfolio .o-cs-right::after {
  content: ''; position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 250px; height: 250px;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.15), transparent 70%);
  z-index: 0; pointer-events: none;
}

#portfolio .p-mock-wa, #portfolio .p-mock-browser, #portfolio .o-mock-dash, #portfolio .o-mock-chat {
  transform: scale(1.1);
  transition: transform 0.5s ease;
  z-index: 2;
  box-shadow: 0 30px 60px rgba(0,0,0,0.8);
  border: 1px solid rgba(255,255,255,0.15) !important;
}

#portfolio .o-cs-card:hover .p-mock-wa,
#portfolio .o-cs-card:hover .p-mock-browser,
#portfolio .o-cs-card:hover .o-mock-dash,
#portfolio .o-cs-card:hover .o-mock-chat {
  transform: scale(1.15) translateY(-5px);
}

@media (max-width: 900px) {
  #portfolio .o-cs-card {
    flex-direction: column !important;
  }
  #portfolio .o-cs-left, #portfolio .o-cs-right {
    flex: none !important;
    width: 100% !important;
    padding: 20px !important;
  }
  #portfolio .p-mock-wa, #portfolio .p-mock-browser, #portfolio .o-mock-dash, #portfolio .o-mock-chat {
    transform: scale(1);
  }
  #portfolio .o-cs-card:hover .p-mock-wa,
  #portfolio .o-cs-card:hover .p-mock-browser,
  #portfolio .o-cs-card:hover .o-mock-dash,
  #portfolio .o-cs-card:hover .o-mock-chat {
    transform: scale(1.02);
  }
}
`;

css += portCss;
fs.writeFileSync('style.css', css);
console.log("Updated portfolio CSS");

// 3. Add JS for Portfolio tab switching
let js = fs.readFileSync('main.js', 'utf8');
const portJs = `
document.addEventListener('DOMContentLoaded', () => {
  const portBtns = document.querySelectorAll('.p-port-btn');
  const portPanels = document.querySelectorAll('.p-port-panel');

  if(portBtns.length > 0 && portPanels.length > 0) {
    portBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-port');
        
        portBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        portPanels.forEach(p => {
          if(p.id === 'port-panel-' + target) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });
  }
});
`;
js += portJs;
fs.writeFileSync('main.js', js);
console.log("Updated portfolio JS");
