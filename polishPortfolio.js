const fs = require('fs');

const cssPolish = `
/* ════════════════════════════════════════════════════════════
   PREMIUM PORTFOLIO POLISH & MOBILE FIX
   ════════════════════════════════════════════════════════════ */
/* Fix mobile collapsing */
@media (max-width: 900px) {
  .o-cs-left, .o-cs-right {
    flex: none !important;
    width: 100% !important;
  }
  .o-cs-right {
    padding: 20px !important;
  }
}

/* Premium Card Styling */
.o-cs-card {
  background: linear-gradient(145deg, #0f1526 0%, #080B14 100%) !important;
  border: 1px solid rgba(255,255,255,0.05) !important;
  border-left: 4px solid var(--o-teal) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
}

/* Add an ambient glow behind the mockups */
.o-cs-right {
  position: relative;
  background: transparent !important;
  border-left: 1px solid rgba(255,255,255,0.05) !important;
  z-index: 1;
}
.o-cs-right::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 250px; height: 250px;
  background: radial-gradient(circle, rgba(0,245,196,0.15) 0%, rgba(0,0,0,0) 70%);
  z-index: -1;
  pointer-events: none;
}

/* Premium WhatsApp Mockup */
.p-mock-wa {
  width: 100%; max-width: 340px; margin: 0 auto;
  background: #E5DDD5;
  border-radius: 20px;
  border: 6px solid #111;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5), inset 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
}
.p-mock-wa-head {
  background: #075E54;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
}
.p-mock-wa-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: white;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; color: #075E54; font-size: 16px;
}
.p-mock-wa-body {
  padding: 15px;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M10 10c0-5 5-5 5-5s5 0 5 5-5 5-5 5-5 0-5-5z" fill="rgba(0,0,0,0.03)"/></svg>');
  display: flex; flex-direction: column; gap: 10px;
}
.p-msg-left {
  background: white; color: #333; padding: 10px 14px; border-radius: 0 12px 12px 12px;
  align-self: flex-start; max-width: 85%; font-size: 13px; font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
.p-msg-right {
  background: #DCF8C6; color: #333; padding: 10px 14px; border-radius: 12px 0 12px 12px;
  align-self: flex-end; max-width: 85%; font-size: 13px; font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
.p-wa-btn {
  background: white; color: #00a884; border: 1px solid #eee; text-align: center;
  padding: 10px; border-radius: 8px; font-weight: 700; cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-size: 14px;
}

/* Premium Dashboard / Browser Mockup */
.p-mock-browser {
  width: 100%;
  background: #111827;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  overflow: hidden;
}
.p-browser-head {
  background: #1F2937;
  padding: 10px 15px;
  display: flex; align-items: center; gap: 6px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.p-dot { width: 10px; height: 10px; border-radius: 50%; }
.p-dot.r { background: #FF5F56; }
.p-dot.y { background: #FFBD2E; }
.p-dot.g { background: #27C93F; }
.p-browser-body { padding: 20px; font-family: 'Inter', sans-serif; }

/* Dashboard UI Elements */
.p-dash-card { background: #1F2937; border-radius: 8px; padding: 15px; border: 1px solid rgba(255,255,255,0.05); }
.p-dash-row { display: flex; justify-content: space-between; margin-bottom: 12px; }
.p-dash-val { color: white; font-size: 24px; font-weight: 700; font-family: 'Syne'; }
.p-dash-lbl { color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }

/* Premium Mobile App Mockup */
.p-mock-mobile {
  width: 100%; max-width: 280px; margin: 0 auto;
  background: #000;
  border-radius: 36px;
  border: 8px solid #1f2937;
  box-shadow: 0 25px 50px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.1);
  overflow: hidden; position: relative;
  height: 480px;
}
.p-mock-island {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
  width: 90px; height: 26px; background: #000; border-radius: 13px; z-index: 10;
}
.p-mock-mobile-body {
  padding: 50px 15px 20px; height: 100%; background: linear-gradient(180deg, #1e1b4b 0%, #000 100%);
  display: flex; flex-direction: column; gap: 15px; font-family: 'Inter', sans-serif;
}
.p-app-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 15px; backdrop-filter: blur(10px); }

/* Premium Chatbot Mockup */
.p-mock-bot {
  width: 100%; max-width: 340px; margin: 0 auto;
  background: #111827; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5); overflow: hidden;
}
.p-bot-head {
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  padding: 20px; color: white; display: flex; align-items: center; gap: 12px;
}
.p-bot-body { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
.p-bot-left { background: #1F2937; color: white; padding: 12px 16px; border-radius: 16px 16px 16px 0; align-self: flex-start; max-width: 85%; font-size: 13px; }
.p-bot-right { background: #3b82f6; color: white; padding: 12px 16px; border-radius: 16px 16px 0 16px; align-self: flex-end; max-width: 85%; font-size: 13px; }

`;

fs.appendFileSync('style.css', '\n' + cssPolish);
console.log("Appended Polish CSS");

// Helper functions for new HTML structures
function getWA(title, msgs) {
  return \`
  <div class="p-mock-wa">
    <div class="p-mock-wa-head">
      <div class="p-mock-wa-avatar">🤖</div>
      <div style="flex:1;"><div style="font-weight:700; font-size:15px;">\${title}</div><div style="font-size:11px; opacity:0.8;">Online</div></div>
    </div>
    <div class="p-mock-wa-body">
      \${msgs}
    </div>
  </div>\`;
}

function getBrowser(title, content) {
  return \`
  <div class="p-mock-browser">
    <div class="p-browser-head">
      <div class="p-dot r"></div><div class="p-dot y"></div><div class="p-dot g"></div>
      <div style="color:#6B7A99; font-size:12px; margin-left:10px; font-weight:600;">\${title}</div>
    </div>
    <div class="p-browser-body">
      \${content}
    </div>
  </div>\`;
}

function getMobile(content) {
  return \`
  <div class="p-mock-mobile">
    <div class="p-mock-island"></div>
    <div class="p-mock-mobile-body">
      \${content}
    </div>
  </div>\`;
}

function getBot(title, msgs) {
  return \`
  <div class="p-mock-bot">
    <div class="p-bot-head">
      <div style="font-size:24px;">✨</div>
      <div><div style="font-weight:700; font-size:16px;">\${title}</div><div style="font-size:12px; opacity:0.8;">AI Assistant</div></div>
    </div>
    <div class="p-bot-body">
      \${msgs}
    </div>
  </div>\`;
}

// Generate the 12 new, polished right-side mockups
const right1 = getWA('Real Estate AI', \`
  <div class="mock-msg-anim p-msg-left">Hi! Interested in 2BHK or 3BHK?</div>
  <div class="mock-msg-anim p-msg-right">3BHK</div>
  <div class="mock-msg-anim p-msg-left">Great! Budget range?</div>
  <div class="mock-msg-anim p-msg-right">40-60L</div>
  <div class="mock-msg-anim p-msg-left" style="background:#d1fae5; border:1px solid #10b981;">Perfect match found! 📍 Booking your site visit for Saturday 11AM ✅</div>
\`);

const right2 = getWA('Foodie Palace', \`
  <div class="mock-msg-anim p-msg-left">Welcome to Foodie Palace 🍕<br>What would you like to do?</div>
  <div class="mock-msg-anim" style="display:flex; flex-direction:column; gap:6px; align-self:flex-start; width:70%;">
    <div class="p-wa-btn">Order Delivery</div>
    <div class="p-wa-btn">Book a Table</div>
  </div>
  <div class="mock-msg-anim p-msg-right">Book a Table</div>
  <div class="mock-msg-anim p-msg-left">For how many people and what time today?</div>
\`);

const right3 = getWA('Dental Clinic', \`
  <div class="mock-msg-anim p-msg-left">Hi Rahul! Reminder for your Root Canal tomorrow at 10:30 AM 🦷 Confirm?</div>
  <div class="mock-msg-anim p-msg-right">Can I reschedule to Friday?</div>
  <div class="mock-msg-anim p-msg-left">Sure! I have 11:00 AM or 4:00 PM on Friday. Which works?</div>
\`);

const right4 = getBrowser('erp.manufacturing.local', \`
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
\`);

const right5 = getBrowser('fleet.nationaltransport.in', \`
  <div class="mock-msg-anim p-dash-card" style="background:#080B14; margin-bottom:15px; border-color:var(--o-teal);">
    <div style="color:white; font-weight:bold; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
       <span class="mock-live-dot" style="margin:0;"></span> Live Map Active
    </div>
    <div style="height:60px; background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"60\"><path d=\"M10 30 Q 30 10 50 30 T 90 30\" stroke=\"%2300F5C4\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><circle cx=\"90\" cy=\"30\" r=\"4\" fill=\"%2300F5C4\"/></svg>') center/cover; border-radius:6px; opacity:0.8;"></div>
  </div>
  <div class="mock-msg-anim p-dash-card" style="background:rgba(239,68,68,0.1); border-color:#ef4444;">
    <div class="p-dash-row"><span class="p-dash-lbl" style="color:#ef4444;">Alert</span><span style="color:#ef4444; font-weight:bold;">MH-12-4521</span></div>
    <div style="color:white; font-size:13px;">Vehicle idle > 4 hours</div>
  </div>
\`);

const right6 = getBrowser('inventory.retail-sync.com', \`
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
\`);

const right7 = getMobile(\`
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
\`);

const right8 = getBrowser('learn.edtech-bootcamp.com', \`
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
\`);

const right9 = getBrowser('app.realestate.com', \`
  <div style="color:white; font-weight:bold; font-size:16px; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1);">Map Search 🔍</div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
    <div class="mock-msg-anim p-dash-card" style="padding:10px;">
      <div style="height:70px; background:#374151; border-radius:6px; margin-bottom:10px;"></div>
      <div style="color:white; font-weight:bold; font-size:13px;">3BHK Villa</div><div style="color:var(--o-teal); font-weight:bold; font-size:13px;">₹1.2 Cr</div>
    </div>
    <div class="mock-msg-anim p-dash-card" style="padding:10px;">
      <div style="height:70px; background:#374151; border-radius:6px; margin-bottom:10px;"></div>
      <div style="color:white; font-weight:bold; font-size:13px;">2BHK Condo</div><div style="color:var(--o-teal); font-weight:bold; font-size:13px;">₹85 L</div>
    </div>
  </div>
\`);

const right10 = getBot('Support Agent', \`
  <div class="mock-msg-anim p-bot-right">Where's my order #4521?</div>
  <div class="mock-msg-anim p-bot-left">Your order is out for delivery 🚚 Expected by 6PM today!</div>
\`);

const right11 = getBot('Sales Assistant', \`
  <div class="mock-msg-anim p-bot-left">Hi! Are you looking for enterprise pricing or startup plans?</div>
  <div class="mock-msg-anim p-bot-right">Enterprise</div>
  <div class="mock-msg-anim p-bot-left">Great. I'll connect you with an account executive. Pick a time on this calendar 📅</div>
\`);

const right12 = getBot('Travel Guide', \`
  <div class="mock-msg-anim p-bot-right">Suggest a 3-day trip to Goa</div>
  <div class="mock-msg-anim p-bot-left">Working on it... ✈️<br>Day 1: Beaches<br>Day 2: Spice Tour<br>Day 3: Old Goa<br><span style="color:var(--o-teal); font-weight:bold; margin-top:5px; display:block;">Book package →</span></div>
\`);

let text = fs.readFileSync('index.html', 'utf8');

// Replace the right side mockups with the premium polished ones
// Since we have exactly 12 cards in index.html in order, we can replace them sequentially.
let replacements = [right1, right2, right3, right4, right5, right6, right7, right8, right9, right10, right11, right12];

let regexes = [
  /<div class="o-mock-chat"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // WA 1
  /<div class="o-mock-chat"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // WA 2
  /<div class="o-mock-chat"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // WA 3
  /<div class="o-mock-dash">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, // ERP 1
  /<div class="o-mock-dash">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, // ERP 2
  /<div class="o-mock-dash">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // ERP 3
  /<div class="o-mock-app">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, // Web 1
  /<div class="o-mock-dash">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // Web 2
  /<div class="o-mock-dash" style="background:#fff; color:#000;">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // Web 3
  /<div class="o-mock-chat"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // Bot 1
  /<div class="o-mock-chat"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // Bot 2
  /<div class="o-mock-chat"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, // Bot 3
];

// Instead of regex matching, let's parse by finding class="o-cs-right"
let parts = text.split('<div class="o-cs-right">');
if (parts.length === 13) {
  let newText = parts[0];
  for(let i = 1; i <= 12; i++) {
    // Find the end of the .o-cs-right div. 
    // Wait, the o-cs-right div is closed by </div>, and then the card is closed by </div>.
    // The safest way is to find the next '    <!-- ' or '  </div>\n</section>'
    let nextBoundary = parts[i].indexOf('    <!-- ');
    if (nextBoundary === -1) nextBoundary = parts[i].indexOf('  </div>\n</section>');
    
    // So the content to discard is from start of parts[i] to nextBoundary.
    // BUT we need to be careful, parts[i] actually contains the </div> that closes o-cs-right.
    // Let's do it cleaner.
  }
}

// Safer approach: replace by exact string matching or use a powerful generic regex
// Every right side mockup is wrapped inside <div class="o-cs-right"> ... </div>
// Let's use a replacer function on text.replace(/<div class="o-cs-right">([\s\S]*?)<\/div>\s*<\/div>\s*<!--/g, ...)
// Actually, it's easier to just rewrite the entire o-cs-list.

const html = fs.readFileSync('expandPortfolio.js', 'utf8');
// Extract the portfolioHTML from expandPortfolio.js
let portHTMLRaw = html.split('const portfolioHTML = `')[1].split('`;')[0];

// In portHTMLRaw, replace the contents of <div class="o-cs-right"> ... </div> with our new right side mockups.
// Since portHTMLRaw is known exact format, we can split by '<div class="o-cs-right">'
let portParts = portHTMLRaw.split('<div class="o-cs-right">');
let rebuiltPortHTML = portParts[0];

for (let i = 1; i <= 12; i++) {
  // Find the closing </div> of the o-cs-right div. The o-cs-right contains another div inside it.
  // Actually, portParts[i] ends at the start of the next card <!-- WhatsApp AI 2 --> or </div>\n</section>
  // We can just replace from the start of portParts[i] until the </div> that closes o-cs-card.
  let endOfCardIdx = portParts[i].lastIndexOf('</div>'); 
  // Wait, the last </div> in the chunk closes the o-cs-card.
  let remainder = portParts[i].substring(portParts[i].indexOf('    </div>\n    <!--') !== -1 ? portParts[i].indexOf('    </div>\n    <!--') : portParts[i].lastIndexOf('    </div>\n  </div>'));
  
  if (remainder.indexOf('<!--') === -1 && remainder.indexOf('</section>') === -1) {
      // fallback
      remainder = portParts[i].substring(portParts[i].indexOf('    </div>\n\n    <!--'));
  }
  
  // Actually, manual replacement of the whole portfolio string is safest
}
