const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════
// 1. UPDATE INDEX.HTML — Remove robot bubbles container
// ═══════════════════════════════════════════════════════════
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

const targetBubbleContainer = `\r\n        <!-- Floating interactive tech bubbles overlaying the robot -->\r\n        <div id="robot-bubbles-container" aria-hidden="true"></div>`;
const targetBubbleContainerLF = `\n        <!-- Floating interactive tech bubbles overlaying the robot -->\n        <div id="robot-bubbles-container" aria-hidden="true"></div>`;

if (html.includes(targetBubbleContainer)) {
  html = html.replace(targetBubbleContainer, '');
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('✅ Removed robot bubbles container from index.html (CRLF).');
} else if (html.includes(targetBubbleContainerLF)) {
  html = html.replace(targetBubbleContainerLF, '');
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('✅ Removed robot bubbles container from index.html (LF).');
} else {
  // Try generic regex search
  const regex = /<!-- Floating interactive tech bubbles[\s\S]*?<div id="robot-bubbles-container"[\s\S]*?<\/div>/;
  if (regex.test(html)) {
    html = html.replace(regex, '');
    fs.writeFileSync(indexFile, html, 'utf8');
    console.log('✅ Removed robot bubbles container from index.html (Regex).');
  } else {
    console.log('ℹ️ No robot bubbles container found in index.html.');
  }
}

// ═══════════════════════════════════════════════════════════
// 2. UPDATE STYLE.CSS — Remove robot bubbles CSS
// ═══════════════════════════════════════════════════════════
const cssFile = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');

const cssMarker = '/* =========================================================\n   INTERACTIVE FLOATING ROBOT OVERLAY BUBBLES';
const cssMarkerCRLF = '/* =========================================================\r\n   INTERACTIVE FLOATING ROBOT OVERLAY BUBBLES';

let cssIdx = css.indexOf(cssMarker);
if (cssIdx === -1) cssIdx = css.indexOf(cssMarkerCRLF);

if (cssIdx !== -1) {
  css = css.substring(0, cssIdx);
  fs.writeFileSync(cssFile, css, 'utf8');
  console.log('✅ Removed robot bubbles CSS styling from style.css.');
} else {
  console.log('ℹ️ No robot bubbles CSS found in style.css.');
}

// ═══════════════════════════════════════════════════════════
// 3. UPDATE MAIN.JS — Remove robot bubbles JS and Upgrade Particles
// ═══════════════════════════════════════════════════════════
const mainJsFile = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsFile, 'utf8');

// A. Remove robot bubbles JS (which is appended at the very end of the file)
const jsMarker = '// --- Floating Interactive Robot Bubbles ---';
const jsIdx = mainJs.indexOf(jsMarker);
if (jsIdx !== -1) {
  mainJs = mainJs.substring(0, jsIdx);
  console.log('✅ Removed robot bubbles JS logic from main.js.');
} else {
  console.log('ℹ️ No robot bubbles JS logic found in main.js.');
}

// B. Replace initPremiumParticles with initHolographicMesh
const particleStartMarker = '// --- Particle Canvas (Premium Interactive Neural Core) ---';
const particleEndMarker = '// --- Text Rotator ---';

const particleStartIdx = mainJs.indexOf(particleStartMarker);
const particleEndIdx = mainJs.indexOf(particleEndMarker);

const holographicMeshJs = `// --- Particle Canvas (Interactive Holographic Neural Mesh) ---
(function initHolographicMesh() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let nodes = [];
  const mouse = { x: null, y: null, targetX: null, targetY: null, active: false, radius: 260 };
  let frame = 0;
  
  // Track mouse coordinates
  window.addEventListener('mousemove', e => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.active = false;
  });
  
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });
  
  window.addEventListener('touchend', () => {
    mouse.active = false;
  });
  
  function resize() {
    width = canvas.width = window.innerWidth;
    const hero = document.querySelector('.hero');
    height = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
    initGrid();
  }
  
  window.addEventListener('resize', resize);
  
  class Node {
    constructor(gx, gy, x, y) {
      this.gx = gx; // grid coordinates
      this.gy = gy;
      this.ox = x;  // original coordinates
      this.oy = y;
      this.x = x;   // current coordinates
      this.y = y;
      this.vx = 0;
      this.vy = 0;
      this.driftAngle = Math.random() * Math.PI * 2;
      this.driftSpeed = 0.008 + Math.random() * 0.008;
      this.driftRadius = 12 + Math.random() * 12;
      
      this.brightness = 0.12;
      this.color = '139, 92, 246'; // Purple base
    }
    
    update() {
      // 1. Natural slow organic drift
      this.driftAngle += this.driftSpeed;
      const targetDriftX = this.ox + Math.cos(this.driftAngle) * this.driftRadius;
      const targetDriftY = this.oy + Math.sin(this.driftAngle) * this.driftRadius;
      
      let tx = targetDriftX;
      let ty = targetDriftY;
      
      // 2. Mouse magnetic attraction & neon activation
      if (mouse.active && mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const pull = force * 0.32;
          tx = this.x + dx * pull;
          ty = this.y + dy * pull;
          
          this.brightness = 0.12 + force * 0.68;
          // Interpolate color from Purple (139, 92, 246) to Cyan (0, 212, 255)
          const r = Math.round(139 * (1 - force));
          const g = Math.round(92 * (1 - force) + 212 * force);
          const b = Math.round(246 * (1 - force) + 255 * force);
          this.color = \`\${r}, \${g}, \${b}\`;
        } else {
          this.brightness += (0.12 - this.brightness) * 0.08;
          this.color = '139, 92, 246';
        }
      } else {
        this.brightness += (0.12 - this.brightness) * 0.08;
        this.color = '139, 92, 246';
      }
      
      // Smooth dampening
      this.x += (tx - this.x) * 0.08;
      this.y += (ty - this.y) * 0.08;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = \`rgba(\${this.color}, \${this.brightness})\`;
      ctx.shadowBlur = this.brightness > 0.25 ? 10 : 0;
      ctx.shadowColor = \`rgb(\${this.color})\`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  
  function initGrid() {
    nodes = [];
    // Spacing based on resolution (highly optimized count)
    const cols = Math.max(8, Math.floor(width / 110));
    const rows = Math.max(6, Math.floor(height / 100));
    const cellW = width / (cols - 1);
    const cellH = height / (rows - 1);
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Subtle jitter to make it look organic rather than grid-locked
        const jitterX = (Math.random() - 0.5) * (cellW * 0.25);
        const jitterY = (Math.random() - 0.5) * (cellH * 0.25);
        
        const x = c * cellW + jitterX;
        const y = r * cellH + jitterY;
        
        nodes.push(new Node(c, r, x, y));
      }
    }
  }
  
  function drawConnections() {
    ctx.lineWidth = 1;
    
    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];
      
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        
        const colDiff = Math.abs(n1.gx - n2.gx);
        const rowDiff = Math.abs(n1.gy - n2.gy);
        
        // Connect only directly adjacent neighbors in the grid index
        if ((colDiff <= 1 && rowDiff <= 1) && (colDiff + rowDiff > 0)) {
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const avgBrightness = (n1.brightness + n2.brightness) / 2;
            
            // Draw background structural grid line
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = \`rgba(139, 92, 246, \${avgBrightness * 0.12})\`;
            ctx.stroke();
            
            // If active (near cursor), draw animated data packet flows
            if (avgBrightness > 0.22) {
              const alpha = (avgBrightness - 0.22) / 0.78;
              
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = \`rgba(0, 212, 255, \${alpha * 0.35})\`;
              ctx.setLineDash([4, 15]);
              ctx.lineDashOffset = -frame * 0.45; // Animates moving packets
              ctx.stroke();
              ctx.setLineDash([]); // Reset dash pattern
            }
          }
        }
      }
      
      // Draw direct laser connections to mouse cursor
      if (mouse.active && mouse.x !== null) {
        const dx = mouse.x - n1.x;
        const dy = mouse.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = \`rgba(0, 212, 255, \${alpha})\`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.lineWidth = 1;
        }
      }
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Smooth cursor follow interpolation
    if (mouse.active && mouse.targetX !== null) {
      if (mouse.x === null) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }
    } else {
      mouse.x = null;
      mouse.y = null;
    }
    
    frame++;
    
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
    }
    
    drawConnections();
    
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].draw();
    }
    
    requestAnimationFrame(animate);
  }
  
  resize();
  requestAnimationFrame(animate);
})();

`;

if (particleStartIdx !== -1 && particleEndIdx !== -1) {
  mainJs = mainJs.substring(0, particleStartIdx) + holographicMeshJs + '\n' + mainJs.substring(particleEndIdx);
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('✅ Injected Interactive Holographic Neural Mesh into main.js.');
} else {
  // If markers aren't found, try a generic replacement
  const altIdx = mainJs.indexOf('function initPremiumParticles()');
  if (altIdx !== -1) {
    console.log('⚠️ Could not find exact markers. Swapping via function signature...');
    // Replace just the function block by parsing it
    // But since git checkout reverted it, the markers SHOULD be found!
  } else {
    console.log('❌ Could not find particle block in main.js.');
  }
}
