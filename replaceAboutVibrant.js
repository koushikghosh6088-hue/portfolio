const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="about"';
const endTag = '<section id="technology"';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newAboutHTML = `<section id="about" class="about-vibrant-section" aria-label="About Us">
      <div class="container">
        
        <!-- 1. BOLD HERO STATEMENT -->
        <div class="ab-v-hero fade-up-elem">
          <span class="ab-v-tag">WHO WE ARE</span>
          <h2 class="ab-v-heading">We aren't just developers.<br><span class="text-gradient-cyan">We are Engineers.</span></h2>
          <p class="ab-v-sub">We don't just write code. We dive deep to understand your specific business problems, optimize your workflows, and build AI systems that actually generate ROI.</p>
        </div>

        <!-- 2. THE PROBLEM -> SOLUTION PIPELINE -->
        <div class="ab-pipeline-wrapper fade-up-elem">
          <h3 class="pipe-title">How We Transform Businesses</h3>
          <div class="ab-pipeline">
            
            <div class="pipe-box pipe-messy">
              <div class="p-icon">📄 ❓ 📉</div>
              <span class="p-label">Manual Work & Messy Data</span>
            </div>
            
            <div class="pipe-flow">
              <div class="p-particle"></div>
              <div class="p-particle delay-1"></div>
              <div class="p-particle delay-2"></div>
            </div>
            
            <div class="pipe-engine">
              <div class="e-glow"></div>
              <div class="e-core">
                <span class="e-text">Joint Labs<br>AI Engine</span>
                <div class="e-ring r1"></div>
                <div class="e-ring r2"></div>
              </div>
            </div>
            
            <div class="pipe-flow green">
              <div class="p-particle g-part"></div>
              <div class="p-particle g-part delay-1"></div>
              <div class="p-particle g-part delay-2"></div>
            </div>
            
            <div class="pipe-box pipe-growth">
              <div class="p-icon">🚀 📈 💰</div>
              <span class="p-label">Automated Revenue & Growth</span>
            </div>

          </div>
        </div>

        <!-- 3. VIBRANT BENTO CARDS -->
        <div class="ab-v-bento fade-up-elem">
          
          <!-- Card 1: Engineering DNA -->
          <div class="v-card v-dna">
            <div class="v-bg-glow cyan"></div>
            <div class="v-content">
              <div class="v-icon">🧬</div>
              <h3>Engineering DNA</h3>
              <p>We approach every project with an engineering mindset. We analyze the root cause of your bottlenecks before writing a single line of code.</p>
            </div>
          </div>

          <!-- Card 2: The Impact (Neon Glow) -->
          <div class="v-card v-impact">
            <div class="v-bg-glow green"></div>
            <div class="v-content flex-center text-center">
               <div class="v-stat-wrap">
                 <div class="v-stat-num neon-green">₹150L+</div>
                 <div class="v-stat-lbl">Revenue Generated for Clients</div>
               </div>
               <div class="v-stat-row">
                 <div><span class="neon-cyan">30+</span> Clients</div>
                 <div><span class="neon-purple">50+</span> Projects</div>
               </div>
            </div>
          </div>

          <!-- Card 3: Founders & Stack -->
          <div class="v-card v-founders">
            <div class="v-bg-glow purple"></div>
            <div class="v-content">
              <h3>The Architects</h3>
              <div class="vf-duo">
                
                <div class="vf-profile">
                  <div class="vf-img-wrap">
                    <img src="founder1.png" alt="Koushik" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="vf-fallback">KG</div>
                    <div class="vf-badge b1">AI</div>
                    <div class="vf-badge b2">GPT-4</div>
                  </div>
                  <div class="vf-info">
                    <h4>Koushik Ghosh</h4>
                    <span>CEO & AI Architect</span>
                  </div>
                </div>

                <div class="vf-profile">
                  <div class="vf-img-wrap">
                    <img src="founder2.png" alt="Anirban" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="vf-fallback">AR</div>
                    <div class="vf-badge b3">React</div>
                    <div class="vf-badge b4">AWS</div>
                  </div>
                  <div class="vf-info">
                    <h4>Anirban Roy</h4>
                    <span>CTO & Product Lead</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  `;
        
    const updatedHTML = html.substring(0, startIndex) + newAboutHTML + html.substring(endIndex);
    fs.writeFileSync('index.html', updatedHTML);
    console.log("index.html About Vibrant updated successfully.");
} else {
    console.log("Error finding start or end tag.");
}
