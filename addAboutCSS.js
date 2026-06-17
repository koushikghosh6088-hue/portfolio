const fs = require('fs');

const css = `
/* ════════════════════════════════════════════════════════════
   NEW ABOUT US SECTION
   ════════════════════════════════════════════════════════════ */

.about-new-section {
  padding: 100px 0;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .about-new-section { padding: 60px 0; }
}

/* Animations (triggered via JS .in-view class) */
.fade-up-elem { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-up-elem.in-view { opacity: 1; transform: translateY(0); }

.slide-in-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.7s ease, transform 0.7s ease; }
.slide-in-left.in-view { opacity: 1; transform: translateX(0); }

.slide-in-right { opacity: 0; transform: translateX(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
.slide-in-right.in-view { opacity: 1; transform: translateX(0); }

/* Common Typography & Layout */
.a-tag {
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
.a-tag.centered { text-align: center; }
.a-heading {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}
.a-sub {
  color: rgba(255,255,255,0.6);
  font-size: 18px;
  max-width: 580px;
  line-height: 1.6;
}

/* --- PART 1: SECTION HEADER --- */
.a-header { text-align: center; margin-bottom: 3rem; display: flex; flex-direction: column; align-items: center;}
.a-header .a-sub { text-align: center; margin: 0 auto; }

/* --- PART 1: STATS ROW --- */
.a-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 6rem;
  padding: 0 20px;
}
@media (max-width: 900px) { .a-stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .a-stats-grid { grid-template-columns: repeat(2, 1fr); } }

.a-stat-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.a-stat-card:hover {
  border-color: rgba(0,212,255,0.3);
  transform: translateY(-4px);
}
.a-stat-icon {
  width: 44px; height: 44px;
  border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
  font-size: 20px;
  margin-bottom: 16px;
}
.a-stat-icon.c-cyan { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); box-shadow: 0 0 16px rgba(0,212,255,0.2); }
.a-stat-icon.c-purple { background: rgba(123,47,255,0.1); border: 1px solid rgba(123,47,255,0.3); box-shadow: 0 0 16px rgba(123,47,255,0.2); }
.a-stat-num {
  font-size: 52px; font-weight: 800;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}
.a-stat-label {
  color: white; font-size: 15px; font-weight: 500; margin-top: 8px;
}

/* --- PART 2: OUR STORY & TIMELINE --- */
.a-story-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 8rem;
  padding: 0 20px;
}
@media (max-width: 900px) {
  .a-story-container { grid-template-columns: 1fr; gap: 40px; }
}
.a-story-heading { color: white; font-size: 32px; font-weight: 700; line-height: 1.2; margin-bottom: 24px; }
.a-story-p { color: rgba(255,255,255,0.65); font-size: 16px; line-height: 1.8; margin-bottom: 16px; }
.a-story-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.a-s-badge {
  background: rgba(0,212,255,0.06);
  border: 1px solid rgba(0,212,255,0.2);
  border-radius: 50px;
  padding: 8px 18px;
  font-size: 13px;
  color: rgba(255,255,255,0.8);
  white-space: nowrap;
}

/* Timeline */
.a-timeline {
  position: relative;
  min-height: 400px;
  padding: 20px 0;
}
.a-timeline-line {
  position: absolute;
  left: 50%; top: 0;
  transform: translateX(-50%);
  width: 2px; height: 0; /* Animated to 100% via JS */
  background: linear-gradient(180deg, var(--cyan), var(--purple));
  box-shadow: 0 0 8px rgba(0,212,255,0.5);
  transition: height 1.5s ease-in-out;
}
.a-timeline.draw-line .a-timeline-line { height: 100%; }

.a-node {
  position: relative;
  width: 50%;
  margin-bottom: 40px;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.a-node.show { opacity: 1; transform: translateY(0); }
.a-node.left { left: 0; text-align: right; padding-right: 40px; }
.a-node.right { left: 50%; text-align: left; padding-left: 40px; }

.a-node-year {
  display: inline-block;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  color: white; font-size: 12px; font-weight: 700;
  border-radius: 50px; padding: 4px 12px;
  margin-bottom: 12px;
}
.a-node-icon {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(0,212,255,0.1); border: 2px solid var(--cyan); box-shadow: 0 0 16px rgba(0,212,255,0.4);
  display: flex; justify-content: center; align-items: center;
  position: absolute; top: 0;
}
.a-node.left .a-node-icon { right: -20px; }
.a-node.right .a-node-icon { left: -20px; }
.a-node-icon.p { border-color: var(--purple); background: rgba(123,47,255,0.1); box-shadow: 0 0 16px rgba(123,47,255,0.4); }
.a-node-icon.grad { border: 2px solid transparent; background: linear-gradient(#111, #111) padding-box, linear-gradient(135deg, var(--cyan), var(--purple)) border-box; box-shadow: 0 0 16px rgba(123,47,255,0.4); }

.a-node-content h4 { color: white; font-size: 16px; font-weight: 700; margin-bottom: 4px; }
.a-node-content p { color: rgba(255,255,255,0.6); font-size: 13px; line-height: 1.5; }

.a-node-conn {
  position: absolute; top: 20px; width: 40px; height: 2px;
  background: rgba(0,212,255,0.4);
}
.a-node.left .a-node-conn { right: 0; }
.a-node.right .a-node-conn { left: 0; }

.a-node-dot {
  position: absolute; top: 13px;
  width: 14px; height: 14px; border-radius: 50%;
  z-index: 2;
}
.a-node.left .a-node-dot { right: -47px; }
.a-node.right .a-node-dot { left: -7px; }

.pulse-cyan { background: var(--cyan); box-shadow: 0 0 12px var(--cyan), 0 0 24px rgba(0,212,255,0.5); }
.pulse-cyan::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; border: 2px solid var(--cyan); animation: pRing 2s infinite ease-out; }
.pulse-purple { background: var(--purple); box-shadow: 0 0 12px var(--purple), 0 0 24px rgba(123,47,255,0.5); }
.pulse-purple::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; border: 2px solid var(--purple); animation: pRing 2s infinite ease-out; }
.pulse-grad { background: linear-gradient(135deg, var(--cyan), var(--purple)); width: 18px; height: 18px; top: 11px; }
.a-node.left .pulse-grad { right: -49px; } .a-node.right .pulse-grad { left: -9px; }
.pulse-grad::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; border: 2px solid var(--purple); animation: pRing 2s infinite ease-out; }

@keyframes pRing {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}

@media (max-width: 600px) {
  .a-node { width: 100%; padding-left: 60px !important; text-align: left !important; left: 0 !important; }
  .a-timeline-line { left: 20px; transform: none; }
  .a-node-icon { left: 0 !important; }
  .a-node-conn { left: 40px !important; width: 20px; }
  .a-node-dot { left: 13px !important; }
  .pulse-grad { left: 11px !important; }
}

/* --- PART 3: FOUNDERS --- */
.a-founders-header { text-align: center; margin-bottom: 3rem; }
.a-founders-title { color: white; font-size: clamp(28px, 4vw, 44px); font-weight: 800; margin-bottom: 0.5rem; }
.a-founders-sub { color: rgba(255,255,255,0.6); font-size: 17px; }

.a-founders-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px; padding: 0 20px; margin-bottom: 8rem;
}
@media (max-width: 900px) { .a-founders-grid { grid-template-columns: 1fr; } }

.a-founder-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 44px 36px;
  position: relative;
  transition: all 0.4s ease;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  z-index: 1;
}
.a-founder-card:hover {
  border-color: rgba(0,212,255,0.35);
  box-shadow: 0 24px 80px rgba(0,212,255,0.08);
  transform: translateY(-8px);
}
.a-f-glow { position: absolute; width: 240px; height: 240px; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; filter: blur(80px); z-index: -1; pointer-events: none;}
.a-f-glow.cyan { background: rgba(0,212,255,0.05); }
.a-f-glow.purple { background: rgba(123,47,255,0.05); }

.a-f-avatar {
  position: relative; width: 128px; height: 128px; margin-bottom: 16px;
  display: flex; justify-content: center; align-items: center;
}
.a-f-ring {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(#0a0a0f, #0a0a0f) padding-box, linear-gradient(135deg, var(--cyan), var(--purple)) border-box;
}
.a-f-avatar img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; z-index: 2; }
.a-f-initials { width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(145deg, #1a1a2e, #0d1117); z-index: 2; display: flex; justify-content: center; align-items: center; font-size: 40px; font-weight: 800; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-image: linear-gradient(135deg, var(--cyan), var(--purple)); }

.a-f-status { font-size: 12px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px; margin-bottom: 20px;}
.a-f-dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; animation: statPulse 1.5s infinite; }
@keyframes statPulse { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }

.a-f-role-badge {
  background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: #00d4ff;
  border-radius: 50px; padding: 5px 16px; font-size: 12px; font-weight: 600; margin-bottom: 10px;
}
.a-f-name { color: white; font-size: 28px; font-weight: 700; margin-bottom: 4px; }
.a-f-title { color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 20px; }
.a-f-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent); margin-bottom: 20px; }
.a-f-bio { color: rgba(255,255,255,0.65); font-size: 15px; line-height: 1.75; margin-bottom: 24px; }

.a-f-skills { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
.a-f-skills span {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50px;
  padding: 4px 12px; font-size: 12px; color: rgba(255,255,255,0.7); transition: all 0.3s;
}
.a-f-skills span:hover { background: rgba(0,212,255,0.08); border-color: rgba(0,212,255,0.3); color: #00d4ff; }

.a-f-contacts { display: flex; gap: 10px; width: 100%; }
.a-f-contacts a {
  flex: 1; text-align: center; text-decoration: none; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px;
  padding: 10px 12px; font-size: 13px; color: rgba(255,255,255,0.7); background: transparent; transition: all 0.3s;
}
.a-f-contacts a:hover { border-color: var(--cyan); color: var(--cyan); background: rgba(0,212,255,0.06); }


/* --- PART 4: VALUES GRID --- */
.a-values-header { text-align: center; margin-bottom: 3rem; }
.a-values-title { color: white; font-size: clamp(28px, 4vw, 42px); font-weight: 800; }

.a-values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 0 20px; margin-bottom: 8rem; }
@media (max-width: 900px) { .a-values-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .a-values-grid { grid-template-columns: 1fr; } }

.a-val-card {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px;
  padding: 28px; transition: all 0.3s ease;
}
.a-val-card:hover { border-color: rgba(0,212,255,0.25); transform: translateY(-4px); }
.a-val-card:hover .a-val-icon { transform: scale(1.1); }
.a-val-card:hover .a-val-icon.c-cyan { box-shadow: 0 0 30px rgba(0,212,255,0.4); }
.a-val-card:hover .a-val-icon.c-purple { box-shadow: 0 0 30px rgba(123,47,255,0.4); }

.a-val-icon {
  width: 52px; height: 52px; border-radius: 50%; display: flex; justify-content: center; align-items: center;
  font-size: 22px; transition: all 0.3s ease;
}
.a-val-icon.c-cyan { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); box-shadow: 0 0 20px rgba(0,212,255,0.15); }
.a-val-icon.c-purple { background: rgba(123,47,255,0.1); border: 1px solid rgba(123,47,255,0.3); box-shadow: 0 0 20px rgba(123,47,255,0.15); }

.a-val-card h4 { color: white; font-size: 18px; font-weight: 700; margin-top: 16px; margin-bottom: 8px; }
.a-val-card p { color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.65; }

/* --- PART 5: PROCESS STRIP --- */
.a-process-header { text-align: center; margin-bottom: 3rem; }
.a-process-title { color: white; font-size: 32px; font-weight: 800; }

.a-process-strip {
  display: flex; gap: 20px; padding: 0 20px;
}
@media (max-width: 900px) { .a-process-strip { flex-wrap: wrap; } .a-step { width: calc(50% - 10px); } }
@media (max-width: 600px) { .a-step { width: 100%; } }

.a-step { flex: 1; text-align: center; background: rgba(255,255,255,0.02); padding: 30px 20px; border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1); transition: all 0.3s; }
.a-step:hover { background: rgba(255,255,255,0.05); border-color: var(--cyan); }
.a-step-icon { font-size: 32px; margin-bottom: 16px; }
.a-step h4 { color: white; font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.a-step p { color: rgba(255,255,255,0.6); font-size: 13px; line-height: 1.5; }

`;

fs.appendFileSync('style.css', css);
console.log('CSS appended to style.css');
