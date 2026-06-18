const fs = require('fs');

const correctIphoneHTML = `
<div class="mock-iphone">
  <div class="mi-island"></div>
  <div class="mi-screen">
    <div class="mi-header">
      <div class="mi-nav">
        <div class="mi-icon"></div>
        <div class="mi-title">App UI</div>
        <div class="mi-profile"></div>
      </div>
      <div class="mi-search">Search...</div>
    </div>
    <div class="mi-scroll">
      <div class="mi-card">
        <div class="mi-img img1"></div>
        <div class="mi-txt-wrap">
          <div class="mi-t1"></div>
          <div class="mi-t2"></div>
        </div>
        <div class="mi-btn"></div>
      </div>
      <div class="mi-card">
        <div class="mi-img img2"></div>
        <div class="mi-txt-wrap">
          <div class="mi-t1"></div>
          <div class="mi-t2"></div>
        </div>
        <div class="mi-btn"></div>
      </div>
      <div class="mi-card">
        <div class="mi-img img3"></div>
        <div class="mi-txt-wrap">
          <div class="mi-t1"></div>
          <div class="mi-t2"></div>
        </div>
        <div class="mi-btn"></div>
      </div>
      <div class="mi-card">
        <div class="mi-img img1"></div>
        <div class="mi-txt-wrap">
          <div class="mi-t1"></div>
          <div class="mi-t2"></div>
        </div>
        <div class="mi-btn"></div>
      </div>
    </div>
  </div>
</div>
`;

const responsiveN8nHTML = `
<div class="mock-n8n" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: visible;">
  <svg viewBox="0 0 400 300" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="xMidYMid meet">
    <!-- Connection Lines -->
    <path d="M 60 150 C 100 150, 100 80, 140 80" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 60 150 C 100 150, 100 220, 140 220" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 140 80 C 180 80, 180 150, 220 150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 140 220 C 180 220, 180 150, 220 150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <path d="M 220 150 C 260 150, 260 150, 300 150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    
    <!-- Animated Data Packets -->
    <circle r="4" fill="var(--cyan)" filter="drop-shadow(0 0 5px var(--cyan))">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 150 C 100 150, 100 80, 140 80"/>
    </circle>
    <circle r="4" fill="var(--purple)" filter="drop-shadow(0 0 5px var(--purple))">
      <animateMotion dur="2.2s" repeatCount="indefinite" path="M 60 150 C 100 150, 100 220, 140 220"/>
    </circle>
    <circle r="4" fill="var(--cyan)" filter="drop-shadow(0 0 5px var(--cyan))">
      <animateMotion dur="1.8s" repeatCount="indefinite" path="M 140 80 C 180 80, 180 150, 220 150"/>
    </circle>
    <circle r="4" fill="#f2a600" filter="drop-shadow(0 0 5px #f2a600)">
      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 140 220 C 180 220, 180 150, 220 150"/>
    </circle>
    <circle r="4" fill="#00e676" filter="drop-shadow(0 0 5px #00e676)">
      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 220 150 C 260 150, 260 150, 300 150"/>
    </circle>

    <!-- HTML Nodes using foreignObject for perfect responsiveness -->
    <!-- Node 1: Webhook -->
    <foreignObject x="0" y="130" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3s infinite alternate;">
        <span style="background:#ff6b6b; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">⚡</span> Webhook
      </div>
    </foreignObject>

    <!-- Node 2: OpenAI -->
    <foreignObject x="110" y="60" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3.5s infinite alternate; animation-delay: 0.5s;">
        <span style="background:#10a37f; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">🤖</span> OpenAI
      </div>
    </foreignObject>

    <!-- Node 3: Claude -->
    <foreignObject x="110" y="200" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 4s infinite alternate; animation-delay: 1s;">
        <span style="background:#f2a600; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">🧠</span> Claude
      </div>
    </foreignObject>

    <!-- Node 4: Postgres -->
    <foreignObject x="210" y="130" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3s infinite alternate; animation-delay: 1.5s;">
        <span style="background:#336791; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">🐘</span> Postgres
      </div>
    </foreignObject>
    
    <!-- Node 5: Slack -->
    <foreignObject x="310" y="130" width="120" height="40" style="overflow: visible;">
      <div style="background:#1e1e24; border:1px solid #444; border-radius:8px; display:flex; align-items:center; padding:6px 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); width: max-content; color: white; font-family: sans-serif; font-size: 13px; font-weight: 500; transform-origin: center; animation: pulseNode 3.2s infinite alternate; animation-delay: 0.2s;">
        <span style="background:#e01e5a; padding:4px; border-radius:6px; margin-right:8px; display:flex; align-items:center; justify-content:center;">💬</span> Slack
      </div>
    </foreignObject>
  </svg>
</div>
<style>
@keyframes pulseNode {
  0% { transform: scale(1); border-color: #444; }
  100% { transform: scale(1.05); border-color: var(--cyan); }
}
</style>
`;

function fixFiles() {
    ['index.html', 'services.html', 'replaceHTML.js'].forEach(file => {
        let text = fs.readFileSync(file, 'utf8');
        
        // Fix mock-iphone
        let iphoneRegex = /<div class="mock-iphone">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
        if(text.match(iphoneRegex)) {
            text = text.replace(iphoneRegex, correctIphoneHTML);
        }

        // Fix mock-n8n
        let n8nRegex = /<div class="mock-n8n">[\s\S]*?<\/svg>[\s\S]*?<\/div>(\s*<style>[\s\S]*?<\/style>)?/;
        // Let's use a simpler replace strategy for n8n to avoid regex issues
        let pipeRegex = /<div class="mock-n8n">[\s\S]*?(<div class="mock-glow-orb)/;
        if (text.match(pipeRegex)) {
            text = text.replace(pipeRegex, `${responsiveN8nHTML}\n            $1`);
        }
        
        fs.writeFileSync(file, text);
        console.log('Fixed', file);
    });
}

fixFiles();
