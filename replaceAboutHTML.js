const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="about" class="about-section" aria-label="About Us">';
const endTag = '</section>';

const startIndex = html.indexOf(startTag);
if (startIndex === -1) {
  console.error("Start tag not found.");
  process.exit(1);
}

let endIndex = html.indexOf(endTag, startIndex);
if (endIndex === -1) {
    console.error("End tag not found.");
    process.exit(1);
}
endIndex += endTag.length;

const newHTML = `
  <section id="about" class="about-new-section" aria-label="About Us">
    <div class="container">
      <!-- SECTION HEADER -->
      <div class="a-header fade-up-elem">
        <span class="a-tag">WHO WE ARE</span>
        <h2 class="a-heading">Built by Builders, For Businesses</h2>
        <p class="a-sub">Two engineers from India on a mission to make world-class AI accessible to every business — no matter the size.</p>
      </div>

      <!-- PART 1: STATS ROW -->
      <div class="a-stats-grid">
        <div class="a-stat-card fade-up-elem">
          <div class="a-stat-icon c-cyan">🚀</div>
          <div class="a-stat-num"><span class="a-counter" data-target="50">0</span>+</div>
          <div class="a-stat-label">Projects Delivered</div>
        </div>
        <div class="a-stat-card fade-up-elem">
          <div class="a-stat-icon c-purple">😊</div>
          <div class="a-stat-num"><span class="a-counter" data-target="30">0</span>+</div>
          <div class="a-stat-label">Happy Clients</div>
        </div>
        <div class="a-stat-card fade-up-elem">
          <div class="a-stat-icon c-cyan">📅</div>
          <div class="a-stat-num"><span class="a-counter" data-target="2">0</span>+</div>
          <div class="a-stat-label">Years Experience</div>
        </div>
        <div class="a-stat-card fade-up-elem">
          <div class="a-stat-icon c-purple">⭐</div>
          <div class="a-stat-num"><span class="a-counter" data-target="98">0</span>%</div>
          <div class="a-stat-label">Client Satisfaction</div>
        </div>
      </div>

      <!-- PART 2: OUR STORY & TIMELINE -->
      <div class="a-story-container">
        <div class="a-story-left slide-in-left">
          <span class="a-tag">OUR STORY</span>
          <h3 class="a-story-heading">From a Small Apartment to 30+ Clients Across India</h3>
          <p class="a-story-p">Joint AI Labs was founded with one bold idea — every business, no matter the size, deserves access to world-class AI technology. What started as a two-person team building websites has grown into a full-service AI digital agency trusted by 30+ clients across India.</p>
          <p class="a-story-p">We've built WhatsApp AI agents that close ₹50L+ in deals, ERP systems managing thousands of daily transactions, and AI chatbots handling customer queries round the clock — all powered by GPT-4, LangChain, and custom AI pipelines.</p>
          <p class="a-story-p">Today we operate from Maldah, West Bengal — serving clients from Mumbai to Bangalore to Delhi — and building products that compete with the best tech companies in the world.</p>
          
          <div class="a-story-badges">
            <span class="a-s-badge">🏆 ₹50L+ Revenue Generated for Clients</span>
            <span class="a-s-badge">⚡ 2-Week Average Delivery Time</span>
            <span class="a-s-badge">🌍 Clients Across 8+ Indian Cities</span>
          </div>
        </div>
        
        <div class="a-story-right slide-in-right">
          <div class="a-timeline">
            <div class="a-timeline-line"></div>
            
            <div class="a-node left">
              <div class="a-node-year">2022</div>
              <div class="a-node-icon">🚀</div>
              <div class="a-node-content">
                <h4>Founded</h4>
                <p>First website delivered to a paying client</p>
              </div>
              <div class="a-node-conn"></div>
              <div class="a-node-dot pulse-cyan"></div>
            </div>
            
            <div class="a-node right">
              <div class="a-node-year">2023</div>
              <div class="a-node-icon p">🤖</div>
              <div class="a-node-content">
                <h4>First AI Chatbot</h4>
                <p>Deployed GPT-4 chatbot for a healthcare client</p>
              </div>
              <div class="a-node-conn"></div>
              <div class="a-node-dot pulse-purple"></div>
            </div>
            
            <div class="a-node left">
              <div class="a-node-year">2024</div>
              <div class="a-node-icon">💰</div>
              <div class="a-node-content">
                <h4>₹50L+ Generated</h4>
                <p>Client revenue milestone crossed through AI agents</p>
              </div>
              <div class="a-node-conn"></div>
              <div class="a-node-dot pulse-cyan"></div>
            </div>
            
            <div class="a-node right">
              <div class="a-node-year">2025</div>
              <div class="a-node-icon grad">🌍</div>
              <div class="a-node-content">
                <h4>30+ Clients & Growing</h4>
                <p>Serving businesses across India and expanding globally</p>
              </div>
              <div class="a-node-conn"></div>
              <div class="a-node-dot pulse-grad"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- PART 3: FOUNDERS SECTION -->
      <div class="a-founders-header fade-up-elem">
        <span class="a-tag centered">MEET THE FOUNDERS</span>
        <h3 class="a-founders-title">The People Behind the Products</h3>
        <p class="a-founders-sub">Two builders, one mission — to make AI work for every business.</p>
      </div>
      
      <div class="a-founders-grid">
        <!-- Founder 1 -->
        <div class="a-founder-card fade-up-elem">
          <div class="a-f-glow cyan"></div>
          <div class="a-f-avatar">
            <div class="a-f-ring"></div>
            <img src="founder1.png" alt="Koushik Ghosh" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="a-f-initials" style="display:none;">KG</div>
          </div>
          <div class="a-f-status"><span class="a-f-dot"></span>Available for Projects</div>
          
          <div class="a-f-role-badge">CEO & AI Architect</div>
          <h4 class="a-f-name">Koushik Ghosh</h4>
          <p class="a-f-title">Co-Founder & Chief AI Officer</p>
          <div class="a-f-divider"></div>
          <p class="a-f-bio">AI engineer and full-stack developer passionate about building products that solve real business problems. Leads GPT-4 integrations, WhatsApp AI agents, custom ERP systems, and full-stack architecture at Joint AI Labs.</p>
          
          <div class="a-f-skills">
            <span>🤖 AI Engineering</span><span>⚡ Full-Stack Dev</span><span>📊 System Architecture</span><span>🔗 LangChain</span><span>🌐 Next.js</span><span>🔥 Firebase</span>
          </div>
          
          <div class="a-f-contacts">
            <a href="mailto:jointailabs@gmail.com">✉️ Email Us</a>
            <a href="tel:8017683428">📞 Call</a>
            <a href="#">💼 LinkedIn</a>
          </div>
        </div>

        <!-- Founder 2 -->
        <div class="a-founder-card fade-up-elem">
          <div class="a-f-glow purple"></div>
          <div class="a-f-avatar">
            <div class="a-f-ring"></div>
            <img src="founder2.png" alt="Anirban Roy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="a-f-initials" style="display:none;">AR</div>
          </div>
          <div class="a-f-status"><span class="a-f-dot"></span>Available for Projects</div>
          
          <div class="a-f-role-badge">CTO & Product Lead</div>
          <h4 class="a-f-name">Anirban Roy</h4>
          <p class="a-f-title">Co-Founder & Chief Technology Officer</p>
          <div class="a-f-divider"></div>
          <p class="a-f-bio">Product strategist and mobile development expert driving our technology roadmap and cloud infrastructure. Ensures every product ships fast, scales reliably, and delivers measurable ROI for our clients.</p>
          
          <div class="a-f-skills">
            <span>📱 Flutter & RN</span><span>☁️ Cloud Infrastructure</span><span>🚀 Product Strategy</span><span>🔥 Firebase</span><span>📦 Node.js</span><span>🤖 n8n Automation</span>
          </div>
          
          <div class="a-f-contacts">
            <a href="mailto:jointailabs@gmail.com">✉️ Email Us</a>
            <a href="tel:7003383676">📞 Call</a>
            <a href="#">💼 LinkedIn</a>
          </div>
        </div>
      </div>

      <!-- PART 4: VALUES GRID -->
      <div class="a-values-header fade-up-elem">
        <span class="a-tag centered">OUR VALUES</span>
        <h3 class="a-values-title">What We Stand For</h3>
      </div>
      
      <div class="a-values-grid">
        <div class="a-val-card fade-up-elem">
          <div class="a-val-icon c-cyan">🚀</div>
          <h4>Innovation First</h4>
          <p>We stay ahead of the curve with the latest AI models and frameworks — always building for tomorrow.</p>
        </div>
        <div class="a-val-card fade-up-elem">
          <div class="a-val-icon c-purple">🎯</div>
          <h4>Results Driven</h4>
          <p>Every solution is measured by real business impact. No vanity metrics — just ROI that matters for your bottom line.</p>
        </div>
        <div class="a-val-card fade-up-elem">
          <div class="a-val-icon c-cyan">🤝</div>
          <h4>Long-Term Partnership</h4>
          <p>We're not just vendors. We're your dedicated tech partner, invested in your success for the long run.</p>
        </div>
        <div class="a-val-card fade-up-elem">
          <div class="a-val-icon c-purple">⚡</div>
          <h4>Fast Delivery</h4>
          <p>Agile development means working products in weeks, not months. Speed without sacrificing quality.</p>
        </div>
        <div class="a-val-card fade-up-elem">
          <div class="a-val-icon c-cyan">🔒</div>
          <h4>Trusted & Secure</h4>
          <p>All systems built with enterprise-grade security, data privacy compliance, and reliability at the core.</p>
        </div>
        <div class="a-val-card fade-up-elem">
          <div class="a-val-icon c-purple">🌍</div>
          <h4>Global Standards</h4>
          <p>Indian roots, global standards. We build products that compete with the best tech companies in the world.</p>
        </div>
      </div>

      <!-- PART 5: PROCESS STRIP -->
      <div class="a-process-header fade-up-elem">
        <span class="a-tag centered">HOW WE WORK</span>
        <h3 class="a-process-title">From Idea to Launch in 4 Steps</h3>
      </div>
      
      <div class="a-process-strip fade-up-elem">
        <div class="a-step">
          <div class="a-step-icon">🔍</div>
          <h4>1. Discovery</h4>
          <p>We analyze your business needs and identify high-ROI AI opportunities.</p>
        </div>
        <div class="a-step">
          <div class="a-step-icon">🎨</div>
          <h4>2. Strategy & Design</h4>
          <p>We architect a custom solution and design an intuitive user experience.</p>
        </div>
        <div class="a-step">
          <div class="a-step-icon">⚙️</div>
          <h4>3. Development</h4>
          <p>We build your product using agile methodologies and cutting-edge tech.</p>
        </div>
        <div class="a-step">
          <div class="a-step-icon">🚀</div>
          <h4>4. Launch & Scale</h4>
          <p>We deploy, monitor, and scale your system to ensure long-term success.</p>
        </div>
      </div>

    </div>
  </section>`;

const updatedHTML = html.substring(0, startIndex) + newHTML + html.substring(endIndex);
fs.writeFileSync('index.html', updatedHTML);
console.log('index.html updated successfully with new About section.');
