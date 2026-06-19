const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const swipeCarouselCSS = `
/* =========================================================
   PORTFOLIO HORIZONTAL SWIPE & EXPLOSIVE COLORS
   ========================================================= */

/* 1. Horizontal Scroll Snap Container */
#portfolio .p-port-scroll {
  flex-direction: row !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  scroll-snap-type: x mandatory !important;
  padding: 40px !important;
  gap: 40px !important;
  scroll-behavior: smooth;
  /* Hide scrollbar for a cleaner look */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#portfolio .p-port-scroll::-webkit-scrollbar {
  display: none;
}

/* 2. Explosive Colors & Floating Orbs inside Cards */
#portfolio .o-cs-card {
  flex: 0 0 calc(100% - 40px) !important; /* Take full width minus padding */
  scroll-snap-align: center !important;
  min-height: 500px;
  
  /* Deep base with animated gradients */
  background: linear-gradient(135deg, rgba(15, 20, 35, 0.9) 0%, rgba(5, 8, 15, 0.95) 100%) !important;
  border: 1px solid rgba(139, 92, 246, 0.4) !important;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(139, 92, 246, 0.15) !important;
  position: relative;
  overflow: hidden !important;
}

/* Create glowing animated orbs inside the card */
#portfolio .o-cs-card::before,
#portfolio .o-cs-card::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
  animation: floatOrb 8s infinite alternate ease-in-out;
}
#portfolio .o-cs-card::before {
  top: -10%; left: -10%;
  width: 300px; height: 300px;
  background: rgba(139, 92, 246, 0.5); /* Purple orb */
}
#portfolio .o-cs-card::after {
  bottom: -10%; right: -10%;
  width: 250px; height: 250px;
  background: rgba(37, 211, 102, 0.4); /* Teal orb */
  animation-delay: -4s;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 40px) scale(1.2); }
}

/* Ensure text and mockups sit ON TOP of the glowing orbs */
#portfolio .o-cs-left, #portfolio .o-cs-right {
  position: relative !important;
  z-index: 2 !important;
}

/* Remove old ugly right background */
#portfolio .o-cs-right {
  background: transparent !important;
  border-left: none !important;
}
#portfolio .o-cs-right::after {
  display: none !important;
}

/* 3. Compact Overlapping Layout for Mobile */
@media (max-width: 900px) {
  #portfolio .p-port-scroll {
    padding: 20px !important;
    gap: 20px !important;
  }
  
  #portfolio .o-cs-card {
    flex: 0 0 100% !important; /* Full width on mobile */
    flex-direction: column-reverse !important; /* Mockup on top, text below */
    padding: 0 !important;
  }

  #portfolio .o-cs-right {
    padding: 40px 20px 0 20px !important;
    display: flex !important;
    align-items: flex-end !important;
    justify-content: center !important;
  }

  /* Make the text float like a glass card OVER the mockup */
  #portfolio .o-cs-left {
    background: rgba(10, 14, 25, 0.85) !important;
    backdrop-filter: blur(15px) !important;
    border-top: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 24px 24px 0 0 !important;
    margin-top: -30px !important; /* OVERLAP */
    padding: 30px 20px !important;
    box-shadow: 0 -10px 30px rgba(0,0,0,0.5) !important;
  }

  /* Shrink mockups slightly on mobile so they fit beautifully */
  #portfolio .p-mock-wa, #portfolio .p-mock-browser {
    transform: scale(0.9) !important;
    transform-origin: bottom center !important;
  }
}
`;

css += swipeCarouselCSS;
fs.writeFileSync('style.css', css);
console.log("Applied horizontal swipe and explosive colors CSS");
