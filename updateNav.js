const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const oldNavLinks = `<ul class="nav-links" id="nav-links" role="list">
        <li><a href="#home"         class="nav-link" data-section="home">Home</a></li>
        <li><a href="#services"     class="nav-link" data-section="services">Services</a></li>
        <li><a href="#about"        class="nav-link" data-section="about">About</a></li>
        <li><a href="#technology"   class="nav-link" data-section="technology">Technology</a></li>
        <li><a href="#portfolio"    class="nav-link" data-section="portfolio">Projects</a></li>
        <li><a href="#testimonials" class="nav-link" data-section="testimonials">Testimonials</a></li>
        <li><a href="#contact"      class="nav-link" data-section="contact">Contact</a></li>
      </ul>`;

const newNavLinks = `<ul class="nav-links" id="nav-links" role="list">
        <li><a href="#home"         class="nav-link" data-section="home">Home</a></li>
        <li><a href="#services"     class="nav-link" data-section="services">Services</a></li>
        <li><a href="#portfolio"    class="nav-link" data-section="portfolio">Projects</a></li>
        <li><a href="#pricing"      class="nav-link" data-section="pricing">Pricing</a></li>
        <li><a href="#contact"      class="nav-link" data-section="contact">Contact</a></li>
      </ul>`;

if (html.includes('<ul class="nav-links" id="nav-links" role="list">')) {
  // Try exact replacement
  if (html.includes(oldNavLinks)) {
    html = html.replace(oldNavLinks, newNavLinks);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Successfully updated desktop navigation.');
  } else {
    // Regex replacement if exact spaces don't match
    const regex = /<ul class="nav-links" id="nav-links" role="list">[\s\S]*?<\/ul>/;
    html = html.replace(regex, newNavLinks);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Successfully updated desktop navigation using regex.');
  }
} else {
  console.log('Could not find nav-links ul.');
}

// Check for mobile bottom navigation (mbn-item) if it exists
// Looking for something like `<nav class="mobile-bottom-nav"> ... </nav>`
// Actually the previous grep didn't find 'mbn-item' but I'll search for it manually just in case
const mbnRegex = /<nav class="mobile-bottom-nav"[^>]*>[\s\S]*?<\/nav>/;
const mbnMatch = html.match(mbnRegex);
if (mbnMatch) {
  console.log('Found mobile bottom navigation, updating it...');
  const newMbn = `<nav class="mobile-bottom-nav" role="navigation" aria-label="Mobile Navigation">
    <a href="#home" class="mbn-item active" data-section="home">
      <div class="mbn-icon">🏠</div>
      <span>Home</span>
    </a>
    <a href="#services" class="mbn-item" data-section="services">
      <div class="mbn-icon">✨</div>
      <span>Services</span>
    </a>
    <a href="#portfolio" class="mbn-item" data-section="portfolio">
      <div class="mbn-icon">💻</div>
      <span>Projects</span>
    </a>
    <a href="#pricing" class="mbn-item" data-section="pricing">
      <div class="mbn-icon">💰</div>
      <span>Pricing</span>
    </a>
    <a href="#contact" class="mbn-item" data-section="contact">
      <div class="mbn-icon">✉️</div>
      <span>Contact</span>
    </a>
  </nav>`;
  html = html.replace(mbnRegex, newMbn);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Successfully updated mobile bottom navigation.');
}
