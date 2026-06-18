const fs = require('fs');

const portfolioHTML = `
<!-- SECTION 4: CASE STUDIES (EXPANDED & POLISHED) -->
<section class="o-section o-fade-up" id="portfolio">
  <span class="o-eyebrow">OUR WORK</span>
  <h2 class="o-headline">Real Businesses. Real Results.</h2>
  <p class="o-subtext">Explore 12 of our most impactful recent deployments across different industries.</p>

  <div class="o-filter-bar">
    <button class="o-filter-btn active" data-filter="all">All Work</button>
    <button class="o-filter-btn" data-filter="wa">WhatsApp AI</button>
    <button class="o-filter-btn" data-filter="erp">Business ERP</button>
    <button class="o-filter-btn" data-filter="web">Web & Apps</button>
    <button class="o-filter-btn" data-filter="bot">AI Chatbots</button>
  </div>

  <div class="o-cs-list">

    <!-- WhatsApp AI 1 -->
    <div class="o-cs-card" data-category="wa">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">WhatsApp AI</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Real Estate Lead Automation</h3>
        <div class="o-cs-client">Residential Developer, West Bengal</div>
        <div class="o-cs-res">₹2.4L <span>revenue generated in 30 days</span></div>
        <div class="o-cs-desc">The client was losing leads because follow-ups were manual and slow. We built a WhatsApp AI agent that automatically greets new leads, asks qualifying questions, and books site visits.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">47 site visits booked</div>
          <div class="o-cs-pill">Zero manual follow-up</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-wa">
          <div class="p-mock-wa-head">
            <div class="p-mock-wa-avatar">🤖</div>
            <div style="flex:1;"><div style="font-weight:700; font-size:15px;">Real Estate AI</div><div style="font-size:11px; opacity:0.8;">Online</div></div>
          </div>
          <div class="p-mock-wa-body">
            <div class="mock-msg-anim p-msg-left">Hi! Interested in 2BHK or 3BHK?</div>
            <div class="mock-msg-anim p-msg-right">3BHK</div>
            <div class="mock-msg-anim p-msg-left">Great! Budget range?</div>
            <div class="mock-msg-anim p-msg-right">40-60L</div>
            <div class="mock-msg-anim p-msg-left" style="background:#d1fae5; border:1px solid #10b981;">Perfect match found! 📍 Booking your site visit for Saturday 11AM ✅</div>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp AI 2 -->
    <div class="o-cs-card" data-category="wa">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">WhatsApp AI</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Restaurant Ordering & Table Booking</h3>
        <div class="o-cs-client">Multi-Chain Restaurant, Pune</div>
        <div class="o-cs-res">45% <span>increase in direct orders</span></div>
        <div class="o-cs-desc">Escaping high aggregator commissions, this restaurant chain deployed our WhatsApp Bot with interactive catalogue buttons. Customers browse the menu, pay via UPI, and book tables entirely inside WhatsApp.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">UPI Integration</div>
          <div class="o-cs-pill">No App Download</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-wa">
          <div class="p-mock-wa-head">
            <div class="p-mock-wa-avatar">🍕</div>
            <div style="flex:1;"><div style="font-weight:700; font-size:15px;">Foodie Palace</div><div style="font-size:11px; opacity:0.8;">Online</div></div>
          </div>
          <div class="p-mock-wa-body">
            <div class="mock-msg-anim p-msg-left">Welcome to Foodie Palace 🍕<br>What would you like to do?</div>
            <div class="mock-msg-anim" style="display:flex; flex-direction:column; gap:6px; align-self:flex-start; width:70%;">
              <div class="p-wa-btn">Order Delivery</div>
              <div class="p-wa-btn">Book a Table</div>
            </div>
            <div class="mock-msg-anim p-msg-right">Book a Table</div>
            <div class="mock-msg-anim p-msg-left">For how many people and what time today?</div>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp AI 3 -->
    <div class="o-cs-card" data-category="wa">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">WhatsApp AI</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Dental Clinic Auto-Scheduler</h3>
        <div class="o-cs-client">Premium Dental Care, Delhi</div>
        <div class="o-cs-res">Zero <span>no-shows in 3 months</span></div>
        <div class="o-cs-desc">Receptionists spent hours calling patients for reminders. We built an AI that syncs with their calendar, sends personalized WhatsApp reminders 24hrs before, and allows 1-click rescheduling.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Calendar Sync</div>
          <div class="o-cs-pill">1-Click Reschedule</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-wa">
          <div class="p-mock-wa-head">
            <div class="p-mock-wa-avatar">🦷</div>
            <div style="flex:1;"><div style="font-weight:700; font-size:15px;">Dental Clinic</div><div style="font-size:11px; opacity:0.8;">Online</div></div>
          </div>
          <div class="p-mock-wa-body">
            <div class="mock-msg-anim p-msg-left">Hi Rahul! Reminder for your Root Canal tomorrow at 10:30 AM 🦷 Confirm?</div>
            <div class="mock-msg-anim p-msg-right">Can I reschedule to Friday?</div>
            <div class="mock-msg-anim p-msg-left">Sure! I have 11:00 AM or 4:00 PM on Friday. Which works?</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business ERP 1 -->
    <div class="o-cs-card" data-category="erp">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Business ERP</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Manufacturing Operations Dashboard</h3>
        <div class="o-cs-client">150-Employee Manufacturer, Gujarat</div>
        <div class="o-cs-res">40+ hrs <span>saved per week</span></div>
        <div class="o-cs-desc">We built a full ERP — inventory tracking, daily production logs, HR attendance, and a live reporting dashboard for management. The owner now sees the entire factory in one screen, from anywhere.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Live Dashboard</div>
          <div class="o-cs-pill">Mobile HR Logging</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-browser">
          <div class="p-browser-head">
            <div class="p-dot r"></div><div class="p-dot y"></div><div class="p-dot g"></div>
            <div style="color:#6B7A99; font-size:12px; margin-left:10px; font-weight:600;">erp.manufacturing.local</div>
          </div>
          <div class="p-browser-body">
            <div style="display:flex; gap:15px; margin-bottom:15px;">
              <div class="mock-msg-anim p-dash-card" style="flex:1;">
                <div class="p-dash-lbl">Inventory</div><div class="p-dash-val">2,847<span style="font-size:12px; color:var(--o-mut);"> units</span></div>
              </div>
              <div class="mock-msg-anim p-dash-card" style="flex:1;">
                <div class="p-dash-lbl">Attendance</div><div class="p-dash-val">142<span style="font-size:12px; color:var(--o-mut);">/150</span></div>
              </div>
            </div>
            <div class="mock-msg-anim p-dash-card" style="border-color:var(--o-teal);">
              <div class="p-dash-row"><span class="p-dash-lbl">Production Today</span><span style="color:var(--o-teal); font-weight:bold;">↑ 12%</span></div>
              <div class="p-dash-val" style="color:var(--o-teal);">847 units completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business ERP 2 -->
    <div class="o-cs-card" data-category="erp">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Business ERP</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Logistics & Fleet Tracking System</h3>
        <div class="o-cs-client">National Transport Co., Mumbai</div>
        <div class="o-cs-res">32% <span>fuel cost reduction</span></div>
        <div class="o-cs-desc">Replaced their scattered Google Sheets with a custom Fleet Management ERP. Features include GPS driver tracking, automated maintenance alerts, and a real-time profitability calculator per trip.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">GPS Integration</div>
          <div class="o-cs-pill">Trip Profitability</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-browser">
          <div class="p-browser-head">
            <div class="p-dot r"></div><div class="p-dot y"></div><div class="p-dot g"></div>
            <div style="color:#6B7A99; font-size:12px; margin-left:10px; font-weight:600;">fleet.nationaltransport.in</div>
          </div>
          <div class="p-browser-body">
            <div class="mock-msg-anim p-dash-card" style="background:#080B14; margin-bottom:15px; border-color:var(--o-teal);">
              <div style="color:white; font-weight:bold; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
                 <span class="mock-live-dot" style="margin:0;"></span> Live Map Active
              </div>
              <div style="height:60px; background:url('data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"100\\" height=\\"60\\"><path d=\\"M10 30 Q 30 10 50 30 T 90 30\\" stroke=\\"%2300F5C4\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-dasharray=\\"4,4\\"/><circle cx=\\"90\\" cy=\\"30\\" r=\\"4\\" fill=\\"%2300F5C4\\"/></svg>') center/cover; border-radius:6px; opacity:0.8;"></div>
            </div>
            <div class="mock-msg-anim p-dash-card" style="background:rgba(239,68,68,0.1); border-color:#ef4444;">
              <div class="p-dash-row"><span class="p-dash-lbl" style="color:#ef4444;">Alert</span><span style="color:#ef4444; font-weight:bold;">MH-12-4521</span></div>
              <div style="color:white; font-size:13px;">Vehicle idle > 4 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business ERP 3 -->
    <div class="o-cs-card" data-category="erp">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Business ERP</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Retail Chain Inventory Sync</h3>
        <div class="o-cs-client">Electronics Retailer (7 Stores)</div>
        <div class="o-cs-res">100% <span>stock accuracy</span></div>
        <div class="o-cs-desc">Built a centralized cloud ERP that syncs stock across 7 physical stores and their Shopify website in real-time. Eliminating overselling and automating supplier purchase orders.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Shopify Sync</div>
          <div class="o-cs-pill">Auto-PO Generation</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-browser">
          <div class="p-browser-head">
            <div class="p-dot r"></div><div class="p-dot y"></div><div class="p-dot g"></div>
            <div style="color:#6B7A99; font-size:12px; margin-left:10px; font-weight:600;">inventory.retail-sync.com</div>
          </div>
          <div class="p-browser-body">
            <div style="display:flex; gap:15px; margin-bottom:15px;">
              <div class="mock-msg-anim p-dash-card" style="flex:1; text-align:center;">
                <div class="p-dash-lbl">Store A</div><div class="p-dash-val">842</div>
              </div>
              <div class="mock-msg-anim p-dash-card" style="flex:1; text-align:center;">
                <div class="p-dash-lbl">Web Stock</div><div class="p-dash-val" style="color:var(--o-teal);">1,204</div>
              </div>
            </div>
            <div class="mock-msg-anim p-dash-card" style="display:flex; justify-content:space-between; align-items:center; background:#111827;">
              <div style="color:white; font-weight:600; font-size:14px;">iPhone 15 Pro</div>
              <div style="color:var(--o-teal); font-size:12px; font-weight:bold;">Synching... 🔄</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Web & Apps 1 -->
    <div class="o-cs-card" data-category="web">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Web & Apps</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Healthcare Clinic Patient App</h3>
        <div class="o-cs-client">Multi-Specialty Clinic, Hyderabad</div>
        <div class="o-cs-res">3.5k <span>app downloads</span></div>
        <div class="o-cs-desc">Designed and developed a sleek mobile app (iOS & Android) where patients can view doctor profiles, book video or in-person consults, and access their lab reports securely.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">React Native</div>
          <div class="o-cs-pill">Telemedicine Video API</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-mobile">
          <div class="p-mock-island"></div>
          <div class="p-mock-mobile-body">
            <div style="color:white; font-size:20px; font-weight:800; font-family:'Syne';">Find a Doctor</div>
            <div style="background:rgba(255,255,255,0.1); padding:10px 15px; border-radius:99px; color:var(--o-mut); font-size:13px; margin-bottom:10px;">🔍 Search specialties...</div>
            <div class="mock-msg-anim p-app-card" style="background:var(--o-teal); color:#000;">
              <div style="font-weight:800; font-size:16px;">Dr. Sharma</div>
              <div style="font-size:12px; font-weight:600; margin-bottom:10px;">Cardiologist</div>
              <div style="background:#000; color:var(--o-teal); padding:8px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;">Book 11:30 AM</div>
            </div>
            <div class="mock-msg-anim p-app-card">
              <div style="font-weight:700; font-size:15px; color:white;">Dr. Patel</div>
              <div style="font-size:12px; color:var(--o-mut); margin-bottom:10px;">Dentist</div>
              <div style="background:rgba(0,245,196,0.2); color:var(--o-teal); padding:8px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;">Book 2:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Web & Apps 2 -->
    <div class="o-cs-card" data-category="web">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Web & Apps</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">EdTech Student Dashboard WebApp</h3>
        <div class="o-cs-client">Online Coding Bootcamp</div>
        <div class="o-cs-res">95% <span>student satisfaction</span></div>
        <div class="o-cs-desc">Rebuilt their core learning platform. Added video streaming, progress tracking, assignment submissions, and integrated an AI Tutor widget that helps students debug code in real-time.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Video Streaming</div>
          <div class="o-cs-pill">AI Code Tutor</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-browser">
          <div class="p-browser-head">
            <div class="p-dot r"></div><div class="p-dot y"></div><div class="p-dot g"></div>
            <div style="color:#6B7A99; font-size:12px; margin-left:10px; font-weight:600;">learn.edtech-bootcamp.com</div>
          </div>
          <div class="p-browser-body">
            <div class="p-dash-row"><div class="p-dash-val" style="font-size:18px;">Module 4: React</div><div class="p-dash-lbl" style="color:var(--o-teal); font-weight:bold;">68% Complete</div></div>
            <div style="height:8px; background:#1F2937; border-radius:4px; margin-bottom:20px; overflow:hidden;">
              <div style="width:68%; height:100%; background:var(--o-teal);"></div>
            </div>
            <div style="display:flex; gap:15px;">
              <div class="mock-msg-anim" style="flex:2; height:120px; background:#000; border-radius:8px; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold;">▶ Play Video</div>
              <div class="mock-msg-anim" style="flex:1; background:linear-gradient(180deg, rgba(0,245,196,0.1), transparent); border:1px solid var(--o-teal); border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:10px;">
                <span style="font-size:24px;">🤖</span>
                <span style="color:white; font-size:11px; font-weight:bold; text-align:center; margin-top:8px;">AI Tutor<br>Help</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Web & Apps 3 -->
    <div class="o-cs-card" data-category="web">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">Web & Apps</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Real Estate Property Portal</h3>
        <div class="o-cs-client">Brokerage Firm, Kolkata</div>
        <div class="o-cs-res">12k <span>monthly visitors</span></div>
        <div class="o-cs-desc">Developed a high-performance Next.js web application for property listings. Features an interactive map search, advanced filters, and virtual 3D tours integrated directly into the browser.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Next.js & React</div>
          <div class="o-cs-pill">Mapbox Integration</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-browser">
          <div class="p-browser-head">
            <div class="p-dot r"></div><div class="p-dot y"></div><div class="p-dot g"></div>
            <div style="color:#6B7A99; font-size:12px; margin-left:10px; font-weight:600;">app.realestate.com</div>
          </div>
          <div class="p-browser-body" style="background:white;">
            <div style="color:black; font-weight:bold; font-size:16px; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid #eee;">Map Search 🔍</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
              <div class="mock-msg-anim p-dash-card" style="padding:10px; background:#f5f5f5; border:none;">
                <div style="height:70px; background:#ddd; border-radius:6px; margin-bottom:10px;"></div>
                <div style="color:black; font-weight:bold; font-size:13px;">3BHK Villa</div><div style="color:var(--o-teal); font-weight:bold; font-size:13px;">₹1.2 Cr</div>
              </div>
              <div class="mock-msg-anim p-dash-card" style="padding:10px; background:#f5f5f5; border:none;">
                <div style="height:70px; background:#ddd; border-radius:6px; margin-bottom:10px;"></div>
                <div style="color:black; font-weight:bold; font-size:13px;">2BHK Condo</div><div style="color:var(--o-teal); font-weight:bold; font-size:13px;">₹85 L</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Chatbots 1 -->
    <div class="o-cs-card" data-category="bot">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">AI Chatbots</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">E-commerce Support Bot</h3>
        <div class="o-cs-client">Online Retailer, Bangalore</div>
        <div class="o-cs-res">70% <span>reduction in support tickets</span></div>
        <div class="o-cs-desc">We deployed an AI chatbot trained on their product catalogue. It handles order tracking, product queries, and initiates returns — automatically, 24/7 without human intervention.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Knowledge Base Trained</div>
          <div class="o-cs-pill">Shopify API</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-bot">
          <div class="p-bot-head">
            <div style="font-size:24px;">✨</div>
            <div><div style="font-weight:700; font-size:16px;">Support Agent</div><div style="font-size:12px; opacity:0.8;">AI Assistant</div></div>
          </div>
          <div class="p-bot-body">
            <div class="mock-msg-anim p-bot-right">Where's my order #4521?</div>
            <div class="mock-msg-anim p-bot-left">Your order is out for delivery 🚚 Expected by 6PM today!</div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Chatbots 2 -->
    <div class="o-cs-card" data-category="bot">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">AI Chatbots</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">B2B SaaS Lead Generation Bot</h3>
        <div class="o-cs-client">Software Startup, Chennai</div>
        <div class="o-cs-res">3x <span>increase in meetings booked</span></div>
        <div class="o-cs-desc">Replaced static forms with a conversational AI agent. Instead of a boring 'Contact Us' page, the bot proactively engages visitors, answers technical questions about the SaaS, and schedules Calendly meetings.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">Calendly Integration</div>
          <div class="o-cs-pill">Lead Scoring</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-bot">
          <div class="p-bot-head">
            <div style="font-size:24px;">✨</div>
            <div><div style="font-weight:700; font-size:16px;">Sales Assistant</div><div style="font-size:12px; opacity:0.8;">AI Assistant</div></div>
          </div>
          <div class="p-bot-body">
            <div class="mock-msg-anim p-bot-left">Hi! Are you looking for enterprise pricing or startup plans?</div>
            <div class="mock-msg-anim p-bot-right">Enterprise</div>
            <div class="mock-msg-anim p-bot-left">Great. I'll connect you with an account executive. Pick a time on this calendar 📅</div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Chatbots 3 -->
    <div class="o-cs-card" data-category="bot">
      <div class="o-cs-left">
        <span class="o-ind-badge" style="margin-bottom: 16px;">AI Chatbots</span>
        <h3 style="font-family: 'Syne'; font-size: 28px; margin-bottom: 8px;">Travel Agency Recommendation Bot</h3>
        <div class="o-cs-client">Luxury Travels</div>
        <div class="o-cs-res">1.5k <span>itineraries generated</span></div>
        <div class="o-cs-desc">Built a multi-lingual AI travel assistant. Users simply say "I want a 5-day honeymoon in Bali under 2 Lakhs", and the bot instantly generates a day-by-day itinerary with booking links.</div>
        <div class="o-cs-pills">
          <div class="o-cs-pill">GPT-4 Integration</div>
          <div class="o-cs-pill">Multi-lingual</div>
        </div>
      </div>
      <div class="o-cs-right">
        <div class="p-mock-bot">
          <div class="p-bot-head">
            <div style="font-size:24px;">✨</div>
            <div><div style="font-weight:700; font-size:16px;">Travel Guide</div><div style="font-size:12px; opacity:0.8;">AI Assistant</div></div>
          </div>
          <div class="p-bot-body">
            <div class="mock-msg-anim p-bot-right">Suggest a 3-day trip to Goa</div>
            <div class="mock-msg-anim p-bot-left">Working on it... ✈️<br>Day 1: Beaches<br>Day 2: Spice Tour<br>Day 3: Old Goa<br><span style="color:var(--o-teal); font-weight:bold; margin-top:5px; display:block;">Book package →</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
`;

let text = fs.readFileSync('index.html', 'utf8');
let portRegex = /<section class="o-section o-fade-up" id="portfolio">[\s\S]*?<\/section>/;

if (text.match(portRegex)) {
    text = text.replace(portRegex, portfolioHTML);
    fs.writeFileSync('index.html', text);
    console.log("Successfully rebuilt and polished Case Studies in index.html");
} else {
    console.log("Could not find portfolio section");
}
