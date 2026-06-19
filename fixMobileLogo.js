const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

const mobileLogoHtml = `
    <!-- ═══ MOBILE TOP LOGO ═══ -->
    <div class="mobile-top-logo">
      <img src="loading_logo.png" alt="Joint AI Labs" class="hero-mobile-logo-img" />
    </div>
`;

// Insert it right after `<section id="home" class="hero" aria-label="Hero">`
const targetStr = '<section id="home" class="hero" aria-label="Hero">';
if (html.includes(targetStr)) {
  html = html.replace(targetStr, targetStr + mobileLogoHtml);
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Successfully injected mobile top logo into HTML.');
} else {
  console.log('Could not find Hero section tag.');
}

const styleFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   MOBILE TOP LOGO FIX
   ========================================================= */
.mobile-top-logo {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: none; /* hidden on desktop by default */
  pointer-events: none;
}

.hero-mobile-logo-img {
  width: 160px;
  height: auto;
  mix-blend-mode: screen;
  -webkit-mask-image: radial-gradient(circle at center, black 45%, transparent 65%);
  mask-image: radial-gradient(circle at center, black 45%, transparent 65%);
  filter: brightness(1.2) contrast(1.5);
  animation: pulseLogoHero 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes pulseLogoHero {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.03); opacity: 1; }
}

@media (max-width: 900px) {
  .mobile-top-logo {
    display: block;
  }
}
`;

fs.appendFileSync(styleFile, cssOverrides, 'utf8');
console.log('Successfully appended mobile logo CSS.');
