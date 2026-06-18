const fs = require('fs');

const cssPath = 'style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const startMarker = '/* =========================================\n   ADVANCED MOCKUP CSS & ANIMATIONS\n   ========================================= */';
const endMarker = '/* Bottom CTA Strip */';

let startIndex = css.indexOf(startMarker);
let endIndex = css.indexOf(endMarker);

if (startIndex === -1) {
    startIndex = css.indexOf('/* =========================================\n   MOCKUP CSS\n   ========================================= */');
}

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

/* 1. Browser Mockup (Redesigned with interactive building animation) */
.mock-browser.redesigned {
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
  position: relative;
}
.s-card:hover .mock-browser.redesigned { transform: scale(1.05) translateY(-10px); border-color: rgba(0,212,255,0.4); box-shadow: 0 20px 40px rgba(0,212,255,0.2);}
.mb-header { background: rgba(0,0,0,0.4); height: 24px; display: flex; align-items: center; padding: 0 10px; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.mb-dots { display: flex; gap: 4px; }
.mb-dots span { width: 8px; height: 8px; border-radius: 50%; }
.mb-dots .r { background: #ff5f56; } .mb-dots .y { background: #ffbd2e; } .mb-dots .g { background: #27c93f; }
.mb-url { background: rgba(255,255,255,0.05); color: #888; font-size: 8px; padding: 2px 10px; border-radius: 12px; flex-grow: 1; text-align: center; margin: 0 20px; display: flex; align-items: center; justify-content: center; gap: 4px;}

.mb-body { flex-grow: 1; padding: 10px; position: relative; }
.mb-build-area {
  position: relative;
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 6px;
}
.mb-wire-nav, .mb-wire-hero, .mb-wire-btn, .mb-wg-card {
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.02);
  opacity: 0.1;
}
.mb-wire-nav { height: 8px; width: 100%; }
.mb-wire-hero { height: 40px; display: flex; gap: 6px; padding: 4px; }
.mb-wh-img { width: 30px; height: 100%; background: rgba(0,212,255,0.2); border-radius: 2px;}
.mb-wh-text { flex-grow: 1; display: flex; flex-direction: column; gap: 4px; justify-content: center;}
.wh-t1 { width: 100%; height: 4px; background: rgba(255,255,255,0.4); border-radius: 2px;}
.wh-t2 { width: 60%; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px;}
.mb-wire-btn { width: 40px; height: 12px; background: var(--cyan); border-radius: 6px; margin: 4px auto; box-shadow: 0 0 10px rgba(0,212,255,0.5);}
.mb-wire-grid { display: flex; gap: 6px; flex-grow: 1;}
.mb-wg-card { flex: 1; height: 100%; }

.mb-cursor {
  position: absolute;
  width: 18px; height: 18px;
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  animation: cursorAnim 6s infinite;
}
.mb-click-ripple {
  position: absolute;
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  left: 50%; top: 62px;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  animation: rippleAnim 6s infinite;
}

@keyframes cursorAnim {
  0% { top: 110%; left: 80%; transform: scale(1); }
  20% { top: 58px; left: 50%; transform: scale(1); }
  25% { top: 58px; left: 50%; transform: scale(0.8); } /* Click down */
  30% { top: 58px; left: 50%; transform: scale(1); } /* Click release */
  50%, 100% { top: 58px; left: 50%; transform: scale(1); }
}
@keyframes rippleAnim {
  0%, 24% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  25% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
  35% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}

.mb-wire-nav { animation: buildAnim 6s infinite 0.5s; }
.mb-wire-hero { animation: buildAnim 6s infinite 0.8s; }
.mb-wire-btn { animation: btnPulse 6s infinite 1.2s; }
.mb-wg-card:nth-child(1) { animation: buildAnim2 6s infinite 2.0s; }
.mb-wg-card:nth-child(2) { animation: buildAnim2 6s infinite 2.2s; }
.mb-wg-card:nth-child(3) { animation: buildAnim2 6s infinite 2.4s; }

@keyframes buildAnim {
  0%, 25% { opacity: 0.1; transform: translateY(5px); }
  35%, 90% { opacity: 1; transform: translateY(0); border-color: rgba(255,255,255,0.2); }
  100% { opacity: 0.1; transform: translateY(5px); }
}
@keyframes buildAnim2 {
  0%, 30% { opacity: 0; transform: translateY(10px) scale(0.9); }
  40%, 90% { opacity: 1; transform: translateY(0) scale(1); background: rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.3);}
  100% { opacity: 0; transform: translateY(10px) scale(0.9); }
}
@keyframes btnPulse {
  0%, 25% { opacity: 0.5; box-shadow: none; }
  35%, 90% { opacity: 1; box-shadow: 0 0 10px rgba(0,212,255,0.6); }
  100% { opacity: 0.5; box-shadow: none; }
}

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
.mc-dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 5px #00ff88; }
.mc-body { padding: 10px; display: flex; flex-direction: column; gap: 8px; flex-grow: 1; }
.mc-msg { padding: 8px 12px; border-radius: 12px; font-size: 9.5px; max-width: 85%; opacity: 0; animation: chatFlow 6s infinite; line-height: 1.4; position: relative;}
.mc-user { background: rgba(255,255,255,0.1); color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
.mc-bot { background: linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,255,0.15)); border: 1px solid rgba(123,47,255,0.3); color: white; align-self: flex-start; border-bottom-left-radius: 2px; display: flex; gap: 6px; align-items: flex-start; box-shadow: 0 5px 15px rgba(123,47,255,0.15);}
.mc-bot-icon { font-size: 10px; }
.m1 { animation-delay: 0.5s; }
.m2 { animation-delay: 2.5s; }
.m3 { animation-delay: 1.5s; animation: chatTyping 6s infinite; background: rgba(255,255,255,0.05); align-self: flex-start; border-bottom-left-radius: 2px; width: max-content; padding: 6px 10px;}
.td { width: 4px; height: 4px; background: rgba(255,255,255,0.5); border-radius: 50%; animation: tBounce 1s infinite; display: inline-block; margin: 0 1px;}
.td:nth-child(2) { animation-delay: 0.2s; } .td:nth-child(3) { animation-delay: 0.4s; }
@keyframes tBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
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
.mw-time { font-size: 6px; color: rgba(255,255,255,0.5); float: right; margin-left: 10px; margin-top: 4px; }
@keyframes waFlow {
  0%, 5% { opacity: 0; transform: translateY(15px); }
  10%, 90% { opacity: 1; transform: translateY(0); }
  95%, 100% { opacity: 0; transform: translateY(-10px); }
}

/* 4. Phone Mockup & 3D Environment (Redesigned out-of-bounds 3D) */
.mock-3d-wrap { perspective: 1200px; transform-style: preserve-3d; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; position: relative;}
.mock-phone-sys {
  position: relative;
  transform-style: preserve-3d;
  animation: phoneFloat3D 8s ease-in-out infinite;
  z-index: 2;
}
.s-card:hover .mock-phone-sys { animation-play-state: paused; transform: rotateX(15deg) rotateY(20deg) scale(1.1); }
@keyframes phoneFloat3D {
  0%, 100% { transform: rotateX(25deg) rotateY(-25deg) rotateZ(5deg); }
  50% { transform: rotateX(15deg) rotateY(-10deg) rotateZ(0deg) translateY(-10px); }
}

.mock-phone.redesigned {
  width: 115px; height: 210px;
  background: #000;
  border: 4px solid #222;
  border-radius: 20px;
  position: relative;
  box-shadow: -15px 25px 40px rgba(0,0,0,0.6), inset 0 0 15px rgba(255,255,255,0.1);
  transform-style: preserve-3d;
  transition: box-shadow 0.6s ease;
}
.mp-notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 45px; height: 12px; background: #000; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; z-index: 10; border: 1px solid rgba(255,255,255,0.1); border-top: none;}
.mp-screen { background: #0b0c10; height: 100%; display: flex; flex-direction: column; padding: 14px 8px; gap: 8px; overflow: hidden; position: relative; border-radius: 14px;}
.mp-app-header { display: flex; justify-content: space-between; align-items: center; }
.mp-h-logo { width: 16px; height: 16px; background: linear-gradient(135deg, var(--cyan), var(--purple)); border-radius: 4px;}
.mp-h-profile { width: 16px; height: 16px; background: rgba(255,255,255,0.2); border-radius: 50%;}

.mp-card-stack { position: relative; height: 80px; margin-top: 5px;}
.mp-stack-card { position: absolute; width: 100%; height: 60px; border-radius: 8px; padding: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.4); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);}
.c1 { background: linear-gradient(135deg, #1f1c2c, #928DAB); top: 0; z-index: 3; border: 1px solid rgba(255,255,255,0.2); animation: c1Anim 4s infinite alternate;}
.c2 { background: linear-gradient(135deg, #232526, #414345); top: -8px; transform: scale(0.9); z-index: 2; opacity: 0.8; animation: c2Anim 4s infinite alternate;}
.c3 { background: linear-gradient(135deg, #0f2027, #203a43); top: -16px; transform: scale(0.8); z-index: 1; opacity: 0.6; animation: c3Anim 4s infinite alternate;}
@keyframes c1Anim { 0% { top: 0; } 100% { top: 5px; } }
@keyframes c2Anim { 0% { top: -8px; } 100% { top: -2px; } }
@keyframes c3Anim { 0% { top: -16px; } 100% { top: -9px; } }
.mp-c-title { font-size: 7px; color: rgba(255,255,255,0.6); margin-bottom: 2px;}
.mp-c-val { font-size: 14px; font-weight: 800; color: white;}

.mp-bottom-cards { display: flex; gap: 6px; margin-top: auto;}
.mp-bc { flex: 1; background: rgba(255,255,255,0.05); border-radius: 6px; padding: 8px; display: flex; flex-direction: column; gap: 4px; border: 1px solid rgba(255,255,255,0.02);}
.mp-bc-icon { width: 12px; height: 12px; border-radius: 3px;}
.c-cyan { background: var(--cyan); box-shadow: 0 0 5px var(--cyan);}
.c-purple { background: var(--purple); box-shadow: 0 0 5px var(--purple);}
.mp-bc-line { width: 100%; height: 2px; background: rgba(255,255,255,0.2); border-radius: 1px;}

/* 3D layers projecting out of the phone */
.mp-3d-layer {
  position: absolute;
  background: rgba(15,15,20,0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 6px 10px;
  display: flex; align-items: center; gap: 6px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  color: white; font-size: 8px; font-weight: 600;
  white-space: nowrap;
  transform-style: preserve-3d;
}
.l1 {
  top: 25%; right: -30px;
  transform: translateZ(50px);
  animation: floatLayer1 4s ease-in-out infinite;
  border-color: rgba(255,170,0,0.4);
  box-shadow: 0 5px 15px rgba(255,170,0,0.15);
}
.l2 {
  bottom: 25%; left: -40px;
  transform: translateZ(70px);
  animation: floatLayer2 5s ease-in-out infinite alternate;
  border-color: rgba(0,255,136,0.4);
  box-shadow: 0 5px 15px rgba(0,255,136,0.15);
}
.l-icon { font-size: 10px; }
@keyframes floatLayer1 {
  0%, 100% { transform: translateZ(50px) translateY(0); }
  50% { transform: translateZ(50px) translateY(-10px); }
}
@keyframes floatLayer2 {
  0%, 100% { transform: translateZ(70px) translateY(0); }
  50% { transform: translateZ(70px) translateY(-15px); }
}

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
.mb-b1 .md-bar-inner { height: 40%; animation-delay: 0s; }
.mb-b2 .md-bar-inner { height: 65%; animation-delay: 0.2s; }
.mb-b3 .md-bar-inner { height: 50%; animation-delay: 0.4s; }
.mb-b4 .md-bar-inner { height: 85%; animation-delay: 0.6s; }
.mb-b5 .md-bar-inner { height: 70%; animation-delay: 0.8s; }
.mb-b6 .md-bar-inner { height: 95%; animation-delay: 1.0s; }
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
