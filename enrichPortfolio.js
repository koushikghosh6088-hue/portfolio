const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Define the realistic numbers and features for each card based on its title or description
const replacements = [
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">47 site visits booked<\/div>\s*<div class="o-cs-pill">Zero manual follow-up<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">3x</div><div class="ind-metric-lbl">Lead Conv.</div></div>
          <div class="ind-metric"><div class="ind-metric-num">5s</div><div class="ind-metric-lbl">Response Time</div></div>
          <div class="ind-metric"><div class="ind-metric-num">100%</div><div class="ind-metric-lbl">Automated</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Auto-qualifies leads instantly</li>
          <li><span class="ind-check">✨</span> Direct site visit scheduling</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">UPI Integration<\/div>\s*<div class="o-cs-pill">No App Download<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">45%</div><div class="ind-metric-lbl">Direct Orders</div></div>
          <div class="ind-metric"><div class="ind-metric-num">0%</div><div class="ind-metric-lbl">App Comm.</div></div>
          <div class="ind-metric"><div class="ind-metric-num">2.1x</div><div class="ind-metric-lbl">Reorder Rate</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> In-chat WhatsApp payments</li>
          <li><span class="ind-check">✨</span> Real-time table reservations</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Calendar Sync<\/div>\s*<div class="o-cs-pill">1-Click Reschedule<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">0</div><div class="ind-metric-lbl">No-shows</div></div>
          <div class="ind-metric"><div class="ind-metric-num">15h</div><div class="ind-metric-lbl">Saved/Week</div></div>
          <div class="ind-metric"><div class="ind-metric-num">98%</div><div class="ind-metric-lbl">Opt-in Rate</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Seamless Google Calendar Sync</li>
          <li><span class="ind-check">✨</span> 1-click WhatsApp rescheduling</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Live Dashboard<\/div>\s*<div class="o-cs-pill">Mobile HR Logging<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">40h</div><div class="ind-metric-lbl">Saved/Week</div></div>
          <div class="ind-metric"><div class="ind-metric-num">12%</div><div class="ind-metric-lbl">Yield Boost</div></div>
          <div class="ind-metric"><div class="ind-metric-num">100%</div><div class="ind-metric-lbl">Visibility</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Live production & inventory tracking</li>
          <li><span class="ind-check">✨</span> Mobile app for worker attendance</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">GPS Integration<\/div>\s*<div class="o-cs-pill">Trip Profitability<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">32%</div><div class="ind-metric-lbl">Fuel Savings</div></div>
          <div class="ind-metric"><div class="ind-metric-num">Real-time</div><div class="ind-metric-lbl">GPS Tracking</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Automated trip profitability calculator</li>
          <li><span class="ind-check">✨</span> Predictive maintenance alerts</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Shopify Sync<\/div>\s*<div class="o-cs-pill">Auto-PO Generation<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">100%</div><div class="ind-metric-lbl">Stock Acc.</div></div>
          <div class="ind-metric"><div class="ind-metric-num">7</div><div class="ind-metric-lbl">Stores Synced</div></div>
          <div class="ind-metric"><div class="ind-metric-num">0</div><div class="ind-metric-lbl">Oversells</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Bi-directional Shopify synchronization</li>
          <li><span class="ind-check">✨</span> Automated supplier PO generation</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">React Native<\/div>\s*<div class="o-cs-pill">Telemedicine Video API<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">3.5k</div><div class="ind-metric-lbl">Downloads</div></div>
          <div class="ind-metric"><div class="ind-metric-num">4.8★</div><div class="ind-metric-lbl">App Rating</div></div>
          <div class="ind-metric"><div class="ind-metric-num">100%</div><div class="ind-metric-lbl">HIPAA Compliant</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Integrated HD telemedicine video calls</li>
          <li><span class="ind-check">✨</span> Secure end-to-end lab report vault</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Video Streaming<\/div>\s*<div class="o-cs-pill">AI Code Tutor<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">95%</div><div class="ind-metric-lbl">Satisfaction</div></div>
          <div class="ind-metric"><div class="ind-metric-num">24/7</div><div class="ind-metric-lbl">AI Support</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Adaptive learning & progress tracking</li>
          <li><span class="ind-check">✨</span> Real-time AI code debugging assistant</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Next.js & React<\/div>\s*<div class="o-cs-pill">Mapbox Integration<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">12k</div><div class="ind-metric-lbl">Monthly Vis.</div></div>
          <div class="ind-metric"><div class="ind-metric-num">65%</div><div class="ind-metric-lbl">Bounce Drop</div></div>
          <div class="ind-metric"><div class="ind-metric-num">98</div><div class="ind-metric-lbl">SEO Score</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Interactive Mapbox property search</li>
          <li><span class="ind-check">✨</span> Integrated WebGL 3D virtual tours</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Knowledge Base Trained<\/div>\s*<div class="o-cs-pill">Shopify API<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">70%</div><div class="ind-metric-lbl">Ticket Drop</div></div>
          <div class="ind-metric"><div class="ind-metric-num">24/7</div><div class="ind-metric-lbl">Resolution</div></div>
          <div class="ind-metric"><div class="ind-metric-num">$5k</div><div class="ind-metric-lbl">Saved/Mo</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Trained strictly on client catalogue</li>
          <li><span class="ind-check">✨</span> Automates returns & order tracking</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">Calendly Integration<\/div>\s*<div class="o-cs-pill">Lead Scoring<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">3x</div><div class="ind-metric-lbl">Meetings</div></div>
          <div class="ind-metric"><div class="ind-metric-num">100%</div><div class="ind-metric-lbl">Qualific.</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> AI-driven conversational lead scoring</li>
          <li><span class="ind-check">✨</span> Direct Calendly booking integration</li>
        </ul>`
  },
  {
    find: /<div class="o-cs-pills">\s*<div class="o-cs-pill">GPT-4 Integration<\/div>\s*<div class="o-cs-pill">Multi-lingual<\/div>\s*<\/div>/,
    replace: `<div class="ind-metric-row" style="margin-top: 24px; margin-bottom: 24px; justify-content: flex-start;">
          <div class="ind-metric"><div class="ind-metric-num">1.5k</div><div class="ind-metric-lbl">Itineraries</div></div>
          <div class="ind-metric"><div class="ind-metric-num">8</div><div class="ind-metric-lbl">Languages</div></div>
          <div class="ind-metric"><div class="ind-metric-num">Insta</div><div class="ind-metric-lbl">Bookings</div></div>
        </div>
        <ul class="ind-feat-list">
          <li><span class="ind-check">✨</span> Generates custom day-by-day plans</li>
          <li><span class="ind-check">✨</span> Direct checkout & booking links embedded</li>
        </ul>`
  }
];

let replacedCount = 0;
for (const rule of replacements) {
  if (rule.find.test(html)) {
    html = html.replace(rule.find, rule.replace);
    replacedCount++;
  } else {
    console.log("Could not find match for one rule");
  }
}

fs.writeFileSync(filePath, html, 'utf8');
console.log("Replaced " + replacedCount + " blocks in index.html");
