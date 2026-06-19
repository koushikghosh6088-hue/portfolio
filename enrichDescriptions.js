const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Rich descriptions for each card
const descriptions = [
  {
    find: /<div class="o-cs-desc">The client was losing leads because follow-ups were manual and slow\. We built a WhatsApp AI agent that automatically greets new leads, asks qualifying questions, and books site visits\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> 60% of leads were lost due to slow manual follow-ups by the sales team.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We developed a conversational AI agent that instantly greets leads, qualifies them based on budget, and books site visits directly onto the sales team's calendar.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Escaping high aggregator commissions, this restaurant chain deployed our WhatsApp Bot with interactive catalogue buttons\. Customers browse the menu, pay via UPI, and book tables entirely inside WhatsApp\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Paying 30% commissions to food delivery apps was destroying profit margins.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We built a complete WhatsApp ordering system. Customers browse interactive menus, pay via UPI, and receive automated delivery updates without ever downloading an app.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Receptionists spent hours calling patients for reminders\. We built an AI that syncs with their calendar, sends personalized WhatsApp reminders 24hrs before, and allows 1-click rescheduling\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> 15% daily no-shows were wasting doctors' time and revenue.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We integrated an AI bot with their clinic management software. It sends smart WhatsApp reminders 24hrs prior and handles 1-click rescheduling autonomously.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">We built a full ERP — inventory tracking, daily production logs, HR attendance, and a live reporting dashboard for management\. The owner now sees the entire factory in one screen, from anywhere\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Factory operations were scattered across 20+ chaotic WhatsApp groups and paper registers.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We deployed a centralized ERP. Factory workers log attendance and production via a simple mobile app, feeding a live analytics dashboard for the owner.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Replaced their scattered Google Sheets with a custom Fleet Management ERP\. Features include GPS driver tracking, automated maintenance alerts, and a real-time profitability calculator per trip\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Fuel theft and unoptimized routes were draining profits.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We built a custom Fleet Management ERP with GPS integration, automated maintenance alerts, and a real-time trip profitability calculator.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Built a centralized cloud ERP that syncs stock across 7 physical stores and their Shopify website in real-time\. Eliminating overselling and automating supplier purchase orders\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Inventory mismatch between physical stores and Shopify led to overselling and angry customers.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We developed a centralized cloud ERP that syncs stock bi-directionally in real-time and automates supplier purchase orders when stock runs low.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Designed and developed a sleek mobile app \(iOS & Android\) where patients can view doctor profiles, book video or in-person consults, and access their lab reports securely\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Patients struggled to book appointments and access lab reports securely online.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We built a secure telemedicine app (iOS & Android) featuring HD video consultations, real-time doctor availability, and a HIPAA-compliant lab report vault.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Rebuilt their core learning platform\. Added video streaming, progress tracking, assignment submissions, and integrated an AI Tutor widget that helps students debug code in real-time\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Students were getting stuck on coding assignments and dropping out.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We rebuilt their platform with an integrated 'AI Code Tutor' that reads the student's code and provides real-time, personalized debugging hints without giving away the answer.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Developed a high-performance Next\.js web application for property listings\. Features an interactive map search, advanced filters, and virtual 3D tours integrated directly into the browser\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Their old WordPress site was too slow to load high-res property images, causing high bounce rates.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We engineered a blazing-fast Next.js platform featuring Mapbox interactive search and WebGL 3D virtual tours that load instantly.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">We deployed an AI chatbot trained on their product catalogue\. It handles order tracking, product queries, and initiates returns — automatically, 24\/7 without human intervention\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> The support team was overwhelmed by basic "Where is my order?" queries.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We deployed a custom AI chatbot trained strictly on their internal policies and Shopify API. It now handles 70% of support tickets autonomously.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Replaced static forms with a conversational AI agent\. Instead of a boring 'Contact Us' page, the bot proactively engages visitors, answers technical questions about the SaaS, and schedules Calendly meetings\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> High website traffic but abysmally low lead conversion from static 'Contact Us' forms.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We integrated a proactive Sales AI that engages visitors, answers deep technical questions about the product, and directly schedules demos via Calendly.</div>
    </div>`
  },
  {
    find: /<div class="o-cs-desc">Built a multi-lingual AI travel assistant\. Users simply say "I want a 5-day honeymoon in Bali under 2 Lakhs", and the bot instantly generates a day-by-day itinerary with booking links\.<\/div>/g,
    replace: `<div class="o-cs-desc" style="display:flex; flex-direction:column; gap:8px;">
      <div><span style="color:var(--o-teal); font-weight:700;">Problem:</span> Travel agents spent days crafting custom itineraries for clients who often didn't buy.</div>
      <div><span style="color:#8B5CF6; font-weight:700;">Solution:</span> We built a multi-lingual AI travel assistant. Users simply request a destination and budget, and the AI generates a beautiful, bookable itinerary in seconds.</div>
    </div>`
  }
];

let replacedCount = 0;
for (const rule of descriptions) {
  if (rule.find.test(html)) {
    html = html.replace(rule.find, rule.replace);
    replacedCount++;
  }
}

fs.writeFileSync(filePath, html, 'utf8');
console.log("Replaced " + replacedCount + " descriptions in index.html");
