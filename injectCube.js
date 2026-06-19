const fs = require('fs');
const path = require('path');

// 1. Inject HTML into index.html
const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

const cubeHtml = `
  <!-- ═══ TOP RIGHT TECH VISUAL (3D CUBE) ═══ -->
  <div class="hero-tech-visual" aria-hidden="true">
    <div class="cube-wrapper">
      <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
    </div>
  </div>
`;

// Insert after mobile-top-logo if it exists, otherwise just inside hero-container or top of body.
// It's position: absolute, so anywhere at the top level is fine. Let's put it right before <div class="hero-container">
const heroContainerStr = '<div class="hero-container">';
if (html.includes(heroContainerStr)) {
  html = html.replace(heroContainerStr, cubeHtml + '\n\n    ' + heroContainerStr);
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Injected 3D Cube HTML.');
} else {
  console.log('Could not find hero-container to inject cube.');
}

// 2. Append CSS to style.css
const cssFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   TOP RIGHT TECH VISUAL (3D GLOWING CUBE)
   ========================================================= */
.hero-tech-visual {
  position: absolute;
  top: 40px;
  right: 5%;
  z-index: 100;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube-wrapper {
  width: 50px;
  height: 50px;
  perspective: 800px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 15s linear infinite;
}

.cube .face {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 212, 255, 0.4);
  background: rgba(139, 92, 246, 0.15);
  box-shadow: 
    inset 0 0 15px rgba(0, 212, 255, 0.2), 
    0 0 20px rgba(139, 92, 246, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.cube .front  { transform: rotateY(  0deg) translateZ(25px); }
.cube .right  { transform: rotateY( 90deg) translateZ(25px); }
.cube .back   { transform: rotateY(180deg) translateZ(25px); }
.cube .left   { transform: rotateY(-90deg) translateZ(25px); }
.cube .top    { transform: rotateX( 90deg) translateZ(25px); }
.cube .bottom { transform: rotateX(-90deg) translateZ(25px); }

@keyframes rotateCube {
  0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

@media (max-width: 900px) {
  .hero-tech-visual {
    top: 25px;
    right: 25px;
  }
  .cube-wrapper {
    width: 34px;
    height: 34px;
  }
  .cube .face {
    width: 34px;
    height: 34px;
    border-width: 1px;
    box-shadow: 
      inset 0 0 8px rgba(0, 212, 255, 0.2), 
      0 0 12px rgba(139, 92, 246, 0.3);
  }
  .cube .front  { transform: rotateY(  0deg) translateZ(17px); }
  .cube .right  { transform: rotateY( 90deg) translateZ(17px); }
  .cube .back   { transform: rotateY(180deg) translateZ(17px); }
  .cube .left   { transform: rotateY(-90deg) translateZ(17px); }
  .cube .top    { transform: rotateX( 90deg) translateZ(17px); }
  .cube .bottom { transform: rotateX(-90deg) translateZ(17px); }
}

@media (prefers-reduced-motion: reduce) {
  .cube { animation: none; transform: rotateX(30deg) rotateY(45deg); }
}
`;
fs.appendFileSync(cssFile, cssOverrides, 'utf8');
console.log('Appended 3D Cube CSS.');
