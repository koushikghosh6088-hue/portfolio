const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section id="technology" class="technology-section" aria-label="Technology">';
const endTag = '</body>';

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

const newHTML = `
  <!-- ==================================================
       SECTION 1 — TECHNOLOGY
       ================================================== -->
  <section id="technology" class="tech-new-section" aria-label="Technology">
    <div class="container">
      
      <!-- Section Header -->
      <div class="tech-header fade-up-elem">
        <span class="tech-tag">OUR TECHNOLOGY</span>
        <h2 class="tech-heading">Powered by Cutting-Edge AI</h2>
        <p class="tech-sub">We use the most advanced AI technologies and frameworks to build solutions that outperform the competition.</p>
      </div>

      <!-- PART 1: TECH STACK GRID -->
      <div class="tech-grid-container">
        <p class="tech-grid-label fade-up-elem">Technologies We Work With</p>
        <div class="tech-grid">
          <!-- AI & LLM -->
          <div class="t-badge t-fade">
            <div class="tb-icon">⚡</div><div class="tb-name">GPT-4</div><div class="tb-cat">LLM</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🧠</div><div class="tb-name">Gemini</div><div class="tb-cat">LLM</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🔗</div><div class="tb-name">LangChain</div><div class="tb-cat">AI Framework</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🤗</div><div class="tb-name">Hugging Face</div><div class="tb-cat">AI Models</div>
          </div>
          
          <!-- Automation -->
          <div class="t-badge t-fade">
            <div class="tb-icon">⚙️</div><div class="tb-name">n8n</div><div class="tb-cat">Automation</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🔄</div><div class="tb-name">Make.com</div><div class="tb-cat">Automation</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">⚡</div><div class="tb-name">Zapier</div><div class="tb-cat">Automation</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🤖</div><div class="tb-name">AutoGen</div><div class="tb-cat">AI Agents</div>
          </div>

          <!-- Frontend -->
          <div class="t-badge t-fade">
            <div class="tb-icon">⚛️</div><div class="tb-name">React</div><div class="tb-cat">Frontend</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🌐</div><div class="tb-name">Next.js</div><div class="tb-cat">Frontend</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🎨</div><div class="tb-name">Tailwind CSS</div><div class="tb-cat">Styling</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">📱</div><div class="tb-name">Flutter</div><div class="tb-cat">Mobile</div>
          </div>

          <!-- Backend -->
          <div class="t-badge t-fade">
            <div class="tb-icon">🟢</div><div class="tb-name">Node.js</div><div class="tb-cat">Backend</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🐍</div><div class="tb-name">Python</div><div class="tb-cat">Backend</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🚀</div><div class="tb-name">FastAPI</div><div class="tb-cat">Backend</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">☁️</div><div class="tb-name">Firebase</div><div class="tb-cat">Backend</div>
          </div>

          <!-- Database & Cloud -->
          <div class="t-badge t-fade">
            <div class="tb-icon">🗄️</div><div class="tb-name">Supabase</div><div class="tb-cat">Database</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🍃</div><div class="tb-name">MongoDB</div><div class="tb-cat">Database</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">☁️</div><div class="tb-name">AWS</div><div class="tb-cat">Cloud</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🔵</div><div class="tb-name">Google Cloud</div><div class="tb-cat">Cloud</div>
          </div>

          <!-- Integrations -->
          <div class="t-badge t-fade">
            <div class="tb-icon">💬</div><div class="tb-name">WhatsApp API</div><div class="tb-cat">Integration</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">📧</div><div class="tb-name">Twilio</div><div class="tb-cat">Integration</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">💳</div><div class="tb-name">Razorpay</div><div class="tb-cat">Payment</div>
          </div>
          <div class="t-badge t-fade">
            <div class="tb-icon">🗺️</div><div class="tb-name">Google Maps</div><div class="tb-cat">Integration</div>
          </div>
        </div>
      </div>

      <!-- PART 2: THREE SHOWCASES -->
      
      <!-- SHOWCASE 1: WhatsApp AI Agent -->
      <div class="t-showcase-row tech-trigger-wa">
        <div class="t-show-vis slide-in-left">
          <div class="wa-mock">
            <div class="wa-head">
              <span class="wa-back">←</span>
              <div class="wa-av">🤖</div>
              <div class="wa-info"><strong>Joint AI Bot</strong><span>online</span></div>
              <div class="wa-icons">📞 🎥 ⋮</div>
            </div>
            <div class="wa-body">
              <div class="wa-msg user w-msg-fade">Hi! I'm interested in your services 👋<span>10:24 AM</span></div>
              <div class="wa-msg bot w-msg-fade">Welcome to Joint AI Labs! 🚀 Which service are you looking for?<span>10:24 AM</span></div>
              <div class="wa-msg user w-msg-fade">Tell me about WhatsApp AI<span>10:25 AM</span></div>
              <div class="wa-msg bot w-msg-fade">Great choice! Our WhatsApp AI agents qualify leads 24/7, book appointments automatically, and close deals while you sleep 💰<span>10:25 AM</span></div>
              
              <div class="wa-typing"><span></span><span></span><span></span></div>
              <div class="wa-msg bot wa-delayed">Want a FREE demo? Tap below 👇<span>10:25 AM</span></div>
              <div class="wa-cta-btn">📅 Book Free Demo</div>
            </div>
            <div class="wa-foot">
              <div class="wa-input">Message</div>
              <div class="wa-send">🎤</div>
            </div>
          </div>
        </div>
        
        <div class="t-show-text slide-in-right">
          <span class="tech-tag">WHATSAPP AI AGENT</span>
          <h3 class="ts-heading">Turn WhatsApp Into Your #1 Sales Channel</h3>
          <p class="ts-desc">Our AI agents work 24/7 on WhatsApp — qualifying leads the moment they message, nurturing them through the sales funnel, and booking appointments automatically. No human intervention needed.</p>
          
          <div class="ts-features">
            <div class="ts-feat"><strong>✦ Instant Response</strong> — Reply to every lead within seconds, day or night</div>
            <div class="ts-feat"><strong>✦ Smart Qualification</strong> — AI asks the right questions and scores leads automatically</div>
            <div class="ts-feat"><strong>✦ Auto Appointment Booking</strong> — Syncs with your calendar and books meetings on its own</div>
            <div class="ts-feat"><strong>✦ Follow-up Sequences</strong> — Automated follow-ups until the lead converts or opts out</div>
          </div>
          
          <div class="ts-result">
            💰 Clients using our WhatsApp AI generate an average of ₹2.4L in new revenue within 30 days
          </div>
          
          <a href="#contact" class="ts-cta-btn">Get WhatsApp AI →</a>
        </div>
      </div>

      <!-- SHOWCASE 2: AI Chatbot -->
      <div class="t-showcase-row reverse tech-trigger-chat">
        <div class="t-show-text slide-in-left">
          <span class="tech-tag">AI CHATBOT</span>
          <h3 class="ts-heading">Your 24/7 AI Customer Support & Sales Agent</h3>
          <p class="ts-desc">Deploy a GPT-4 powered chatbot trained on your business data. It handles customer queries, qualifies leads, and books appointments — across your website, app, or any platform.</p>
          
          <div class="ts-features">
            <div class="ts-feat"><strong>✦ GPT-4 Powered</strong> — Uses the latest AI to understand context and give accurate responses</div>
            <div class="ts-feat"><strong>✦ Trained on Your Data</strong> — Upload your docs, FAQs, and product catalog — bot knows everything</div>
            <div class="ts-feat"><strong>✦ Multi-Platform</strong> — Deploy on website, mobile app, WhatsApp, or Facebook Messenger</div>
            <div class="ts-feat"><strong>✦ Analytics Dashboard</strong> — Track conversations, conversion rates, and common queries</div>
          </div>
          
          <div class="ts-result blue">
            🤖 Our chatbots handle an average of 500+ queries/day, reducing support costs by 70%
          </div>
          
          <a href="#contact" class="ts-cta-btn">Deploy a Chatbot →</a>
        </div>
        
        <div class="t-show-vis slide-in-right">
          <div class="cb-mock">
            <div class="cb-head">
              <div class="cb-info"><strong>🤖 JointBot AI</strong><span><span class="cb-dot"></span>Online · Powered by GPT-4</span></div>
              <div class="cb-close">×</div>
            </div>
            <div class="cb-body">
              <div class="cb-msg bot c-msg-fade">👋 Hi! I'm your AI assistant. How can I help today?</div>
              <div class="cb-msg user c-msg-fade">What services do you offer?</div>
              <div class="cb-msg bot c-msg-fade">We offer: 🌐 Website Design, 🤖 AI Chatbots, 💬 WhatsApp AI, 📱 Mobile Apps & 📊 Business Software! Which interests you?</div>
              <div class="cb-msg user c-msg-fade">AI Chatbot — how much does it cost?</div>
              <div class="cb-msg bot cb-delayed">Our chatbot plans start from ₹4,999/mo! Want me to connect you with our team for a custom quote? 🚀</div>
              <div class="cb-chips">
                <span>Yes, connect me!</span><span>Tell me more</span><span>Book a demo</span>
              </div>
            </div>
            <div class="cb-foot">
              <div class="cb-input">Type your message...</div>
              <div class="cb-send">➤</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SHOWCASE 3: Automation Pipeline -->
      <div class="t-showcase-row tech-trigger-pipe">
        <div class="t-show-vis slide-in-left">
          <div class="pipe-mock">
            <h4 class="pipe-title">⚡ AI Automation Pipeline</h4>
            
            <div class="pipe-stage p-fade">
              <div class="ps-icon cyan-g">📥</div>
              <div class="ps-info"><strong>Lead Capture</strong><span>Website form / WhatsApp / Social</span></div>
              <div class="ps-status green">● Active</div>
            </div>
            <div class="pipe-conn"><div class="pipe-dot"></div></div>
            
            <div class="pipe-stage p-fade">
              <div class="ps-icon purple-g">🤖</div>
              <div class="ps-info"><strong>AI Qualification</strong><span>GPT-4 scores lead 1-10</span></div>
              <div class="ps-status">Lead Score: 8.5/10 ⭐</div>
            </div>
            <div class="pipe-conn"><div class="pipe-dot"></div></div>
            
            <div class="pipe-stage p-fade">
              <div class="ps-icon cyan-g">📅</div>
              <div class="ps-info"><strong>Auto Scheduling</strong><span>Calendar synced, slot booked</span></div>
              <div class="ps-status">Meeting booked: Tomorrow 3PM ✅</div>
            </div>
            <div class="pipe-conn"><div class="pipe-dot"></div></div>
            
            <div class="pipe-stage p-fade">
              <div class="ps-icon purple-g">💬</div>
              <div class="ps-info"><strong>Follow-up Sequences</strong><span>WhatsApp + Email nurturing</span></div>
              <div class="ps-status">Message 3/5 sent ✦</div>
            </div>
            <div class="pipe-conn"><div class="pipe-dot"></div></div>
            
            <div class="pipe-stage p-fade">
              <div class="ps-icon green-g">💰</div>
              <div class="ps-info"><strong>Deal Closed</strong><span>CRM updated, invoice sent</span></div>
              <div class="ps-status">Revenue: ₹45,000 💰</div>
            </div>
          </div>
        </div>
        
        <div class="t-show-text slide-in-right">
          <span class="tech-tag">AI AUTOMATION</span>
          <h3 class="ts-heading">Automate Your Entire Business Workflow</h3>
          <p class="ts-desc">From the moment a lead contacts you to the invoice being sent — we automate the entire journey using GPT-4, n8n, LangChain, and custom AI pipelines. Your team focuses on high-value work while AI handles the rest.</p>
          
          <div class="ts-features">
            <div class="ts-feat"><strong>✦ End-to-End Automation</strong> — Lead capture to invoice — fully automated with zero manual steps</div>
            <div class="ts-feat"><strong>✦ n8n & LangChain Pipelines</strong> — Custom workflows connecting all your tools and platforms</div>
            <div class="ts-feat"><strong>✦ AI Decision Making</strong> — GPT-4 makes intelligent decisions at every step of the pipeline</div>
            <div class="ts-feat"><strong>✦ Real-Time Monitoring</strong> — Dashboard showing every automation run, success rate, and ROI</div>
          </div>
          
          <div class="ts-result purple">
            ⚡ Our automation clients save an average of 40+ hours per week in manual work
          </div>
          
          <div class="ts-tech-pills">
            <span>GPT-4</span><span>LangChain</span><span>n8n</span><span>Make.com</span><span>WhatsApp API</span><span>Firebase</span>
          </div>
          
          <a href="#contact" class="ts-cta-btn">Automate Your Business →</a>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================================================
       SECTION 2 — PORTFOLIO
       ================================================== -->
  <section id="portfolio" class="port-new-section" aria-label="Projects">
    <div class="container">
      
      <!-- Section Header -->
      <div class="tech-header fade-up-elem">
        <span class="tech-tag">OUR WORK</span>
        <h2 class="tech-heading">Featured Projects</h2>
        <p class="tech-sub">Real solutions, real results — here's what we've built for businesses across India.</p>
      </div>

      <!-- Filter Tabs -->
      <div class="port-tabs fade-up-elem">
        <button class="p-tab active" data-filter="all">All</button>
        <button class="p-tab" data-filter="websites">Websites</button>
        <button class="p-tab" data-filter="ai-agents">AI Agents</button>
        <button class="p-tab" data-filter="mobile-apps">Mobile Apps</button>
        <button class="p-tab" data-filter="erp-crm">ERP/CRM</button>
        <button class="p-tab" data-filter="automation">Automation</button>
      </div>

      <!-- Project Cards Grid -->
      <div class="port-grid">
        
        <!-- Card 1 -->
        <div class="p-card fade-up-elem" data-category="websites">
          <div class="pc-vis" style="background: linear-gradient(135deg, #0d1a2e, #1a2a4a);">
            <div class="pc-cat-badge">Website + AI</div>
            <div class="pc-res-badge">500+ Queries/Day</div>
            <div class="pc-mock-browser">
              <div class="pmb-h"><span class="r"></span><span class="y"></span><span class="g"></span></div>
              <div class="pmb-b"><div class="pmb-nav"></div><div class="pmb-hero"></div><div class="pmb-row"><div class="pmb-col"></div><div class="pmb-col"></div></div></div>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-tech"><span>Next.js</span><span>GPT-4</span><span>Firebase</span></div>
            <h4 class="pc-title">E-Commerce Platform with AI Support</h4>
            <p class="pc-desc">Full e-commerce site with AI chatbot handling 500+ customer queries/day, reducing support costs by 70%.</p>
            <div class="pc-highlight">💰 Support costs reduced by 70%</div>
            <a href="#contact" class="pc-link">View Case Study →</a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="p-card fade-up-elem" data-category="ai-agents">
          <div class="pc-vis" style="background: linear-gradient(135deg, #0d2a1a, #1a4a2a);">
            <div class="pc-cat-badge">WhatsApp AI</div>
            <div class="pc-res-badge">₹2.4L in 30 Days</div>
            <div class="pc-mock-wa">
              <div class="pmw-msg u">Hi</div><div class="pmw-msg b">Hello</div><div class="pmw-msg u">Price?</div>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-tech"><span>WhatsApp API</span><span>GPT-4</span><span>n8n</span></div>
            <h4 class="pc-title">Real Estate Lead Automation</h4>
            <p class="pc-desc">WhatsApp AI agent qualifying leads and booking site visits, generating ₹2.4L in new revenue within 30 days.</p>
            <div class="pc-highlight">📈 ₹2.4L revenue in first month</div>
            <a href="#contact" class="pc-link">View Case Study →</a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="p-card fade-up-elem" data-category="erp-crm">
          <div class="pc-vis" style="background: linear-gradient(135deg, #1a0d2e, #2a1a4a);">
            <div class="pc-cat-badge">Business ERP</div>
            <div class="pc-res-badge">150 Employees</div>
            <div class="pc-mock-dash">
              <div class="pmd-top"><div class="pmd-kpi"></div><div class="pmd-kpi"></div><div class="pmd-kpi"></div></div>
              <div class="pmd-bot"><div class="pmd-bar"></div><div class="pmd-bar"></div><div class="pmd-bar"></div><div class="pmd-bar"></div></div>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-tech"><span>React</span><span>Node.js</span><span>MongoDB</span></div>
            <h4 class="pc-title">Manufacturing ERP System</h4>
            <p class="pc-desc">Complete ERP for a 150-employee manufacturer — inventory, HR, sales, and real-time reporting in one dashboard.</p>
            <div class="pc-highlight">⚡ 40+ hours saved per week</div>
            <a href="#contact" class="pc-link">View Case Study →</a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="p-card fade-up-elem" data-category="mobile-apps">
          <div class="pc-vis" style="background: linear-gradient(135deg, #0d1a1a, #1a2a3a);">
            <div class="pc-cat-badge">Mobile App</div>
            <div class="pc-res-badge">200+ Deliveries/Day</div>
            <div class="pc-mock-phone">
              <div class="pmp-notch"></div>
              <div class="pmp-map">📍</div>
              <div class="pmp-list"><div class="pmp-li"></div><div class="pmp-li"></div></div>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-tech"><span>Flutter</span><span>Firebase</span><span>Google Maps</span></div>
            <h4 class="pc-title">Delivery Management App</h4>
            <p class="pc-desc">Cross-platform app for a logistics company tracking 200+ deliveries/day with real-time GPS and push notifications.</p>
            <div class="pc-highlight">📱 4.8★ rating on Play Store</div>
            <a href="#contact" class="pc-link">View Case Study →</a>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="p-card fade-up-elem" data-category="websites">
          <div class="pc-vis" style="background: linear-gradient(135deg, #2a1a0d, #3a2a1a);">
            <div class="pc-cat-badge">Website</div>
            <div class="pc-res-badge">200 Orders/Day</div>
            <div class="pc-mock-browser">
              <div class="pmb-h"><span class="r"></span><span class="y"></span><span class="g"></span></div>
              <div class="pmb-b"><div class="pmb-hero" style="background:#ffaa0033"></div><div class="pmb-row"><div class="pmb-food"></div><div class="pmb-food"></div><div class="pmb-food"></div></div></div>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-tech"><span>Next.js</span><span>Tailwind</span><span>Razorpay</span></div>
            <h4 class="pc-title">Premium Restaurant Website</h4>
            <p class="pc-desc">Stunning restaurant website with online ordering, table reservations, and real-time kitchen management dashboard.</p>
            <div class="pc-highlight">🍽️ 0 to 200 online orders/day</div>
            <a href="#contact" class="pc-link">View Case Study →</a>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="p-card fade-up-elem" data-category="erp-crm">
          <div class="pc-vis" style="background: linear-gradient(135deg, #0d2a2a, #1a3a4a);">
            <div class="pc-cat-badge">AI + CRM</div>
            <div class="pc-res-badge">1000+ Patients/Month</div>
            <div class="pc-mock-crm">
              <div class="pmc-prof"><div class="pmc-av"></div><div class="pmc-lines"><div class="pl1"></div><div class="pl2"></div></div></div>
              <div class="pmc-slots"><div class="pms"></div><div class="pms"></div><div class="pms"></div></div>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-tech"><span>React</span><span>GPT-4</span><span>LangChain</span></div>
            <h4 class="pc-title">Hospital Patient Management AI</h4>
            <p class="pc-desc">AI-powered CRM managing 1000+ patients/month with automated appointment booking and follow-up sequences.</p>
            <div class="pc-highlight">🏥 Staff workload reduced by 60%</div>
            <a href="#contact" class="pc-link">View Case Study →</a>
          </div>
        </div>

      </div>

      <!-- Portfolio Bottom CTA -->
      <div class="port-cta-block fade-up-elem">
        <h3 class="pcb-title">Have a project in mind? Let's build it together.</h3>
        <p class="pcb-sub">Every project starts with a free consultation — no commitment needed.</p>
        <div class="pcb-btns">
          <a href="#contact" class="s-btn-primary">🚀 Start Your Project</a>
          <a href="https://wa.me/918017683428" class="s-btn-wa">💬 WhatsApp Us</a>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================================================
       SECTION 3 — TESTIMONIALS
       ================================================== -->
  <section id="testimonials" class="test-new-section" aria-label="Testimonials">
    <div class="container">
      
      <!-- Section Header -->
      <div class="tech-header fade-up-elem">
        <span class="tech-tag">CLIENT REVIEWS</span>
        <h2 class="tech-heading">What Our Clients Say</h2>
        <p class="tech-sub">Don't take our word for it — hear directly from the businesses we've transformed.</p>
      </div>

      <!-- Review Summary Bar -->
      <div class="test-summary fade-up-elem">
        <div class="tsum-item">⭐ 4.9/5 Average Rating</div>
        <div class="tsum-sep"></div>
        <div class="tsum-item">💬 30+ Client Reviews</div>
        <div class="tsum-sep"></div>
        <div class="tsum-item">✅ 98% Satisfaction Rate</div>
      </div>
      
    </div>

    <!-- Infinite Scrolling Rows -->
    <div class="test-marquee-wrap fade-up-elem">
      <!-- Row 1: Scrolls Left -->
      <div class="test-track left">
        <div class="test-inner">
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"Joint AI Labs completely transformed our operations. Their WhatsApp AI agent saves us 20 hours a week and closes leads automatically."</p>
            <div class="tc-author"><strong>Rahul S.</strong><span>Real Estate Director</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"The ERP dashboard they built gave us visibility we never had before. Lightning fast delivery and incredible support from the team."</p>
            <div class="tc-author"><strong>Priya K.</strong><span>Manufacturing Lead</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"We deployed their GPT-4 chatbot and saw support tickets drop by 70%. Best investment we made this year without a doubt."</p>
            <div class="tc-author"><strong>Amit M.</strong><span>E-commerce Founder</span></div>
          </div>
          <!-- Duplicates for loop -->
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"Joint AI Labs completely transformed our operations. Their WhatsApp AI agent saves us 20 hours a week and closes leads automatically."</p>
            <div class="tc-author"><strong>Rahul S.</strong><span>Real Estate Director</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"The ERP dashboard they built gave us visibility we never had before. Lightning fast delivery and incredible support from the team."</p>
            <div class="tc-author"><strong>Priya K.</strong><span>Manufacturing Lead</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"We deployed their GPT-4 chatbot and saw support tickets drop by 70%. Best investment we made this year without a doubt."</p>
            <div class="tc-author"><strong>Amit M.</strong><span>E-commerce Founder</span></div>
          </div>
        </div>
      </div>
      
      <!-- Row 2: Scrolls Right -->
      <div class="test-track right">
        <div class="test-inner">
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"The mobile app they delivered is flawless. They handled everything from design to app store deployment perfectly."</p>
            <div class="tc-author"><strong>Sneha T.</strong><span>Logistics Manager</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"Unbelievable speed and quality. They built a custom AI pipeline that automated our entire invoicing and billing system."</p>
            <div class="tc-author"><strong>Vikram R.</strong><span>Fintech CEO</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"A true technology partner. They don't just build software, they solve core business problems with cutting-edge tech."</p>
            <div class="tc-author"><strong>Anjali D.</strong><span>Healthcare Director</span></div>
          </div>
          <!-- Duplicates for loop -->
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"The mobile app they delivered is flawless. They handled everything from design to app store deployment perfectly."</p>
            <div class="tc-author"><strong>Sneha T.</strong><span>Logistics Manager</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"Unbelievable speed and quality. They built a custom AI pipeline that automated our entire invoicing and billing system."</p>
            <div class="tc-author"><strong>Vikram R.</strong><span>Fintech CEO</span></div>
          </div>
          <div class="test-card">
            <div class="tc-stars">⭐⭐⭐⭐⭐</div>
            <p class="tc-text">"A true technology partner. They don't just build software, they solve core business problems with cutting-edge tech."</p>
            <div class="tc-author"><strong>Anjali D.</strong><span>Healthcare Director</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================================================
       SECTION 4 — CONTACT & FOOTER
       ================================================== -->
  <section id="contact" class="contact-new-section" aria-label="Contact Us">
    <div class="container">
      
      <div class="contact-grid">
        <div class="contact-left fade-up-elem">
          <span class="tech-tag">GET IN TOUCH</span>
          <h2 class="tech-heading" style="margin-bottom: 20px;">Ready to scale with AI?</h2>
          <p class="tech-sub" style="text-align:left; margin:0 0 40px 0;">Let's discuss how we can automate your workflow, build your next app, or deploy an AI agent for your business.</p>
          
          <div class="c-info-item">
            <div class="cii-icon">✉️</div>
            <div class="cii-text"><strong>Email Us</strong><a href="mailto:hello@jointailabs.com">hello@jointailabs.com</a></div>
          </div>
          <div class="c-info-item">
            <div class="cii-icon">📞</div>
            <div class="cii-text"><strong>Call Us</strong><a href="tel:8017683428">+91 80176 83428</a> | <a href="tel:7003383676">+91 70033 83676</a></div>
          </div>
          <div class="c-info-item">
            <div class="cii-icon">📍</div>
            <div class="cii-text"><strong>Location</strong>Maldah, West Bengal, India<br>Serving clients globally</div>
          </div>
        </div>
        
        <div class="contact-right fade-up-elem">
          <form class="c-form">
            <div class="c-input-grp">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required>
            </div>
            <div class="c-input-grp">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required>
            </div>
            <div class="c-input-grp">
              <label>Service Needed</label>
              <select>
                <option>WhatsApp AI Agent</option>
                <option>AI Chatbot</option>
                <option>Website Design</option>
                <option>Mobile App</option>
                <option>ERP/CRM Software</option>
                <option>Custom AI Automation</option>
              </select>
            </div>
            <div class="c-input-grp">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="4"></textarea>
            </div>
            <button type="button" class="s-btn-primary" style="width:100%; border:none; cursor:pointer;">Send Message 🚀</button>
          </form>
        </div>
      </div>
      
    </div>
  </section>

  <footer class="new-footer">
    <div class="container">
      <div class="foot-inner">
        <div class="foot-logo">Joint AI Labs.</div>
        <div class="foot-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="foot-copy">
          &copy; 2025 Joint AI Labs. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
`;

const updatedHTML = html.substring(0, startIndex) + newHTML + '\n</body>\n</html>';
fs.writeFileSync('index.html', updatedHTML);
console.log('index.html updated successfully with final 4 sections.');
