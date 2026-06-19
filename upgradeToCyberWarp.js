const fs = require('fs');
const path = require('path');

const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

const cyberWarpJs = `// --- Particle Canvas (3D Cyber Warp Particle Stream) ---
(function initCyberWarp() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  const maxParticles = 600;
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };
  
  // Track mouse and touch coordinates
  window.addEventListener('mousemove', e => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });
  window.addEventListener('mouseout', () => { mouse.active = false; });
  window.addEventListener('touchend', () => { mouse.active = false; });
  
  function resize() {
    width = canvas.width = window.innerWidth;
    const hero = document.querySelector('.hero');
    height = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
    mouse.targetX = width / 2;
    mouse.targetY = height / 2;
    mouse.x = width / 2;
    mouse.y = height / 2;
  }
  
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() {
      this.reset(true);
    }
    
    reset(init = false) {
      // Space particles around in a cylinder projection
      this.x = (Math.random() - 0.5) * 1600;
      this.y = (Math.random() - 0.5) * 1600;
      this.z = init ? Math.random() * 1000 : 1000;
      
      // Speed towards screen
      this.speed = 3.5 + Math.random() * 5.5;
      
      // Color profile matching branding
      const rand = Math.random();
      if (rand < 0.45) {
        this.color = '0, 212, 255'; // Neon Cyan
      } else if (rand < 0.9) {
        this.color = '139, 92, 246'; // Neon Purple
      } else {
        this.color = '255, 255, 255'; // Pure Data White
      }
      
      this.angle = Math.atan2(this.y, this.x);
      this.radius = Math.sqrt(this.x * this.x + this.y * this.y);
      this.orbitSpeed = (Math.random() - 0.5) * 0.006;
    }
    
    update(originX, originY) {
      this.z -= this.speed;
      
      if (this.z <= 0) {
        this.reset(false);
        return;
      }
      
      // Slow orbital rotate for galaxy/vortex feel
      this.angle += this.orbitSpeed;
      this.x = Math.cos(this.angle) * this.radius;
      this.y = Math.sin(this.angle) * this.radius;
      
      // Project 3D coordinate onto 2D viewport
      const fov = 380;
      this.projX = (this.x / this.z) * fov + originX;
      this.projY = (this.y / this.z) * fov + originY;
      
      // Interactive magnetic warp around mouse
      if (mouse.active) {
        const dx = mouse.x - this.projX;
        const dy = mouse.y - this.projY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          this.x += (dx / dist) * force * 3.5;
          this.y += (dy / dist) * force * 3.5;
          this.radius = Math.sqrt(this.x * this.x + this.y * this.y);
        }
      }
    }
    
    draw() {
      if (this.projX < 0 || this.projX > width || this.projY < 0 || this.projY > height) {
        return;
      }
      
      const size = Math.max(1, (1 - this.z / 1000) * 4.5);
      const alpha = Math.max(0, Math.min(1, (1 - this.z / 1000) * 0.85));
      
      ctx.fillStyle = \`rgba(\${this.color}, \${alpha})\`;
      ctx.fillRect(this.projX, this.projY, size, size);
    }
  }
  
  // Fill particle array
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }
  
  resize();
  
  function animate() {
    // Semi-transparent background overlay creates speed/motion trails
    ctx.fillStyle = 'rgba(3, 7, 18, 0.2)';
    ctx.fillRect(0, 0, width, height);
    
    // Smooth camera target transition
    if (mouse.active) {
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
    } else {
      mouse.x += (width / 2 - mouse.x) * 0.05;
      mouse.y += (height / 2 - mouse.y) * 0.05;
    }
    
    // Moving the perspective center bends the entire particle tunnel
    const originX = width / 2 + (mouse.x - width / 2) * 0.35;
    const originY = height / 2 + (mouse.y - height / 2) * 0.35;
    
    for (let i = 0; i < maxParticles; i++) {
      particles[i].update(originX, originY);
      particles[i].draw();
    }
    
    requestAnimationFrame(animate);
  }
  
  requestAnimationFrame(animate);
})();
`;

const startMarker = '// --- Particle Canvas (Interactive Holographic Neural Mesh) ---';
const endMarker = '// --- Text Rotator ---';

const startIdx = mainJs.indexOf(startMarker);
const endIdx = mainJs.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  mainJs = mainJs.substring(0, startIdx) + cyberWarpJs + '\n' + mainJs.substring(endIdx);
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('✅ Replaced Holographic Neural Mesh with 3D Cyber Warp Particle Stream in main.js');
} else {
  console.log('❌ Could not find Interactive Holographic Neural Mesh block in main.js');
}
