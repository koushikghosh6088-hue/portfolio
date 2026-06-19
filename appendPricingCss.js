const fs = require('fs');
const path = require('path');

const cssToAppend = `
/* =========================================================
   CATEGORY-WISE PRICING TABS & CARDS
   ========================================================= */
.price-tab {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--o-mut);
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}
.price-tab:hover {
  background: rgba(255,255,255,0.05);
  color: var(--o-text);
}
.price-tab.active {
  background: rgba(255,255,255,0.1);
  color: #fff;
  border-color: rgba(255,255,255,0.3);
  box-shadow: 0 0 20px rgba(255,255,255,0.1);
}

.price-panel {
  display: none;
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.price-panel.active {
  display: block;
}

/* Colorful Pricing Cards */
#pricing .o-pr-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(18, 22, 42, 0.95), rgba(8, 12, 24, 0.98));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 28px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  z-index: 1;
}

/* Add massive ambient glows inside the pricing cards */
#pricing .o-pr-card::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  pointer-events: none;
  z-index: -1;
  transition: opacity 0.4s ease;
}

/* Category-specific colors */
#pricing .o-pr-card[data-category="wa"]::before { background: radial-gradient(circle, #25D366, transparent 70%); }
#pricing .o-pr-card[data-category="erp"]::before { background: radial-gradient(circle, #f97316, transparent 70%); }
#pricing .o-pr-card[data-category="web"]::before { background: radial-gradient(circle, #06b6d4, transparent 70%); }
#pricing .o-pr-card[data-category="bot"]::before { background: radial-gradient(circle, #ec4899, transparent 70%); }

/* Most popular border colors */
#pricing .o-pr-card.popular[data-category="wa"] { border-color: rgba(37, 211, 102, 0.4); box-shadow: 0 0 40px rgba(37, 211, 102, 0.1); }
#pricing .o-pr-card.popular[data-category="erp"] { border-color: rgba(249, 115, 22, 0.4); box-shadow: 0 0 40px rgba(249, 115, 22, 0.1); }
#pricing .o-pr-card.popular[data-category="web"] { border-color: rgba(6, 182, 212, 0.4); box-shadow: 0 0 40px rgba(6, 182, 212, 0.1); }
#pricing .o-pr-card.popular[data-category="bot"] { border-color: rgba(236, 72, 153, 0.4); box-shadow: 0 0 40px rgba(236, 72, 153, 0.1); }

/* Hover effects */
#pricing .o-pr-card:hover {
  transform: translateY(-10px) scale(1.02);
  z-index: 2;
}
#pricing .o-pr-card:hover::before {
  opacity: 0.45;
}

/* Tier Badge */
.o-pr-badge-wrap {
  margin: 16px 0;
}
.o-pr-tier {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--o-text);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
#pricing .o-pr-card[data-category="wa"] .o-pr-tier { color: #25D366; background: rgba(37, 211, 102, 0.1); border-color: rgba(37, 211, 102, 0.2); }
#pricing .o-pr-card[data-category="erp"] .o-pr-tier { color: #f97316; background: rgba(249, 115, 22, 0.1); border-color: rgba(249, 115, 22, 0.2); }
#pricing .o-pr-card[data-category="web"] .o-pr-tier { color: #06b6d4; background: rgba(6, 182, 212, 0.1); border-color: rgba(6, 182, 212, 0.2); }
#pricing .o-pr-card[data-category="bot"] .o-pr-tier { color: #ec4899; background: rgba(236, 72, 153, 0.1); border-color: rgba(236, 72, 153, 0.2); }

@media (max-width: 900px) {
  #pricing .port-tab-bar {
    overflow-x: auto;
    padding-bottom: 10px;
    justify-content: flex-start;
  }
  .price-tab {
    flex: 0 0 auto;
    white-space: nowrap;
  }
}
`;

const filePath = path.join(__dirname, 'style.css');
fs.appendFileSync(filePath, cssToAppend, 'utf8');
console.log('Successfully appended pricing CSS.');
