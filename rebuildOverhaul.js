const fs = require('fs');

const section1 = `
<!-- SECTION 1: RESULTS BAR -->
<section class="o-results-bar o-fade-up">
  <div class="o-res-grid">
    <div class="o-res-item">
      <div class="o-res-num" data-target="50" data-suffix="L+">0L+</div>
      <div class="o-res-lbl">Revenue Generated for Clients</div>
    </div>
    <div class="o-res-item">
      <div class="o-res-num" data-target="30" data-suffix="+">0+</div>
      <div class="o-res-lbl">Businesses Transformed</div>
    </div>
    <div class="o-res-item">
      <div class="o-res-num" data-target="5" data-suffix="+">0+</div>
      <div class="o-res-lbl">Industries Served</div>
    </div>
    <div class="o-res-item">
      <div class="o-res-num" data-target="48" data-suffix="hrs">0hrs</div>
      <div class="o-res-lbl">Average Project Kickoff</div>
    </div>
  </div>
</section>
`;

const section2 = `
<!-- SECTION 2: WHO THIS IS FOR -->
<section class="o-section o-fade-up" id="industries">
  <span class="o-eyebrow">BUILT FOR YOUR INDUSTRY</span>
  <h2 class="o-headline">We Speak Your Business Language</h2>
  <p class="o-subtext">Whether you're closing real estate deals, running a restaurant, or managing a hospital — we build AI that fits your world, not the other way around.</p>
  
  <div class="o-ind-grid">
    <div class="o-ind-card">
      <div class="o-ind-icon">🏢</div>
      <div class="o-ind-title">Real Estate & Builders</div>
      <div class="o-ind-prob">The problem: Leads go cold before your team calls back.</div>
      <div class="o-ind-sol">What we build: WhatsApp AI agent that qualifies & books site visits 24/7.</div>
      <div class="o-ind-badge">WhatsApp AI Agent</div>
    </div>
    <div class="o-ind-card">
      <div class="o-ind-icon">🍽️</div>
      <div class="o-ind-title">Restaurants & Food Chains</div>
      <div class="o-ind-prob">The problem: Orders, staff, and inventory managed across 3 WhatsApp groups.</div>
      <div class="o-ind-sol">What we build: Online ordering system + kitchen dashboard + AI support bot.</div>
      <div class="o-ind-badge">Web App + ERP</div>
    </div>
    <div class="o-ind-card">
      <div class="o-ind-icon">🏥</div>
      <div class="o-ind-title">Clinics & Hospitals</div>
      <div class="o-ind-prob">The problem: Appointment no-shows and manual scheduling waste your staff's day.</div>
      <div class="o-ind-sol">What we build: AI booking system that reminds, reschedules, and follows up automatically.</div>
      <div class="o-ind-badge">AI Automation</div>
    </div>
    <div class="o-ind-card">
      <div class="o-ind-icon">🛒</div>
      <div class="o-ind-title">E-commerce & Retail</div>
      <div class="o-ind-prob">The problem: Customer support tickets pile up and your team drowns.</div>
      <div class="o-ind-sol">What we build: AI chatbot trained on your catalogue — handles 80% of queries instantly.</div>
      <div class="o-ind-badge">AI Chatbot</div>
    </div>
    <div class="o-ind-card">
      <div class="o-ind-icon">🏭</div>
      <div class="o-ind-title">Manufacturing & Logistics</div>
      <div class="o-ind-prob">The problem: Inventory, dispatch, and HR tracked in scattered Excel sheets.</div>
      <div class="o-ind-sol">What we build: Custom ERP dashboard — one screen for your entire operation.</div>
      <div class="o-ind-badge">Business ERP</div>
    </div>
    <div class="o-ind-card">
      <div class="o-ind-icon">🎓</div>
      <div class="o-ind-title">Coaching & EdTech</div>
      <div class="o-ind-prob">The problem: Student queries flood your phone. Admissions handled manually.</div>
      <div class="o-ind-sol">What we build: AI admission bot + automated follow-up system + student portal.</div>
      <div class="o-ind-badge">Custom AI Solution</div>
    </div>
  </div>
</section>
`;

const section3 = `
<!-- SECTION 3: HOW WE WORK (PROCESS) -->
<section class="o-section o-fade-up" id="process">
  <span class="o-eyebrow">OUR PROCESS</span>
  <h2 class="o-headline">From Idea to Live Product — Here's Exactly What Happens</h2>
  <p class="o-subtext">No surprises. No endless back-and-forth. Just a clear, fast path to a working product.</p>

  <div class="o-proc-timeline">
    <div class="o-proc-step">
      <div class="o-proc-num">01</div>
      <div class="o-proc-icon">🎯</div>
      <div class="o-proc-title">Discovery Call</div>
      <div class="o-proc-desc">We learn your business, your problems, and your goals. You get a clear scope, timeline, and fixed quote — no hidden costs.</div>
      <div style="font-size: 12px; color: var(--o-teal); margin-top: 10px;">Week 1</div>
    </div>
    <div class="o-proc-step">
      <div class="o-proc-num">02</div>
      <div class="o-proc-icon">🎨</div>
      <div class="o-proc-title">Design Sprint</div>
      <div class="o-proc-desc">You see real designs before a single line of code is written. Revisions are included. You approve before we build.</div>
      <div style="font-size: 12px; color: var(--o-teal); margin-top: 10px;">Week 1-2</div>
    </div>
    <div class="o-proc-step">
      <div class="o-proc-num">03</div>
      <div class="o-proc-icon">⚡</div>
      <div class="o-proc-title">Build & Test</div>
      <div class="o-proc-desc">We develop, integrate, and rigorously test your product. You get progress updates every 2 days — always in the loop.</div>
      <div style="font-size: 12px; color: var(--o-teal); margin-top: 10px;">Week 2-4</div>
    </div>
    <div class="o-proc-step">
      <div class="o-proc-num">04</div>
      <div class="o-proc-icon">🚀</div>
      <div class="o-proc-title">Launch & Handover</div>
      <div class="o-proc-desc">We deploy your product, train your team, and hand over everything — code, docs, and logins. Plus 30 days free support.</div>
      <div style="font-size: 12px; color: var(--o-teal); margin-top: 10px;">Week 4-5</div>
    </div>
  </div>
</section>
`;

const section4 = `
<!-- SECTION 4: CASE STUDIES -->
<section class="o-section o-fade-up" id="portfolio">
  <span class="o-eyebrow">OUR WORK</span>
  <h2 class="o-headline">Real Businesses. Real Results.</h2>
  <p class="o-subtext">Here's what we've actually built — and what it did for our clients.</p>

  <div class="o-cs-list">
    <!-- Case 1 -->
    <div class="o-cs-card">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">WhatsApp AI Agent</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Real Estate Lead Automation</h3>
        <div class="o-cs-client">Residential Developer, West Bengal</div>
        <div class="o-cs-res">₹2.4L <span>revenue generated in 30 days</span></div>
        <div class="o-cs-desc">The client was losing leads because follow-ups were manual and slow. We built a WhatsApp AI agent that automatically greets new leads, asks qualifying questions, and books site visits — all without any human involvement. Within 30 days, the agent had booked 47 site visits and closed ₹2.4L in deals.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">47 site visits booked</div>
          <div class="o-cs-pill">Zero manual follow-up</div>
          <div class="o-cs-pill">30-day ROI</div>
        </div>
        <a href="#contact" style="color: var(--o-teal); font-weight: 600; text-decoration: none;">Build Something Like This →</a>
      </div>
      <div class="o-cs-right">
        <div class="o-mock-chat" style="padding: 15px;">
          <div style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Hi! Interested in 2BHK or 3BHK?</div></div>
          <div style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">3BHK</div></div>
          <div style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Great! Budget range? Under ₹40L or above?</div></div>
          <div style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">40-60L</div></div>
          <div style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Perfect match found! 📍 Booking your site visit for Saturday 11AM ✅</div></div>
        </div>
      </div>
    </div>

    <!-- Case 2 -->
    <div class="o-cs-card">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Business ERP</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Manufacturing Operations Dashboard</h3>
        <div class="o-cs-client">150-Employee Manufacturer, Gujarat</div>
        <div class="o-cs-res">40+ hrs <span>saved per week</span></div>
        <div class="o-cs-desc">The factory was running on Excel sheets and WhatsApp messages. We built a full ERP — inventory tracking, daily production logs, HR attendance, and a live reporting dashboard for management. The owner now sees the entire factory in one screen, from anywhere.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">40+ hrs/week saved</div>
          <div class="o-cs-pill">Zero Excel dependency</div>
          <div class="o-cs-pill">Real-time visibility</div>
        </div>
        <a href="#contact" style="color: var(--o-teal); font-weight: 600; text-decoration: none;">Build Something Like This →</a>
      </div>
      <div class="o-cs-right">
        <div class="o-mock-dash">
          <div style="margin-bottom:15px; font-weight:bold; color:white; border-bottom:1px solid #1A2340; padding-bottom:10px;">Operations Dashboard</div>
          <div style="display:flex; justify-content: space-between; margin-bottom:10px; background:#1A2340; padding:10px; border-radius:6px;"><span>📦 Inventory</span><span style="color:white; font-weight:bold;">2,847 units</span></div>
          <div style="display:flex; justify-content: space-between; margin-bottom:10px; background:#1A2340; padding:10px; border-radius:6px;"><span>👥 Attendance</span><span style="color:white; font-weight:bold;">142/150 present</span></div>
          <div style="display:flex; justify-content: space-between; margin-bottom:10px; background:#1A2340; padding:10px; border-radius:6px;"><span>📊 Production today</span><span style="color:var(--o-teal); font-weight:bold;">847 units ↑12%</span></div>
          <div style="display:flex; justify-content: space-between; background:rgba(255,0,122,0.1); border:1px solid rgba(255,0,122,0.3); padding:10px; border-radius:6px;"><span>⚠️ Low stock alert</span><span style="color:#ff007a; font-weight:bold;">Raw Material B</span></div>
        </div>
      </div>
    </div>

    <!-- Case 3 -->
    <div class="o-cs-card">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">AI Chatbot + Website</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">E-commerce Platform with AI Support</h3>
        <div class="o-cs-client">Online Retailer, Bangalore</div>
        <div class="o-cs-res">70% <span>reduction in support tickets</span></div>
        <div class="o-cs-desc">The client's support team was overwhelmed with repetitive product questions. We built a full e-commerce website and deployed an AI chatbot trained on their product catalogue. It now handles order tracking, product queries, and returns — automatically, 24/7.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">500+ queries handled/day</div>
          <div class="o-cs-pill">70% ticket reduction</div>
          <div class="o-cs-pill">24/7 coverage</div>
        </div>
        <a href="#contact" style="color: var(--o-teal); font-weight: 600; text-decoration: none;">Build Something Like This →</a>
      </div>
      <div class="o-cs-right">
        <div class="o-mock-chat" style="padding: 15px;">
          <div style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Where's my order #4521?</div></div>
          <div style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Your order is out for delivery 🚚 Expected by 6PM today!</div></div>
          <div style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Can I return the blue shirt?</div></div>
          <div style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Yes! Return window is open until Dec 20. Tap here to initiate ↗️</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const section5 = `
<!-- SECTION 5: PRICING -->
<section class="o-section o-fade-up" id="pricing">
  <span class="o-eyebrow">TRANSPARENT PRICING</span>
  <h2 class="o-headline">Simple Plans. No Surprises.</h2>
  <p class="o-subtext">Every project is custom — but here's where most businesses start. All prices in INR, GST extra.</p>

  <div class="o-pr-grid">
    <div class="o-pr-card">
      <div class="o-pr-price">₹15,000</div>
      <div class="o-pr-sub">one-time</div>
      <div class="o-pr-ideal">Ideal for: New businesses & solopreneurs</div>
      <ul class="o-pr-feat">
        <li><span style="color:var(--o-teal)">✓</span> Landing page (up to 5 sections)</li>
        <li><span style="color:var(--o-teal)">✓</span> Mobile responsive</li>
        <li><span style="color:var(--o-teal)">✓</span> Contact form + WhatsApp button</li>
        <li><span style="color:var(--o-teal)">✓</span> Basic SEO setup</li>
        <li><span style="color:var(--o-teal)">✓</span> 7-day delivery</li>
        <li><span style="color:var(--o-teal)">✓</span> 14 days free support</li>
        <li class="no"><span>✗</span> AI features not included</li>
      </ul>
      <a href="#contact" class="o-btn-ghost" style="text-align: center;">Get Started</a>
    </div>
    
    <div class="o-pr-card popular">
      <div class="o-pop-badge">MOST POPULAR</div>
      <div class="o-pr-price">₹45,000</div>
      <div class="o-pr-sub">one-time</div>
      <div class="o-pr-ideal">Ideal for: Growing SMBs ready to automate</div>
      <ul class="o-pr-feat">
        <li><span style="color:var(--o-teal)">✓</span> Full website (up to 10 sections)</li>
        <li><span style="color:var(--o-teal)">✓</span> AI chatbot (GPT-4, trained on your data)</li>
        <li><span style="color:var(--o-teal)">✓</span> WhatsApp integration</li>
        <li><span style="color:var(--o-teal)">✓</span> CRM / lead capture setup</li>
        <li><span style="color:var(--o-teal)">✓</span> 3 rounds of revisions</li>
        <li><span style="color:var(--o-teal)">✓</span> 21-day delivery</li>
        <li><span style="color:var(--o-teal)">✓</span> 30 days free support</li>
        <li><span style="color:var(--o-teal)">✓</span> Source code handover</li>
      </ul>
      <a href="#contact" class="o-btn-teal" style="text-align: center;">Start Your Project</a>
    </div>

    <div class="o-pr-card">
      <div class="o-pr-price">Custom</div>
      <div class="o-pr-sub">let's talk</div>
      <div class="o-pr-ideal">Ideal for: Established businesses with complex needs</div>
      <ul class="o-pr-feat">
        <li><span style="color:var(--o-teal)">✓</span> Custom web app or mobile app</li>
        <li><span style="color:var(--o-teal)">✓</span> Full ERP / CRM system</li>
        <li><span style="color:var(--o-teal)">✓</span> AI agents + automation pipelines</li>
        <li><span style="color:var(--o-teal)">✓</span> WhatsApp AI sales system</li>
        <li><span style="color:var(--o-teal)">✓</span> Dedicated development team</li>
        <li><span style="color:var(--o-teal)">✓</span> Unlimited revisions</li>
        <li><span style="color:var(--o-teal)">✓</span> 60-90 day delivery</li>
        <li><span style="color:var(--o-teal)">✓</span> Ongoing maintenance available</li>
      </ul>
      <a href="#contact" class="o-btn-ghost" style="text-align: center;">Book a Call</a>
    </div>
  </div>
  <p style="text-align: center; color: var(--o-mut); font-size: 14px; margin-top: 32px;">💬 Not sure which plan fits? <a href="https://wa.me/918017683428" style="color:var(--o-teal); text-decoration:none;">WhatsApp us at +91 8017683428</a> — we'll figure it out together.</p>
</section>
`;

const section6 = `
<!-- SECTION 6: WHY US -->
<section class="o-section o-fade-up">
  <span class="o-eyebrow">WHY CHOOSE US</span>
  <h2 class="o-headline">Why Businesses Choose Joint AI Labs Over Freelancers & Big Agencies</h2>
  <div class="o-why-wrap">
    <table class="o-why-table">
      <thead>
        <tr>
          <th></th>
          <th>Freelancer</th>
          <th>Big Agency</th>
          <th class="j-col">Joint AI Labs ✦</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: #111827;">
          <td>Delivery Speed</td>
          <td>Unpredictable</td>
          <td>Months</td>
          <td class="j-col">2–5 Weeks ✓</td>
        </tr>
        <tr style="background: #0D1221;">
          <td>AI Expertise</td>
          <td>Rare</td>
          <td>Expensive add-on</td>
          <td class="j-col">Core strength ✓</td>
        </tr>
        <tr style="background: #111827;">
          <td>Direct Access</td>
          <td>Sometimes</td>
          <td>Account manager</td>
          <td class="j-col">Founders directly ✓</td>
        </tr>
        <tr style="background: #0D1221;">
          <td>Pricing</td>
          <td>Cheap but risky</td>
          <td>₹₹₹₹</td>
          <td class="j-col">SMB-friendly ✓</td>
        </tr>
        <tr style="background: #111827;">
          <td>Post-launch Support</td>
          <td>Disappears</td>
          <td>Paid retainer</td>
          <td class="j-col">30 days free ✓</td>
        </tr>
        <tr style="background: #0D1221;">
          <td>Custom Built</td>
          <td>Maybe</td>
          <td>Yes</td>
          <td class="j-col">Always ✓</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="text-align: center; font-size: 18px; color: var(--o-text); max-width: 800px; margin: 40px auto 0; line-height: 1.6;">
    "We're a two-founder team — when you work with us, you talk directly to the people building your product. No junior developers. No account managers. No outsourcing."
  </p>
</section>
`;

const section7 = `
<!-- SECTION 7: FAQ -->
<section class="o-section o-fade-up">
  <span class="o-eyebrow">FAQ</span>
  <h2 class="o-headline">Questions We Get Asked All the Time</h2>
  
  <div class="o-faq-list">
    <div class="o-faq-item">
      <button class="o-faq-q"><span>Do you work with small businesses and startups?</span> <span class="o-faq-icon">+</span></button>
      <div class="o-faq-a">Absolutely — most of our clients are small businesses, local shops, clinics, and early-stage startups. Our Starter plan begins at ₹15,000. We've worked with businesses ranging from a 2-person restaurant to a 150-employee factory.</div>
    </div>
    <div class="o-faq-item">
      <button class="o-faq-q"><span>How long does a typical project take?</span> <span class="o-faq-icon">+</span></button>
      <div class="o-faq-a">Websites: 7–14 days. AI chatbots: 5–10 days. Full web apps or ERP systems: 3–6 weeks. Mobile apps: 4–8 weeks. We give you a fixed timeline before we start — no open-ended projects.</div>
    </div>
    <div class="o-faq-item">
      <button class="o-faq-q"><span>What happens after the project is launched?</span> <span class="o-faq-icon">+</span></button>
      <div class="o-faq-a">Every project comes with 30 days of free post-launch support. After that, we offer affordable monthly maintenance packages. We don't disappear after handover — many of our clients have been with us for 1+ years.</div>
    </div>
    <div class="o-faq-item">
      <button class="o-faq-q"><span>Do I own the code and all assets after delivery?</span> <span class="o-faq-icon">+</span></button>
      <div class="o-faq-a">Yes, 100%. You get full ownership of all source code, design files, databases, and assets. We don't lock you into any proprietary system.</div>
    </div>
    <div class="o-faq-item">
      <button class="o-faq-q"><span>Can your AI systems work with my existing tools?</span> <span class="o-faq-icon">+</span></button>
      <div class="o-faq-a">Yes. We integrate with WhatsApp Business, Google Workspace, Razorpay, Shiprocket, Zoho, Shopify, custom REST APIs, and more. If you're already using a tool, we'll connect to it.</div>
    </div>
    <div class="o-faq-item">
      <button class="o-faq-q"><span>Do you offer EMI or payment in installments?</span> <span class="o-faq-icon">+</span></button>
      <div class="o-faq-a">Yes. For projects above ₹20,000, we typically work with a 50% advance and 50% on delivery. For larger projects, we can split into 3 milestones. We're flexible — let's talk.</div>
    </div>
  </div>
</section>
`;

const section8 = `
<!-- SECTION 8: CONTACT -->
<section class="o-section o-fade-up" id="contact">
  <span class="o-eyebrow">GET IN TOUCH</span>
  <h2 class="o-headline">Let's Build Something Together</h2>
  <p class="o-subtext">Tell us about your project — we'll get back to you within 4 hours. First consultation is completely free.</p>
  
  <div class="o-cont-grid">
    <div class="o-c-cards">
      <div class="o-c-card">
        <div class="o-c-icon">📞</div>
        <div>
          <div class="o-c-lbl">Call or WhatsApp</div>
          <div class="o-c-val">+91 80176 83428 (Koushik)</div>
          <div class="o-c-val">+91 70033 83676 (Anirban)</div>
          <div class="o-c-sub">Mon–Sat, 9AM–8PM IST</div>
        </div>
      </div>
      <div class="o-c-card">
        <div class="o-c-icon">✉️</div>
        <div>
          <div class="o-c-lbl">Email</div>
          <div class="o-c-val">jointailabs@gmail.com</div>
          <div class="o-c-sub">We reply within 4 hours</div>
        </div>
      </div>
      <a href="https://wa.me/918017683428" target="_blank" class="o-c-card" style="border-color: var(--o-teal); background: rgba(0,245,196,0.02);">
        <div class="o-c-icon">💬</div>
        <div>
          <div class="o-c-lbl" style="color:var(--o-teal);">WhatsApp Us Now</div>
          <div class="o-c-val">Tap to open chat →</div>
        </div>
      </a>
      <div class="o-c-card">
        <div class="o-c-icon">📍</div>
        <div>
          <div class="o-c-lbl">Based In</div>
          <div class="o-c-val">Maldah, West Bengal, India</div>
          <div class="o-c-sub">Serving clients across India & globally</div>
        </div>
      </div>
    </div>
    
    <div class="o-form">
      <form onsubmit="event.preventDefault();">
        <input type="text" class="o-input" placeholder="Your Name" required>
        <input type="tel" class="o-input" placeholder="WhatsApp Number" required>
        <select class="o-input" required>
          <option value="" disabled selected>Service Interested In...</option>
          <option value="web">Website Design</option>
          <option value="bot">AI Chatbot</option>
          <option value="wa">WhatsApp AI Agent</option>
          <option value="app">Mobile App</option>
          <option value="erp">Business ERP/CRM</option>
          <option value="custom">Custom AI Solution</option>
          <option value="unsure">Not Sure Yet</option>
        </select>
        <textarea class="o-input" rows="4" placeholder="Tell us about your project..." required style="resize:vertical;"></textarea>
        <button type="submit" class="o-btn-teal" style="width: 100%; font-size:16px;">Send Message & Get Free Quote →</button>
      </form>
    </div>
  </div>
</section>
`;

const section9 = `
<!-- SECTION 9: FOOTER -->
<footer class="o-footer">
  <div class="o-ft-grid">
    <div>
      <div class="o-ft-brand"><span></span> Joint AI Labs</div>
      <p style="color: var(--o-mut); font-size: 14px; line-height: 1.6; margin-bottom: 24px;">AI-powered digital agency building websites, mobile apps, and intelligent automation for businesses across India.</p>
      <div style="display: flex; gap: 16px;">
        <a href="https://wa.me/918017683428" style="color: var(--o-mut); text-decoration: none; font-size:20px; transition: color 0.3s;" onmouseover="this.style.color='#00F5C4'" onmouseout="this.style.color='var(--o-mut)'">📱</a>
        <a href="mailto:jointailabs@gmail.com" style="color: var(--o-mut); text-decoration: none; font-size:20px; transition: color 0.3s;" onmouseover="this.style.color='#00F5C4'" onmouseout="this.style.color='var(--o-mut)'">✉️</a>
        <a href="tel:+918017683428" style="color: var(--o-mut); text-decoration: none; font-size:20px; transition: color 0.3s;" onmouseover="this.style.color='#00F5C4'" onmouseout="this.style.color='var(--o-mut)'">📞</a>
      </div>
    </div>
    <div>
      <div class="o-ft-head">Quick Links</div>
      <a href="#home" class="o-ft-link">Home</a>
      <a href="#services" class="o-ft-link">Services</a>
      <a href="#portfolio" class="o-ft-link">Our Work</a>
      <a href="#process" class="o-ft-link">Process</a>
      <a href="#pricing" class="o-ft-link">Pricing</a>
      <a href="#contact" class="o-ft-link">Contact</a>
    </div>
    <div>
      <div class="o-ft-head">Contact</div>
      <div style="color: var(--o-mut); font-size: 14px; margin-bottom: 12px;">📞 +91 80176 83428</div>
      <div style="color: var(--o-mut); font-size: 14px; margin-bottom: 12px;">📞 +91 70033 83676</div>
      <div style="color: var(--o-mut); font-size: 14px; margin-bottom: 12px;">✉️ jointailabs@gmail.com</div>
      <div style="color: var(--o-mut); font-size: 14px; margin-bottom: 12px;">📍 Maldah, West Bengal, India</div>
      <div style="color: var(--o-mut); font-size: 14px;">🕐 Mon–Sat: 9AM–8PM IST</div>
    </div>
  </div>
  <div class="o-ft-bottom">
    © 2024 Joint AI Labs. All Rights Reserved. | Made with ❤️ in India · Powered by AI
  </div>
</footer>
`;

const jsCode = `
<script>
// OVERHAUL SCRIPTS
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade ups
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        
        // Counter animation
        if(e.target.classList.contains('o-results-bar') && !e.target.dataset.counted) {
          e.target.dataset.counted = true;
          const nums = e.target.querySelectorAll('.o-res-num');
          nums.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            const suffix = num.getAttribute('data-suffix') || '';
            let val = 0;
            const inc = target / 30; // 30 frames
            const timer = setInterval(() => {
              val += inc;
              if(val >= target) {
                num.textContent = target + suffix;
                clearInterval(timer);
              } else {
                num.textContent = Math.floor(val) + suffix;
              }
            }, 50); // 1.5s total roughly
          });
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.o-fade-up').forEach(el => obs.observe(el));

  // FAQ Accordion
  const faqs = document.querySelectorAll('.o-faq-item');
  faqs.forEach(faq => {
    faq.querySelector('.o-faq-q').addEventListener('click', () => {
      const isActive = faq.classList.contains('active');
      faqs.forEach(f => f.classList.remove('active')); // close all
      if(!isActive) faq.classList.add('active'); // open clicked
    });
  });
});
</script>
`;

let allNewHTML = section1 + section2 + section3 + section4 + section5 + section6 + section7 + section8 + section9 + jsCode;

// Process index.html
let text = fs.readFileSync('index.html', 'utf8');

// Find the start of ABOUT US SECTION (to replace from)
let startIdx = text.indexOf('<!-- ═══════════════════════════════════════\n       3. ABOUT US SECTION');
if (startIdx === -1) {
    // fallback if comment changed
    startIdx = text.indexOf('<section id="about"');
}

// Find the start of SCRIPTS (to replace up to)
let endIdx = text.indexOf('<!-- ═══ SCRIPTS ═══ -->');

if (startIdx !== -1 && endIdx !== -1) {
    let before = text.substring(0, startIdx);
    let after = text.substring(endIdx);
    fs.writeFileSync('index.html', before + allNewHTML + '\n\n  ' + after);
    console.log("Successfully rebuilt index.html");
} else {
    console.log("Could not find start or end index for replacement.");
    console.log("Start: ", startIdx, " End: ", endIdx);
}
