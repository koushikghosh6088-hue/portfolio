const fs = require('fs');

const css = `
/* ════════════════════════════════════════════════════════════
   PORTFOLIO FILTERS & ANIMATIONS
   ════════════════════════════════════════════════════════════ */
.o-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
  margin-bottom: 48px;
}
.o-filter-btn {
  background: rgba(255,255,255,0.03);
  border: 1px solid #1A2340;
  color: var(--o-mut);
  padding: 10px 20px;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.o-filter-btn:hover {
  border-color: rgba(0,245,196,0.5);
  color: white;
}
.o-filter-btn.active {
  background: rgba(0,245,196,0.1);
  border-color: var(--o-teal);
  color: var(--o-teal);
  box-shadow: 0 0 15px rgba(0,245,196,0.2);
}

.o-cs-card.hide {
  display: none !important;
}

/* Base Card Transition */
.o-cs-card {
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform-origin: top center;
}

/* Animations for Mockups */
@keyframes mockPulse {
  0% { box-shadow: 0 0 0 0 rgba(0,245,196,0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0,245,196,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,245,196,0); }
}
.mock-live-dot {
  width: 8px; height: 8px; background: var(--o-teal); border-radius: 50%;
  animation: mockPulse 2s infinite; display: inline-block; margin-right: 8px;
}

@keyframes mockSlideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.mock-msg-anim {
  animation: mockSlideUp 0.5s ease forwards;
}
.mock-msg-anim:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
.mock-msg-anim:nth-child(3) { animation-delay: 0.4s; opacity: 0; }
.mock-msg-anim:nth-child(4) { animation-delay: 0.6s; opacity: 0; }
.mock-msg-anim:nth-child(5) { animation-delay: 0.8s; opacity: 0; }

.o-mock-app { width: 100%; max-width: 320px; background: #080B14; border-radius: 30px; border: 4px solid #1A2340; padding: 20px; font-size: 12px; position: relative; overflow: hidden; margin: 0 auto; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.o-mock-app::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 25px; background: #1A2340; border-radius: 0 0 15px 15px; }

`;

fs.appendFileSync('style.css', '\n' + css);
console.log("Appended Portfolio CSS");

const jsCode = `
<script>
// PORTFOLIO FILTER LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.o-filter-btn');
  const cards = document.querySelectorAll('.o-cs-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Animate out
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
      });

      // Wait for fade out, then hide/show, then animate in
      setTimeout(() => {
        cards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.classList.remove('hide');
            // Slight delay before fading in
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.classList.add('hide');
          }
        });
      }, 400); // 400ms matches CSS transition
    });
  });
});
</script>
`;

const portfolioHTML = `
<!-- SECTION 4: CASE STUDIES (EXPANDED) -->
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
        <div class="o-mock-chat" style="padding: 15px;">
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Hi! Interested in 2BHK or 3BHK?</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">3BHK</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Great! Budget range? Under ₹40L or above?</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">40-60L</div></div>
          <div class="mock-msg-anim" style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Perfect match found! 📍 Booking your site visit for Saturday 11AM ✅</div></div>
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
        <div class="o-mock-chat" style="padding: 15px;">
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Welcome to Foodie Palace 🍕<br>What would you like to do?</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; flex-direction: column; gap: 5px; width: 60%;">
            <div style="background:rgba(255,255,255,0.05); border: 1px solid var(--o-teal); color:var(--o-teal); padding:8px; border-radius:6px; text-align:center; font-weight:bold; cursor:pointer;">Order Delivery</div>
            <div style="background:rgba(255,255,255,0.05); border: 1px solid var(--o-teal); color:var(--o-teal); padding:8px; border-radius:6px; text-align:center; font-weight:bold; cursor:pointer;">Book a Table</div>
          </div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Book a Table</div></div>
          <div class="mock-msg-anim" style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">For how many people and what time today?</div></div>
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
        <div class="o-mock-chat" style="padding: 15px;">
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Hi Rahul! Reminder for your Root Canal checkup tomorrow at 10:30 AM 🦷 Confirm?</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Can I reschedule to Friday?</div></div>
          <div class="mock-msg-anim" style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Sure! I have 11:00 AM or 4:00 PM on Friday. Which works?</div></div>
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
        <div class="o-mock-dash">
          <div style="margin-bottom:15px; font-weight:bold; color:white; border-bottom:1px solid #1A2340; padding-bottom:10px;"><span class="mock-live-dot"></span> Live Operations</div>
          <div class="mock-msg-anim" style="display:flex; justify-content: space-between; margin-bottom:10px; background:#1A2340; padding:10px; border-radius:6px;"><span>📦 Inventory</span><span style="color:white; font-weight:bold;">2,847 units</span></div>
          <div class="mock-msg-anim" style="display:flex; justify-content: space-between; margin-bottom:10px; background:#1A2340; padding:10px; border-radius:6px;"><span>👥 Attendance</span><span style="color:white; font-weight:bold;">142/150 present</span></div>
          <div class="mock-msg-anim" style="display:flex; justify-content: space-between; margin-bottom:10px; background:#1A2340; padding:10px; border-radius:6px;"><span>📊 Production today</span><span style="color:var(--o-teal); font-weight:bold;">847 units ↑12%</span></div>
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
        <div class="o-mock-dash">
          <div style="margin-bottom:15px; font-weight:bold; color:white; border-bottom:1px solid #1A2340; padding-bottom:10px;">Fleet Status (Map View Active)</div>
          <div class="mock-msg-anim" style="height: 80px; background: rgba(0,245,196,0.05); border: 1px dashed var(--o-teal); border-radius: 6px; display:flex; align-items:center; justify-content:center; margin-bottom: 10px;">📍 42 Active Vehicles on Route</div>
          <div class="mock-msg-anim" style="display:flex; justify-content: space-between; background:rgba(255,0,122,0.1); border:1px solid rgba(255,0,122,0.3); padding:10px; border-radius:6px;"><span>⚠️ Truck MH-12-4521</span><span style="color:#ff007a; font-weight:bold;">Idle > 4 hours</span></div>
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
        <div class="o-mock-dash">
          <div style="display:flex; gap: 10px; margin-bottom:15px;">
            <div style="flex:1; background:#1A2340; padding:15px; border-radius:8px; text-align:center;">
              <div style="color:var(--o-mut); font-size:11px;">Store A Stock</div><div style="color:white; font-size:20px; font-weight:bold;">842</div>
            </div>
            <div style="flex:1; background:#1A2340; padding:15px; border-radius:8px; text-align:center;">
              <div style="color:var(--o-mut); font-size:11px;">Web Stock</div><div style="color:var(--o-teal); font-size:20px; font-weight:bold;">1,204</div>
            </div>
          </div>
          <div class="mock-msg-anim" style="display:flex; justify-content:space-between; background:rgba(255,255,255,0.05); padding:10px; border-radius:6px; margin-bottom:5px;"><span>iPhone 15 Pro</span><span>Synching... 🔄</span></div>
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
        <div class="o-mock-app">
          <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <div style="color:white; font-size:16px; font-weight:bold;">Find a Doctor</div>
            <div style="width:30px; height:30px; background:#1A2340; border-radius:50%;"></div>
          </div>
          <div style="background:#1A2340; height:36px; border-radius:18px; margin-bottom:20px; display:flex; align-items:center; padding:0 15px; color:var(--o-mut);">Search specialties...</div>
          <div class="mock-msg-anim" style="background:var(--o-teal); border-radius:12px; padding:15px; margin-bottom:15px; color:#080B14; font-weight:bold; display:flex; justify-content:space-between;">
            <div>Dr. Sharma<br><span style="font-size:10px; font-weight:normal;">Cardiologist</span></div>
            <div style="background:#080B14; color:white; padding:5px 10px; border-radius:6px; font-size:10px;">Book 11:30 AM</div>
          </div>
          <div class="mock-msg-anim" style="background:rgba(255,255,255,0.05); border-radius:12px; padding:15px; color:white; font-weight:bold; display:flex; justify-content:space-between;">
            <div>Dr. Patel<br><span style="color:var(--o-mut); font-size:10px; font-weight:normal;">Dentist</span></div>
            <div style="background:var(--o-teal); color:#080B14; padding:5px 10px; border-radius:6px; font-size:10px;">Book 2:00 PM</div>
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
        <div class="o-mock-dash">
          <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
            <div style="color:white; font-weight:bold;">Module 4: React Basics</div>
            <div style="color:var(--o-teal); font-weight:bold;">68% Complete</div>
          </div>
          <div style="height:6px; background:#1A2340; border-radius:3px; margin-bottom:20px; overflow:hidden;">
            <div style="width:68%; height:100%; background:var(--o-teal);"></div>
          </div>
          <div style="display:flex; gap:10px;">
            <div class="mock-msg-anim" style="flex:2; height:100px; background:#000; border-radius:8px; display:flex; align-items:center; justify-content:center; color:white;">▶ Play Video</div>
            <div class="mock-msg-anim" style="flex:1; background:rgba(0,245,196,0.1); border:1px solid var(--o-teal); border-radius:8px; padding:10px; color:white; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <span style="font-size:20px;">🤖</span>
              <span style="font-size:10px; text-align:center; margin-top:5px;">AI Tutor<br>Ask for help</span>
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
        <div class="o-mock-dash" style="background:#fff; color:#000;">
          <div style="margin-bottom:10px; font-weight:bold; border-bottom:1px solid #eee; padding-bottom:10px;">Search Properties 🔍</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div class="mock-msg-anim" style="background:#f5f5f5; border-radius:8px; padding:10px;">
              <div style="height:60px; background:#ddd; border-radius:4px; margin-bottom:5px;"></div>
              <div style="font-weight:bold; font-size:12px;">3BHK Villa</div><div style="color:var(--o-teal); font-weight:bold;">₹1.2 Cr</div>
            </div>
            <div class="mock-msg-anim" style="background:#f5f5f5; border-radius:8px; padding:10px;">
              <div style="height:60px; background:#ddd; border-radius:4px; margin-bottom:5px;"></div>
              <div style="font-weight:bold; font-size:12px;">2BHK Condo</div><div style="color:var(--o-teal); font-weight:bold;">₹85 L</div>
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
        <div class="o-mock-chat" style="padding: 15px;">
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Where's my order #4521?</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Your order is out for delivery 🚚 Expected by 6PM today!</div></div>
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
        <div class="o-mock-chat" style="padding: 15px;">
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Hi! Are you looking for enterprise pricing or startup plans?</div></div>
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Enterprise</div></div>
          <div class="mock-msg-anim" style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Great. I'll connect you with an account executive. Pick a time on this calendar 📅</div></div>
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
        <div class="o-mock-chat" style="padding: 15px;">
          <div class="mock-msg-anim" style="display:flex; margin-bottom: 10px; justify-content: flex-end;"><div style="background:var(--o-teal); padding:10px; border-radius:10px 10px 0 10px; color:#080B14; max-width: 80%; font-weight:bold;">Suggest a 3-day trip to Goa</div></div>
          <div class="mock-msg-anim" style="display:flex;"><div style="background:#1A2340; padding:10px; border-radius:10px 10px 10px 0; color:white; max-width: 80%;">Working on it... ✈️<br>Day 1: North Goa Beaches<br>Day 2: Spice Plantation Tour<br>Day 3: Old Goa Churches<br><a href="#" style="color:var(--o-teal);">Click to book package →</a></div></div>
        </div>
      </div>
    </div>

  </div>
</section>
`;

// Read index.html
let text = fs.readFileSync('index.html', 'utf8');

// The new portfolio needs to replace the existing one
// We'll use a regex to replace everything from <section class="o-section o-fade-up" id="portfolio">
// to the closing </section> of portfolio.
let portRegex = /<section class="o-section o-fade-up" id="portfolio">[\s\S]*?<\/section>/;

if (text.match(portRegex)) {
    text = text.replace(portRegex, portfolioHTML);
    // Insert JS logic before </body>
    text = text.replace('</body>', jsCode + '\n</body>');
    fs.writeFileSync('index.html', text);
    console.log("Successfully expanded Case Studies in index.html");
} else {
    console.log("Could not find old portfolio section");
}
