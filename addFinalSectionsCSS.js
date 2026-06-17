const fs = require('fs');

const css = `
/* ════════════════════════════════════════════════════════════
   NEW TECHNOLOGY SECTION
   ════════════════════════════════════════════════════════════ */

.tech-new-section {
  padding: 100px 0;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 768px) { .tech-new-section { padding: 60px 0; } }

/* Header */
.tech-header { text-align: center; margin-bottom: 3rem; display: flex; flex-direction: column; align-items: center;}
.tech-tag {
  font-size: 12px; letter-spacing: 3px; text-transform: uppercase;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  font-weight: 700; display: block; margin-bottom: 0.5rem;
}
.tech-heading { font-size: clamp(36px, 5vw, 56px); font-weight: 800; color: white; margin-bottom: 1rem; }
.tech-sub { color: rgba(255,255,255,0.6); font-size: 18px; max-width: 580px; text-align: center; line-height: 1.6; }

/* Tech Stack Grid */
.tech-grid-container { margin-bottom: 8rem; }
.tech-grid-label { color: rgba(255,255,255,0.6); font-size: 14px; text-align: center; margin-bottom: 32px; }
.tech-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; padding: 0 20px; }
@media (max-width: 1000px) { .tech-grid { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 600px) { .tech-grid { grid-template-columns: repeat(3, 1fr); } }

.t-badge {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px;
  padding: 20px 16px; text-align: center; transition: all 0.3s ease;
}
.t-badge:hover { border-color: rgba(0,212,255,0.4); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,212,255,0.1); }
.tb-icon { font-size: 28px; }
.tb-name { color: white; font-size: 14px; font-weight: 600; margin-top: 10px; }
.tb-cat { color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 4px; }

/* Showcases Common */
.t-showcase-row { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 100px; padding: 0 20px;}
.t-showcase-row.reverse { direction: rtl; }
.t-showcase-row.reverse > * { direction: ltr; }
@media (max-width: 900px) {
  .t-showcase-row, .t-showcase-row.reverse { grid-template-columns: 1fr; gap: 40px; direction: ltr; }
  .t-show-vis { order: -1; }
}

.ts-heading { color: white; font-size: 32px; font-weight: 700; margin-bottom: 16px; }
.ts-desc { color: rgba(255,255,255,0.6); font-size: 16px; line-height: 1.8; margin-bottom: 24px; }
.ts-features { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
.ts-feat { font-size: 14px; color: rgba(255,255,255,0.7); }
.ts-feat strong { color: white; }
.ts-result {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(0,212,255,0.3); border-radius: 12px;
  border-left: 4px solid var(--cyan); padding: 20px 24px; font-size: 14px; color: rgba(255,255,255,0.8);
  display: inline-block; margin-bottom: 24px;
}
.ts-result.blue { border-color: rgba(0,212,255,0.3); border-left-color: var(--cyan); }
.ts-result.purple { border-color: rgba(123,47,255,0.3); border-left-color: var(--purple); }

.ts-tech-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.ts-tech-pills span { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50px; padding: 4px 12px; font-size: 11px; color: rgba(255,255,255,0.6); }

.ts-cta-btn {
  display: inline-block; background: linear-gradient(135deg, var(--cyan), var(--purple)); color: white;
  font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; transition: all 0.3s;
}
.ts-cta-btn:hover { filter: brightness(1.15); box-shadow: 0 0 20px rgba(0,212,255,0.3); }

/* Showcase 1: WA Mock */
.wa-mock {
  width: 360px; max-width: 100%; margin: 0 auto; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  display: flex; flex-direction: column; background: #0d1b0f;
}
.wa-head { background: #075E54; padding: 16px 20px; display: flex; align-items: center; gap: 10px; color: white; }
.wa-back { font-size: 18px; }
.wa-av { width: 40px; height: 40px; border-radius: 50%; background: #25D366; display: flex; justify-content: center; align-items: center; font-size: 20px; }
.wa-info { flex-grow: 1; display: flex; flex-direction: column; }
.wa-info strong { font-size: 16px; font-weight: 600; }
.wa-info span { font-size: 12px; color: #25D366; }
.wa-icons { letter-spacing: 10px; }
.wa-body { padding: 16px; min-height: 320px; display: flex; flex-direction: column; gap: 10px; background-image: url('data:image/svg+xml;utf8,<svg opacity="0.05" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="1" fill="%23fff"/></svg>'); }
.wa-msg { padding: 10px 14px; max-width: 75%; font-size: 13px; color: white; position: relative; }
.wa-msg span { display: block; font-size: 10px; color: rgba(255,255,255,0.5); text-align: right; margin-top: 4px; }
.wa-msg.user { background: #2a5738; align-self: flex-end; border-radius: 12px 12px 0 12px; }
.wa-msg.bot { background: #1a2a1a; align-self: flex-start; border-radius: 12px 12px 12px 0; }
.w-msg-fade { opacity: 0; transform: translateY(20px); transition: all 0.4s; }
.wa-mock.play .w-msg-fade:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
.wa-mock.play .w-msg-fade:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }
.wa-mock.play .w-msg-fade:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 1.0s; }
.wa-mock.play .w-msg-fade:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 1.4s; }

.wa-typing { background: #1a2a1a; align-self: flex-start; border-radius: 12px 12px 12px 0; padding: 12px 16px; display: flex; gap: 4px; opacity: 0; display: none;}
.wa-typing span { width: 6px; height: 6px; background: rgba(255,255,255,0.5); border-radius: 50%; animation: tBounce 1s infinite; }
.wa-typing span:nth-child(2) { animation-delay: 0.2s; } .wa-typing span:nth-child(3) { animation-delay: 0.4s; }
.wa-delayed { opacity: 0; display: none; }
.wa-cta-btn { background: #25D366; color: white; border-radius: 8px; padding: 10px 20px; text-align: center; font-size: 14px; font-weight: 700; opacity: 0; display: none; align-self: center; margin-top: 10px; animation: wPulse 2s infinite; }
@keyframes wPulse { 0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); } 70% { box-shadow: 0 0 0 10px rgba(37,211,102,0); } 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); } }

/* WA logic via CSS animations since JS handles class toggle */
.wa-mock.play .wa-typing { display: flex; animation: showHideTyping 1.5s linear forwards; animation-delay: 2s; }
@keyframes showHideTyping { 0% { opacity: 1; } 99% { opacity: 1; } 100% { opacity: 0; display: none; } }
.wa-mock.play .wa-delayed { display: block; animation: showDelayed 0.4s forwards; animation-delay: 3.5s; }
.wa-mock.play .wa-cta-btn { display: block; animation: showDelayed 0.4s forwards; animation-delay: 4.0s; }
@keyframes showDelayed { to { opacity: 1; } }

.wa-foot { background: #1a2a1a; padding: 12px 16px; display: flex; gap: 10px; align-items: center; }
.wa-input { flex-grow: 1; background: #2a3a2a; border-radius: 20px; padding: 10px 16px; color: rgba(255,255,255,0.4); font-size: 14px; }
.wa-send { width: 40px; height: 40px; border-radius: 50%; background: #25D366; display: flex; justify-content: center; align-items: center; font-size: 16px; }

/* Showcase 2: CB Mock */
.cb-mock {
  width: 340px; max-width: 100%; margin: 0 auto; border-radius: 20px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  display: flex; flex-direction: column; background: #0d0d1a;
}
.cb-head { background: linear-gradient(135deg, var(--cyan), var(--purple)); padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; color: white; }
.cb-info { display: flex; flex-direction: column; }
.cb-info strong { font-size: 16px; font-weight: 600; }
.cb-info span { font-size: 11px; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 4px; }
.cb-dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; }
.cb-close { font-size: 24px; cursor: pointer; }
.cb-body { padding: 16px; min-height: 300px; display: flex; flex-direction: column; gap: 10px; }
.cb-msg { padding: 10px 14px; max-width: 80%; font-size: 13px; color: white; border-radius: 12px; }
.cb-msg.bot { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.2); align-self: flex-start; border-bottom-left-radius: 0; }
.cb-msg.user { background: #2a2a3d; align-self: flex-end; border-bottom-right-radius: 0; }
.c-msg-fade { opacity: 0; transform: translateY(10px); transition: all 0.4s; }
.cb-mock.play .c-msg-fade:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
.cb-mock.play .c-msg-fade:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }
.cb-mock.play .c-msg-fade:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 1.0s; }
.cb-mock.play .c-msg-fade:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 1.4s; }

.cb-delayed { opacity: 0; display: none; }
.cb-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px; opacity: 0; display: none; }
.cb-chips span { border: 1px solid rgba(0,212,255,0.4); color: #00d4ff; background: rgba(0,212,255,0.06); padding: 6px 14px; border-radius: 50px; font-size: 11px; cursor: pointer; }

.cb-mock.play .cb-delayed { display: block; animation: showDelayed 0.4s forwards; animation-delay: 2.5s; }
.cb-mock.play .cb-chips { display: flex; animation: showDelayed 0.4s forwards; animation-delay: 3s; }

.cb-foot { padding: 12px 16px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; gap: 10px; background: #111; }
.cb-input { flex-grow: 1; color: rgba(255,255,255,0.4); font-size: 13px; padding-top: 4px; }
.cb-send { color: var(--cyan); font-size: 16px; }

/* Showcase 3: Pipeline Mock */
.pipe-mock {
  background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 40px; position: relative;
}
.pipe-title { color: white; font-size: 16px; font-weight: 700; margin-bottom: 32px; text-align: center;}
.pipe-stage {
  background: #111; border-radius: 12px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;
  position: relative; z-index: 2; opacity: 0; transform: translateY(10px); transition: all 0.4s;
}
.pipe-stage:nth-of-type(1) { border-left: 3px solid var(--cyan); }
.pipe-stage:nth-of-type(2) { border-left: 3px solid var(--purple); }
.pipe-stage:nth-of-type(3) { border-left: 3px solid var(--cyan); }
.pipe-stage:nth-of-type(4) { border-left: 3px solid var(--purple); }
.pipe-stage:nth-of-type(5) { border-left: 3px solid #00ff88; }
.pipe-mock.play .pipe-stage:nth-of-type(1) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
.pipe-mock.play .pipe-stage:nth-of-type(2) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
.pipe-mock.play .pipe-stage:nth-of-type(3) { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }
.pipe-mock.play .pipe-stage:nth-of-type(4) { opacity: 1; transform: translateY(0); transition-delay: 0.8s; }
.pipe-mock.play .pipe-stage:nth-of-type(5) { opacity: 1; transform: translateY(0); transition-delay: 1.0s; }

.ps-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 18px; }
.ps-icon.cyan-g { background: rgba(0,212,255,0.1); border: 1px solid var(--cyan); box-shadow: 0 0 10px rgba(0,212,255,0.2); }
.ps-icon.purple-g { background: rgba(123,47,255,0.1); border: 1px solid var(--purple); box-shadow: 0 0 10px rgba(123,47,255,0.2); }
.ps-icon.green-g { background: rgba(0,255,136,0.1); border: 1px solid #00ff88; box-shadow: 0 0 10px rgba(0,255,136,0.2); }
.ps-info { flex-grow: 1; display: flex; flex-direction: column; }
.ps-info strong { color: white; font-size: 14px; font-weight: 600; }
.ps-info span { color: rgba(255,255,255,0.5); font-size: 11px; }
.ps-status { font-size: 11px; color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; }
.ps-status.green { color: #00ff88; }

.pipe-conn { height: 30px; border-left: 2px dashed rgba(255,255,255,0.2); margin-left: 35px; position: relative; z-index: 1; }
.pipe-dot { position: absolute; top: 0; left: -5px; width: 8px; height: 8px; border-radius: 50%; background: white; box-shadow: 0 0 8px white; opacity: 0; }

.pipe-mock.play .pipe-conn:nth-of-type(1) .pipe-dot { animation: dropDot 4s infinite linear; animation-delay: 1.5s; }
.pipe-mock.play .pipe-conn:nth-of-type(2) .pipe-dot { animation: dropDot 4s infinite linear; animation-delay: 2.5s; }
.pipe-mock.play .pipe-conn:nth-of-type(3) .pipe-dot { animation: dropDot 4s infinite linear; animation-delay: 3.5s; }
.pipe-mock.play .pipe-conn:nth-of-type(4) .pipe-dot { animation: dropDot 4s infinite linear; animation-delay: 4.5s; }

@keyframes dropDot { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }

/* ════════════════════════════════════════════════════════════
   NEW PORTFOLIO SECTION
   ════════════════════════════════════════════════════════════ */

.port-new-section { padding: 100px 0; max-width: 1200px; margin: 0 auto; position: relative;}
@media (max-width: 768px) { .port-new-section { padding: 60px 0; } }

/* Filter Tabs */
.port-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 48px; padding: 0 20px;}
.p-tab {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 50px;
  padding: 10px 24px; font-size: 14px; color: rgba(255,255,255,0.6); cursor: pointer; transition: all 0.3s;
}
.p-tab:hover { border-color: rgba(0,212,255,0.3); color: white; }
.p-tab.active { background: linear-gradient(135deg, var(--cyan), var(--purple)); color: white; font-weight: 600; border-color: transparent; box-shadow: 0 4px 20px rgba(0,212,255,0.3); }

/* Project Cards Grid */
.port-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 0 20px; margin-bottom: 64px; }
@media (max-width: 900px) { .port-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .port-grid { grid-template-columns: 1fr; } }

.p-card {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden;
  transition: all 0.4s ease; cursor: pointer; display: flex; flex-direction: column;
}
.p-card.hidden { display: none; opacity: 0; scale: 0.95; }
.p-card:hover { transform: translateY(-8px); border-color: rgba(0,212,255,0.3); box-shadow: 0 24px 80px rgba(0,0,0,0.4); }

.pc-vis { height: 200px; position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; transition: transform 0.4s; }
.p-card:hover .pc-vis { transform: scale(1.05); }

.pc-cat-badge { position: absolute; top: 12px; left: 12px; background: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2); color: white; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 50px; z-index: 2;}
.pc-res-badge { position: absolute; top: 12px; right: 12px; background: rgba(0,212,255,0.15); border: 1px solid rgba(0,212,255,0.4); color: var(--cyan); font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 50px; z-index: 2;}

/* Mockups inside pc-vis */
.pc-mock-browser { width: 80%; height: 70%; background: rgba(0,0,0,0.5); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column;}
.pmb-h { height: 16px; background: rgba(255,255,255,0.05); display: flex; align-items: center; padding: 0 6px; gap: 4px; }
.pmb-h span { width: 6px; height: 6px; border-radius: 50%; } .pmb-h .r{background:#ff5f56;} .pmb-h .y{background:#ffbd2e;} .pmb-h .g{background:#27c93f;}
.pmb-b { padding: 8px; display: flex; flex-direction: column; gap: 6px; flex-grow: 1;}
.pmb-nav { height: 8px; background: rgba(255,255,255,0.1); border-radius: 2px; }
.pmb-hero { height: 30px; background: rgba(0,212,255,0.2); border-radius: 4px; }
.pmb-row { display: flex; gap: 6px; flex-grow: 1; }
.pmb-col { flex: 1; background: rgba(255,255,255,0.05); border-radius: 4px; }
.pmb-food { flex: 1; background: #ff5f5633; border-radius: 4px; }

.pc-mock-wa { width: 50%; height: 80%; background: #075E54; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; padding: 8px; gap: 6px; }
.pmw-msg { font-size: 8px; padding: 4px 6px; border-radius: 6px; color: white; width: fit-content; }
.pmw-msg.u { background: #2a5738; align-self: flex-end; }
.pmw-msg.b { background: #1a2a1a; align-self: flex-start; }

.pc-mock-dash { width: 80%; height: 70%; background: rgba(0,0,0,0.5); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; padding: 8px; gap: 8px; }
.pmd-top { display: flex; gap: 6px; }
.pmd-kpi { flex: 1; height: 24px; background: rgba(255,255,255,0.1); border-radius: 4px; }
.pmd-bot { display: flex; gap: 4px; align-items: flex-end; flex-grow: 1; border-bottom: 1px solid rgba(255,255,255,0.1); }
.pmd-bar { flex: 1; background: linear-gradient(to top, var(--cyan), var(--purple)); border-radius: 2px; height: 60%; }
.pmd-bar:nth-child(2) { height: 80%; } .pmd-bar:nth-child(3) { height: 50%; } .pmd-bar:nth-child(4) { height: 90%; }

.pc-mock-phone { width: 35%; height: 90%; background: rgba(0,0,0,0.8); border-radius: 12px; border: 2px solid rgba(255,255,255,0.1); position: relative; display: flex; flex-direction: column; padding: 12px 6px 6px; gap: 6px; }
.pmp-notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 20px; height: 6px; background: rgba(255,255,255,0.1); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
.pmp-map { height: 50%; background: rgba(0,212,255,0.1); border-radius: 4px; display: flex; justify-content: center; align-items: center; font-size: 16px; }
.pmp-list { flex-grow: 1; display: flex; flex-direction: column; gap: 4px; }
.pmp-li { flex: 1; background: rgba(255,255,255,0.1); border-radius: 2px; }

.pc-mock-crm { width: 80%; height: 70%; background: rgba(0,0,0,0.5); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; padding: 8px; gap: 8px; }
.pmc-prof { display: flex; gap: 8px; align-items: center; }
.pmc-av { width: 20px; height: 20px; background: rgba(255,255,255,0.2); border-radius: 50%; }
.pmc-lines { display: flex; flex-direction: column; gap: 4px; flex-grow: 1; }
.pl1 { height: 4px; width: 60%; background: rgba(255,255,255,0.3); } .pl2 { height: 4px; width: 40%; background: rgba(255,255,255,0.1); }
.pmc-slots { display: flex; gap: 6px; }
.pms { flex: 1; height: 16px; background: rgba(0,212,255,0.2); border-radius: 2px; }

/* PC Content */
.pc-content { padding: 24px; flex-grow: 1; display: flex; flex-direction: column; }
.pc-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.pc-tech span { font-size: 11px; color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 50px; }
.pc-title { color: white; font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.pc-desc { color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6; margin-bottom: 16px; flex-grow: 1; }
.pc-highlight { color: var(--cyan); font-weight: 700; font-size: 14px; margin-bottom: 16px; }
.pc-link { color: var(--cyan); font-size: 14px; font-weight: 600; text-decoration: none; transition: opacity 0.3s; margin-top: auto; }
.pc-link:hover { opacity: 0.8; }

/* Port CTA */
.port-cta-block { text-align: center; margin-top: 64px; }
.pcb-title { color: white; font-size: 24px; font-weight: 700; margin-bottom: 8px; }
.pcb-sub { color: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 24px; }
.pcb-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }


/* ════════════════════════════════════════════════════════════
   NEW TESTIMONIALS SECTION
   ════════════════════════════════════════════════════════════ */
.test-new-section { padding: 100px 0; max-width: 1200px; margin: 0 auto; overflow: hidden;}
@media (max-width: 768px) { .test-new-section { padding: 60px 0; } }

.test-summary { display: flex; justify-content: center; align-items: center; gap: 32px; flex-wrap: wrap; margin-bottom: 64px; }
.tsum-item { color: rgba(255,255,255,0.8); font-size: 15px; font-weight: 500; }
.tsum-sep { width: 1px; height: 16px; background: rgba(255,255,255,0.15); }
@media (max-width: 600px) { .tsum-sep { display: none; } .test-summary { gap: 16px; flex-direction: column; } }

.test-marquee-wrap { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; overflow: hidden; mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); }
.test-track { display: flex; width: max-content; margin-bottom: 24px; }
.test-inner { display: flex; gap: 24px; }

.test-track.left .test-inner { animation: scrollLeft 35s linear infinite; }
.test-track.right .test-inner { animation: scrollRight 35s linear infinite; }
.test-track:hover .test-inner { animation-play-state: paused; }

@keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

.test-card {
  width: 400px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
  padding: 32px; flex-shrink: 0; display: flex; flex-direction: column;
}
@media (max-width: 600px) { .test-card { width: 300px; padding: 24px; } }
.tc-stars { margin-bottom: 16px; letter-spacing: 2px; }
.tc-text { color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.6; font-style: italic; margin-bottom: 24px; flex-grow: 1; }
.tc-author strong { display: block; color: white; font-size: 16px; font-weight: 700; margin-bottom: 4px; }
.tc-author span { display: block; color: var(--cyan); font-size: 13px; }

/* ════════════════════════════════════════════════════════════
   NEW CONTACT & FOOTER SECTION
   ════════════════════════════════════════════════════════════ */
.contact-new-section { padding: 100px 0 60px; max-width: 1200px; margin: 0 auto; }
@media (max-width: 768px) { .contact-new-section { padding: 60px 0 40px; } }

.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; padding: 0 20px; }
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }

.c-info-item { display: flex; gap: 16px; margin-bottom: 24px; align-items: flex-start; }
.cii-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); display: flex; justify-content: center; align-items: center; font-size: 20px; }
.cii-text { display: flex; flex-direction: column; }
.cii-text strong { color: white; font-size: 16px; margin-bottom: 4px; }
.cii-text a, .cii-text { color: rgba(255,255,255,0.6); font-size: 15px; text-decoration: none; line-height: 1.5; transition: color 0.3s; }
.cii-text a:hover { color: var(--cyan); }

.c-form { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 40px; border-radius: 20px; }
@media (max-width: 600px) { .c-form { padding: 24px; } }
.c-input-grp { margin-bottom: 20px; display: flex; flex-direction: column; }
.c-input-grp label { color: white; font-size: 14px; font-weight: 600; margin-bottom: 8px; }
.c-input-grp input, .c-input-grp select, .c-input-grp textarea {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 16px;
  color: white; font-family: inherit; font-size: 15px; transition: border-color 0.3s; outline: none;
}
.c-input-grp input:focus, .c-input-grp select:focus, .c-input-grp textarea:focus { border-color: var(--cyan); }
.c-input-grp select option { background: #111; }

.new-footer { border-top: 1px solid rgba(255,255,255,0.05); padding: 40px 0; margin-top: 40px; }
.foot-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 0 20px; }
.foot-logo { font-size: 20px; font-weight: 800; color: white; }
.foot-links { display: flex; gap: 24px; flex-wrap: wrap;}
.foot-links a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: color 0.3s; }
.foot-links a:hover { color: white; }
.foot-copy { color: rgba(255,255,255,0.4); font-size: 13px; }
@media (max-width: 600px) { .foot-inner { flex-direction: column; text-align: center; justify-content: center; } }
`;

fs.appendFileSync('style.css', css);
console.log('CSS appended to style.css for final sections');
