const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="about"';
const endTag = '<section id="technology"';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newAboutHTML = `<section id="about" class="about-cinematic-section" aria-label="About Us">
      
      <!-- 1. CORE ETHOS (CINEMATIC TYPOGRAPHY) -->
      <div class="ac-ethos-container fade-up-elem">
        <div class="ac-fluid-bg"></div>
        <div class="container ac-ethos-content">
          <span class="ac-tag">WHO WE ARE</span>
          <h2 class="ac-ethos-heading">
            We engineer <span class="ac-text-glow">intelligence.</span><br>
            We build systems that <span class="ac-text-glow">scale.</span><br>
            We are <span class="ac-text-solid">Joint Labs.</span>
          </h2>
          <p class="ac-ethos-sub">No fluff. No bloated timelines. Just pure engineering craftsmanship dedicated to solving complex business bottlenecks.</p>
        </div>
      </div>

      <div class="container">
        
        <!-- 2. THE 3 PILLARS OF CRAFTSMANSHIP -->
        <div class="ac-pillars-grid fade-up-elem">
          
          <div class="ac-pillar">
            <div class="ac-p-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 class="ac-p-title">Logic First</h3>
            <p class="ac-p-desc">We don't rush to code. We tear down your business processes, find the exact friction points, and engineer logical solutions.</p>
          </div>

          <div class="ac-pillar">
            <div class="ac-p-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 class="ac-p-title">Scalable Architecture</h3>
            <p class="ac-p-desc">We build enterprise-grade foundations. Whether you have 10 users or 100,000, our systems are designed to never break under pressure.</p>
          </div>

          <div class="ac-pillar">
            <div class="ac-p-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 class="ac-p-title">Flawless Execution</h3>
            <p class="ac-p-desc">We ship fast, clean, and highly performant code. No excuses. Every product we deliver represents the pinnacle of our craft.</p>
          </div>

        </div>

        <!-- 3. THE ARCHITECTS (EDITORIAL FOUNDERS) -->
        <div class="ac-architects-header fade-up-elem">
          <h3 class="ac-arch-title">The Architects</h3>
          <div class="ac-arch-line"></div>
        </div>

        <div class="ac-founders-grid fade-up-elem">
          
          <!-- Founder 1: Anirban Roy -->
          <div class="ac-founder-card">
            <div class="ac-f-image-wrap">
              <img src="founder2.png" alt="Anirban Roy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="ac-f-fallback">AR</div>
            </div>
            <div class="ac-f-details">
              <div class="ac-f-role">CTO & Product Lead</div>
              <h4 class="ac-f-name">Anirban Roy</h4>
              <p class="ac-f-bio">Master of scalable cloud architecture and product strategy. Anirban ensures every line of code serves the business objective and scales effortlessly.</p>
              <div class="ac-f-stack">AWS / React Native / System Design</div>
            </div>
          </div>

          <!-- Founder 2: Koushik Ghosh -->
          <div class="ac-founder-card">
            <div class="ac-f-image-wrap">
              <img src="founder1.png" alt="Koushik Ghosh" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="ac-f-fallback">KG</div>
            </div>
            <div class="ac-f-details">
              <div class="ac-f-role">CEO & AI Architect</div>
              <h4 class="ac-f-name">Koushik Ghosh</h4>
              <p class="ac-f-bio">The mastermind behind our AI logic and full-stack performance. Koushik builds the neural pathways that automate complex business operations.</p>
              <div class="ac-f-stack">GPT-4 / Next.js / Backend Logic</div>
            </div>
          </div>

        </div>

      </div>
    </section>

  `;
        
    const updatedHTML = html.substring(0, startIndex) + newAboutHTML + html.substring(endIndex);
    fs.writeFileSync('index.html', updatedHTML);
    console.log("index.html Cinematic About updated successfully.");
} else {
    console.log("Error finding start or end tag.");
}
