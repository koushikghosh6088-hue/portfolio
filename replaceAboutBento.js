const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="about"';
const endTag = '<section id="technology"';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newAboutHTML = `<section id="about" class="about-bento-section" aria-label="About Us">
      <div class="container">
        
        <!-- HEADER -->
        <div class="ab-header fade-up-elem">
          <span class="ab-tag">ABOUT US</span>
          <h2 class="ab-heading">Built by Builders, For Businesses</h2>
        </div>

        <!-- BENTO GRID -->
        <div class="ab-bento-grid fade-up-elem">
          
          <!-- 1. The Mission (Globe) -->
          <div class="ab-card ab-mission">
            <div class="ab-card-bg orb-blue"></div>
            <div class="ab-globe-container">
               <div class="ab-globe">
                 <div class="g-ring r1"></div>
                 <div class="g-ring r2"></div>
                 <div class="g-ring r3"></div>
               </div>
               <div class="g-pulse-dot"></div>
            </div>
            <div class="ab-content z1">
               <h3 class="ab-title">From Maldah to the World</h3>
               <p class="ab-desc">We started with one mission: make elite AI and software accessible to businesses of all sizes across India and globally.</p>
            </div>
          </div>

          <!-- 2. The Impact (Counters) -->
          <div class="ab-card ab-impact">
             <div class="ab-card-bg orb-purple"></div>
             <div class="ab-content z1 h-100 flex-col-center">
                <div class="ab-stat-row">
                  <div class="ab-stat">
                    <div class="ab-s-num glow-c">30+</div>
                    <div class="ab-s-label">Clients</div>
                  </div>
                  <div class="ab-stat">
                    <div class="ab-s-num glow-p">150L+</div>
                    <div class="ab-s-label">Revenue Gen.</div>
                  </div>
                  <div class="ab-stat">
                    <div class="ab-s-num glow-g">50+</div>
                    <div class="ab-s-label">Projects</div>
                  </div>
                </div>
             </div>
          </div>

          <!-- 3. The Values (Terminal) -->
          <div class="ab-card ab-values">
             <div class="ab-card-bg orb-green"></div>
             <div class="ab-terminal">
                <div class="term-head"><span class="t-dot red"></span><span class="t-dot yel"></span><span class="t-dot grn"></span></div>
                <div class="term-body">
                   <div class="t-line"><span>></span> system.load("core_values");</div>
                   <div class="t-line green">Loading...</div>
                   <div class="t-line"><span>-</span> Shipping Fast 🚀</div>
                   <div class="t-line"><span>-</span> Elite Quality 💎</div>
                   <div class="t-line"><span>-</span> Maximum ROI 📈</div>
                   <div class="t-cursor"></div>
                </div>
             </div>
          </div>

          <!-- 4. The Founders (Interactive Duo) -->
          <div class="ab-card ab-founders">
             <div class="ab-card-bg orb-orange"></div>
             <div class="ab-content z1">
                <h3 class="ab-title">Leadership Duo</h3>
                <p class="ab-desc">Two engineers driving innovation.</p>
                <div class="f-duo-container">
                  
                  <div class="f-card">
                    <div class="f-avatar"><img src="founder1.png" alt="KG" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="f-fallback">KG</div></div>
                    <div class="f-info">
                      <h4>Koushik Ghosh</h4>
                      <span>CEO & AI Architect</span>
                    </div>
                    <div class="f-hover-reveal">
                      <div class="f-techs"><span>GPT-4</span><span>Next.js</span><span>Firebase</span></div>
                    </div>
                  </div>

                  <div class="f-card">
                    <div class="f-avatar"><img src="founder2.png" alt="AR" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="f-fallback">AR</div></div>
                    <div class="f-info">
                      <h4>Anirban Roy</h4>
                      <span>CTO & Product Lead</span>
                    </div>
                    <div class="f-hover-reveal">
                      <div class="f-techs"><span>React Native</span><span>AWS</span><span>System Arch</span></div>
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
    console.log("index.html About Bento updated successfully.");
} else {
    console.log("Error finding start or end tag.");
}
