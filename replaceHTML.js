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
            <div class="mock-browser advanced redesigned">
              <div class="mb-header">
                <div class="mb-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
                <div class="mb-url"><span class="lock">🔒</span> jointailabs.com</div>
              </div>
              <div class="mb-body" style="overflow: hidden; position: relative; padding: 0;">
                <img src="website_mockup.png" style="width: 100%; object-fit: cover; animation: slideUpAnim 15s infinite alternate ease-in-out;">
                <div class="mb-cursor">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="#333" stroke-width="1.5"><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 00-.85.36z"/></svg>
                </div>
                <div class="mb-click-ripple"></div>
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
          <div class="s-mockup-container tech-trigger-chat" style="height: auto !important; padding: 0; align-items: flex-start;">

            <div style="height: auto !important; padding: 0; align-items: flex-start; width: 100%; display: flex; justify-content: center;">
              <div class="cb-mock" style="margin: 0; flex-shrink: 0;">
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
          <div class="s-mockup-container tech-trigger-wa" style="height: auto !important; padding: 0; align-items: flex-start;">

            <div style="height: auto !important; padding: 0; align-items: flex-start; width: 100%; display: flex; justify-content: center;">
              <div class="wa-mock" style="margin: 0; flex-shrink: 0;">
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
          <div class="s-mockup-container">
            




<div class="mock-iphone">
  <div class="mi-island"></div>
  <div class="mi-screen" style="background: #000; padding: 0;">
    <img src="mobile_app_mockup.png" style="width: 100%; animation: appScrollImage 12s infinite linear;" alt="App Mockup" onerror="this.src='https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'" />
  </div>
</div>

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
            


<div class="mock-saas" style="width: 100%; height: 100%; display: flex; background: #050505; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);">
  <div class="ms-sidebar" style="width: 60px; background: rgba(20,20,25,0.9); border-right: 1px solid rgba(255,255,255,0.05); padding: 20px 0; display: flex; flex-direction: column; align-items: center;">
    <div class="ms-logo" style="width: 28px; height: 28px; background: linear-gradient(135deg, #00d4ff, #7b2fff); border-radius: 8px; margin-bottom: 30px; box-shadow: 0 0 15px rgba(0,212,255,0.4);"></div>
    <div class="ms-nav-item active" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(0,212,255,0.15); box-shadow: 0 0 15px rgba(0,212,255,0.3); border: 1px solid rgba(0,212,255,0.4); display: flex; align-items: center; justify-content: center;"><div style="width:16px; height:16px; background: var(--cyan); mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>') center/contain no-repeat; -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>') center/contain no-repeat;"></div></div>
    <div class="ms-nav-item" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.03);"></div>
  </div>
  <div class="ms-main" style="flex: 1; padding: 20px; display: flex; flex-direction: column; overflow: hidden;">
    <div class="ms-topbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
      <div class="ms-search" style="width: 180px; height: 28px; background: rgba(255,255,255,0.05); border-radius: 14px; border: 1px solid rgba(255,255,255,0.1);"></div>
      <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #ff007a, #7b2fff);"></div>
    </div>
    
    <div class="ms-cards" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0,212,255,0.2); border-radius: 10px; padding: 12px;">
        <div style="font-size: 11px; color: #80e5ff; margin-bottom: 4px;">TOTAL REVENUE</div>
        <div style="font-size: 20px; font-weight: bold; color: white;">$84.2K</div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(123,47,255,0.2); border-radius: 10px; padding: 12px;">
        <div style="font-size: 11px; color: #d4a5ff; margin-bottom: 4px;">ACTIVE USERS</div>
        <div style="font-size: 20px; font-weight: bold; color: white;">12.4K</div>
      </div>
    </div>
    
    <div style="display: flex; gap: 15px; flex: 1; min-height: 0;">
       <div style="flex: 2; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 10px; position: relative;">
          <canvas id="mainSaaSChart"></canvas>
       </div>
       <div style="flex: 1; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 10px; position: relative; display: flex; align-items: center; justify-content: center;">
          <canvas id="pieSaaSChart"></canvas>
       </div>
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
            

<div class="mock-n8n" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: visible;">
  <svg viewBox="0 0 400 300" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="xMidYMid meet">
    <!-- Connection Lines -->
    <path d="M 60 150 C 100 150, 100 80, 140 80" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 60 150 C 100 150, 100 220, 140 220" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 140 80 C 180 80, 180 150, 220 150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 140 220 C 180 220, 180 150, 220 150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 220 150 C 260 150, 260 150, 300 150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    
    <!-- Animated Data Packets -->
    <circle r="4" fill="var(--cyan)" filter="drop-shadow(0 0 5px var(--cyan))">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 150 C 100 150, 100 80, 140 80"/>
    </circle>
    <circle r="4" fill="var(--purple)" filter="drop-shadow(0 0 5px var(--purple))">
      <animateMotion dur="2.2s" repeatCount="indefinite" path="M 60 150 C 100 150, 100 220, 140 220"/>
    </circle>
    <circle r="4" fill="var(--cyan)" filter="drop-shadow(0 0 5px var(--cyan))">
      <animateMotion dur="1.8s" repeatCount="indefinite" path="M 140 80 C 180 80, 180 150, 220 150"/>
    </circle>
    <circle r="4" fill="#f2a600" filter="drop-shadow(0 0 5px #f2a600)">
      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 140 220 C 180 220, 180 150, 220 150"/>
    </circle>
    <circle r="4" fill="#00e676" filter="drop-shadow(0 0 5px #00e676)">
      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 220 150 C 260 150, 260 150, 300 150"/>
    </circle>

    <!-- HTML Nodes using foreignObject for perfect responsiveness -->
    <!-- Node 1: Webhook -->
    <foreignObject x="0" y="130" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3s infinite alternate;">
        <span style="background:#ff6b6b; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">⚡</span> Webhook
      </div>
    </foreignObject>

    <!-- Node 2: OpenAI -->
    <foreignObject x="110" y="60" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3.5s infinite alternate; animation-delay: 0.5s;">
        <span style="background:#10a37f; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">🤖</span> OpenAI
      </div>
    </foreignObject>

    <!-- Node 3: Claude -->
    <foreignObject x="110" y="200" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 4s infinite alternate; animation-delay: 1s;">
        <span style="background:#f2a600; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">🧠</span> Claude
      </div>
    </foreignObject>

    <!-- Node 4: Postgres -->
    <foreignObject x="210" y="130" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3s infinite alternate; animation-delay: 1.5s;">
        <span style="background:#336791; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">🐘</span> Postgres
      </div>
    </foreignObject>
    
    <!-- Node 5: Slack -->
    <foreignObject x="310" y="130" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3.2s infinite alternate; animation-delay: 0.2s;">
        <span style="background:#e01e5a; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">💬</span> Slack
      </div>
    </foreignObject>
  </svg>
</div>
<style>
@keyframes pulseNode {
  0% { transform: scale(1); border-color: #444; }
  100% { transform: scale(1.05); border-color: var(--cyan); }
}
</style>

            <div class="mock-glow-orb orb-purple" style="animation: floatAnim 4s infinite ease-in-out;"></div>
            <div class="mock-glow-orb orb-cyan" style="animation: floatAnim 6s infinite ease-in-out reverse;"></div>
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
          <a href="#contact" class="s-btn-primary">📞 Book Free Call</a>
          <a href="https://wa.me/918017683428" class="s-btn-wa">💬 WhatsApp Us</a>
        </div>
      </div>

    </div>

    <!-- 3D Parallax Hover Script for all Mockups -->
    <script>
      // Run immediately if DOM is ready, or wait for DOMContentLoaded
      const initParallax = () => {
        document.querySelectorAll('#s-card-4').forEach(card => {
          const target = card.querySelector('.mock-iphone');
          if (!target) return;
          
          card.addEventListener('mouseenter', () => {
            target.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';
          });
          
          const handleMove = e => {
            const rect = card.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            
            const xRot = ((y / rect.height) - 0.5) * -30;
            const yRot = ((x / rect.width) - 0.5) * 30;
            
            target.style.transform = 'perspective(1000px) rotateX(' + xRot + 'deg) rotateY(' + yRot + 'deg) scale(1.05) translateY(-10px)';
          };
          
          card.addEventListener('mousemove', handleMove);
          card.addEventListener('touchmove', handleMove, {passive: true});
          
          card.addEventListener('mouseleave', () => {
            target.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease, border-color 0.6s ease';
            target.style.transform = '';
          });
        });
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParallax);
      } else {
        initParallax();
      }
    </script>
  </section>`;

const updatedHTML = html.substring(0, startIndex) + newHTML + html.substring(endIndex);
fs.writeFileSync('index.html', updatedHTML);
console.log('index.html updated successfully.');
