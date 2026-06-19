const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const colorfulSwipeFix = `
/* =========================================================
   PORTFOLIO SWIPE INDICATOR & EXTREME COLORS
   ========================================================= */

/* 1. Swipe Indicator */
#portfolio .p-ind-showcase {
  padding-bottom: 30px !important; /* Make room for indicator */
}
#portfolio .p-ind-showcase::after {
  content: '← Swipe to explore projects →';
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(to right, #8B5CF6, #25D366);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
  animation: pulseSwipe 2s infinite;
  z-index: 10;
}
@keyframes pulseSwipe {
  0% { opacity: 0.4; transform: translateX(-50%) scale(0.95); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
  100% { opacity: 0.4; transform: translateX(-50%) scale(0.95); }
}

@media (min-width: 901px) {
  /* Hide indicator on desktop if preferred, or keep it. Let's keep it but larger */
  #portfolio .p-ind-showcase::after {
    font-size: 14px;
    bottom: 20px;
  }
}

/* 2. Colorful Text & Cards */
/* Make the headings pop with vibrant gradients */
#portfolio .o-cs-left h3 {
  background: linear-gradient(90deg, #fff 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.4);
}

/* Make the results massive and colorful */
#portfolio .o-cs-res {
  background: linear-gradient(90deg, #25D366 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px !important;
  font-weight: 800 !important;
  margin-top: 15px !important;
  text-shadow: 0 0 20px rgba(37, 211, 102, 0.3);
}
#portfolio .o-cs-res span {
  -webkit-text-fill-color: rgba(255,255,255,0.7);
  font-size: 14px !important;
  font-weight: 500 !important;
  letter-spacing: 1px;
}

/* Give the pill tags solid neon glowing backgrounds */
#portfolio .o-cs-pills {
  margin-top: 20px !important;
}
#portfolio .o-cs-pill {
  background: rgba(139, 92, 246, 0.2) !important;
  border: 1px solid rgba(139, 92, 246, 0.5) !important;
  color: #fff !important;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.3) !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}
#portfolio .o-cs-card:hover .o-cs-pill {
  background: rgba(139, 92, 246, 0.4) !important;
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.6) !important;
  transform: translateY(-2px);
}

/* Highlight the industry badge */
#portfolio .o-ind-badge {
  background: linear-gradient(90deg, #8B5CF6 0%, #ec4899 100%) !important;
  color: white !important;
  border: none !important;
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5) !important;
}

/* Thicker, more vibrant borders on the cards themselves */
#portfolio .o-cs-card {
  border: 2px solid rgba(139, 92, 246, 0.4) !important;
}
#portfolio .o-cs-card:hover {
  border-color: rgba(37, 211, 102, 0.8) !important;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8), inset 0 0 60px rgba(37, 211, 102, 0.2) !important;
}
`;

css += colorfulSwipeFix;
fs.writeFileSync('style.css', css);
console.log("Applied swipe indicator and colorful text CSS");
