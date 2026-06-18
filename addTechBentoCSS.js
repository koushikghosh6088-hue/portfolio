const fs = require('fs');

const css = `
/* =========================================================================
   TECH BENTO ENGINE (PART 1 REPLACEMENT)
   ========================================================================= */

.tech-bento-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 5rem;
  padding: 0 20px;
}

.tb-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 20px;
}

/* Bento Cards Base */
.tb-card {
  background: rgba(20,20,25,0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 24px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  z-index: 1;
}

.tb-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255,255,255,0.15);
}

/* Layout Spans */
.tb-brain { grid-column: span 2; grid-row: span 2; } /* Large Hero Card */
.tb-muscle { grid-column: span 2; grid-row: span 1; }
.tb-foundation { grid-column: span 1; grid-row: span 1; }
.tb-interface { grid-column: span 1; grid-row: span 1; }

@media (max-width: 992px) {
  .tb-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; }
  .tb-brain { grid-column: span 2; grid-row: span 1; }
  .tb-muscle { grid-column: span 2; grid-row: span 1; }
  .tb-foundation { grid-column: span 1; grid-row: span 1; }
  .tb-interface { grid-column: span 1; grid-row: span 1; }
}

@media (max-width: 600px) {
  .tb-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .tb-brain, .tb-muscle, .tb-foundation, .tb-interface { grid-column: span 1; grid-row: span 1; min-height: 220px;}
}

/* Header & Tags */
.tb-header { display: flex; align-items: center; gap: 10px; z-index: 2; margin-bottom: 15px;}
.tb-icon { font-size: 24px; }
.tb-title { font-size: 1.2rem; font-weight: 700; color: white; m-0}
.tb-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; z-index: 2;}
.t-pill { background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; color: #ccc; border: 1px solid rgba(255,255,255,0.05);}
.tb-bg-glow { position: absolute; width: 150px; height: 150px; filter: blur(60px); opacity: 0.3; z-index: 0; top: -50px; left: -50px; border-radius: 50%; pointer-events: none;}
.tb-card:hover .tb-bg-glow { opacity: 0.6; transform: scale(1.2); transition: all 0.5s ease;}

/* =========================================================================
   ANIMATED VISUALS
   ========================================================================= */
.tb-visual { flex-grow: 1; display: flex; justify-content: center; align-items: center; position: relative; z-index: 1;}

/* 1. The Brain (Neural Net) */
.ai-node-network { position: relative; width: 100px; height: 100px; }
.ai-node { position: absolute; border-radius: 50%; background: var(--purple); box-shadow: 0 0 15px var(--purple); display: flex; justify-content: center; align-items: center; color: white; font-size: 10px; font-weight: bold;}
.n-center { width: 40px; height: 40px; top: 30px; left: 30px; z-index: 2; animation: pulseBrain 2s infinite alternate;}
.n-1 { width: 15px; height: 15px; top: 10px; left: 10px; animation: floatNode 3s infinite ease-in-out;}
.n-2 { width: 20px; height: 20px; top: 20px; right: 10px; animation: floatNode 4s infinite ease-in-out reverse;}
.n-3 { width: 15px; height: 15px; bottom: 10px; left: 40px; animation: floatNode 3.5s infinite ease-in-out;}
.ai-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;}
.ai-lines path { animation: flowDash 3s linear infinite;}

@keyframes pulseBrain { 0% { transform: scale(1); box-shadow: 0 0 10px var(--purple); } 100% { transform: scale(1.1); box-shadow: 0 0 25px var(--purple); } }
@keyframes floatNode { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes flowDash { to { stroke-dashoffset: -20; } }

/* 2. The Muscle (Gears) */
.auto-gears { position: relative; width: 100px; height: 80px;}
.gear { position: absolute; font-size: 40px; line-height: 1; filter: drop-shadow(0 0 10px rgba(0,212,255,0.4));}
.g-main { top: 10px; left: 10px; animation: spinGear 6s linear infinite;}
.g-sub { top: 35px; left: 45px; font-size: 25px; animation: spinGearRev 4s linear infinite;}
.lightning { position: absolute; font-size: 20px; top: 25px; left: 35px; z-index: 3; animation: zap 2s infinite;}
@keyframes spinGear { 100% { transform: rotate(360deg); } }
@keyframes spinGearRev { 100% { transform: rotate(-360deg); } }
@keyframes zap { 0%, 100% { opacity: 0; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }

/* 3. The Foundation (Server Rack) */
.server-stack { display: flex; flex-direction: column; gap: 5px; position: relative;}
.server-rack { width: 60px; height: 15px; background: rgba(0,0,0,0.5); border: 1px solid #444; border-radius: 4px; display: flex; align-items: center; padding: 0 5px;}
.sr-light { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: blink 1.5s infinite;}
.server-rack:nth-child(2) .sr-light { animation-delay: 0.5s; background: var(--orange);}
.server-rack:nth-child(3) .sr-light { animation-delay: 1s; background: var(--cyan);}
.data-flow { position: absolute; width: 2px; height: 50px; background: linear-gradient(to bottom, transparent, var(--cyan), transparent); left: -15px; top: 0; animation: scanDown 2s infinite linear;}
@keyframes blink { 0%, 50%, 100% { opacity: 1; } 25%, 75% { opacity: 0.3; } }
@keyframes scanDown { 0% { transform: translateY(-20px); opacity: 0;} 50% { opacity: 1;} 100% { transform: translateY(50px); opacity: 0;} }

/* 4. The Interface (UI Mock) */
.ui-mock { width: 80px; height: 60px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; transform: perspective(500px) rotateY(-15deg) rotateX(10deg); transition: transform 0.5s;}
.tb-card:hover .ui-mock { transform: perspective(500px) rotateY(0) rotateX(0) scale(1.1);}
.um-head { height: 12px; background: rgba(0,0,0,0.3); display: flex; align-items: center; padding: 0 4px; gap: 3px;}
.um-dot { width: 4px; height: 4px; border-radius: 50%; background: #ff5f56; }
.um-dot:nth-child(2) { background: #ffbd2e; }
.um-dot:nth-child(3) { background: #27c93f; }
.um-body { padding: 6px; display: flex; flex-direction: column; gap: 4px;}
.um-box { width: 100%; height: 20px; background: rgba(0,212,255,0.2); border-radius: 4px; animation: pulseBox 3s infinite alternate;}
.um-line { width: 80%; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px;}
.um-line.short { width: 50%;}
@keyframes pulseBox { 0% { opacity: 0.5; } 100% { opacity: 1; } }

`;

fs.appendFileSync('style.css', css);
console.log("Appended Tech Bento CSS successfully!");
