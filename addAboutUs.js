const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');

const aboutSection = `
  <!-- ═══ ABOUT US FOUNDERS ═══ -->
  <section id="about" class="about-section">
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

if (html.includes('<section id="contact"')) {
  html = html.replace('<section id="contact"', aboutSection + '<section id="contact"');
  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Successfully injected About Us section into index.html');
} else {
  console.log('Failed to find Contact section!');
}

const styleFile = path.join(__dirname, 'style.css');
const cssOverrides = `
/* =========================================================
   ABOUT US FOUNDERS SECTION
   ========================================================= */
.about-section {
  padding: 80px 5%;
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px auto;
}

.about-header .o-sec-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
}

.founder-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.founder-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

.founder-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.1);
}

.founder-image-wrap {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5));
  margin-bottom: 25px;
  position: relative;
}

/* Subtle glowing background behind the images */
.founder-image-wrap::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 250px; height: 250px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
  z-index: -1;
  pointer-events: none;
}
.founder-image-wrap.ind-glow-cyan::before {
  background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
}

.founder-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #030712;
}

.founder-name {
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
}

.founder-role {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--cyan);
  margin-bottom: 25px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.founder-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 24px;
  border-radius: 30px;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.founder-btn:hover {
  background: var(--purple);
  border-color: var(--purple);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
  transform: scale(1.05);
}

@media (max-width: 900px) {
  .founder-grid {
    grid-template-columns: 1fr;
  }
}
`;
fs.appendFileSync(styleFile, cssOverrides, 'utf8');
console.log('Successfully appended About Us CSS');
