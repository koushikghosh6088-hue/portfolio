const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('style.css', 'utf8');

// 1. Update HTML for Industries Section
// We will replace the text of o-ind-prob and o-ind-sol with a "What You Get" list.

// Card 1: Real Estate
html = html.replace(
  /<div class="o-ind-prob">The problem: Leads go cold before your team calls back.<\/div>\s*<div class="o-ind-sol">What we build: WhatsApp AI agent that qualifies & books site visits 24\/7.<\/div>/,
  `<div class="o-ind-deliverables">
    <div class="o-ind-d-title">What You Get:</div>
    <ul>
      <li><span class="d-check">✔</span> 24/7 AI Lead Qualification</li>
      <li><span class="d-check">✔</span> Automated Site Visit Booking</li>
      <li><span class="d-check">✔</span> CRM Integration & Sync</li>
    </ul>
  </div>`
);

// Card 2: Restaurants
html = html.replace(
  /<div class="o-ind-prob">The problem: Orders, staff, and inventory managed across 3 WhatsApp groups.<\/div>\s*<div class="o-ind-sol">What we build: Online ordering system \+ kitchen dashboard \+ AI support bot.<\/div>/,
  `<div class="o-ind-deliverables">
    <div class="o-ind-d-title">What You Get:</div>
    <ul>
      <li><span class="d-check">✔</span> Custom Online Ordering Web App</li>
      <li><span class="d-check">✔</span> Kitchen & Inventory Dashboard</li>
      <li><span class="d-check">✔</span> AI Customer Support Bot</li>
    </ul>
  </div>`
);

// Card 3: Clinics
html = html.replace(
  /<div class="o-ind-prob">The problem: Appointment no-shows and manual scheduling waste your staff's day.<\/div>\s*<div class="o-ind-sol">What we build: AI booking system that reminds, reschedules, and follows up automatically.<\/div>/,
  `<div class="o-ind-deliverables">
    <div class="o-ind-d-title">What You Get:</div>
    <ul>
      <li><span class="d-check">✔</span> Automated Appointment Booking</li>
      <li><span class="d-check">✔</span> WhatsApp Reminders & Rescheduling</li>
      <li><span class="d-check">✔</span> Patient Follow-up AI</li>
    </ul>
  </div>`
);

// Card 4: E-commerce
html = html.replace(
  /<div class="o-ind-prob">The problem: Customer support tickets pile up and your team drowns.<\/div>\s*<div class="o-ind-sol">What we build: AI chatbot trained on your catalogue — handles 80% of queries instantly.<\/div>/,
  `<div class="o-ind-deliverables">
    <div class="o-ind-d-title">What You Get:</div>
    <ul>
      <li><span class="d-check">✔</span> AI Bot Trained on Your Catalog</li>
      <li><span class="d-check">✔</span> Instant Order Tracking via WhatsApp</li>
      <li><span class="d-check">✔</span> 24/7 Instant Customer Support</li>
    </ul>
  </div>`
);

// Card 5: Manufacturing
html = html.replace(
  /<div class="o-ind-prob">The problem: Inventory, dispatch, and HR tracked in scattered Excel sheets.<\/div>\s*<div class="o-ind-sol">What we build: Custom ERP dashboard — one screen for your entire operation.<\/div>/,
  `<div class="o-ind-deliverables">
    <div class="o-ind-d-title">What You Get:</div>
    <ul>
      <li><span class="d-check">✔</span> Unified Admin Dashboard</li>
      <li><span class="d-check">✔</span> Live Inventory Tracking</li>
      <li><span class="d-check">✔</span> Dispatch & HR Management</li>
    </ul>
  </div>`
);

fs.writeFileSync('index.html', html);


// 2. Add New CSS for both sections
const newCSS = `
/* =========================================================
   LUKRITIVE INDUSTRIES SECTION UPGRADES
   ========================================================= */

.o-ind-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.o-ind-card {
  background: linear-gradient(160deg, rgba(20, 24, 40, 0.8) 0%, rgba(8, 11, 20, 0.9) 100%) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(37, 211, 102, 0.2) !important;
  border-radius: 16px !important;
  padding: 40px !important;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
}

/* Hover effects for Industry Cards */
.o-ind-card:hover {
  transform: translateY(-10px) !important;
  border-color: rgba(37, 211, 102, 0.5) !important;
  box-shadow: 0 20px 40px rgba(37, 211, 102, 0.15), inset 0 0 0 1px rgba(37, 211, 102, 0.3);
}

/* Colorful glow at top right of industry cards */
.o-ind-card::before {
  content: '';
  position: absolute;
  top: -30%; right: -30%; width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.15), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.o-ind-card:hover::before {
  opacity: 1;
  transform: scale(1.2);
}

.o-ind-icon {
  font-size: 48px !important;
  margin-bottom: 24px !important;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 20px rgba(37, 211, 102, 0.4);
}

.o-ind-title {
  font-family: 'Syne' !important;
  font-size: 24px !important;
  font-weight: 800 !important;
  margin-bottom: 20px !important;
  position: relative;
  z-index: 2;
  background: linear-gradient(90deg, #ffffff 0%, #a7f3d0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* The new 'What You Get' section */
.o-ind-deliverables {
  position: relative;
  z-index: 2;
  margin-bottom: 24px;
}
.o-ind-d-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #94a3b8;
  margin-bottom: 12px;
  font-weight: 700;
}
.o-ind-deliverables ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.o-ind-deliverables li {
  color: #e2e8f0;
  font-size: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.d-check {
  color: #25D366;
  margin-right: 10px;
  font-size: 14px;
  text-shadow: 0 0 10px rgba(37, 211, 102, 0.5);
}

.o-ind-badge {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  position: relative;
  z-index: 2;
  padding: 6px 16px !important;
  font-size: 12px !important;
}


/* =========================================================
   LUKRITIVE PROCESS SECTION UPGRADES
   ========================================================= */

/* Make timeline dashed line animated */
@keyframes dash-flow {
  0% { background-position: 0% 0; }
  100% { background-position: -200% 0; }
}
.o-proc-timeline::before {
  border-top: none !important;
  background-image: linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(139, 92, 246, 0) 100%) !important;
  background-size: 200% 2px;
  height: 2px !important;
  animation: dash-flow 4s linear infinite;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
  top: 50px !important;
}

.o-proc-step {
  background: linear-gradient(180deg, rgba(15, 21, 38, 0.8) 0%, rgba(8, 11, 20, 0.9) 100%) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
  border-top: 4px solid #8b5cf6 !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  overflow: hidden;
}

/* Hover effect on Process Cards */
.o-proc-step:hover {
  transform: translateY(-8px);
  border-top-color: #00F5C4 !important;
  border-color: rgba(0, 245, 196, 0.3) !important;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
}

/* Subtle background glow in process cards */
.o-proc-step::after {
  content: '';
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 150px; height: 150px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.o-proc-num {
  background: linear-gradient(135deg, #8b5cf6 0%, #5c35db 100%) !important;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
  position: relative;
  z-index: 2;
  width: 50px !important;
  height: 50px !important;
  font-size: 18px !important;
  transition: transform 0.4s ease;
}
.o-proc-step:hover .o-proc-num {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, #00F5C4 0%, #10b981 100%) !important;
  box-shadow: 0 0 20px rgba(0, 245, 196, 0.5);
  color: #080B14 !important;
}

.o-proc-icon {
  font-size: 40px !important;
  position: relative;
  z-index: 2;
  margin-bottom: 24px !important;
}

.o-proc-title {
  position: relative;
  z-index: 2;
  background: linear-gradient(90deg, #ffffff 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 22px !important;
}

.o-proc-desc {
  position: relative;
  z-index: 2;
  color: #cbd5e1 !important;
}
`;

css += newCSS;
fs.writeFileSync('style.css', css);
console.log("Updated HTML and CSS for Industries and Process");
