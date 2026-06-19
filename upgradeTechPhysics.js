const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════
// 1. UPDATE MAIN.JS — Injects the 2D Physical Engine
// ═══════════════════════════════════════════════════════════
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

const physicalBubblesJs = `// --- Floating Interactive Tech Bubbles ---
(function initTechBubbles() {
  const container = document.getElementById('tech-bubbles-container');
  if (!container) return;

  const techs = [
    { icon: '🤖', label: 'ChatGPT', size: 82, color: 'cyan' },
    { icon: '✨', label: 'Gemini', size: 78, color: 'purple' },
    { icon: '⚡', label: 'n8n', size: 72, color: 'cyan' },
    { icon: '⚛️', label: 'React', size: 68, color: 'cyan' },
    { icon: '🟢', label: 'Node', size: 64, color: 'green' },
    { icon: '🐍', label: 'Python', size: 68, color: 'purple' },
    { icon: '💬', label: 'WhatsApp', size: 72, color: 'green' },
    { icon: '📱', label: 'Mobile App', size: 76, color: 'purple' },
    { icon: '🌐', label: 'Web App', size: 76, color: 'cyan' },
    { icon: '🧠', label: 'AI Agents', size: 80, color: 'purple' },
    { icon: '⚙️', label: 'Automation', size: 74, color: 'cyan' },
    { icon: '🔥', label: 'Firebase', size: 62, color: 'orange' },
    { icon: '▲', label: 'Next.js', size: 62, color: 'cyan' },
    { icon: '🎨', label: 'Figma', size: 60, color: 'purple' },
    { icon: '🍃', label: 'MongoDB', size: 62, color: 'green' },
    { icon: '📊', label: 'Analytics', size: 60, color: 'cyan' },
  ];

  const colorMap = {
    cyan:   { border: 'rgba(0,212,255,0.4)',  shadow: 'rgba(0,212,255,0.2)',  text: '#00d4ff', glow: '#00d4ff' },
    purple: { border: 'rgba(168,85,247,0.4)', shadow: 'rgba(168,85,247,0.2)', text: '#a855f7', glow: '#a855f7' },
    green:  { border: 'rgba(0,255,136,0.3)',   shadow: 'rgba(0,255,136,0.15)',  text: '#00ff88', glow: '#00ff88' },
    orange: { border: 'rgba(255,165,0,0.3)',   shadow: 'rgba(255,165,0,0.15)',  text: '#ffa500', glow: '#ffa500' },
  };

  const bubbles = [];
  let draggedBubble = null;
  let dragOffset = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0, time: 0 };
  let currentMouse = { x: 0, y: 0, active: false };

  // Track global mouse position for hover repulsion
  window.addEventListener('mousemove', e => {
    currentMouse.x = e.clientX;
    currentMouse.y = e.clientY;
    currentMouse.active = true;
  });
  window.addEventListener('mouseout', () => {
    currentMouse.active = false;
  });
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      currentMouse.x = e.touches[0].clientX;
      currentMouse.y = e.touches[0].clientY;
      currentMouse.active = true;
    }
  }, { passive: true });
  window.addEventListener('touchend', () => {
    currentMouse.active = false;
  });

  const getW = () => window.innerWidth;
  const getH = () => window.innerHeight;

  class Bubble {
    constructor(tech, index) {
      this.tech = tech;
      this.el = document.createElement('div');
      this.el.className = 'tech-bubble';
      
      const c = colorMap[tech.color];
      this.r = tech.size / 2;
      this.mass = this.r * this.r; // Mass proportional to area

      // Build outer container
      this.el.style.cssText = 'position:absolute;left:0;top:0;width:' + tech.size + 'px;height:' + tech.size + 'px;pointer-events:none;z-index:2;will-change:transform;';
      
      // Build inner interactive container
      const inner = document.createElement('div');
      inner.className = 'bubble-inner';
      inner.style.cssText = 'pointer-events:auto;border:1px solid ' + c.border + ';' +
        'box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 10px rgba(0,0,0,0.5), 0 0 10px ' + c.shadow + ';' +
        '--glow-color:' + c.glow + ';';
      
      inner.innerHTML = '<span class="tb-icon">' + tech.icon + '</span><span class="tb-label" style="color:' + c.text + '">' + tech.label + '</span>';
      this.el.appendChild(inner);
      container.appendChild(this.el);

      this.innerEl = inner;

      // Random starting coordinates, spacing them out across the screen
      this.x = Math.random() * (getW() - tech.size) + this.r;
      this.y = Math.random() * (getH() - tech.size) + this.r;
      
      // Random starting drift velocities
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      
      this.baseVx = this.vx;
      this.baseVy = this.vy;
      
      this.isDragging = false;

      // Event listeners for dragging
      const startDrag = (clientX, clientY) => {
        draggedBubble = this;
        this.isDragging = true;
        this.innerEl.classList.add('dragging');
        
        dragOffset.x = clientX - this.x;
        dragOffset.y = clientY - this.y;
        
        lastMouse.x = clientX;
        lastMouse.y = clientY;
        lastMouse.time = performance.now();
        
        this.vx = 0;
        this.vy = 0;
      };

      inner.addEventListener('mousedown', e => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
      });

      inner.addEventListener('touchstart', e => {
        if (e.touches.length > 0) {
          startDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
    }

    update() {
      if (this.isDragging) {
        return; // Position updated by drag event
      }

      // Apply low drag drift friction
      this.vx *= 0.985;
      this.vy *= 0.985;

      // Keep minimum velocity for slow organic drift
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed < 0.15) {
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * 0.25;
        this.vy = Math.sin(angle) * 0.25;
      }

      // Mouse repulsion force (when not dragging)
      if (currentMouse.active && !draggedBubble) {
        const dx = this.x - currentMouse.x;
        const dy = this.y - currentMouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 160;
        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const push = force * 0.15; // gentle push
          this.vx += (dx / dist) * push;
          this.vy += (dy / dist) * push;
        }
      }

      // Speed limit to prevent insane velocities
      const maxSpeed = 12;
      const curSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      // Update position
      this.x += this.vx;
      this.y += this.vy;

      // Wall collisions (bounce)
      const buffer = 2; // tiny overlap buffer
      if (this.x - this.r < 0) {
        this.x = this.r + buffer;
        this.vx = Math.abs(this.vx) * 0.75;
      } else if (this.x + this.r > getW()) {
        this.x = getW() - this.r - buffer;
        this.vx = -Math.abs(this.vx) * 0.75;
      }

      if (this.y - this.r < 0) {
        this.y = this.r + buffer;
        this.vy = Math.abs(this.vy) * 0.75;
      } else if (this.y + this.r > getH()) {
        this.y = getH() - this.r - buffer;
        this.vy = -Math.abs(this.vy) * 0.75;
      }
    }

    draw() {
      // Translate outer element using translate3d for GPU acceleration
      const tx = this.x - this.r;
      const ty = this.y - this.r;
      this.el.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
    }
  }

  // Create bubbles
  techs.forEach((tech, i) => {
    bubbles.push(new Bubble(tech, i));
  });

  // Handle Drag Move & End on window level
  const onDragMove = (clientX, clientY) => {
    if (!draggedBubble) return;
    
    // Set position
    draggedBubble.x = clientX - dragOffset.x;
    draggedBubble.y = clientY - dragOffset.y;
    
    // Clamp to viewport
    draggedBubble.x = Math.max(draggedBubble.r, Math.min(draggedBubble.x, getW() - draggedBubble.r));
    draggedBubble.y = Math.max(draggedBubble.r, Math.min(draggedBubble.y, getH() - draggedBubble.r));

    // Calculate throw velocity based on delta time and delta distance
    const now = performance.now();
    const dt = now - lastMouse.time;
    if (dt > 10) { // Throttle slightly to avoid division by zero
      const dx = clientX - lastMouse.x;
      const dy = clientY - lastMouse.y;
      
      // Calculate instantaneous velocity (px per millisecond)
      const velocityScale = 16;
      draggedBubble.vx = (dx / dt) * velocityScale;
      draggedBubble.vy = (dy / dt) * velocityScale;
      
      lastMouse.x = clientX;
      lastMouse.y = clientY;
      lastMouse.time = now;
    }
  };

  const onDragEnd = () => {
    if (!draggedBubble) return;
    draggedBubble.innerEl.classList.remove('dragging');
    draggedBubble.isDragging = false;
    draggedBubble = null;
  };

  window.addEventListener('mousemove', e => {
    if (draggedBubble) {
      onDragMove(e.clientX, e.clientY);
    }
  });

  window.addEventListener('mouseup', () => {
    onDragEnd();
  });

  window.addEventListener('touchmove', e => {
    if (draggedBubble && e.touches.length > 0) {
      // Prevent scrolling when dragging bubbles on mobile
      e.preventDefault();
      onDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  window.addEventListener('touchend', () => {
    onDragEnd();
  });

  // Resolve collisions between bubbles (elastic collisions)
  function resolveCollisions() {
    for (let i = 0; i < bubbles.length; i++) {
      const b1 = bubbles[i];
      for (let j = i + 1; j < bubbles.length; j++) {
        const b2 = bubbles[j];
        
        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const distSq = dx * dx + dy * dy;
        const rSum = b1.r + b2.r;
        
        if (distSq < rSum * rSum) {
          const dist = Math.sqrt(distSq);
          if (dist === 0) continue; // safety check
          
          // Overlap resolution
          const overlap = rSum - dist;
          const nx = dx / dist;
          const ny = dy / dist;
          
          // Push apart
          if (b1.isDragging) {
            b2.x += nx * overlap;
            b2.y += ny * overlap;
          } else if (b2.isDragging) {
            b1.x -= nx * overlap;
            b1.y -= ny * overlap;
          } else {
            const push = overlap / 2;
            b1.x -= nx * push;
            b1.y -= ny * push;
            b2.x += nx * push;
            b2.y += ny * push;
          }
          
          // Relative velocity
          const rvx = b2.vx - b1.vx;
          const rvy = b2.vy - b1.vy;
          
          // Velocity along normal
          const velAlongNormal = rvx * nx + rvy * ny;
          
          // Bounce only if moving towards each other
          if (velAlongNormal < 0) {
            const restitution = 0.85;
            const impulse = -(1 + restitution) * velAlongNormal / (1 / b1.mass + 1 / b2.mass);
            
            if (!b1.isDragging) {
              b1.vx -= (impulse / b1.mass) * nx;
              b1.vy -= (impulse / b1.mass) * ny;
            }
            if (!b2.isDragging) {
              b2.vx += (impulse / b2.mass) * nx;
              b2.vy += (impulse / b2.mass) * ny;
            }
          }
        }
      }
    }
  }

  // Handle viewport resize
  window.addEventListener('resize', () => {
    bubbles.forEach(b => {
      // Keep inside screen bounds after resize
      b.x = Math.max(b.r, Math.min(b.x, getW() - b.r));
      b.y = Math.max(b.r, Math.min(b.y, getH() - b.r));
    });
  });

  // Physics animation loop
  function loop() {
    resolveCollisions();
    
    bubbles.forEach(b => {
      b.update();
      b.draw();
    });
    
    requestAnimationFrame(loop);
  }
  
  // Start the physical engine
  requestAnimationFrame(loop);
})();
`;

// Find the initTechBubbles block and replace it
const startMarker = '// --- Floating Interactive Tech Bubbles ---';
const endMarker = '// --- Text Rotator ---';
const startIdx = mainJs.indexOf(startMarker);
const endIdx = mainJs.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  mainJs = mainJs.substring(0, startIdx) + physicalBubblesJs + '\n' + mainJs.substring(endIdx);
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('✅ Injected premium 2D physical engine into main.js!');
} else {
  console.log('❌ Could not find Floating Interactive Tech Bubbles block in main.js');
}

// ═══════════════════════════════════════════════════════════
// 2. UPDATE STYLE.CSS — Injects premium glassmorphism styling
// ═══════════════════════════════════════════════════════════
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Locate start of our CSS block
const cssMarker = '/* =========================================================\n   INTERACTIVE FLOATING TECH BUBBLES\n   ========================================================= */';
const cssIdx = css.indexOf(cssMarker);

const upgradedCss = `/* =========================================================
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
  pointer-events: none; /* Let pointer events pass through container to other page sections */
}

.tech-bubble {
  position: absolute;
  pointer-events: none; /* Outer container is purely for layout positioning */
  user-select: none;
  -webkit-user-select: none;
}

.bubble-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 60%, rgba(3, 7, 18, 0.7) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: grab;
  pointer-events: auto; /* Catch mouse events on bubbles themselves */
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25), box-shadow 0.3s ease, border-color 0.3s ease;
  box-sizing: border-box;
}

.bubble-inner:hover {
  transform: scale(1.15);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), 
              inset 0 2px 6px rgba(255, 255, 255, 0.25), 
              0 0 25px var(--glow-color) !important;
  border-color: var(--glow-color) !important;
}

.bubble-inner:active, .bubble-inner.dragging {
  cursor: grabbing;
  transform: scale(0.92);
  transition: transform 0.05s ease;
}

.tb-icon {
  font-size: 24px;
  line-height: 1;
  display: block;
  filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));
}

.tb-label {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: 7.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
  display: block;
  opacity: 0.8;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
}

.bubble-inner:hover .tb-label {
  opacity: 1;
}

@media (max-width: 900px) {
  .tb-icon { font-size: 18px; }
  .tb-label { font-size: 6px; }
}
`;

if (cssIdx !== -1) {
  css = css.substring(0, cssIdx) + upgradedCss;
  fs.writeFileSync(cssFile, css, 'utf8');
  console.log('✅ Injected premium CSS glassmorphic bubble styling!');
} else {
  // Append if not found (fallback)
  css += '\n' + upgradedCss;
  fs.writeFileSync(cssFile, css, 'utf8');
  console.log('✅ Appended premium CSS glassmorphic bubble styling!');
}
