const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const lucrativeCss = `
/* =========================================================
   LUKRITIVE PORTFOLIO UPGRADES
   ========================================================= */

/* Upgrade Card Background and Glow */
.o-cs-card {
  background: linear-gradient(160deg, rgba(20, 24, 40, 0.8) 0%, rgba(8, 11, 20, 0.9) 100%) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
  border-left: none !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
}

/* Hover Effect for Cards */
.o-cs-card:hover {
  transform: translateY(-8px) scale(1.02) !important;
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.2), inset 0 0 0 1px rgba(139, 92, 246, 0.5);
  border-color: rgba(139, 92, 246, 0.5) !important;
}

/* Neon Left Bar using ::before */
.o-cs-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #8b5cf6, #3c20a3, #25D366);
  z-index: 10;
}

/* Subtle Animated Inner Glow */
.o-cs-card::after {
  content: '';
  position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 0;
}
.o-cs-card:hover::after {
  opacity: 1;
}

/* Left Content Wrapper (ensure it sits above glow) */
.o-cs-left {
  position: relative;
  z-index: 2;
}

/* Badges - Make them pop! */
.o-ind-badge {
  background: linear-gradient(135deg, #8b5cf6 0%, #5c35db 100%) !important;
  color: #fff !important;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
  border: none !important;
  padding: 6px 14px;
  border-radius: 6px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 11px;
}

/* Titles - Beautiful Gradient Text */
.o-cs-left h3 {
  background: linear-gradient(90deg, #ffffff 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
}

/* Big Revenue Numbers - Make them stand out */
.o-cs-res {
  color: #a78bfa !important;
  text-shadow: 0 0 20px rgba(167, 139, 250, 0.4);
}
.o-cs-res span {
  color: #e2e8f0 !important;
}

/* Description Text - Lighter and clearer */
.o-cs-desc {
  color: #cbd5e1 !important;
  font-size: 16px !important;
  letter-spacing: 0.2px;
}

/* Feature Pills - Glassmorphism Colors */
.o-cs-pill {
  background: rgba(139, 92, 246, 0.1) !important;
  border: 1px solid rgba(139, 92, 246, 0.3) !important;
  color: #ddd6fe !important;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px !important;
}
.o-cs-pill:hover {
  background: rgba(139, 92, 246, 0.25) !important;
  border-color: rgba(139, 92, 246, 0.6) !important;
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(139, 92, 246, 0.2);
}

/* Right Side Graphics Area */
.o-cs-right {
  background: rgba(8, 11, 20, 0.6) !important;
  position: relative;
  overflow: hidden;
}

/* Add Graphic Abstract Circles to the Right Area */
.o-cs-right::before {
  content: '';
  position: absolute;
  top: -20%; right: -20%; width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.o-cs-right::after {
  content: '';
  position: absolute;
  bottom: -20%; left: -20%; width: 250px; height: 250px;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.15), transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

/* Ensure Mockups sit above the graphic circles */
.p-mock-wa, .o-mock-chat, .o-mock-dash {
  position: relative;
  z-index: 2;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255,255,255,0.1) !important;
}

/* Fix mobile specificity so cards are still visible and layout correct */
@media (max-width: 900px) {
  .o-cs-card {
    transform: none !important;
  }
  .o-cs-card:hover {
    transform: none !important;
  }
}
`;

css += lucrativeCss;

fs.writeFileSync('style.css', css);
console.log("Added lucrative portfolio CSS");
