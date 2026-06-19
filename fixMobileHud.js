const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// We will inject a new HUD wrapper for mobile right after the mobile top logo
const mobileHudHtml = `
    <!-- ═══ MOBILE HUD (FILLS THE VOID) ═══ -->
    <div class="mobile-hud">
      <div class="hud-left">
        <div class="hud-stat-item">
          <span class="hud-dot glow-green"></span>
          <span class="hud-text">AI Agent Active</span>
        </div>
        <div class="hud-stat-item">
          <span class="hud-dot glow-purple"></span>
          <span class="hud-text">Systems Optimized</span>
        </div>
      </div>
      <div class="hud-right">
        <div class="hud-badge">
          <span class="hud-icon">⚡</span> LIVE
        </div>
      </div>
    </div>
`;

if (!html.includes('<!-- ═══ MOBILE HUD')) {
  const logoTarget = '</div>\n    <!-- ═══ HERO'; // wait, the logo is injected after hero start.
  // let's just inject after <div class="mobile-top-logo">...</div>
  const logoEndIdx = html.indexOf('</div>', html.indexOf('<div class="mobile-top-logo">'));
  if (logoEndIdx !== -1) {
    html = html.substring(0, logoEndIdx + 6) + mobileHudHtml + html.substring(logoEndIdx + 6);
    fs.writeFileSync(indexFile, html, 'utf8');
    console.log('Successfully injected mobile HUD HTML.');
  }
}

const styleFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   MOBILE HERO REFINEMENT (LOGO & HUD)
   ========================================================= */

/* Fix the mobile logo: Smaller, left-aligned, and cleanly clipped */
.mobile-top-logo {
  top: 15px !important;
  left: 15px !important;
  transform: none !important;
  width: auto !important;
}

.hero-mobile-logo-img {
  width: 90px !important; /* Smaller logo */
  /* Use a tight circular clip to completely chop off the dark background square */
  clip-path: circle(46% at 50% 50%) !important;
  -webkit-clip-path: circle(46% at 50% 50%) !important;
  /* Keep the blend mode just in case */
  mix-blend-mode: screen !important;
  /* Remove mask since we are clipping */
  mask-image: none !important;
  -webkit-mask-image: none !important;
}

/* Hide the clunky old floating cards on mobile */
@media (max-width: 900px) {
  .h-card {
    display: none !important;
  }
}

/* New Mobile HUD Styling */
.mobile-hud {
  display: none;
  position: absolute;
  top: 15px;
  left: 0;
  width: 100%;
  padding: 0 15px 0 120px; /* Space for the left logo */
  box-sizing: border-box;
  z-index: 99;
  pointer-events: none;
}

@media (max-width: 900px) {
  .mobile-hud {
    display: flex !important;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.hud-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 5px;
}

.hud-stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(10, 10, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 6px 10px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: hudFadeIn 1s ease forwards;
  opacity: 0;
  transform: translateX(-10px);
}
.hud-stat-item:nth-child(2) { animation-delay: 0.2s; }

.hud-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.glow-green { background: #00ff88; box-shadow: 0 0 8px #00ff88; animation: pulseDot 2s infinite; }
.glow-purple { background: #8B5CF6; box-shadow: 0 0 8px #8B5CF6; animation: pulseDot 2s infinite 1s; }

.hud-text {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hud-right {
  margin-top: 5px;
}

.hud-badge {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
  animation: hudFadeIn 1s ease forwards 0.4s;
  opacity: 0;
  transform: translateX(10px);
}

.hud-icon {
  font-size: 10px;
}

@keyframes hudFadeIn {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

`;

fs.appendFileSync(styleFile, cssOverrides, 'utf8');
console.log('Successfully appended Mobile HUD CSS.');
