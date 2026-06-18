const fs = require('fs');

const cssPath = 'style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const startMarker = '/* =========================================\n   MOCKUP CSS\n   ========================================= */';
const endMarker = '/* Bottom CTA Strip */';

const startIndex = css.indexOf(startMarker);
const endIndex = css.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find markers in style.css. Ensure they exist.");
    process.exit(1);
}

const newMockupCSS = `/* =========================================
   ADVANCED MOCKUP CSS & ANIMATIONS
   ========================================= */

/* Glowing Orbs Behind Mockups */
.mock-glow-orb {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  opacity: 0.6;
  animation: orbFloat 6s ease-in-out infinite;
  pointer-events: none;
}
.orb-cyan { background: var(--cyan); top: -20px; right: -20px; }
.orb-purple { background: var(--purple); bottom: -20px; left: -20px; }
.orb-green { background: #00ff88; top: 30%; right: -30px; }
.orb-blue { background: #0088ff; top: 10%; right: -20px; }
.orb-orange { background: #ffaa00; bottom: 0; left: 10%; }
.orb-multi { background: linear-gradient(135deg, var(--cyan), var(--purple)); top: 50%; left: 50%; transform: translate(-50%, -50%); }

@keyframes orbFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

/* 1. Browser Mockup */
.mock-browser.advanced {
  width: 90%; height: 85%;
  background: rgba(15, 15, 20, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.5s ease;
}
.s-card:hover .mock-browser.advanced { transform: scale(1.05) translateY(-10px); border-color: rgba(0,212,255,0.4); box-shadow: 0 20px 40px rgba(0,212,255,0.2);}
.mb-header { background: rgba(0,0,0,0.4); height: 24px; display: flex; align-items: center; padding: 0 10px; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.mb-url { background: rgba(255,255,255,0.05); color: #888; font-size: 8px; padding: 2px 10px; border-radius: 12px; flex-grow: 1; text-align: center; margin: 0 20px; display: flex; align-items: center; justify-content: center; gap: 4px;}
.mb-scroll-wrap { animation: browserScroll 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; padding: 10px; }
@keyframes browserScroll {
  0%, 15% { transform: translateY(0); }
  40%, 65% { transform: translateY(-50px); }
  85%, 100% { transform: translateY(0); }
}
.mb-hero { width: 100%; height: 50px; background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(123,47,255,0.1)); border-radius: 6px; margin-bottom: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4px; border: 1px solid rgba(0,212,255,0.2); position: relative; overflow: hidden; }
.mb-hero::after { content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%); opacity: 0; animation: heroPulse 4s infinite; }
@keyframes heroPulse { 50% { opacity: 1; transform: scale(1.2); } }
.mb-hero-text { width: 60%; height: 4px; background: rgba(255,255,255,0.6); border-radius: 2px; }
.mb-hero-text.short { width: 40%; }
.mb-hero-btn { width: 30px; height: 10px; background: var(--cyan); border-radius: 10px; margin-top: 4px; box-shadow: 0 0 10px rgba(0,212,255,0.4);}
.mb-section { width: 100%; height: 40px; background: rgba(255,255,255,0.05); border-radius: 6px; margin-top: 10px; position: relative; overflow: hidden;}
.mb-section::after { content: ""; position: absolute; left: -100%; top: 0; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); animation: sweep 3s linear infinite; }
@keyframes sweep { 100% { left: 200%; } }

/* 2. Chatbot Mockup */
.mock-chat.advanced {
  width: 90%; height: 90%;
  background: rgba(20, 20, 30, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(123,47,255,0.3);
  display: flex; flex-direction: column; z-index: 1;
  box-shadow: 0 15px 35px rgba(0,0,0,0.6);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.s-card:hover .mock-chat.advanced { transform: translateY(-5px) scale(1.03); box-shadow: 0 20px 40px rgba(123,47,255,0.3); border-color: rgba(123,47,255,0.6); }
.mc-header { background: rgba(0,0,0,0.3); padding: 10px 12px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.mc-avatar { width: 24px; height: 24px; background: linear-gradient(135deg, var(--cyan), var(--purple)); border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 14px; box-shadow: 0 0 10px var(--cyan); }
.mc-info { display: flex; flex-direction: column; font-size: 10px; color: white; font-weight: 600;}
.mc-status { font-size: 7px; color: #00ff88; display: flex; align-items: center; gap: 3px; font-weight: 400;}
.mc-msg { padding: 8px 12px; border-radius: 12px; font-size: 9.5px; max-width: 85%; opacity: 0; animation: chatFlow 6s infinite; line-height: 1.4; position: relative;}
.mc-user { background: rgba(255,255,255,0.1); color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
.mc-bot { background: linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,255,0.15)); border: 1px solid rgba(123,47,255,0.3); color: white; align-self: flex-start; border-bottom-left-radius: 2px; display: flex; gap: 6px; align-items: flex-start; box-shadow: 0 5px 15px rgba(123,47,255,0.15);}
.mc-bot-icon { font-size: 10px; }
.m1 { animation-delay: 0.5s; }
.m2 { animation-delay: 2.5s; }
.m3 { animation-delay: 1.5s; animation: chatTyping 6s infinite; background: rgba(255,255,255,0.05); align-self: flex-start; border-bottom-left-radius: 2px; width: max-content; padding: 6px 10px;}
@keyframes chatFlow {
  0%, 10% { opacity: 0; transform: translateY(10px) scale(0.95); }
  15%, 85% { opacity: 1; transform: translateY(0) scale(1); }
  90%, 100% { opacity: 0; transform: translateY(-10px) scale(0.95); }
}
@keyframes chatTyping {
  0%, 10% { opacity: 0; transform: translateY(10px) scale(0.95); }
  15%, 40% { opacity: 1; transform: translateY(0) scale(1); }
  45%, 100% { opacity: 0; transform: translateY(0) scale(0.95); }
}

/* 3. WhatsApp Mockup */
.mock-wa.advanced {
  width: 85%; height: 95%;
  background: #0b141a;
  border-radius: 14px;
  border: 1px solid rgba(37,211,102,0.4);
  display: flex; flex-direction: column; overflow: hidden; z-index: 1;
  box-shadow: 0 15px 35px rgba(0,0,0,0.6);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.s-card:hover .mock-wa.advanced { transform: translateY(-5px) scale(1.03); border-color: #25d366; box-shadow: 0 20px 40px rgba(37,211,102,0.25); }
.mw-header { background: #202c33; padding: 10px; display: flex; align-items: center; gap: 10px; color: white; border-bottom: 1px solid rgba(255,255,255,0.05);}
.mw-avatar svg { border-radius: 50%; filter: drop-shadow(0 0 5px #25d366); }
.mw-info { display: flex; flex-direction: column; font-size: 11px; font-weight: 600; }
.mw-status { font-size: 8px; color: #25d366; animation: blinkText 2s infinite;}
@keyframes blinkText { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
.mw-body { background-image: url('data:image/svg+xml;utf8,<svg opacity="0.03" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M15 15l15-15v30zM0 30l15-15H0z" fill="%23fff"/></svg>'); padding: 10px; flex-grow: 1; display: flex; flex-direction: column; gap: 8px;}
.mw-date { background: #182229; color: #8696a0; font-size: 7px; padding: 4px 8px; border-radius: 6px; align-self: center; margin-bottom: 4px; font-weight: 600;}
.mw-msg { padding: 6px 8px; border-radius: 8px; font-size: 9.5px; max-width: 85%; position: relative; opacity: 0; animation: waFlow 8s infinite; box-shadow: 0 1px 2px rgba(0,0,0,0.3);}
.mw-user { background: #005c4b; color: #e9edef; align-self: flex-end; border-top-right-radius: 0; }
.mw-bot { background: #202c33; color: #e9edef; align-self: flex-start; border-top-left-radius: 0; }
.mw-tick { margin-left: 4px; color: #53bdeb; font-size: 7px; font-weight: bold;}
.m-w1 { animation-delay: 0.5s; }
.m-w2 { animation-delay: 2.0s; }
.mw-new { animation-delay: 4.0s; border-left: 2px solid #25d366;}
@keyframes waFlow {
  0%, 5% { opacity: 0; transform: translateY(15px); }
  10%, 90% { opacity: 1; transform: translateY(0); }
  95%, 100% { opacity: 0; transform: translateY(-10px); }
}

/* 4. Phone Mockup & 3D Environment */
.mock-3d-wrap { perspective: 1000px; transform-style: preserve-3d; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; position: relative;}
.mock-phone.advanced {
  width: 100px; height: 180px;
  background: #000;
  border: 4px solid #222;
  border-radius: 18px;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.1);
  transform: rotateX(15deg) rotateY(-15deg);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
}
.s-card:hover .mock-phone.advanced { transform: rotateX(5deg) rotateY(0deg) scale(1.05); box-shadow: 0 30px 50px rgba(0,212,255,0.3); border-color: #333; }
.floating-pill { position: absolute; background: rgba(15,15,20,0.8); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 20px; font-size: 10px; color: white; font-weight: 700; box-shadow: 0 10px 20px rgba(0,0,0,0.5); z-index: 3; opacity: 0; transition: opacity 0.4s ease; }
.s-card:hover .floating-pill { opacity: 1; }
.p1 { top: 20%; right: 10px; animation: floatObj 3s ease-in-out infinite; color: #00ff88; border-color: rgba(0,255,136,0.4); box-shadow: 0 0 15px rgba(0,255,136,0.2);}
.p2 { bottom: 30%; left: 10px; animation: floatObj 4s ease-in-out infinite alternate; color: #00d4ff; border-color: rgba(0,212,255,0.4); box-shadow: 0 0 15px rgba(0,212,255,0.2);}
@keyframes floatObj { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
.mp-chart-circle { width: 50px; height: 50px; margin: 10px auto 5px; display: block; }
.circular-chart { display: block; margin: 0 auto; max-width: 100%; max-height: 250px; }
.circle-bg { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 3.8; }
.circle { fill: none; stroke-width: 3.2; stroke-linecap: round; animation: progress 2s ease-out forwards; stroke: var(--cyan); filter: drop-shadow(0 0 4px var(--cyan));}
@keyframes progress { 0% { stroke-dasharray: 0, 100; } }
.percentage { fill: white; font-family: sans-serif; font-size: 9px; text-anchor: middle; font-weight: 800;}
.mp-screen { background: #111; height: 100%; display: flex; flex-direction: column; padding: 16px 8px 8px; gap: 6px; }
.mp-head { font-size: 10px; font-weight: 700; color: white; text-align: center; margin-bottom: 2px; }
.mp-stat { background: rgba(255,255,255,0.05); padding: 5px 6px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.02);}
.mp-st-lab { font-size: 7px; color: rgba(255,255,255,0.6); }
.mp-st-val { font-size: 9px; font-weight: 700; }
.v-rev { color: #00ff88; } .v-usr { color: #7b2fff; }
.mp-nav { margin-top: auto; display: flex; justify-content: space-around; background: rgba(255,255,255,0.05); padding: 4px; border-radius: 4px;}
.mp-nav .dot { width: 4px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 50%; }
.mp-nav .dot.active { background: var(--cyan); box-shadow: 0 0 5px var(--cyan);}

/* 5. Dashboard Mockup */
.mock-dash.advanced {
  width: 95%; height: 90%;
  background: rgba(15, 15, 20, 0.9);
  border: 1px solid rgba(255,170,0,0.3);
  border-radius: 10px;
  display: flex; flex-direction: column; padding: 12px;
  z-index: 1; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.s-card:hover .mock-dash.advanced { transform: translateY(-5px) scale(1.03); box-shadow: 0 20px 50px rgba(255,170,0,0.25); border-color: rgba(255,170,0,0.6);}
.md-header { display: flex; justify-content: space-between; align-items: center; font-size: 9px; color: white; margin-bottom: 12px; font-weight: 600;}
.md-h-left { display: flex; align-items: center; gap: 4px;}
.md-h-right { display: flex; align-items: center; color: rgba(255,255,255,0.5);}
.pulse-dot { display: inline-block; width: 6px; height: 6px; background: #ff0055; border-radius: 50%; margin-left: 6px; box-shadow: 0 0 8px #ff0055; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
.trend { font-size: 8px; margin-left: 2px; }
.md-kpis { display: flex; gap: 6px; margin-bottom: 10px; }
.md-kpi { flex: 1; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 6px; display: flex; flex-direction: column; border: 1px solid rgba(255,255,255,0.05);}
.md-kpi span { font-size: 6px; color: rgba(255,255,255,0.5); margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.5px;}
.md-kpi strong { font-size: 9px; }
.c-g { color: #00ff88; } .c-c { color: #00d4ff; } .c-p { color: #7b2fff; }
.md-chart-area { position: relative; flex-grow: 1; display: flex; align-items: flex-end; margin-top: 10px;}
.md-grid-line { position: absolute; width: 100%; height: 1px; background: rgba(255,255,255,0.05); left: 0; }
.gl-1 { bottom: 33%; } .gl-2 { bottom: 66%; } .gl-3 { top: 0; }
.md-bars { display: flex; width: 100%; height: 100%; align-items: flex-end; gap: 8px; z-index: 2; }
.md-bar { flex: 1; height: 100%; display: flex; align-items: flex-end; }
.md-bar-inner { width: 100%; background: linear-gradient(to top, rgba(255,170,0,0.2), #ffaa00); border-radius: 4px 4px 0 0; animation: barGrow 3s ease infinite alternate; box-shadow: 0 0 15px rgba(255,170,0,0.3); border-top: 2px solid white; transition: height 0.3s;}
.b1 .md-bar-inner { height: 40%; animation-delay: 0s; }
.b2 .md-bar-inner { height: 65%; animation-delay: 0.2s; }
.b3 .md-bar-inner { height: 50%; animation-delay: 0.4s; }
.b4 .md-bar-inner { height: 85%; animation-delay: 0.6s; }
.b5 .md-bar-inner { height: 70%; animation-delay: 0.8s; }
.b6 .md-bar-inner { height: 95%; animation-delay: 1.0s; }
@keyframes barGrow { 0% { height: 10%; } }

/* 6. Pipeline Mockup */
.mock-pipe.advanced {
  width: 95%; height: 60%;
  display: flex; align-items: center; justify-content: space-between; z-index: 1;
}
.mpl-node {
  width: 45px; height: 45px; border-radius: 12px; background: rgba(20,20,30,0.9);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  position: relative; border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 5px 15px rgba(0,0,0,0.5); z-index: 2; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.s-card:hover .mpl-node { transform: translateY(-8px); border-color: rgba(255,255,255,0.4); box-shadow: 0 15px 30px rgba(0,0,0,0.5);}
.n-icon { font-size: 16px; z-index: 2;}
.n-label { position: absolute; top: 52px; font-size: 9px; color: rgba(255,255,255,0.8); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 0 5px rgba(0,0,0,0.5);}
.n-pulse { position: absolute; width: 100%; height: 100%; border-radius: 12px; border: 2px solid; opacity: 0; z-index: 1; }
.n1 .n-pulse { border-color: var(--cyan); animation: nodePulse 2s infinite 0s; }
.n2 .n-pulse { border-color: var(--purple); animation: nodePulse 2s infinite 0.6s; }
.n3 .n-pulse { border-color: #00ff88; animation: nodePulse 2s infinite 1.2s; }
@keyframes nodePulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }
.mpl-line { flex-grow: 1; height: 3px; background: rgba(255,255,255,0.1); position: relative; overflow: hidden; margin: 0 4px; border-radius: 2px; box-shadow: inset 0 0 2px rgba(0,0,0,0.5);}
.mpl-packet { position: absolute; top: 0; left: -20px; width: 30px; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent); box-shadow: 0 0 15px white; border-radius: 50%;}
.p1 { animation: packetTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0s; }
.p2 { animation: packetTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s; }
.p3 { animation: packetTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.6s; }
@keyframes packetTravel { 0% { left: -30px; } 100% { left: 100%; } }

\n`;

const updatedCSS = css.substring(0, startIndex) + newMockupCSS + css.substring(endIndex);
fs.writeFileSync(cssPath, updatedCSS);
console.log('style.css updated successfully with advanced animations.');
