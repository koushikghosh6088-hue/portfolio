const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="services" class="services-section" aria-label="Services">';
const endTag = '</section>';

// Find start and matching end
const startIndex = html.indexOf(startTag);
if (startIndex === -1) {
  console.error("Start tag not found.");
  process.exit(1);
}

// Simple logic to find the closing </section> tag for this section
// The section starts at startIndex.
let endIndex = html.indexOf(endTag, startIndex);
if (endIndex === -1) {
    console.error("End tag not found.");
    process.exit(1);
}
endIndex += endTag.length;

// The new HTML replacement
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
            <div class="mock-browser">
              <div class="mb-header">
                <div class="mb-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
                <div class="mb-url">jointailabs.com</div>
              </div>
              <div class="mb-body">
                <div class="mb-nav"></div>
                <div class="mb-hero"></div>
                <div class="mb-cards"><div class="mbc"></div><div class="mbc"></div><div class="mbc"></div></div>
              </div>
            </div>
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
            <div class="mock-chat">
              <div class="mc-header">
                <span>🤖 AI Assistant · Online</span>
                <div class="mc-dot"></div>
              </div>
              <div class="mc-body">
                <div class="mc-msg mc-user m1">I need pricing</div>
                <div class="mc-msg mc-bot m2">Sure! Our plans start from ₹4,999.</div>
                <div class="mc-msg mc-user m3">Can I get a demo?</div>
                <div class="mc-typing m4"><span class="td"></span><span class="td"></span><span class="td"></span></div>
              </div>
            </div>
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
            <div class="mock-wa">
              <div class="mw-header">
                <span>Joint AI Bot 🤖</span>
                <div class="mw-dot"></div>
              </div>
              <div class="mw-body">
                <div class="mw-msg mw-user">Hi! Interested in your services<span class="mw-time">10:01</span></div>
                <div class="mw-msg mw-bot">Welcome! Which service are you looking for? 🚀<span class="mw-time">10:01</span></div>
                <div class="mw-msg mw-user">Tell me about AI chatbot<span class="mw-time">10:02</span></div>
                <div class="mw-msg mw-bot mw-new">Our AI chatbots are powered by GPT-4 and can handle...<span class="mw-time">10:02</span></div>
              </div>
            </div>
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
          <div class="s-mockup-container">
            <div class="mock-phone">
              <div class="mp-frame">
                <div class="mp-notch"></div>
                <div class="mp-screen">
                  <div class="mp-head">MyApp</div>
                  <div class="mp-stat"><div class="mp-st-lab">Revenue</div><div class="mp-st-val v-rev" data-target="48500">0</div></div>
                  <div class="mp-stat"><div class="mp-st-lab">Orders</div><div class="mp-st-val v-ord" data-target="124">0</div></div>
                  <div class="mp-stat"><div class="mp-st-lab">Users</div><div class="mp-st-val v-usr" data-target="890">0</div></div>
                  <div class="mp-nav"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                </div>
              </div>
            </div>
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
            <div class="mock-dash">
              <div class="md-header"><span>📊 Business Dashboard</span><span>Sep 2026</span></div>
              <div class="md-kpis">
                <div class="md-kpi"><span>Revenue</span><strong class="c-g">₹4.8L ↑</strong></div>
                <div class="md-kpi"><span>Leads</span><strong class="c-c">1,247 ↑</strong></div>
                <div class="md-kpi"><span>Conversions</span><strong class="c-p">68% ↑</strong></div>
              </div>
              <div class="md-chart">
                <div class="md-bar" style="--h: 40%"></div>
                <div class="md-bar" style="--h: 60%"></div>
                <div class="md-bar" style="--h: 50%"></div>
                <div class="md-bar" style="--h: 80%"></div>
                <div class="md-bar" style="--h: 70%"></div>
                <div class="md-bar" style="--h: 95%"></div>
              </div>
              <div class="md-label">Monthly Revenue</div>
            </div>
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
            <div class="mock-pipe">
              <div class="mpl-node n1">📥<br>Lead</div>
              <div class="mpl-line l1"><div class="mpl-dot"></div></div>
              <div class="mpl-node n2">🤖<br>AI Qualify</div>
              <div class="mpl-line l2"><div class="mpl-dot"></div></div>
              <div class="mpl-node n3">📅<br>Auto Book</div>
              <div class="mpl-line l3"><div class="mpl-dot"></div></div>
              <div class="mpl-node n4">💰<br>Close Deal</div>
            </div>
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
