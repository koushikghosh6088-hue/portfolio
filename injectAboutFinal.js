const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

const aboutSection = `
  <!-- ═══ ABOUT US FOUNDERS ═══ -->
  <section id="about" class="about-section o-fade-up">
    <div class="o-cs-contain">
      <div class="about-header">
        <h2 class="o-sec-title">Meet the <span class="o-highlight">Engineers</span></h2>
        <p class="o-sec-desc">
          We are Koushik and Anirban, two passionate engineers on a mission to democratize advanced technology. 
          Our goal is to build cutting-edge AI pipelines, seamless web applications, and intelligent business management 
          software that give you full control over your business, driving growth and efficiency.
        </p>
      </div>

      <div class="founder-grid">
        <!-- Founder 1: Koushik -->
        <div class="founder-card">
          <div class="founder-image-wrap ind-glow-purple">
            <img src="founder1.png" alt="Koushik - AI Engineer" class="founder-img" />
          </div>
          <div class="founder-info">
            <h3 class="founder-name">Koushik</h3>
            <p class="founder-role">Co-Founder & AI Engineer</p>
            <a href="tel:7003383676" class="founder-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>70033 83676</span>
            </a>
          </div>
        </div>

        <!-- Founder 2: Anirban -->
        <div class="founder-card">
          <div class="founder-image-wrap ind-glow-cyan">
            <img src="founder2.png" alt="Anirban - Software Engineer" class="founder-img" />
          </div>
          <div class="founder-info">
            <h3 class="founder-name">Anirban</h3>
            <p class="founder-role">Co-Founder & Software Engineer</p>
            <a href="tel:8017683428" class="founder-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>80176 83428</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

`;

const targetString = '<footer class="o-footer" id="contact">';
if (html.includes(targetString)) {
  html = html.replace(targetString, aboutSection + targetString);
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Successfully injected About Us section into index.html');
} else {
  console.log('Failed to find footer section!');
}
