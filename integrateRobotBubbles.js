const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════
// 1. UPDATE INDEX.HTML — Insert the robot bubbles container
// ═══════════════════════════════════════════════════════════
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

if (html.includes('id="robot-bubbles-container"')) {
  console.log('ℹ️ index.html already has #robot-bubbles-container.');
} else {
  const targetStr = '<div class="global-robot-wrap" id="global-robot" aria-hidden="true">';
  const idx = html.indexOf(targetStr);
  if (idx !== -1) {
    const closeIdx = html.indexOf('</div>', idx);
    if (closeIdx !== -1) {
      const insertPos = closeIdx + '</div>'.length;
      html = html.substring(0, insertPos) + 
             '\r\n        <!-- Floating interactive tech bubbles overlaying the robot -->\r\n        <div id="robot-bubbles-container" aria-hidden="true"></div>' + 
             html.substring(insertPos);
      fs.writeFileSync(indexFile, html, 'utf8');
      console.log('✅ Updated index.html — added #robot-bubbles-container.');
    } else {
      console.log('❌ Could not find closing div in index.html');
    }
  } else {
    console.log('❌ Could not find target robot div in index.html');
  }
}

// ═══════════════════════════════════════════════════════════
// 2. UPDATE MAIN.JS — Append initRobotBubbles
// ═══════════════════════════════════════════════════════════
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

if (mainJs.includes('initRobotBubbles')) {
  console.log('ℹ️ main.js already contains initRobotBubbles JS.');
} else {
  const robotBubblesJs = `
// --- Floating Interactive Robot Bubbles ---
(function initRobotBubbles() {
  const container = document.getElementById('robot-bubbles-container');
  if (!container) return;

  const techs = [
    { icon: '🤖', label: 'ChatGPT', size: 82, color: 'cyan' },
    { icon: '✨', label: 'Gemini', size: 78, color: 'purple' },
    { icon: '⚡', label: 'n8n', size: 72, color: 'orange' },
    { icon: '📱', label: 'Mobile App', size: 76, color: 'purple' },
  ];

  const colorMap = {
    cyan:   { border: 'rgba(0,212,255,0.4)',  shadow: 'rgba(0,212,255,0.2)',  text: '#00d4ff', glow: '#00d4ff' },
    purple: { border: 'rgba(168,85,247,0.4)', shadow: 'rgba(168,85,247,0.2)', text: '#a855f7', glow: '#a855f7' },
    orange: { border: 'rgba(255,100,50,0.4)',  shadow: 'rgba(255,100,50,0.2)',  text: '#ff6432', glow: '#ff6432' },
  };

  const bubbles = [];
  let draggedBubble = null;
  let dragOffset = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0, time: 0 };
  let currentMouse = { x: 0, y: 0, active: false };

  // Track coordinates relative to the bubbles container
  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    currentMouse.x = e.clientX - rect.left;
    currentMouse.y = e.clientY - rect.top;
    currentMouse.active = true;
  });
  container.addEventListener('mouseleave', () => {
    currentMouse.active = false;
  });
  
  container.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      const rect = container.getBoundingClientRect();
      currentMouse.x = e.touches[0].clientX - rect.left;
      currentMouse.y = e.touches[0].clientY - rect.top;
      currentMouse.active = true;
    }
  }, { passive: true });
  container.addEventListener('touchend', () => {
    currentMouse.active = false;
  });

  const getW = () => container.offsetWidth || 350;
  const getH = () => container.offsetHeight || 500;

  class Bubble {
    constructor(tech, index) {
      this.tech = tech;
      this.el = document.createElement('div');
      this.el.className = 'tech-bubble';
      
      const c = colorMap[tech.color];
      this.r = tech.size / 2;
      this.mass = this.r * this.r;

      this.el.style.cssText = 'position:absolute;left:0;top:0;width:' + tech.size + 'px;height:' + tech.size + 'px;pointer-events:none;z-index:10;will-change:transform;';
      
      const inner = document.createElement('div');
      inner.className = 'bubble-inner';
      inner.style.cssText = 'pointer-events:auto;border:1px solid ' + c.border + ';' +
        'box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 10px rgba(0,0,0,0.5), 0 0 10px ' + c.shadow + ';' +
        '--glow-color:' + c.glow + ';';
      
      inner.innerHTML = '<span class="tb-icon">' + tech.icon + '</span><span class="tb-label" style="color:' + c.text + '">' + tech.label + '</span>';
      this.el.appendChild(inner);
      container.appendChild(this.el);

      this.innerEl = inner;

      // Spaced layout based on container size
      const w = getW();
      const h = getH();
      if (index === 0) { this.x = w * 0.25; this.y = h * 0.25; }
      else if (index === 1) { this.x = w * 0.75; this.y = h * 0.25; }
      else if (index === 2) { this.x = w * 0.25; this.y = h * 0.75; }
      else { this.x = w * 0.75; this.y = h * 0.75; }

      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      
      this.isDragging = false;

      const startDrag = (clientX, clientY) => {
        draggedBubble = this;
        this.isDragging = true;
        this.innerEl.classList.add('dragging');
        
        const rect = container.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        
        dragOffset.x = mouseX - this.x;
        dragOffset.y = mouseY - this.y;
        
        lastMouse.x = mouseX;
        lastMouse.y = mouseY;
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
      if (this.isDragging) return;

      this.vx *= 0.985;
      this.vy *= 0.985;

      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed < 0.15) {
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * 0.25;
        this.vy = Math.sin(angle) * 0.25;
      }

      // Repelled from mouse inside container
      if (currentMouse.active && !draggedBubble) {
        const dx = this.x - currentMouse.x;
        const dy = this.y - currentMouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          this.vx += (dx / dist) * force * 0.12;
          this.vy += (dy / dist) * force * 0.12;
        }
      }

      const maxSpeed = 10;
      const curSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Bounce boundaries
      const w = getW();
      const h = getH();
      const buffer = 1;

      if (this.x - this.r < 0) {
        this.x = this.r + buffer;
        this.vx = Math.abs(this.vx) * 0.8;
      } else if (this.x + this.r > w) {
        this.x = w - this.r - buffer;
        this.vx = -Math.abs(this.vx) * 0.8;
      }

      if (this.y - this.r < 0) {
        this.y = this.r + buffer;
        this.vy = Math.abs(this.vy) * 0.8;
      } else if (this.y + this.r > h) {
        this.y = h - this.r - buffer;
        this.vy = -Math.abs(this.vy) * 0.8;
      }
    }

    draw() {
      const tx = this.x - this.r;
      const ty = this.y - this.r;
      this.el.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
    }
  }

  // Create bubbles
  techs.forEach((tech, i) => {
    bubbles.push(new Bubble(tech, i));
  });

  const onDragMove = (clientX, clientY) => {
    if (!draggedBubble) return;
    
    const rect = container.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    
    draggedBubble.x = mouseX - dragOffset.x;
    draggedBubble.y = mouseY - dragOffset.y;
    
    const w = getW();
    const h = getH();
    draggedBubble.x = Math.max(draggedBubble.r, Math.min(draggedBubble.x, w - draggedBubble.r));
    draggedBubble.y = Math.max(draggedBubble.r, Math.min(draggedBubble.y, h - draggedBubble.r));

    const now = performance.now();
    const dt = now - lastMouse.time;
    if (dt > 10) {
      const dx = mouseX - lastMouse.x;
      const dy = mouseY - lastMouse.y;
      const scale = 16;
      draggedBubble.vx = (dx / dt) * scale;
      draggedBubble.vy = (dy / dt) * scale;
      
      lastMouse.x = mouseX;
      lastMouse.y = mouseY;
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
    if (draggedBubble) onDragMove(e.clientX, e.clientY);
  });

  window.addEventListener('mouseup', onDragEnd);

  window.addEventListener('touchmove', e => {
    if (draggedBubble && e.touches.length > 0) {
      e.preventDefault();
      onDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  window.addEventListener('touchend', onDragEnd);

  // Elastic physics collisions between bubbles
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
          if (dist === 0) continue;
          
          const overlap = rSum - dist;
          const nx = dx / dist;
          const ny = dy / dist;
          
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
          
          const rvx = b2.vx - b1.vx;
          const rvy = b2.vy - b1.vy;
          const velAlongNormal = rvx * nx + rvy * ny;
          
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

  function loop() {
    resolveCollisions();
    bubbles.forEach(b => {
      b.update();
      b.draw();
    });
    requestAnimationFrame(loop);
  }

  setTimeout(() => {
    requestAnimationFrame(loop);
  }, 100);

  window.addEventListener('resize', () => {
    const w = getW();
    const h = getH();
    bubbles.forEach(b => {
      b.x = Math.max(b.r, Math.min(b.x, w - b.r));
      b.y = Math.max(b.r, Math.min(b.y, h - b.r));
    });
  });
})();
`;

  mainJs += '\n' + robotBubblesJs;
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('✅ Appended robot bubbles JS logic to main.js.');
}

// ═══════════════════════════════════════════════════════════
// 3. UPDATE STYLE.CSS — Append targeted bubble overlays CSS
// ═══════════════════════════════════════════════════════════
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

if (css.includes('INTERACTIVE FLOATING ROBOT OVERLAY BUBBLES')) {
  console.log('ℹ️ style.css already contains robot overlay bubbles styling.');
} else {
  const overlayBubbleCss = `
/* =========================================================
   INTERACTIVE FLOATING ROBOT OVERLAY BUBBLES
   ========================================================= */

#robot-bubbles-container {
  position: absolute;
  inset: 0;
  z-index: 10; /* Float directly in front of Spline robot viewer */
  pointer-events: none; /* Pass clicks on background to Spline */
  overflow: visible; /* Allow bubbles to float slightly out of bounds */
}

.tech-bubble {
  position: absolute;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}

.bubble-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 60%, rgba(3, 7, 18, 0.8) 100%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: grab;
  pointer-events: auto; /* Click-drag, touch-drag! */
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25), box-shadow 0.3s ease, border-color 0.3s ease;
  box-sizing: border-box;
}

.bubble-inner:hover {
  transform: scale(1.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 
              inset 0 2px 6px rgba(255, 255, 255, 0.25), 
              0 0 20px var(--glow-color) !important;
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
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}

.tb-label {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: 7.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
  display: block;
  opacity: 0.85;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,0.8));
}

.bubble-inner:hover .tb-label {
  opacity: 1;
}

@media (max-width: 900px) {
  .tb-icon { font-size: 16px; }
  .tb-label { font-size: 6px; }
}
`;

  css += '\n' + overlayBubbleCss;
  fs.writeFileSync(cssFile, css, 'utf8');
  console.log('✅ Appended overlay bubble styles to style.css.');
}
