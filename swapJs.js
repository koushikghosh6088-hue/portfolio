const fs = require('fs');
let js = fs.readFileSync('main.js', 'utf8');

const oldHeroTypingStartStr = '// ────────────────────────────────────────────────────\n// 12. HERO TYPING TEXT';
const splineStartStr = '// ────────────────────────────────────────────────────\n// 13. SPLINE LOAD';

const startIndex = js.indexOf(oldHeroTypingStartStr);
const endIndex = js.indexOf(splineStartStr);

if (startIndex !== -1 && endIndex !== -1) {
  const newHeroJs = `// ────────────────────────────────────────────────────
// 12. HERO JS (Particles & Text Rotator)
// ────────────────────────────────────────────────────

// --- Particle Canvas ---
(function initParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  
  const mouse = { x: null, y: null, radius: 150 };
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector('.hero').offsetHeight || window.innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = 1.5;
      this.speedX = (Math.random() - 0.5) * 1;
      this.speedY = (Math.random() - 0.5) * 1;
    }
    update() {
      if (this.x > width || this.x < 0) this.speedX = -this.speedX;
      if (this.y > height || this.y < 0) this.speedY = -this.speedY;
      
      // Mouse interaction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 2;
          const directionY = forceDirectionY * force * 2;
          
          this.x -= directionX;
          this.y -= directionY;
        }
      }
      
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = \`rgba(0, 212, 255, \${0.15 * (1 - distance/120)})\`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  init();
  animate();
})();

// --- Text Rotator ---
(function initTextRotator() {
  const rotatorText = document.getElementById('h-rotator');
  if (!rotatorText) return;

  const words = ["Websites", "Mobile Apps", "AI Agents", "Automation", "Business Software"];
  let wordIndex = 0;

  setInterval(() => {
    rotatorText.classList.add('slide-up-out');
    
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      rotatorText.innerText = words[wordIndex];
      rotatorText.classList.remove('slide-up-out');
      rotatorText.classList.add('slide-down-in');
      
      // Force reflow
      void rotatorText.offsetWidth;
      
      rotatorText.classList.remove('slide-down-in');
    }, 500); // Wait for fade out
    
  }, 3000); // 2.5s visible + 0.5s transition
})();

`;
  js = js.substring(0, startIndex) + newHeroJs + js.substring(endIndex);
  fs.writeFileSync('main.js', js, 'utf8');
  console.log('Hero JS updated successfully.');
} else {
  console.log('Could not find start/end markers for JS replacement.');
}
