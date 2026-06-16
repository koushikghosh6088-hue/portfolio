const fs = require('fs');

// 1. Add Drone HTML to index.html
let html = fs.readFileSync('index.html', 'utf-8');
const droneHTML = `
  <!-- Scroll Drone -->
  <div id="scroll-drone-track">
    <div id="scroll-drone">
      <div class="drone-core"></div>
      <div class="drone-ring"></div>
      <div class="drone-trail"></div>
    </div>
  </div>
`;
if (!html.includes('scroll-drone-track')) {
  html = html.replace('<body class="dark-theme">', '<body class="dark-theme">' + droneHTML);
  
  // Also enhance the "Who We Are" section in index.html by wrapping it in a cool cosmic div
  const aboutStr = '<section id="about" class="about-section premium-glass-layout" aria-label="About Us">';
  const enhancedAbout = '<section id="about" class="about-section premium-glass-layout enhanced-about" aria-label="About Us">\n' +
    '<div class="about-cyber-lines"></div>\n' +
    '<div class="about-orb"></div>';
  html = html.replace(aboutStr, enhancedAbout);
  
  fs.writeFileSync('index.html', html);
  console.log('index.html updated with drone and enhanced about section.');
}

// 2. Add Drone CSS and Enhanced About CSS
let css = fs.readFileSync('style.css', 'utf-8');
const droneCSS = `

/* ══════════════════════════════
   SCROLL DRONE & ENHANCED ABOUT
══════════════════════════════ */
#scroll-drone-track {
  position: fixed; top: 0; left: 40px; width: 1px; height: 100vh;
  background: linear-gradient(to bottom, transparent, rgba(60, 32, 163, 0.5), transparent);
  z-index: 9999; pointer-events: none;
}
#scroll-drone {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
  transition: top 0.1s ease-out;
}
.drone-core {
  width: 8px; height: 8px; background: #7a42ff; border-radius: 50%;
  box-shadow: 0 0 15px #7a42ff, 0 0 30px #7a42ff;
}
.drone-ring {
  position: absolute; width: 100%; height: 100%; border: 1px dashed var(--cyan); border-radius: 50%;
  animation: droneSpin 4s linear infinite;
}
.drone-trail {
  position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
  width: 2px; height: 100px; background: linear-gradient(to top, #7a42ff, transparent);
  opacity: 0.5;
}
@keyframes droneSpin {
  0% { transform: rotate(0deg) scale(0.8); border-color: #7a42ff; }
  50% { transform: rotate(180deg) scale(1.2); border-color: var(--cyan); }
  100% { transform: rotate(360deg) scale(0.8); border-color: #7a42ff; }
}
@media (max-width: 1200px) {
  #scroll-drone-track { display: none; }
}

/* Enhanced About Section */
.enhanced-about {
  position: relative; overflow: hidden;
  background: radial-gradient(circle at 80% 50%, rgba(60, 32, 163, 0.08) 0%, transparent 60%);
  border-top: 1px solid rgba(122, 66, 255, 0.1);
  border-bottom: 1px solid rgba(122, 66, 255, 0.1);
  padding: 8rem 0;
}
.about-cyber-lines {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: 
    linear-gradient(rgba(122, 66, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(122, 66, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px; z-index: -2;
}
.about-orb {
  position: absolute; top: -10%; right: -10%; width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(122, 66, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%; filter: blur(50px); z-index: -1;
  animation: floatOrb 10s ease-in-out infinite alternate;
}
.enhanced-about .pg-card {
  background: rgba(10, 15, 30, 0.6);
  border: 1px solid rgba(122, 66, 255, 0.2);
  transform: translateY(0); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.enhanced-about .pg-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #7a42ff;
  box-shadow: 0 15px 40px rgba(122, 66, 255, 0.2);
}
.enhanced-about .pg-icon {
  background: rgba(122, 66, 255, 0.1); color: #7a42ff;
}
`;
if (!css.includes('#scroll-drone-track')) {
  fs.appendFileSync('style.css', droneCSS);
  console.log('style.css updated.');
}

// 3. Add JS for Scroll Drone
let js = fs.readFileSync('main.js', 'utf-8');
const droneJS = `
// Scroll Drone Logic
window.addEventListener('scroll', () => {
  const drone = document.getElementById('scroll-drone');
  if (drone) {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? scrolled / max : 0;
    // Bound between 2% and 98%
    const boundedPercent = Math.max(0.02, Math.min(0.98, percent));
    drone.style.top = \`\${boundedPercent * 100}%\`;
  }
});
`;
if (!js.includes('Scroll Drone Logic')) {
  fs.appendFileSync('main.js', '\n' + droneJS);
  console.log('main.js updated.');
}
