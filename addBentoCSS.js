const fs = require('fs');

const css = `
/* ════════════════════════════════════════════════════════════
   REDESIGN: BENTO GRID VALUES
   ════════════════════════════════════════════════════════════ */

.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 0 20px;
  margin-bottom: 4rem;
}

.bento-card {
  position: relative;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 32px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
}
.bento-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,255,255,0.15);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.bc-bg-glow {
  position: absolute; width: 200px; height: 200px; top: -50px; right: -50px;
  border-radius: 50%; filter: blur(60px); z-index: 0; opacity: 0.5; transition: all 0.4s ease;
}
.bento-card:hover .bc-bg-glow { opacity: 0.8; transform: scale(1.2); }

/* Sizes */
.b-large { grid-column: span 3; min-height: 280px; justify-content: space-between; }
.b-small { grid-column: span 2; min-height: 220px; }
.b-full { grid-column: span 6; padding: 0; }

/* Colors */
.b-cyan .bc-bg-glow { background: rgba(0,212,255,0.15); }
.b-cyan:hover { border-color: rgba(0,212,255,0.3); }
.b-purple .bc-bg-glow { background: rgba(123,47,255,0.15); }
.b-purple:hover { border-color: rgba(123,47,255,0.3); }
.b-dark:hover { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); }

/* Content inside */
.bc-icon { font-size: 40px; margin-bottom: 20px; z-index: 1; position: relative; }
.bc-icon-top { font-size: 32px; margin-bottom: 16px; opacity: 0.8; }
.bc-content { z-index: 1; position: relative; }
.bento-card h4 { color: white; font-size: 22px; font-weight: 700; margin-bottom: 12px; }
.b-small h4 { font-size: 18px; margin-bottom: 8px; }
.bento-card p { color: rgba(255,255,255,0.65); font-size: 15px; line-height: 1.6; }
.b-small p { font-size: 14px; }

/* Full Width Card Showcase */
.bc-full-inner { display: flex; align-items: center; width: 100%; height: 100%; z-index: 1; position: relative; }
.bcf-text { padding: 40px; flex: 1; max-width: 60%; }
.bcf-visual { flex: 1; height: 100%; min-height: 250px; position: relative; display: flex; justify-content: center; align-items: center; background: radial-gradient(circle at center, rgba(0,212,255,0.05) 0%, transparent 70%); }

.globe-core { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--cyan), var(--purple)); box-shadow: 0 0 30px rgba(0,212,255,0.5); z-index: 2;}
.globe-ring { position: absolute; width: 120px; height: 120px; border-radius: 50%; border: 1px dashed rgba(255,255,255,0.2); animation: spinRing 20s linear infinite; }
.globe-ring.r2 { width: 180px; height: 180px; border: 1px dashed rgba(0,212,255,0.3); animation-direction: reverse; animation-duration: 25s; }
.globe-ring.r3 { width: 240px; height: 240px; border: 1px dashed rgba(123,47,255,0.3); animation-duration: 30s; }

@keyframes spinRing { 0% { transform: rotate(0deg) scaleY(0.5); } 100% { transform: rotate(360deg) scaleY(0.5); } }

@media (max-width: 900px) {
  .b-large, .b-small { grid-column: span 3; }
  .bc-full-inner { flex-direction: column; }
  .bcf-text { max-width: 100%; padding: 30px; }
  .bcf-visual { width: 100%; border-top: 1px solid rgba(255,255,255,0.05); }
}
@media (max-width: 600px) {
  .b-large, .b-small, .b-full { grid-column: span 6; }
}

/* ════════════════════════════════════════════════════════════
   REDESIGN: GLOWING PIPELINE (HOW WE WORK)
   ════════════════════════════════════════════════════════════ */

.process-pipeline {
  position: relative;
  padding: 60px 20px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.pipe-track {
  position: absolute;
  top: 90px;
  left: 50px;
  right: 50px;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  z-index: 0;
}
.pipe-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--cyan), var(--purple));
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0,212,255,0.6);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pipe-nodes {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.p-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.p-node:hover { transform: translateY(-4px); }

.pn-orb {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #111;
  border: 2px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  transition: all 0.4s ease;
  box-shadow: 0 0 0 6px #0a0a0f; /* Match site bg to cut out line */
}
.pn-icon { font-size: 24px; filter: grayscale(1); transition: all 0.4s ease; opacity: 0.6; }

.pn-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 24px 20px;
  text-align: center;
  transition: all 0.4s ease;
  height: 100%;
}
.pn-card h4 { color: rgba(255,255,255,0.6); font-size: 16px; font-weight: 700; margin-bottom: 12px; transition: color 0.4s ease;}
.pn-card p { color: rgba(255,255,255,0.4); font-size: 13px; line-height: 1.6; transition: color 0.4s ease;}

/* Active / Lit State */
.p-node.lit .pn-orb {
  border-color: var(--cyan);
  background: rgba(0,212,255,0.1);
  box-shadow: 0 0 0 6px #0a0a0f, 0 0 20px rgba(0,212,255,0.4);
}
.p-node.lit .pn-icon { filter: grayscale(0); opacity: 1; transform: scale(1.1); }
.p-node.lit .pn-card {
  background: rgba(255,255,255,0.04);
  border-color: rgba(0,212,255,0.3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
.p-node.lit .pn-card h4 { color: white; }
.p-node.lit .pn-card p { color: rgba(255,255,255,0.7); }

@media (max-width: 768px) {
  .process-pipeline { padding: 20px; }
  .pipe-track { top: 40px; bottom: 40px; left: 50px; width: 4px; height: auto; right: auto; }
  .pipe-progress { width: 100%; height: 0%; transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .pipe-nodes { flex-direction: column; gap: 40px; }
  .p-node { width: 100%; flex-direction: row; align-items: flex-start; gap: 24px; }
  .pn-orb { margin-bottom: 0; flex-shrink: 0; }
  .pn-card { text-align: left; }
}
`;

fs.appendFileSync('style.css', css);
console.log('CSS appended to style.css for Bento Grid and Pipeline');
