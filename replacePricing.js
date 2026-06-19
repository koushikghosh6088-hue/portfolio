const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const newPricingHTML = `
<section class="o-section o-fade-up" id="pricing">
  <span class="o-eyebrow">TRANSPARENT PRICING</span>
  <h2 class="o-headline">Simple Plans. No Surprises.</h2>
  <p class="o-subtext">Select a category below to view our standard pricing for the Indian market. All prices in INR, GST extra.</p>

  <!-- Pricing Tab Bar -->
  <div class="port-tab-bar" style="margin-top: 40px; margin-bottom: 50px;">
    <button class="price-tab active" data-price="wa">💬 WhatsApp AI</button>
    <button class="price-tab" data-price="erp">📊 Business ERP</button>
    <button class="price-tab" data-price="web">🌐 Web &amp; Apps</button>
    <button class="price-tab" data-price="bot">🤖 AI Chatbots</button>
  </div>

  <div class="price-wrap">
    
    <!-- WhatsApp AI Pricing -->
    <div class="price-panel active" id="price-wa">
      <div class="o-pr-grid">
        <div class="o-pr-card" data-category="wa">
          <div class="o-pr-price">₹14,999</div>
          <div class="o-pr-sub">one-time setup</div>
          <div class="o-pr-ideal">Ideal for: Small clinics & retail</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Essential</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Automated FAQ answering</li>
            <li><span style="color:var(--o-teal)">✓</span> Welcome & out-of-office messages</li>
            <li><span style="color:var(--o-teal)">✓</span> Basic lead capture</li>
            <li><span style="color:var(--o-teal)">✓</span> 1-week delivery</li>
            <li class="no"><span>✗</span> No custom GPT-4 integration</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Get Essential</a>
        </div>
        
        <div class="o-pr-card popular" data-category="wa">
          <div class="o-pop-badge">MOST POPULAR</div>
          <div class="o-pr-price">₹34,999</div>
          <div class="o-pr-sub">one-time setup</div>
          <div class="o-pr-ideal">Ideal for: Growing agencies & clinics</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Growth</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> GPT-4 Conversational AI</li>
            <li><span style="color:var(--o-teal)">✓</span> Lead qualification logic</li>
            <li><span style="color:var(--o-teal)">✓</span> Direct Calendly/Google Calendar sync</li>
            <li><span style="color:var(--o-teal)">✓</span> Multi-lingual support (8 languages)</li>
            <li><span style="color:var(--o-teal)">✓</span> 14-day delivery</li>
          </ul>
          <a href="#contact" class="o-btn-teal" style="text-align: center;">Get Growth</a>
        </div>

        <div class="o-pr-card" data-category="wa">
          <div class="o-pr-price">Custom</div>
          <div class="o-pr-sub">let's talk</div>
          <div class="o-pr-ideal">Ideal for: Enterprise multi-agent systems</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Enterprise Scale</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Full ERP / CRM bi-directional sync</li>
            <li><span style="color:var(--o-teal)">✓</span> Interactive WhatsApp catalogues</li>
            <li><span style="color:var(--o-teal)">✓</span> In-chat Razorpay UPI payments</li>
            <li><span style="color:var(--o-teal)">✓</span> Live human agent hand-over dashboard</li>
            <li><span style="color:var(--o-teal)">✓</span> Dedicated account manager</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Talk to Founders</a>
        </div>
      </div>
    </div>

    <!-- Business ERP Pricing -->
    <div class="price-panel" id="price-erp">
      <div class="o-pr-grid">
        <div class="o-pr-card" data-category="erp">
          <div class="o-pr-price" style="font-size:36px;">₹1.5L <span style="font-size:14px; color:var(--o-mut);">+ ₹10k/mo</span></div>
          <div class="o-pr-sub">standard rollout</div>
          <div class="o-pr-ideal">Ideal for: Single-location factories</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Core ERP</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Live inventory management</li>
            <li><span style="color:var(--o-teal)">✓</span> Worker attendance & payroll</li>
            <li><span style="color:var(--o-teal)">✓</span> Centralized admin dashboard</li>
            <li><span style="color:var(--o-teal)">✓</span> 3-week deployment</li>
            <li class="no"><span>✗</span> No mobile app included</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Get Core</a>
        </div>
        
        <div class="o-pr-card popular" data-category="erp">
          <div class="o-pop-badge">MOST POPULAR</div>
          <div class="o-pr-price" style="font-size:36px;">₹3.0L <span style="font-size:14px; color:var(--o-mut);">+ ₹20k/mo</span></div>
          <div class="o-pr-sub">advanced rollout</div>
          <div class="o-pr-ideal">Ideal for: Multi-branch operations</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Advanced ERP</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Multi-location stock sync</li>
            <li><span style="color:var(--o-teal)">✓</span> Custom native Mobile App (Android/iOS)</li>
            <li><span style="color:var(--o-teal)">✓</span> Automated supplier PO generation</li>
            <li><span style="color:var(--o-teal)">✓</span> Tally accounting integration</li>
            <li><span style="color:var(--o-teal)">✓</span> 6-week deployment</li>
          </ul>
          <a href="#contact" class="o-btn-teal" style="text-align: center;">Get Advanced</a>
        </div>

        <div class="o-pr-card" data-category="erp">
          <div class="o-pr-price">Custom</div>
          <div class="o-pr-sub">let's talk</div>
          <div class="o-pr-ideal">Ideal for: Large-scale conglomerates</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Custom Enterprise</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Full legacy system replacement</li>
            <li><span style="color:var(--o-teal)">✓</span> Custom logistics & fleet tracking</li>
            <li><span style="color:var(--o-teal)">✓</span> On-premise deployment options</li>
            <li><span style="color:var(--o-teal)">✓</span> 24/7 priority SLA support</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Talk to Founders</a>
        </div>
      </div>
    </div>

    <!-- Web & Apps Pricing -->
    <div class="price-panel" id="price-web">
      <div class="o-pr-grid">
        <div class="o-pr-card" data-category="web">
          <div class="o-pr-price">₹45,000</div>
          <div class="o-pr-sub">one-time</div>
          <div class="o-pr-ideal">Ideal for: Service businesses</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Professional Site</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Premium 10-section website</li>
            <li><span style="color:var(--o-teal)">✓</span> Mobile & SEO optimized</li>
            <li><span style="color:var(--o-teal)">✓</span> WhatsApp floating widget</li>
            <li><span style="color:var(--o-teal)">✓</span> Contact form to Email/Sheet</li>
            <li><span style="color:var(--o-teal)">✓</span> 10-day delivery</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Get Pro Site</a>
        </div>
        
        <div class="o-pr-card popular" data-category="web">
          <div class="o-pop-badge">MOST POPULAR</div>
          <div class="o-pr-price">₹1.2L</div>
          <div class="o-pr-sub">one-time</div>
          <div class="o-pr-ideal">Ideal for: Startups & SaaS MVP</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Premium Web App</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Next.js / React full-stack app</li>
            <li><span style="color:var(--o-teal)">✓</span> Secure user login & dashboards</li>
            <li><span style="color:var(--o-teal)">✓</span> Razorpay/Stripe payment gateways</li>
            <li><span style="color:var(--o-teal)">✓</span> Custom database architecture</li>
            <li><span style="color:var(--o-teal)">✓</span> 4-week delivery</li>
          </ul>
          <a href="#contact" class="o-btn-teal" style="text-align: center;">Get Web App</a>
        </div>

        <div class="o-pr-card" data-category="web">
          <div class="o-pr-price">Custom</div>
          <div class="o-pr-sub">let's talk</div>
          <div class="o-pr-ideal">Ideal for: Complex platforms</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Custom Platform</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Multi-tenant SaaS architectures</li>
            <li><span style="color:var(--o-teal)">✓</span> Complex marketplaces</li>
            <li><span style="color:var(--o-teal)">✓</span> Heavy API integrations</li>
            <li><span style="color:var(--o-teal)">✓</span> Long-term retainer contracts</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Talk to Founders</a>
        </div>
      </div>
    </div>

    <!-- AI Chatbots Pricing -->
    <div class="price-panel" id="price-bot">
      <div class="o-pr-grid">
        <div class="o-pr-card" data-category="bot">
          <div class="o-pr-price">₹25,000</div>
          <div class="o-pr-sub">one-time setup</div>
          <div class="o-pr-ideal">Ideal for: E-commerce stores</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Support Bot</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Trained strictly on your knowledge base</li>
            <li><span style="color:var(--o-teal)">✓</span> 24/7 customer support automation</li>
            <li><span style="color:var(--o-teal)">✓</span> Shopify order tracking API</li>
            <li><span style="color:var(--o-teal)">✓</span> Handover to human agent</li>
            <li><span style="color:var(--o-teal)">✓</span> 2-week delivery</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Get Support Bot</a>
        </div>
        
        <div class="o-pr-card popular" data-category="bot">
          <div class="o-pop-badge">MOST POPULAR</div>
          <div class="o-pr-price">₹55,000</div>
          <div class="o-pr-sub">one-time setup</div>
          <div class="o-pr-ideal">Ideal for: Agencies & High-ticket B2B</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Sales Bot</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Dynamic product recommendations</li>
            <li><span style="color:var(--o-teal)">✓</span> AI-driven lead scoring</li>
            <li><span style="color:var(--o-teal)">✓</span> Calendly meeting scheduling</li>
            <li><span style="color:var(--o-teal)">✓</span> CRM push (HubSpot, Zoho, etc.)</li>
            <li><span style="color:var(--o-teal)">✓</span> 3-week delivery</li>
          </ul>
          <a href="#contact" class="o-btn-teal" style="text-align: center;">Get Sales Bot</a>
        </div>

        <div class="o-pr-card" data-category="bot">
          <div class="o-pr-price">Custom</div>
          <div class="o-pr-sub">let's talk</div>
          <div class="o-pr-ideal">Ideal for: EdTech, Legal, Health</div>
          <div class="o-pr-badge-wrap"><span class="o-pr-tier">Custom AI Agent</span></div>
          <ul class="o-pr-feat">
            <li><span style="color:var(--o-teal)">✓</span> Proprietary data ingestion pipelines</li>
            <li><span style="color:var(--o-teal)">✓</span> AI Code Tutors / Legal Advisors</li>
            <li><span style="color:var(--o-teal)">✓</span> Multi-modal capabilities (Voice/Images)</li>
            <li><span style="color:var(--o-teal)">✓</span> Custom dashboard for AI logs</li>
          </ul>
          <a href="#contact" class="o-btn-ghost" style="text-align: center;">Talk to Founders</a>
        </div>
      </div>
    </div>

  </div>
  <p style="text-align: center; color: var(--o-mut); font-size: 14px; margin-top: 32px;">💬 Not sure which plan fits? <a href="https://wa.me/918017683428" style="color:var(--o-teal); text-decoration:none;">WhatsApp us at +91 8017683428</a> — we'll figure it out together.</p>
</section>
`;

// Extract from <section id="pricing"> to </section>
const startIndex = html.indexOf('<section class="o-section o-fade-up" id="pricing">');
if (startIndex !== -1) {
  const endIndex = html.indexOf('</section>', startIndex) + '</section>'.length;
  html = html.substring(0, startIndex) + newPricingHTML + html.substring(endIndex);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Successfully replaced pricing section.');
} else {
  console.log('Could not find pricing section.');
}
