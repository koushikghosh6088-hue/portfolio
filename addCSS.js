const fs = require('fs');

const css = `
/* ════════════════════════════════════════════════════════════
   NEW SERVICES SECTION (3-COLUMN GRID & CSS MOCKUPS)
   ════════════════════════════════════════════════════════════ */

.services-new-section {
  padding: 100px 0;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .services-new-section { padding: 60px 0; }
}

/* Header */
.s-header { text-align: center; margin-bottom: 2rem; }
.s-tag {
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}
.s-heading {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}
.s-sub {
  color: rgba(255,255,255,0.6);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Marquee Pill Strip */
.s-marquee-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}
.s-marquee-label {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  flex-shrink: 0;
  padding-left: 20px;
  z-index: 2;
  background: var(--bg); /* To cover scrolling pills behind it */
}
.s-marquee-track {
  overflow: hidden;
  position: relative;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}
.s-marquee-inner {
  display: inline-flex;
  gap: 1rem;
  animation: scrollMarquee 20s linear infinite;
}
.s-marquee-wrap:hover .s-marquee-inner {
  animation-play-state: paused;
}
@keyframes scrollMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Scrolls exactly half its width */
}
.s-pill {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  flex-shrink: 0;
}

/* Services Grid */
.s-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 20px;
  margin-bottom: 4rem;
}
@media (max-width: 1199px) { .s-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .s-grid { grid-template-columns: 1fr; } }

/* Cards */
.s-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.4s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(30px);
}
.s-card.visible {
  opacity: 1;
  transform: translateY(0);
}
.s-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--purple));
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.s-card:hover {
  border-color: rgba(0,212,255,0.4);
  box-shadow: 0 20px 60px rgba(0,212,255,0.1);
  transform: translateY(-6px);
}
.s-card:hover::before { opacity: 1; }
@media (max-width: 768px) {
  .s-card { padding: 24px; }
}

/* Card Contents */
.s-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
.s-icon-badge {
  width: 56px; height: 56px;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
  font-size: 24px;
  box-shadow: 0 0 20px rgba(0,212,255,0.3);
}
.s-label-pill {
  font-size: 10px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
}
.p-blue { background: rgba(0,212,255,0.15); color: #00d4ff; border: 1px solid rgba(0,212,255,0.3); }
.p-purple { background: rgba(123,47,255,0.15); color: #7b2fff; border: 1px solid rgba(123,47,255,0.3); }
.p-green { background: rgba(0,255,100,0.1); color: #00ff88; border: 1px solid rgba(0,255,100,0.3); }
.p-orange { background: rgba(255,165,0,0.1); color: #ffaa00; border: 1px solid rgba(255,165,0,0.3); }

.s-title { color: white; font-size: 22px; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3; }
.s-desc { color: rgba(255,255,255,0.6); font-size: 15px; line-height: 1.7; margin-bottom: 1rem; }
.s-features { list-style: none; padding: 0; margin: 0 0 1rem 0; flex-grow: 1; }
.s-features li { color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;}
.s-check { color: var(--cyan); font-size: 12px; }
.s-ideal { font-size: 12px; color: rgba(0,212,255,0.7); margin-bottom: 1.5rem; font-style: italic; }

.s-mockup-container {
  height: 200px;
  background: rgba(0,0,0,0.3);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.05);
}

.s-cta-btn {
  display: block;
  text-align: center;
  width: 100%;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  color: white;
  font-weight: 700;
  border-radius: 8px;
  padding: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
}
.s-cta-btn:hover {
  filter: brightness(1.15);
  transform: scale(1.02);
}

/* =========================================
   MOCKUP CSS
   ========================================= */

/* 1. Browser Mockup */
.mock-browser {
  width: 90%; height: 85%;
  background: #111;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column;
  overflow: hidden;
  transition: transform 0.4s ease;
  position: relative;
}
.s-card:hover .mock-browser { transform: translateY(-10px); }
.mb-header { background: #222; height: 24px; display: flex; align-items: center; padding: 0 10px; gap: 10px; }
.mb-dots { display: flex; gap: 4px; }
.mb-dots span { width: 8px; height: 8px; border-radius: 50%; }
.mb-dots .r { background: #ff5f56; } .mb-dots .y { background: #ffbd2e; } .mb-dots .g { background: #27c93f; }
.mb-url { background: #111; color: #666; font-size: 8px; padding: 2px 10px; border-radius: 4px; flex-grow: 1; text-align: center; margin: 0 20px;}
.mb-body { flex-grow: 1; padding: 10px; position: relative; }
.mb-nav { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 10px; }
.mb-hero { width: 100%; height: 40px; background: rgba(0,212,255,0.1); border-radius: 6px; margin-bottom: 10px; }
.mb-cards { display: flex; gap: 10px; }
.mbc { flex: 1; height: 30px; background: rgba(255,255,255,0.05); border-radius: 4px; }
.mock-browser::after {
  content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 20px;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,212,255,0.1), rgba(255,255,255,0));
  animation: scanBrowser 3s linear infinite;
  pointer-events: none;
}
@keyframes scanBrowser { 0% { top: -20px; } 100% { top: 100%; } }

/* 2. Chatbot Mockup */
.mock-chat {
  width: 90%; height: 90%;
  background: #15151f;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column;
}
.mc-header { background: #1f1f2e; padding: 8px 12px; font-size: 10px; display: flex; justify-content: space-between; align-items: center; color: white; border-bottom: 1px solid rgba(255,255,255,0.05); }
.mc-dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 5px #00ff88; }
.mc-body { padding: 10px; display: flex; flex-direction: column; gap: 8px; flex-grow: 1; }
.mc-msg { padding: 6px 10px; border-radius: 10px; font-size: 9px; max-width: 80%; opacity: 0; animation: msgFade 0.4s forwards; }
.mc-user { background: #2a2a3d; color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
.mc-bot { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.2); color: white; align-self: flex-start; border-bottom-left-radius: 2px; }
.m1 { animation-delay: 0.2s; }
.m2 { animation-delay: 1.0s; }
.m3 { animation-delay: 1.8s; }
.m4 { animation-delay: 2.6s; opacity: 1; }
@keyframes msgFade { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
.mc-typing { display: flex; gap: 3px; background: rgba(255,255,255,0.05); padding: 8px 10px; border-radius: 10px; align-self: flex-start; width: max-content; border-bottom-left-radius: 2px; }
.td { width: 4px; height: 4px; background: rgba(255,255,255,0.5); border-radius: 50%; animation: tBounce 1s infinite; }
.td:nth-child(2) { animation-delay: 0.2s; } .td:nth-child(3) { animation-delay: 0.4s; }
@keyframes tBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

/* 3. WhatsApp Mockup */
.mock-wa {
  width: 80%; height: 90%;
  background: #0a1a0a;
  border-radius: 12px;
  border: 1px solid rgba(37,211,102,0.3);
  display: flex; flex-direction: column; overflow: hidden;
}
.mw-header { background: #075e54; padding: 10px; font-size: 11px; display: flex; justify-content: space-between; align-items: center; color: white; }
.mw-dot { width: 6px; height: 6px; background: #25d366; border-radius: 50%; }
.mw-body { padding: 10px; display: flex; flex-direction: column; gap: 6px; background-image: url('data:image/svg+xml;utf8,<svg opacity="0.05" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="1" fill="%23fff"/></svg>'); }
.mw-msg { padding: 6px 8px; border-radius: 6px; font-size: 9px; max-width: 85%; position: relative; }
.mw-bot { background: #054c44; color: white; align-self: flex-start; border-top-left-radius: 0; }
.mw-user { background: #128c7e; color: white; align-self: flex-end; border-top-right-radius: 0; }
.mw-time { font-size: 6px; color: rgba(255,255,255,0.5); float: right; margin-left: 10px; margin-top: 4px; }
.mw-new { opacity: 0; animation: mwFadeLoop 3s infinite; }
@keyframes mwFadeLoop { 0%, 20% { opacity: 0; transform: translateY(10px); } 40%, 80% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; } }

/* 4. Phone Mockup */
.mock-phone {
  width: 100px; height: 180px;
  background: #000;
  border: 3px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  position: relative;
  transition: transform 0.3s ease;
  overflow: hidden;
}
.s-card:hover .mock-phone { transform: rotate3d(1, 1, 0, 15deg); }
.mp-notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 40px; height: 10px; background: #000; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; z-index: 10; border: 1px solid rgba(255,255,255,0.1); border-top: none;}
.mp-screen { background: #111; height: 100%; display: flex; flex-direction: column; padding: 16px 8px 8px; gap: 6px; }
.mp-head { font-size: 10px; font-weight: 700; color: white; text-align: center; margin-bottom: 4px; }
.mp-stat { background: rgba(255,255,255,0.05); padding: 6px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }
.mp-st-lab { font-size: 7px; color: rgba(255,255,255,0.6); }
.mp-st-val { font-size: 9px; font-weight: 700; }
.v-rev { color: #00ff88; } .v-ord { color: #00d4ff; } .v-usr { color: #7b2fff; }
.mp-nav { margin-top: auto; display: flex; justify-content: space-around; background: rgba(255,255,255,0.05); padding: 4px; border-radius: 4px;}
.mp-nav .dot { width: 4px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 50%; }

/* 5. Dashboard Mockup */
.mock-dash {
  width: 90%; height: 85%;
  background: #111;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  display: flex; flex-direction: column; padding: 10px;
}
.md-header { display: flex; justify-content: space-between; font-size: 9px; color: white; margin-bottom: 10px; }
.md-kpis { display: flex; gap: 6px; margin-bottom: 15px; }
.md-kpi { flex: 1; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; display: flex; flex-direction: column; }
.md-kpi span { font-size: 6px; color: rgba(255,255,255,0.6); margin-bottom: 2px;}
.md-kpi strong { font-size: 8px; }
.c-g { color: #00ff88; } .c-c { color: #00d4ff; } .c-p { color: #7b2fff; }
.md-chart { flex-grow: 1; display: flex; align-items: flex-end; gap: 4px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 2px; }
.md-bar { flex: 1; background: linear-gradient(to top, var(--cyan), var(--purple)); border-radius: 2px; height: 0; transition: height 1s ease-out; position: relative; }
.md-bar::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: rgba(255,255,255,0.8); border-radius: 2px; box-shadow: 0 0 5px white; }
.mock-dash.animate .md-bar { height: var(--h); }
.md-label { text-align: center; font-size: 6px; color: rgba(255,255,255,0.4); margin-top: 4px; }

/* 6. Pipeline Mockup */
.mock-pipe {
  width: 90%; height: 60%;
  display: flex; align-items: center; justify-content: space-between;
}
.mpl-node {
  width: 40px; height: 40px; border-radius: 8px; background: #111;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-size: 14px; text-align: center; z-index: 2; position: relative;
}
.mpl-node::after { content: ""; position: absolute; top: 100%; width: 100%; text-align: center; font-size: 7px; color: rgba(255,255,255,0.6); margin-top: 4px;}
.n1 { border: 1px solid rgba(0,212,255,0.5); box-shadow: 0 0 10px rgba(0,212,255,0.2); }
.n2 { border: 1px solid rgba(123,47,255,0.5); box-shadow: 0 0 10px rgba(123,47,255,0.2); }
.n3 { border: 1px solid rgba(0,212,255,0.5); box-shadow: 0 0 10px rgba(0,212,255,0.2); }
.n4 { border: 1px solid rgba(0,255,100,0.5); box-shadow: 0 0 10px rgba(0,255,100,0.2); }
.mpl-line { flex-grow: 1; height: 2px; border-top: 1px dashed rgba(255,255,255,0.2); position: relative; margin: 0 4px; }
.mpl-dot { position: absolute; top: -3px; left: 0; width: 6px; height: 6px; border-radius: 50%; background: white; box-shadow: 0 0 6px white; animation: pipeTravel 2s linear infinite; }
.l1 .mpl-dot { animation-delay: 0s; }
.l2 .mpl-dot { animation-delay: 0.6s; }
.l3 .mpl-dot { animation-delay: 1.2s; }
@keyframes pipeTravel { 0% { left: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 100%; opacity: 0; } }


/* Bottom CTA Strip */
.s-bottom-cta {
  background: linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,255,0.05));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 0 20px;
  opacity: 0;
  transform: translateY(30px);
}
.s-bottom-cta.visible { opacity: 1; transform: translateY(0); transition: all 0.5s ease; }
.s-cta-left { max-width: 60%; }
.s-cta-left h3 { font-size: 28px; color: white; margin-bottom: 0.5rem; }
.s-cta-left p { color: rgba(255,255,255,0.6); line-height: 1.6; }
.s-cta-right { display: flex; gap: 1rem; }
.s-btn-primary, .s-btn-wa { padding: 14px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; transition: all 0.3s; text-align: center; }
.s-btn-primary { background: linear-gradient(135deg, var(--cyan), var(--purple)); color: white; }
.s-btn-primary:hover { filter: brightness(1.15); box-shadow: 0 0 20px rgba(0,212,255,0.3); }
.s-btn-wa { border: 2px solid #25D366; color: #25D366; background: transparent; }
.s-btn-wa:hover { background: rgba(37,211,102,0.1); }
@media (max-width: 900px) {
  .s-bottom-cta { flex-direction: column; text-align: center; padding: 32px; }
  .s-cta-left { max-width: 100%; }
  .s-cta-right { flex-direction: column; width: 100%; }
  .s-btn-primary, .s-btn-wa { width: 100%; }
}
`;

fs.appendFileSync('style.css', css);
console.log('CSS appended to style.css');
