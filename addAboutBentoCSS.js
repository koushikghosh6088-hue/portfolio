const fs = require('fs');

const css = `
/* =========================================================================
   ABOUT US BENTO ENGINE
   ========================================================================= */

.about-bento-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.ab-header {
  text-align: center;
  margin-bottom: 4rem;
}
.ab-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(0,212,255,0.1);
  color: var(--cyan);
  border: 1px solid rgba(0,212,255,0.2);
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}
.ab-heading { font-size: 2.5rem; color: white; font-weight: 800;}

.ab-bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.ab-card {
  background: rgba(20,20,25,0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 24px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.ab-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.15);}

.ab-card-bg { position: absolute; width: 200px; height: 200px; filter: blur(80px); opacity: 0.2; z-index: 0; pointer-events: none;}
.ab-card:hover .ab-card-bg { opacity: 0.4; transform: scale(1.2); transition: all 0.5s ease;}
.z1 { z-index: 1; position: relative;}
.h-100 { height: 100%;}
.flex-col-center { display: flex; flex-direction: column; justify-content: center;}

.ab-title { font-size: 1.5rem; color: white; margin-bottom: 10px; font-weight: 700;}
.ab-desc { font-size: 0.95rem; color: #aaa; line-height: 1.6;}

/* 1. Mission Globe */
.ab-mission { overflow: hidden; justify-content: flex-end;}
.ab-globe-container { position: absolute; top: -30px; right: -30px; width: 180px; height: 180px; perspective: 1000px;}
.ab-globe { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; animation: spinGlobe 15s linear infinite;}
.g-ring { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px dashed rgba(0,212,255,0.4); border-radius: 50%;}
.r1 { transform: rotateY(0deg);}
.r2 { transform: rotateY(60deg);}
.r3 { transform: rotateY(120deg);}
.g-pulse-dot { position: absolute; top: 50%; left: 50%; width: 10px; height: 10px; background: var(--cyan); border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 20px var(--cyan); animation: pulseDot 2s infinite;}
@keyframes spinGlobe { 100% { transform: rotateY(360deg) rotateX(20deg); } }
@keyframes pulseDot { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8;} 50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1;} }

/* 2. Impact Stats */
.ab-stat-row { display: flex; justify-content: space-around; align-items: center; width: 100%;}
.ab-stat { text-align: center; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.02); width: 30%; transition: transform 0.3s;}
.ab-stat:hover { transform: scale(1.05); background: rgba(255,255,255,0.08);}
.ab-s-num { font-size: 2rem; font-weight: 800; margin-bottom: 5px;}
.ab-s-label { font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;}
.glow-c { color: var(--cyan); text-shadow: 0 0 15px rgba(0,212,255,0.4);}
.glow-p { color: var(--purple); text-shadow: 0 0 15px rgba(123,47,255,0.4);}
.glow-g { color: var(--green); text-shadow: 0 0 15px rgba(0,255,136,0.4);}

/* 3. Values Terminal */
.ab-terminal { width: 100%; height: 160px; background: rgba(0,0,0,0.6); border-radius: 12px; border: 1px solid #333; display: flex; flex-direction: column; overflow: hidden; margin-top: auto;}
.term-head { background: #222; padding: 6px 12px; display: flex; gap: 6px;}
.t-dot { width: 10px; height: 10px; border-radius: 50%;}
.t-dot.red { background: #ff5f56;} .t-dot.yel { background: #ffbd2e;} .t-dot.grn { background: #27c93f;}
.term-body { padding: 12px; font-family: monospace; font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;}
.t-line span { color: var(--cyan); margin-right: 8px;}
.t-line.green { color: var(--green);}
.t-cursor { width: 8px; height: 14px; background: white; animation: blinkCursor 1s infinite;}
@keyframes blinkCursor { 0%, 50% { opacity: 1;} 51%, 100% { opacity: 0;} }

/* 4. Interactive Founders */
.f-duo-container { display: flex; flex-direction: column; gap: 15px; margin-top: 20px;}
.f-card { background: rgba(255,255,255,0.05); border-radius: 12px; padding: 12px; display: flex; align-items: center; gap: 15px; position: relative; overflow: hidden; cursor: pointer; border: 1px solid transparent; transition: all 0.3s;}
.f-card:hover { border-color: rgba(123,47,255,0.4); background: rgba(255,255,255,0.1);}
.f-avatar { width: 50px; height: 50px; border-radius: 50%; background: #333; overflow: hidden; display: flex; justify-content: center; align-items: center;}
.f-avatar img { width: 100%; height: 100%; object-fit: cover;}
.f-fallback { color: white; font-weight: bold;}
.f-info h4 { font-size: 1rem; color: white; margin: 0 0 2px 0;}
.f-info span { font-size: 0.75rem; color: var(--cyan);}
.f-hover-reveal { position: absolute; right: 15px; opacity: 0; transform: translateX(20px); transition: all 0.4s ease;}
.f-card:hover .f-hover-reveal { opacity: 1; transform: translateX(0);}
.f-techs { display: flex; gap: 6px;}
.f-techs span { background: rgba(123,47,255,0.2); padding: 4px 8px; border-radius: 4px; font-size: 0.6rem; color: #fff;}

@media (max-width: 900px) {
  .ab-bento-grid { grid-template-columns: 1fr; }
  .ab-card { min-height: 240px; }
  .ab-globe-container { top: -20px; right: -20px; width: 140px; height: 140px;}
}

`;

fs.appendFileSync('style.css', css);
console.log("Appended About Bento CSS successfully!");
