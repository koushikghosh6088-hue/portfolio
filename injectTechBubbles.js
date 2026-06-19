const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════
// 1. UPDATE INDEX.HTML — Replace canvas with bubble container
// ═══════════════════════════════════════════════════════════
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Replace the canvas with a bubble container div
html = html.replace(
  '<canvas id="hero-particles"></canvas>',
  '<div id="tech-bubbles-container"></div>'
);

fs.writeFileSync(indexFile, html, 'utf8');
console.log('[1/3] Updated index.html — replaced canvas with bubble container.');

// ═══════════════════════════════════════════════════════════
// 2. UPDATE MAIN.JS — Replace particle JS with interactive bubble physics
// ═══════════════════════════════════════════════════════════
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

const newBubbleJs = `
// --- Floating Interactive Tech Bubbles ---
(function initTechBubbles() {
  const container = document.getElementById('tech-bubbles-container');
  if (!container) return;

  const techs = [
    { icon: '🤖', label: 'ChatGPT', size: 70, color: 'cyan' },
    { icon: '✨', label: 'Gemini', size: 65, color: 'purple' },
    { icon: '⚡', label: 'n8n', size: 58, color: 'cyan' },
    { icon: '⚛️', label: 'React', size: 55, color: 'cyan' },
    { icon: '🟢', label: 'Node.js', size: 52, color: 'green' },
    { icon: '🐍', label: 'Python', size: 55, color: 'purple' },
    { icon: '💬', label: 'WhatsApp', size: 58, color: 'green' },
    { icon: '📱', label: 'Mobile App', size: 62, color: 'purple' },
    { icon: '🌐', label: 'Web App', size: 62, color: 'cyan' },
    { icon: '🧠', label: 'AI Agents', size: 68, color: 'purple' },
    { icon: '⚙️', label: 'Automation', size: 60, color: 'cyan' },
    { icon: '🔥', label: 'Firebase', size: 50, color: 'orange' },
    { icon: '▲', label: 'Next.js', size: 50, color: 'cyan' },
    { icon: '🎨', label: 'Figma', size: 48, color: 'purple' },
    { icon: '🍃', label: 'MongoDB', size: 50, color: 'green' },
    { icon: '📊', label: 'Analytics', size: 48, color: 'cyan' },
  ];

  const colorMap = {
    cyan:   { border: 'rgba(0,212,255,0.5)',  shadow: 'rgba(0,212,255,0.25)',  text: '#00d4ff' },
    purple: { border: 'rgba(168,85,247,0.5)', shadow: 'rgba(168,85,247,0.25)', text: '#a855f7' },
    green:  { border: 'rgba(0,255,136,0.4)',   shadow: 'rgba(0,255,136,0.2)',   text: '#00ff88' },
    orange: { border: 'rgba(255,165,0,0.4)',   shadow: 'rgba(255,165,0,0.2)',   text: '#ffa500' },
  };

  const bubbles = [];
  const mouse = { x: null, y: null, active: false };

  // Mouse & touch tracking
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
  window.addEventListener('mouseout', () => { mouse.active = false; });
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; mouse.active = true; }
  }, { passive: true });
  window.addEventListener('touchend', () => { mouse.active = false; });

  const W = () => window.innerWidth;
  const H = () => (document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : window.innerHeight);

  class Bubble {
    constructor(tech, index) {
      this.el = document.createElement('div');
      this.el.className = 'tech-bubble';
      
      const c = colorMap[tech.color];
      const s = tech.size;
      
      this.el.innerHTML = '<span class="tb-icon">' + tech.icon + '</span><span class="tb-label" style="color:' + c.text + '">' + tech.label + '</span>';
      
      this.el.style.cssText = 'width:' + s + 'px;height:' + s + 'px;' +
        'border:1px solid ' + c.border + ';' +
        'box-shadow: 0 0 15px ' + c.shadow + ', inset 0 0 10px ' + c.shadow + ';';
      
      container.appendChild(this.el);

      // Physics state
      this.s = s;
      this.x = Math.random() * (W() - s);
      this.y = Math.random() * (H() - s);
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.baseVx = this.vx;
      this.baseVy = this.vy;
    }

    update() {
      // Bounce off walls
      if (this.x <= 0 || this.x >= W() - this.s) this.vx *= -1;
      if (this.y <= 0 || this.y >= H() - this.s) this.vy *= -1;

      // Mouse/Touch repulsion — bubbles scatter away from touch!
      if (mouse.active) {
        const cx = this.x + this.s / 2;
        const cy = this.y + this.s / 2;
        const dx = cx - mouse.x;
        const dy = cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 150;
        
        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const pushX = (dx / dist) * force * 4;
          const pushY = (dy / dist) * force * 4;
          this.vx += pushX;
          this.vy += pushY;
          
          // Make this bubble glow brighter when near touch
          this.el.style.opacity = '1';
          this.el.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px) scale(' + (1 + force * 0.25) + ')';
        } else {
          this.el.style.opacity = '';
          this.el.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px) scale(1)';
        }
      } else {
        this.el.style.opacity = '';
        this.el.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px) scale(1)';
      }

      // Apply friction so they slow back to their base drift after being pushed
      this.vx *= 0.98;
      this.vy *= 0.98;
      
      // Ensure they always have minimum drift (never fully stop)
      if (Math.abs(this.vx) < 0.15) this.vx = this.baseVx;
      if (Math.abs(this.vy) < 0.15) this.vy = this.baseVy;

      this.x += this.vx;
      this.y += this.vy;

      // Clamp to viewport
      this.x = Math.max(0, Math.min(this.x, W() - this.s));
      this.y = Math.max(0, Math.min(this.y, H() - this.s));
    }
  }

  // Create all bubbles
  techs.forEach((tech, i) => {
    bubbles.push(new Bubble(tech, i));
  });

  // Animation loop — O(n) only, no nested loops!
  function animate() {
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].update();
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
`;

// Find and replace the old particle block
const startMarker = '// --- Particle Canvas (Premium Interactive Neural Core) ---';
const endMarker = '// --- Text Rotator ---';
const startIdx = mainJs.indexOf(startMarker);
const endIdx = mainJs.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  mainJs = mainJs.substring(0, startIdx) + newBubbleJs + '\n' + mainJs.substring(endIdx);
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('[2/3] Replaced Neural Core with Interactive Tech Bubbles in main.js');
} else {
  console.log('Could not find old particle block. Searching for alternate markers...');
  // Try removing old block and appending
  const altStart = mainJs.indexOf('// --- Particle Canvas');
  const altEnd = mainJs.indexOf('// --- Text Rotator ---');
  if (altStart !== -1 && altEnd !== -1) {
    mainJs = mainJs.substring(0, altStart) + newBubbleJs + '\n' + mainJs.substring(altEnd);
    fs.writeFileSync(mainJsFile, mainJs, 'utf8');
    console.log('[2/3] Replaced particle canvas with Interactive Tech Bubbles in main.js (alt markers)');
  } else {
    // Just append
    fs.appendFileSync(mainJsFile, '\n' + newBubbleJs, 'utf8');
    console.log('[2/3] Appended Interactive Tech Bubbles to main.js');
  }
}

// ═══════════════════════════════════════════════════════════
// 3. UPDATE STYLE.CSS — Add premium bubble styling
// ═══════════════════════════════════════════════════════════
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Remove the old canvas CSS
const oldCanvasCss = '/* =========================================================\n   PREMIUM NEURAL CORE CANVAS\n   ========================================================= */';
const oldCanvasIdx = css.indexOf(oldCanvasCss);
if (oldCanvasIdx !== -1) {
  css = css.substring(0, oldCanvasIdx);
}

const bubbleCss = `
/* =========================================================
   INTERACTIVE FLOATING TECH BUBBLES
   ========================================================= */

#tech-bubbles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
  pointer-events: auto;
}

.tech-bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(10, 10, 25, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  opacity: 0.55;
  transition: opacity 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
  pointer-events: none; /* Let clicks pass through */
  will-change: transform;
}

.tech-bubble:hover {
  opacity: 1 !important;
}

.tb-icon {
  font-size: 18px;
  line-height: 1;
  display: block;
}

.tb-label {
  font-family: 'Inter', sans-serif;
  font-size: 7px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
  display: block;
}

@media (max-width: 900px) {
  .tb-icon { font-size: 14px; }
  .tb-label { font-size: 5.5px; }
}
`;

css += bubbleCss;
fs.writeFileSync(cssFile, css, 'utf8');
console.log('[3/3] Added premium Tech Bubble CSS.');
