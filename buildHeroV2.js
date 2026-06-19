const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

// Find the start of the home section
const startStr = '<section id="home"';
const startIdx = html.indexOf(startStr);

if (startIdx === -1) {
  console.log('Error: Could not find <section id="home"');
  process.exit(1);
}

// Find the matching closing </section>
let endIdx = -1;
let currentIdx = startIdx;
let depth = 0;

// Simple parser to find the exact closing tag for the section
const tagRegex = /<\/?section[^>]*>/g;
tagRegex.lastIndex = startIdx;

let match;
while ((match = tagRegex.exec(html)) !== null) {
  if (match[0].startsWith('</')) {
    depth--;
    if (depth === 0) {
      endIdx = match.index + match[0].length;
      break;
    }
  } else {
    depth++;
  }
}

if (endIdx === -1) {
  console.log('Error: Could not find closing </section> for home');
  process.exit(1);
}

const originalHero = html.substring(startIdx, endIdx);

// Modify the clone
let v2Hero = originalHero;
v2Hero = v2Hero.replace('<section id="home"', '<section id="home-v2"');
v2Hero = v2Hero.replace('id="global-robot"', 'id="global-robot-v2"');

// Inject Ambient Background Layer (Behind robot)
const ambientHtml = `
      <!-- V2 Ambient Glow Drift -->
      <div class="v2-ambient-drift" aria-hidden="true"></div>
`;
// Put it right before global-robot-v2
v2Hero = v2Hero.replace('<div class="global-robot-wrap"', ambientHtml + '\n        <div class="global-robot-wrap"');

// Inject Connection Lines & Chips (Around robot)
const chipsHtml = `
      <!-- V2 Connection Chips -->
      <div class="v2-chip chip-gpt">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>GPT-4</span>
        <svg class="v2-line line-gpt" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,50 Q50,0 100,100" fill="none" stroke="#00d4ff" stroke-width="2"/></svg>
      </div>
      <div class="v2-chip chip-n8n">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b2fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        <span>n8n</span>
        <svg class="v2-line line-n8n" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M100,50 Q50,100 0,0" fill="none" stroke="#7b2fff" stroke-width="2"/></svg>
      </div>
      <div class="v2-chip chip-wa">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <span>WhatsApp</span>
        <svg class="v2-line line-wa" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 Q50,50 100,50" fill="none" stroke="#25D366" stroke-width="2"/></svg>
      </div>
`;
v2Hero = v2Hero.replace('<!-- Floating UI Cards -->', '<!-- Floating UI Cards -->\n' + chipsHtml);

// Inject Typewriter Text (Under subhead)
const typewriterHtml = `
          <!-- V2 Typewriter Effect -->
          <div class="v2-typewriter-wrapper" aria-live="polite">
            <span class="v2-static-text">We Build</span> 
            <span class="v2-dynamic-text-container">
              <span class="v2-dynamic-text" id="v2-typewriter-text">Websites That Grow Your Business.</span>
            </span>
          </div>
`;
v2Hero = v2Hero.replace('<p class="hero-sub">', typewriterHtml + '\n          <p class="hero-sub" style="margin-top:15px;">'); // Push the subhead down slightly, or hide the old H1 if needed

// Oh wait! The prompt says "Add a single line of cycling text under the existing H1 ("We Build Websites That Grow Your Business.") or directly under the subhead".
// It's not replacing the H1, it's adding below it. Let's fix that.
const typewriterHtmlCorrect = `
          <!-- V2 Typewriter Effect -->
          <div class="v2-typewriter-wrapper" aria-live="polite">
            <span class="v2-typewriter-text" id="v2-tw-target">Websites That Grow Your Business.</span>
          </div>
`;
// Actually I'll inject it right after the hero-sub closing tag.
const heroSubEnd = v2Hero.indexOf('</p>', v2Hero.indexOf('class="hero-sub"'));
if (heroSubEnd !== -1) {
  v2Hero = v2Hero.substring(0, heroSubEnd + 4) + '\n' + typewriterHtmlCorrect + v2Hero.substring(heroSubEnd + 4);
}

// Inject Live Status Micro-line (Near trust badges)
const liveStatusHtml = `
          <!-- V2 Live Status Micro-line -->
          <div class="v2-live-status">
            <div class="v2-status-dot-wrap"><span class="v2-status-pulse"></span><span class="v2-status-dot"></span></div>
            <span class="v2-status-text">3 AI agents currently deployed</span>
          </div>
`;
const trustStart = v2Hero.indexOf('<div class="h-trust">');
if (trustStart !== -1) {
  v2Hero = v2Hero.substring(0, trustStart) + liveStatusHtml + '\n' + v2Hero.substring(trustStart);
}

// Add a distinct header to visually separate the new section for comparison
v2Hero = '<div style="background:#8B5CF6; color:#fff; text-align:center; padding:10px; font-weight:bold; letter-spacing:2px; z-index:9999; position:relative;">⬇️ NEW HERO SECTION V2 BELOW ⬇️</div>\n' + v2Hero;

// Insert V2 Hero immediately after the original
html = html.substring(0, endIdx) + '\n\n' + v2Hero + html.substring(endIdx);
fs.writeFileSync(indexFile, html, 'utf8');
console.log('Successfully cloned and injected Hero V2 into index.html');
