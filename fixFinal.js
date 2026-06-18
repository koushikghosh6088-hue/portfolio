const fs = require('fs');

const stunningSaasHTML = `
<div class="mock-saas" style="width: 100%; height: 100%; display: flex; background: #050505; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);">
  <div class="ms-sidebar" style="width: 60px; background: rgba(20,20,25,0.9); border-right: 1px solid rgba(255,255,255,0.05); padding: 20px 0; display: flex; flex-direction: column; align-items: center;">
    <div class="ms-logo" style="width: 28px; height: 28px; background: linear-gradient(135deg, #00d4ff, #7b2fff); border-radius: 8px; margin-bottom: 30px; box-shadow: 0 0 15px rgba(0,212,255,0.4);"></div>
    <div class="ms-nav-item active" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(0,212,255,0.15); box-shadow: 0 0 15px rgba(0,212,255,0.3); border: 1px solid rgba(0,212,255,0.4); display: flex; align-items: center; justify-content: center;"><div style="width:16px; height:16px; background: var(--cyan); mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>') center/contain no-repeat; -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/></svg>') center/contain no-repeat;"></div></div>
    <div class="ms-nav-item" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.03);"></div>
    <div class="ms-nav-item" style="margin: 10px 0; width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.03);"></div>
  </div>
  <div class="ms-main" style="flex: 1; padding: 20px; display: flex; flex-direction: column;">
    <div class="ms-topbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div class="ms-search" style="width: 180px; height: 28px; background: rgba(255,255,255,0.05); border-radius: 14px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; padding: 0 10px;"><div style="width:12px; height:12px; border: 2px solid #888; border-radius: 50%;"></div></div>
      <div style="display:flex; gap:12px; align-items: center;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #ff007a, #7b2fff); border: 2px solid white;"></div>
      </div>
    </div>
    <div class="ms-cards" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
      <div class="ms-card" style="background: linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.02)); border: 1px solid rgba(0,212,255,0.3); border-radius: 14px; padding: 18px; position: relative; overflow: hidden; box-shadow: 0 8px 32px rgba(0,212,255,0.1);">
        <div style="position:absolute; top:-30px; right:-30px; width:80px; height:80px; background:var(--cyan); filter:blur(40px); opacity:0.5;"></div>
        <div style="font-size: 28px; font-weight: 800; color: white; margin-bottom: 4px; text-shadow: 0 0 15px rgba(0,212,255,0.6);">$84.2K</div>
        <div style="font-size: 11px; font-weight: 600; color: #80e5ff; letter-spacing: 1px;">TOTAL REVENUE</div>
      </div>
      <div class="ms-card" style="background: linear-gradient(135deg, rgba(123,47,255,0.15), rgba(123,47,255,0.02)); border: 1px solid rgba(123,47,255,0.3); border-radius: 14px; padding: 18px; position: relative; overflow: hidden; box-shadow: 0 8px 32px rgba(123,47,255,0.1);">
        <div style="position:absolute; top:-30px; right:-30px; width:80px; height:80px; background:var(--purple); filter:blur(40px); opacity:0.5;"></div>
        <div style="font-size: 28px; font-weight: 800; color: white; margin-bottom: 4px; text-shadow: 0 0 15px rgba(123,47,255,0.6);">12.4K</div>
        <div style="font-size: 11px; font-weight: 600; color: #d4a5ff; letter-spacing: 1px;">ACTIVE USERS</div>
      </div>
    </div>
    <div class="ms-chart-area" style="flex: 1; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 20px; position: relative; min-height: 120px;">
       <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="width: 100%; height: 100%; overflow: visible; animation: dashAnim 3s infinite alternate ease-in-out;">
         <defs>
           <linearGradient id="gradStunning" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.8"/>
             <stop offset="100%" stop-color="#7b2fff" stop-opacity="0"/>
           </linearGradient>
           <filter id="glowChart" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="2" result="blur"/>
             <feMerge>
               <feMergeNode in="blur"/>
               <feMergeNode in="SourceGraphic"/>
             </feMerge>
           </filter>
         </defs>
         <path class="ms-area" d="M0,40 Q10,25 20,30 T40,15 T60,20 T80,5 T100,10 L100,50 L0,50 Z" fill="url(#gradStunning)"/>
         <path class="ms-line" d="M0,40 Q10,25 20,30 T40,15 T60,20 T80,5 T100,10" fill="none" stroke="#00d4ff" stroke-width="2.5" filter="url(#glowChart)"/>
         <circle cx="20" cy="30" r="1.5" fill="white" stroke="#00d4ff" stroke-width="1.5"/>
         <circle cx="40" cy="15" r="1.5" fill="white" stroke="#00d4ff" stroke-width="1.5"/>
         <circle cx="60" cy="20" r="1.5" fill="white" stroke="#00d4ff" stroke-width="1.5"/>
         <circle cx="80" cy="5" r="1.5" fill="white" stroke="#00d4ff" stroke-width="1.5"/>
         <circle cx="100" cy="10" r="2.5" fill="white" stroke="#00d4ff" stroke-width="1.5" filter="url(#glowChart)"/>
       </svg>
    </div>
  </div>
</div>
`;

function fixFiles() {
    ['index.html', 'services.html', 'replaceHTML.js'].forEach(file => {
        let text = fs.readFileSync(file, 'utf8');
        
        // Fix 1: WhatsApp and Chatbot Container Alignment and Height
        // Change from "min-height: 520px; align-items: center;" to "height: auto !important; padding: 30px 0; align-items: flex-start;"
        text = text.replace(/min-height:\s*520px;\s*align-items:\s*center;/g, 'height: auto !important; padding: 40px 0; align-items: flex-start;');
        text = text.replace(/min-height:\s*520px;"/g, 'height: auto !important; padding: 40px 0; align-items: flex-start;"');
        
        // Also just replace the class if it exists to be safe
        text = text.replace(/<div class="s-mockup-container tech-trigger-wa".*?>/, '<div class="s-mockup-container tech-trigger-wa" style="height: auto !important; padding: 40px 0; align-items: flex-start;">');
        text = text.replace(/<div class="s-mockup-container tech-trigger-chat".*?>/, '<div class="s-mockup-container tech-trigger-chat" style="height: auto !important; padding: 40px 0; align-items: flex-start;">');


        // Fix 2: Upgrade Business Software (Card 5) to Stunning SaaS HTML
        let saasRegex = /<div class="mock-saas">[\s\S]*?(<div class="mock-glow-orb)/;
        if (text.match(saasRegex)) {
            text = text.replace(saasRegex, `${stunningSaasHTML}\n            $1`);
        }
        
        fs.writeFileSync(file, text);
        console.log('Fixed', file);
    });

    // Add CSS animation for dashAnim
    fs.appendFileSync('style.css', '\n@keyframes dashAnim { 0% { transform: scaleY(0.9); } 100% { transform: scaleY(1.05); } }\n');
}

fixFiles();
