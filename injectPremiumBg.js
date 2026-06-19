const fs = require('fs');
const path = require('path');

// 1. Revert index.html back to canvas
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Replace cyber grid with canvas again
const cyberGridHtml = '<div class="cyber-grid-wrap"><div class="cyber-grid"></div></div>';
if (html.includes(cyberGridHtml)) {
  html = html.replace(cyberGridHtml, '<canvas id="hero-particles"></canvas>');
} else if (!html.includes('<canvas id="hero-particles"></canvas>')) {
  // Fallback if regex failed somehow
  html = html.replace('<div class="hero-grid-lines"></div>', '<div class="hero-grid-lines"></div>\n    <canvas id="hero-particles"></canvas>');
}

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Restored canvas in index.html');

// 2. Add ultra-premium, O(n) fast, highly interactive Neural Core JS to main.js
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

const newParticleJs = `
// --- Particle Canvas (Premium Interactive Neural Core) ---
(function initPremiumParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  
  // The interactive energy source (mouse/touch)
  const mouse = { x: null, y: null, radius: 250 };
  
  // Support both mouse and touch for mobile interactability
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('touchmove', (e) => {
    if(e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });
  
  window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
  window.addEventListener('touchend', () => { mouse.x = null; mouse.y = null; });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector('.hero').offsetHeight || window.innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();

  class QuantumParticle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.baseSize = Math.random() * 2 + 0.5;
      this.size = this.baseSize;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = (Math.random() - 0.5) * 0.8;
      // Assign either Cyan or Purple color randomly
      this.color = Math.random() > 0.5 ? 'rgba(0, 212, 255,' : 'rgba(168, 85, 247,';
    }
    
    update() {
      // Bounce off walls
      if (this.x > width || this.x < 0) this.speedX = -this.speedX;
      if (this.y > height || this.y < 0) this.speedY = -this.speedY;
      
      this.x += this.speedX;
      this.y += this.speedY;
      
      // O(n) Interaction: ONLY check distance to the mouse, not other particles! Extremely fast!
      if (mouse.x != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Particles gently gravitate towards the user's touch
          const force = (mouse.radius - distance) / mouse.radius;
          this.x += (dx / distance) * force * 1.5;
          this.y += (dy / distance) * force * 1.5;
          
          // Draw a stunning energy link connecting the user's touch to the particle
          ctx.beginPath();
          ctx.strokeStyle = this.color + (force * 0.4) + ')'; // Glow fades out smoothly
          ctx.lineWidth = force * 2;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Make particle glow bigger when near touch
          this.size = this.baseSize + (force * 3);
        } else {
          this.size = this.baseSize;
        }
      } else {
        this.size = this.baseSize;
      }
    }
    
    draw() {
      ctx.fillStyle = this.color + '0.6)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    // Adjust amount based on screen size to guarantee 0 lag
    const amount = width < 768 ? 60 : 120;
    for (let i = 0; i < amount; i++) {
      particles.push(new QuantumParticle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Add premium blending mode for glowing overlaps
    ctx.globalCompositeOperation = 'lighter';
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    requestAnimationFrame(animate);
  }

  init();
  animate();
})();
// --- Text Rotator ---`;

// Inject into main.js
if (mainJs.includes('// --- Text Rotator ---')) {
  mainJs = mainJs.replace('// --- Text Rotator ---', newParticleJs);
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('Injected premium Neural Core JS animation.');
} else {
  // Append to bottom if text rotator comment is missing
  fs.appendFileSync(mainJsFile, '\n' + newParticleJs, 'utf8');
  console.log('Appended premium Neural Core JS animation to bottom.');
}

// 3. Remove Cyber Grid CSS
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

// The block to remove is everything after "LAG-FREE GPU CYBER GRID BACKGROUND" up to the end of the file.
// Let's just find the index and slice it off.
const cssMarker = '/* =========================================================\n   LAG-FREE GPU CYBER GRID BACKGROUND';
const cssIndex = css.indexOf(cssMarker);
if (cssIndex !== -1) {
  css = css.substring(0, cssIndex);
  
  // Re-add basic canvas styling
  css += `
/* =========================================================
   PREMIUM NEURAL CORE CANVAS
   ========================================================= */
.global-hero-bg #hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: auto; /* Allow interactions */
}
`;
  fs.writeFileSync(cssFile, css, 'utf8');
  console.log('Removed Cyber Grid CSS and added Neural Core Canvas CSS.');
}
