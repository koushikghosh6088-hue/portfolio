const fs = require('fs');

const fintechHTML = `
<div class="mock-fintech">
  <div class="mf-head">
    <div class="mf-avatar"></div>
    <div class="mf-greeting">Hello, <span>Koushik</span></div>
    <div class="mf-bell">🔔</div>
  </div>
  <div class="mf-balance">
    <div class="mf-bal-label">Total Balance</div>
    <div class="mf-bal-amount">$124,500.00</div>
    <div class="mf-shimmer"></div>
  </div>
  <div class="mf-pills">
    <div class="mf-pill">Send</div>
    <div class="mf-pill">Receive</div>
    <div class="mf-pill">Pay</div>
  </div>
  <div class="mf-transactions">
    <div class="mf-txn" style="--delay: 0.1s"><div class="mf-txn-icon"></div><div class="mf-txn-info"><div class="mf-txn-title">Stripe</div><div class="mf-txn-date">Today</div></div><div class="mf-txn-amt green">+$4,200</div></div>
    <div class="mf-txn" style="--delay: 0.3s"><div class="mf-txn-icon"></div><div class="mf-txn-info"><div class="mf-txn-title">AWS</div><div class="mf-txn-date">Yesterday</div></div><div class="mf-txn-amt red">-$1,400</div></div>
    <div class="mf-txn" style="--delay: 0.5s"><div class="mf-txn-icon"></div><div class="mf-txn-info"><div class="mf-txn-title">Apple</div><div class="mf-txn-date">Mar 12</div></div><div class="mf-txn-amt red">-$2,100</div></div>
  </div>
</div>
`;

const saasHTML = `
<div class="mock-saas">
  <div class="ms-sidebar">
    <div class="ms-logo"></div>
    <div class="ms-nav-item active"></div>
    <div class="ms-nav-item"></div>
    <div class="ms-nav-item"></div>
  </div>
  <div class="ms-main">
    <div class="ms-topbar"><div class="ms-search"></div></div>
    <div class="ms-cards">
      <div class="ms-card"><div class="ms-card-val">$84K</div><div class="ms-card-lbl">Revenue</div></div>
      <div class="ms-card"><div class="ms-card-val">12.4K</div><div class="ms-card-lbl">Users</div></div>
    </div>
    <div class="ms-chart-area">
       <!-- SVG line chart -->
       <svg viewBox="0 0 100 50" preserveAspectRatio="none" class="ms-svg-chart">
         <path class="ms-line" d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,15" fill="none" stroke="var(--cyan)" stroke-width="2"/>
         <path class="ms-area" d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,15 L100,50 L0,50 Z" fill="url(#grad)" opacity="0.2"/>
         <defs>
           <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stop-color="var(--cyan)"/>
             <stop offset="100%" stop-color="transparent"/>
           </linearGradient>
         </defs>
       </svg>
       <!-- Bar charts -->
       <div class="ms-bars">
         <div class="ms-bar"><div class="ms-bar-inner" style="height: 40%; --delay: 0.1s;"></div></div>
         <div class="ms-bar"><div class="ms-bar-inner" style="height: 70%; --delay: 0.2s;"></div></div>
         <div class="ms-bar"><div class="ms-bar-inner" style="height: 50%; --delay: 0.3s;"></div></div>
         <div class="ms-bar"><div class="ms-bar-inner" style="height: 90%; --delay: 0.4s;"></div></div>
         <div class="ms-bar"><div class="ms-bar-inner" style="height: 60%; --delay: 0.5s;"></div></div>
       </div>
    </div>
  </div>
</div>
`;

const n8nHTML = `
<div class="mock-n8n">
  <!-- Connection lines -->
  <svg class="n8n-lines" viewBox="0 0 400 300">
     <!-- Path 1: Trigger to OpenAI -->
     <path id="path1" d="M 80 150 C 120 150, 140 100, 180 100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
     <!-- Path 2: OpenAI to DB -->
     <path id="path2" d="M 280 100 C 320 100, 320 150, 360 150" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
     <!-- Path 3: Trigger to Slack -->
     <path id="path3" d="M 80 150 C 140 150, 140 220, 200 220" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>

     <!-- Animated packets -->
     <circle r="3" fill="var(--cyan)" class="n8n-packet">
       <animateMotion dur="2s" repeatCount="indefinite" path="M 80 150 C 120 150, 140 100, 180 100"/>
     </circle>
     <circle r="3" fill="var(--purple)" class="n8n-packet">
       <animateMotion dur="2s" repeatCount="indefinite" path="M 280 100 C 320 100, 320 150, 360 150"/>
     </circle>
     <circle r="3" fill="var(--cyan)" class="n8n-packet" begin="1s">
       <animateMotion dur="2s" repeatCount="indefinite" path="M 80 150 C 140 150, 140 220, 200 220"/>
     </circle>
  </svg>
  
  <!-- Nodes -->
  <div class="n8n-node" style="top: 130px; left: 20px;">
     <div class="n8n-icon" style="background: #ff6b6b;">⚡</div>
     <div class="n8n-name">Webhook</div>
  </div>
  <div class="n8n-node" style="top: 80px; left: 180px;">
     <div class="n8n-icon" style="background: #10a37f;">🤖</div>
     <div class="n8n-name">OpenAI</div>
  </div>
  <div class="n8n-node" style="top: 130px; left: 360px;">
     <div class="n8n-icon" style="background: #336791;">🐘</div>
     <div class="n8n-name">Postgres</div>
  </div>
  <div class="n8n-node" style="top: 200px; left: 200px;">
     <div class="n8n-icon" style="background: #e01e5a;">#️⃣</div>
     <div class="n8n-name">Slack</div>
  </div>
</div>
`;

function processFile(file) {
    let text = fs.readFileSync(file, 'utf8');
    
    // REPLACE MOBILE APP (Card 4)
    let iphoneRegex = /<div class="mock-iphone">[\s\S]*?<div class="mock-glow-orb/g;
    text = text.replace(iphoneRegex, `${fintechHTML}\n            <div class="mock-glow-orb`);

    // REPLACE SAAS (Card 5)
    let dashRegex = /<div class="mock-dash advanced">[\s\S]*?<div class="mock-glow-orb/g;
    text = text.replace(dashRegex, `${saasHTML}\n            <div class="mock-glow-orb`);

    // REPLACE N8N (Card 6)
    let pipeRegex = /<div class="mock-pipe advanced">[\s\S]*?<div class="mock-glow-orb/g;
    text = text.replace(pipeRegex, `${n8nHTML}\n            <div class="mock-glow-orb`);

    fs.writeFileSync(file, text);
    console.log('Injected high-end animations to ' + file);
}

['index.html', 'services.html', 'replaceHTML.js'].forEach(processFile);
