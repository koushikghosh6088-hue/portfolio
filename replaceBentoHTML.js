const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<!-- PART 4: VALUES GRID -->';
const endTag = '<!-- ═══════════════════════════════════════\n       4. TECHNOLOGY SECTION';

const startIndex = html.indexOf(startTag);
if (startIndex === -1) {
  console.error("Start tag not found.");
  process.exit(1);
}

const endIndex = html.indexOf(endTag, startIndex);
if (endIndex === -1) {
    console.error("End tag not found.");
    process.exit(1);
}

const newHTML = `<!-- PART 4: VALUES GRID (BENTO BOX REDESIGN) -->
      <div class="a-values-header fade-up-elem">
        <span class="a-tag centered">OUR VALUES</span>
        <h3 class="a-values-title">What We Stand For</h3>
      </div>
      
      <div class="bento-grid">
        <!-- Top Row (Large) -->
        <div class="bento-card b-large b-cyan fade-up-elem">
          <div class="bc-bg-glow"></div>
          <div class="bc-icon">🚀</div>
          <div class="bc-content">
            <h4>Innovation First</h4>
            <p>We stay ahead of the curve with the latest AI models and frameworks — always building for tomorrow. Innovation isn't an option, it's our default state.</p>
          </div>
        </div>
        
        <div class="bento-card b-large b-purple fade-up-elem" style="transition-delay: 0.1s;">
          <div class="bc-bg-glow"></div>
          <div class="bc-icon">🎯</div>
          <div class="bc-content">
            <h4>Results Driven</h4>
            <p>Every solution is measured by real business impact. No vanity metrics — just hard ROI that actually matters for your bottom line.</p>
          </div>
        </div>

        <!-- Middle Row (Small) -->
        <div class="bento-card b-small b-dark fade-up-elem" style="transition-delay: 0.2s;">
          <div class="bc-icon-top">🤝</div>
          <h4>Long-Term Partnership</h4>
          <p>We're not just vendors. We're your dedicated tech partner, invested in your success for the long run.</p>
        </div>

        <div class="bento-card b-small b-dark fade-up-elem" style="transition-delay: 0.3s;">
          <div class="bc-icon-top">⚡</div>
          <h4>Fast Delivery</h4>
          <p>Agile development means working products in weeks, not months. Speed without sacrificing quality.</p>
        </div>

        <div class="bento-card b-small b-dark fade-up-elem" style="transition-delay: 0.4s;">
          <div class="bc-icon-top">🔒</div>
          <h4>Trusted & Secure</h4>
          <p>All systems built with enterprise-grade security, data privacy compliance, and reliability at the core.</p>
        </div>

        <!-- Bottom Row (Full Width Showcase) -->
        <div class="bento-card b-full b-grad fade-up-elem" style="transition-delay: 0.5s;">
          <div class="bc-bg-glow"></div>
          <div class="bc-full-inner">
            <div class="bcf-text">
              <div class="bc-icon">🌍</div>
              <h4>Global Standards</h4>
              <p>Indian roots, global standards. We build high-performance products that compete with the best technology companies in the world, ensuring your business stays miles ahead.</p>
            </div>
            <div class="bcf-visual">
              <div class="globe-ring"></div>
              <div class="globe-ring r2"></div>
              <div class="globe-ring r3"></div>
              <div class="globe-core"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- PART 5: PROCESS STRIP (GLOWING PIPELINE REDESIGN) -->
      <div class="a-process-header fade-up-elem" style="margin-top: 100px;">
        <span class="a-tag centered">HOW WE WORK</span>
        <h3 class="a-process-title">From Idea to Launch in 4 Steps</h3>
      </div>
      
      <div class="process-pipeline fade-up-elem">
        <div class="pipe-track">
          <div class="pipe-progress" id="pipe-progress"></div>
        </div>
        
        <div class="pipe-nodes">
          <div class="p-node active" data-step="1">
            <div class="pn-orb"><div class="pn-icon">🔍</div></div>
            <div class="pn-card">
              <h4>1. Discovery</h4>
              <p>We analyze your business needs and identify high-ROI AI opportunities.</p>
            </div>
          </div>
          
          <div class="p-node" data-step="2">
            <div class="pn-orb"><div class="pn-icon">🎨</div></div>
            <div class="pn-card">
              <h4>2. Strategy & Design</h4>
              <p>We architect a custom solution and design an intuitive user experience.</p>
            </div>
          </div>
          
          <div class="p-node" data-step="3">
            <div class="pn-orb"><div class="pn-icon">⚙️</div></div>
            <div class="pn-card">
              <h4>3. Development</h4>
              <p>We build your product using agile methodologies and cutting-edge tech.</p>
            </div>
          </div>
          
          <div class="p-node" data-step="4">
            <div class="pn-orb"><div class="pn-icon">🚀</div></div>
            <div class="pn-card">
              <h4>4. Launch & Scale</h4>
              <p>We deploy, monitor, and scale your system to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  `;

const updatedHTML = html.substring(0, startIndex) + newHTML + html.substring(endIndex);
fs.writeFileSync('index.html', updatedHTML);
console.log('index.html updated successfully with Bento Grid and Process Pipeline.');
