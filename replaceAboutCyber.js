const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="about"';
const endTag = '<section id="technology"';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newAboutHTML = `<section id="about" class="cyber-about-section" aria-label="About Us">
      <div class="container">
        
        <div class="cy-header fade-up-elem">
          <span class="cy-badge">WHO WE ARE</span>
          <h2>The Engineering Core</h2>
          <p>We are engineers. We don't just write code; we solve complex business logic with highly scalable, intelligent systems.</p>
        </div>

        <div class="cy-grid fade-up-elem">
          
          <!-- 1. The Neural Network Animation -->
          <div class="cy-network">
            <div class="nn-node n1"></div>
            <div class="nn-node n2"></div>
            <div class="nn-node n3"></div>
            <div class="nn-node n4"></div>
            <div class="nn-node n5"></div>
            <!-- Beams -->
            <div class="nn-beam b1"></div>
            <div class="nn-beam b2"></div>
            <div class="nn-beam b3"></div>
            <div class="nn-beam b4"></div>
            <!-- Central Core -->
            <div class="nn-core">
              <div class="nn-pulse"></div>
              <span>JOINT LABS</span>
            </div>
          </div>

          <!-- 2. Holographic Panels -->
          <div class="cy-panels">
            
            <div class="cy-panel">
              <div class="laser-border"></div>
              <div class="cy-p-content">
                <div class="cy-icon">🧠</div>
                <h3>Logic First</h3>
                <p>We analyze the root cause of your bottlenecks before writing a single line of code. Deep business understanding is our foundation.</p>
              </div>
            </div>

            <div class="cy-panel">
              <div class="laser-border"></div>
              <div class="cy-p-content">
                <div class="cy-icon">⚡</div>
                <h3>Scalable Arch</h3>
                <p>Enterprise-grade foundations designed to never break under pressure, whether you have 10 users or 100,000.</p>
              </div>
            </div>

          </div>

        </div>

        <!-- 3. Side-by-Side Founder ID Cards -->
        <div class="cy-founders-wrapper fade-up-elem">
          <h3 class="cy-f-title">Lead Architects</h3>
          
          <div class="cy-founders-flex">
            
            <!-- Anirban First -->
            <div class="cy-id-card">
              <div class="cy-scanner-line"></div>
              <div class="cy-id-top">
                <div class="cy-profile-pic">
                  <img src="founder2.png" alt="Anirban" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                  <div class="cy-fallback">AR</div>
                </div>
                <div class="cy-id-headers">
                  <span class="cy-id-tag">ACCESS GRANTED</span>
                  <h4>Anirban Roy</h4>
                  <span class="cy-role">CTO & Product Lead</span>
                </div>
              </div>
              <div class="cy-id-data">
                <div class="cy-data-row"><span>STATUS:</span> <span class="c-green">ONLINE</span></div>
                <div class="cy-data-row"><span>STACK:</span> <span>AWS, React, Node</span></div>
                <div class="cy-data-row"><span>SKILL:</span> <span>Cloud Architecture</span></div>
              </div>
            </div>

            <!-- Koushik Second -->
            <div class="cy-id-card">
              <div class="cy-scanner-line delay-scan"></div>
              <div class="cy-id-top">
                <div class="cy-profile-pic">
                  <img src="founder1.png" alt="Koushik" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                  <div class="cy-fallback">KG</div>
                </div>
                <div class="cy-id-headers">
                  <span class="cy-id-tag">ACCESS GRANTED</span>
                  <h4>Koushik Ghosh</h4>
                  <span class="cy-role">CEO & AI Architect</span>
                </div>
              </div>
              <div class="cy-id-data">
                <div class="cy-data-row"><span>STATUS:</span> <span class="c-green">ONLINE</span></div>
                <div class="cy-data-row"><span>STACK:</span> <span>GPT-4, Next.js, Python</span></div>
                <div class="cy-data-row"><span>SKILL:</span> <span>AI Integrations</span></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

  `;
        
    const updatedHTML = html.substring(0, startIndex) + newAboutHTML + html.substring(endIndex);
    fs.writeFileSync('index.html', updatedHTML);
    console.log("index.html Cyber-Interactive About updated successfully.");
} else {
    console.log("Error finding start or end tag.");
}
