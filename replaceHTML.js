const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="services" class="services-section" aria-label="Services">';
const endTag = '</section>';

let startIndex = html.indexOf(startTag);
if (startIndex === -1) {
  // Try finding services-new-section if it's already updated
  startIndex = html.indexOf('<section id="services" class="services-new-section" aria-label="Services">');
}

if (startIndex === -1) {
  console.error("Start tag not found in index.html.");
  process.exit(1);
}

let endIndex = html.indexOf(endTag, startIndex);
if (endIndex === -1) {
    console.error("End tag not found.");
    process.exit(1);
}
endIndex += endTag.length;

const newHTML = `
  <section id="services" class="services-new-section" aria-label="Services">
    <div class="container">
      
      <!-- Section Header -->
      <div class="s-header" data-gsap="fadeUp">
        <span class="s-tag">WHAT WE OFFER</span>
        <h2 class="s-heading">Our Services</h2>
        <p class="s-sub">End-to-end digital solutions — from stunning websites to intelligent AI agents — everything your business needs to grow.</p>
      </div>

      <!-- Industry Pill Strip (Marquee) -->
      <div class="s-marquee-wrap">
        <div class="s-marquee-label">Trusted by businesses in:</div>
        <div class="s-marquee-track">
          <!-- Duplicated for infinite loop -->
          <div class="s-marquee-inner">
            <span class="s-pill">🏠 Real Estate</span>
            <span class="s-pill">🍽️ Restaurants</span>
            <span class="s-pill">🏥 Healthcare</span>
            <span class="s-pill">🏭 Manufacturing</span>
            <span class="s-pill">🛒 E-Commerce</span>
            <span class="s-pill">🚚 Logistics</span>
            <span class="s-pill">🎓 Education</span>
            <span class="s-pill">💰 Finance</span>
            <!-- duplicate -->
            <span class="s-pill">🏠 Real Estate</span>
            <span class="s-pill">🍽️ Restaurants</span>
            <span class="s-pill">🏥 Healthcare</span>
            <span class="s-pill">🏭 Manufacturing</span>
            <span class="s-pill">🛒 E-Commerce</span>
            <span class="s-pill">🚚 Logistics</span>
            <span class="s-pill">🎓 Education</span>
            <span class="s-pill">💰 Finance</span>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="s-grid">

        <!-- CARD 1: Website Design -->
        <div class="s-card" id="s-card-1">
          <div class="s-card-top">
            <div class="s-icon-badge">🌐</div>
            <div class="s-label-pill p-blue">MOST POPULAR</div>
          </div>
          <h3 class="s-title">Website Design & Development</h3>
          <p class="s-desc">Blazing-fast, SEO-optimized websites that convert visitors into customers. From landing pages to full web applications.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> Responsive across all devices</li>
            <li><span class="s-check">✦</span> SEO-optimized from day one</li>
            <li><span class="s-check">✦</span> 3D & interactive UI/UX</li>
            <li><span class="s-check">✦</span> Lightning-fast performance</li>
          </ul>
          <div class="s-ideal">Ideal for: Startups, Restaurants, Real Estate, Clinics</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-browser advanced">
              <div class="mb-header">
                <div class="mb-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
                <div class="mb-url"><span class="lock">🔒</span> jointailabs.com</div>
              </div>
              <div class="mb-body">
                <div class="mb-scroll-wrap">
                  <div class="mb-nav"></div>
                  <div class="mb-hero">
                     <div class="mb-hero-text"></div>
                     <div class="mb-hero-text short"></div>
                     <div class="mb-hero-btn"></div>
                  </div>
                  <div class="mb-cards">
                     <div class="mbc"></div><div class="mbc"></div><div class="mbc"></div>
                  </div>
                  <div class="mb-section"></div>
                </div>
              </div>
            </div>
            <div class="mock-glow-orb orb-cyan"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Get a Website →</a>
        </div>

        <!-- CARD 2: AI Chatbot -->
        <div class="s-card" id="s-card-2">
          <div class="s-card-top">
            <div class="s-icon-badge">🤖</div>
            <div class="s-label-pill p-purple">AI POWERED</div>
          </div>
          <h3 class="s-title">AI Chatbot Development</h3>
          <p class="s-desc">Deploy intelligent GPT-4 powered chatbots that handle queries, qualify leads, and book appointments 24/7 without human intervention.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> GPT-4 & custom AI models</li>
            <li><span class="s-check">✦</span> Multi-language support</li>
            <li><span class="s-check">✦</span> CRM & calendar integration</li>
            <li><span class="s-check">✦</span> Trained on your business data</li>
          </ul>
          <div class="s-ideal">Ideal for: E-commerce, Healthcare, Education, SaaS</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-chat advanced">
              <div class="mc-header">
                <div class="mc-avatar">🤖</div>
                <div class="mc-info">
                  <span>AI Assistant</span>
                  <span class="mc-status"><span class="mc-dot"></span> Online</span>
                </div>
              </div>
              <div class="mc-body">
                <div class="mc-msg mc-user m1">I need a custom AI agent.</div>
                <div class="mc-msg mc-bot m2">
                  <span class="mc-bot-icon">✨</span>
                  <div class="mc-bot-text">We can build that! Our GPT-4 agents handle everything automatically.</div>
                </div>
                <div class="mc-typing m3"><span class="td"></span><span class="td"></span><span class="td"></span></div>
              </div>
            </div>
            <div class="mock-glow-orb orb-purple"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Deploy a Chatbot →</a>
        </div>

        <!-- CARD 3: WhatsApp AI Agent -->
        <div class="s-card" id="s-card-3">
          <div class="s-card-top">
            <div class="s-icon-badge">💬</div>
            <div class="s-label-pill p-green">HOT</div>
          </div>
          <h3 class="s-title">WhatsApp AI Agent</h3>
          <p class="s-desc">Turn WhatsApp into your most powerful sales channel. Our AI agents qualify leads, nurture prospects, and close deals — automatically.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> WhatsApp Business API</li>
            <li><span class="s-check">✦</span> AI-powered conversations</li>
            <li><span class="s-check">✦</span> Auto follow-ups & reminders</li>
            <li><span class="s-check">✦</span> Lead scoring & qualification</li>
          </ul>
          <div class="s-ideal">Ideal for: Real Estate, Coaching, Retail, Service Businesses</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-wa advanced">
              <div class="mw-header">
                <div class="mw-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12.031 0C5.398 0 .015 5.385.015 12.015c0 2.122.553 4.195 1.605 6.012L.15 23.473l5.586-1.464c1.758.956 3.754 1.461 5.795 1.461h.004c6.632 0 12.016-5.385 12.016-12.016C23.55 4.823 18.261 0 12.031 0zm0 21.468h-.002c-1.803 0-3.568-.485-5.116-1.4l-.367-.217-3.8.997.994-3.705-.238-.378a10.012 10.012 0 01-1.53-5.32C1.972 5.955 6.452 1.474 12.033 1.474c2.686 0 5.21 1.047 7.108 2.946 1.898 1.9 2.944 4.425 2.944 7.112.001 5.488-4.48 9.936-10.054 9.936zm5.503-7.514c-.302-.151-1.785-.882-2.062-.983-.277-.1-.478-.151-.679.151-.201.302-.78 1-.955 1.201-.176.201-.352.226-.653.075-1.503-.75-2.585-1.473-3.551-2.827-.253-.356-.026-.549.125-.7.135-.135.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.679-1.635-.93-2.239-.245-.589-.494-.509-.679-.519l-.578-.01c-.201 0-.528.075-.805.377-.276.302-1.055 1.03-1.055 2.513s1.08 2.915 1.231 3.116c.151.201 2.126 3.243 5.15 4.545 1.968.846 2.766.753 3.275.632.581-.137 1.785-.729 2.036-1.432.251-.703.251-1.307.176-1.432-.075-.126-.276-.201-.578-.352z"/></svg>
                </div>
                <div class="mw-info">
                  <span>Joint AI Bot</span>
                  <span class="mw-status">typing...</span>
                </div>
              </div>
              <div class="mw-body">
                <div class="mw-date">TODAY</div>
                <div class="mw-msg mw-user m-w1">Hi, interested in WhatsApp automation.<span class="mw-time">10:01</span></div>
                <div class="mw-msg mw-bot m-w2">Welcome! 🚀 We can automate lead generation and sales for you.<span class="mw-time">10:01</span><span class="mw-tick">✓✓</span></div>
                <div class="mw-msg mw-bot mw-new">Would you like to see a live demo?<span class="mw-time">10:02</span></div>
              </div>
            </div>
            <div class="mock-glow-orb orb-green"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Get WhatsApp AI →</a>
        </div>

        <!-- CARD 4: Mobile App -->
        <div class="s-card" id="s-card-4">
          <div class="s-card-top">
            <div class="s-icon-badge">📱</div>
          </div>
          <h3 class="s-title">Mobile App Development</h3>
          <p class="s-desc">Beautiful, high-performance mobile apps for iOS and Android. From concept to App Store — we handle everything end to end.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> Flutter & React Native</li>
            <li><span class="s-check">✦</span> iOS & Android deployment</li>
            <li><span class="s-check">✦</span> Push notifications & offline mode</li>
            <li><span class="s-check">✦</span> App Store optimization</li>
          </ul>
          <div class="s-ideal">Ideal for: Logistics, Food Delivery, Healthcare, Retail</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container mock-3d-wrap">
            <div class="mock-phone advanced">
              <div class="mp-frame">
                <div class="mp-notch"></div>
                <div class="mp-screen">
                  <div class="mp-head">Dashboard</div>
                  <div class="mp-chart-circle">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                      <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path class="circle" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <text x="18" y="20.35" class="percentage">75%</text>
                    </svg>
                  </div>
                  <div class="mp-stat"><div class="mp-st-lab">Revenue</div><div class="mp-st-val v-rev">₹4.8L</div></div>
                  <div class="mp-stat"><div class="mp-st-lab">Users</div><div class="mp-st-val v-usr">890</div></div>
                  <div class="mp-nav"><span class="dot active"></span><span class="dot"></span><span class="dot"></span></div>
                </div>
              </div>
            </div>
            <div class="floating-pill p1">💰 +15%</div>
            <div class="floating-pill p2">📈 Up</div>
            <div class="mock-glow-orb orb-blue"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Build Your App →</a>
        </div>

        <!-- CARD 5: Business Management Software -->
        <div class="s-card" id="s-card-5">
          <div class="s-card-top">
            <div class="s-icon-badge">📊</div>
            <div class="s-label-pill p-orange">ENTERPRISE</div>
          </div>
          <h3 class="s-title">Business Management Software</h3>
          <p class="s-desc">Custom ERP, CRM, and management dashboards that give you full control over operations, inventory, sales, and team — in one place.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> Custom ERP & CRM systems</li>
            <li><span class="s-check">✦</span> Real-time analytics & reports</li>
            <li><span class="s-check">✦</span> Inventory & HR management</li>
            <li><span class="s-check">✦</span> Role-based access control</li>
          </ul>
          <div class="s-ideal">Ideal for: Manufacturing, Retail Chains, Hospitals, Logistics</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-dash advanced">
              <div class="md-header">
                <div class="md-h-left"><span class="md-icon">📊</span> Business Analytics</div>
                <div class="md-h-right">Live<span class="pulse-dot"></span></div>
              </div>
              <div class="md-kpis">
                <div class="md-kpi"><span>Revenue</span><strong class="c-g">₹4.8L <span class="trend">↑</span></strong></div>
                <div class="md-kpi"><span>Users</span><strong class="c-c">1,247 <span class="trend">↑</span></strong></div>
                <div class="md-kpi"><span>Conv.</span><strong class="c-p">68% <span class="trend">↑</span></strong></div>
              </div>
              <div class="md-chart-area">
                <div class="md-grid-line gl-1"></div>
                <div class="md-grid-line gl-2"></div>
                <div class="md-grid-line gl-3"></div>
                <div class="md-bars">
                  <div class="md-bar b1"><div class="md-bar-inner"></div></div>
                  <div class="md-bar b2"><div class="md-bar-inner"></div></div>
                  <div class="md-bar b3"><div class="md-bar-inner"></div></div>
                  <div class="md-bar b4"><div class="md-bar-inner"></div></div>
                  <div class="md-bar b5"><div class="md-bar-inner"></div></div>
                  <div class="md-bar b6"><div class="md-bar-inner"></div></div>
                </div>
              </div>
            </div>
            <div class="mock-glow-orb orb-orange"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Build Your System →</a>
        </div>

        <!-- CARD 6: Custom AI Solutions -->
        <div class="s-card" id="s-card-6">
          <div class="s-card-top">
            <div class="s-icon-badge">⚡</div>
            <div class="s-label-pill p-purple">CUSTOM</div>
          </div>
          <h3 class="s-title">Custom AI Solutions & Automation</h3>
          <p class="s-desc">Have a unique requirement? We architect and build bespoke AI pipelines, automation workflows, and software solutions tailored exactly to your business.</p>
          <ul class="s-features">
            <li><span class="s-check">✦</span> n8n & LangChain automation</li>
            <li><span class="s-check">✦</span> Custom AI agent systems</li>
            <li><span class="s-check">✦</span> API integrations & microservices</li>
            <li><span class="s-check">✦</span> Cloud-native & scalable</li>
          </ul>
          <div class="s-ideal">Ideal for: Enterprises, SaaS Products, Fintech, Healthcare Tech</div>
          
          <!-- Mockup -->
          <div class="s-mockup-container">
            <div class="mock-pipe advanced">
              <div class="mpl-node n1">
                <div class="n-icon">📥</div>
                <div class="n-label">Lead</div>
                <div class="n-pulse"></div>
              </div>
              <div class="mpl-line l1">
                <div class="mpl-packet p1"></div>
                <div class="mpl-packet p2"></div>
              </div>
              <div class="mpl-node n2">
                <div class="n-icon">🤖</div>
                <div class="n-label">AI Agent</div>
                <div class="n-pulse"></div>
              </div>
              <div class="mpl-line l2">
                <div class="mpl-packet p3"></div>
              </div>
              <div class="mpl-node n3">
                <div class="n-icon">💰</div>
                <div class="n-label">Close</div>
                <div class="n-pulse"></div>
              </div>
            </div>
            <div class="mock-glow-orb orb-multi"></div>
          </div>

          <a href="#contact" class="s-cta-btn">Build Custom →</a>
        </div>

      </div> <!-- End Grid -->

      <!-- Bottom CTA Strip -->
      <div class="s-bottom-cta">
        <div class="s-cta-left">
          <h3>Not sure which service you need?</h3>
          <p>Book a free 30-minute strategy call — we'll analyze your business and recommend exactly what will give you the best ROI.</p>
        </div>
        <div class="s-cta-right">
          <a href="#contact" class="s-btn-primary">📅 Book Free Call</a>
          <a href="https://wa.me/918017683428" class="s-btn-wa">💬 WhatsApp Us</a>
        </div>
      </div>

    </div>
  </section>`;

const updatedHTML = html.substring(0, startIndex) + newHTML + html.substring(endIndex);
fs.writeFileSync('index.html', updatedHTML);
console.log('index.html updated successfully.');
