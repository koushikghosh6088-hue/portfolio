const fs = require('fs');

const css = `
/* =========================================================================
   VIBRANT ENGINEER-FIRST ABOUT US
   ========================================================================= */

.about-vibrant-section { padding: 6rem 0; position: relative; overflow: hidden; }

/* 1. HERO STATEMENT */
.ab-v-hero { text-align: center; max-width: 900px; margin: 0 auto 5rem; }
.ab-v-tag {
  display: inline-block; padding: 6px 16px; background: rgba(0,212,255,0.1); color: var(--cyan);
  border: 1px solid rgba(0,212,255,0.3); border-radius: 30px; font-size: 0.8rem; font-weight: 700;
  letter-spacing: 2px; margin-bottom: 1.5rem;
  box-shadow: 0 0 15px rgba(0,212,255,0.2);
}
.ab-v-heading { font-size: 3.5rem; color: white; font-weight: 900; line-height: 1.2; margin-bottom: 1.5rem; letter-spacing: -1px;}
.text-gradient-cyan { background: linear-gradient(to right, #00d4ff, #7b2fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
.ab-v-sub { font-size: 1.1rem; color: #bbb; line-height: 1.8; max-width: 700px; margin: 0 auto;}

@media (max-width: 768px) {
  .ab-v-heading { font-size: 2.2rem; }
}

/* 2. PROBLEM -> SOLUTION PIPELINE */
.ab-pipeline-wrapper { background: rgba(10,15,30,0.5); border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 40px; margin-bottom: 4rem; text-align: center;}
.pipe-title { color: white; font-size: 1.2rem; font-weight: 700; margin-bottom: 30px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8;}

.ab-pipeline { display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap;}

.pipe-box { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 16px; width: 200px; display: flex; flex-direction: column; align-items: center; gap: 10px; position: relative;}
.pipe-messy { border-color: rgba(255,100,100,0.3); box-shadow: 0 0 20px rgba(255,100,100,0.1);}
.pipe-growth { border-color: rgba(0,255,136,0.4); box-shadow: 0 0 30px rgba(0,255,136,0.2);}
.p-icon { font-size: 2rem; }
.p-label { color: white; font-size: 0.9rem; font-weight: 600;}

.pipe-flow { width: 80px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; position: relative; overflow: hidden;}
.p-particle { position: absolute; top: 0; left: -10px; width: 20px; height: 100%; background: var(--purple); box-shadow: 0 0 10px var(--purple); animation: flowRight 2s linear infinite;}
.delay-1 { animation-delay: 0.6s;}
.delay-2 { animation-delay: 1.2s;}
.green .p-particle { background: var(--green); box-shadow: 0 0 15px var(--green);}

.pipe-engine { position: relative; width: 140px; height: 140px; display: flex; justify-content: center; align-items: center;}
.e-glow { position: absolute; width: 100%; height: 100%; background: var(--cyan); filter: blur(40px); opacity: 0.3; animation: pulseEngine 3s infinite alternate;}
.e-core { width: 100px; height: 100px; background: rgba(0,0,0,0.8); border: 2px solid var(--cyan); border-radius: 50%; display: flex; justify-content: center; align-items: center; text-align: center; position: relative; z-index: 2; box-shadow: inset 0 0 20px rgba(0,212,255,0.5);}
.e-text { color: white; font-size: 0.8rem; font-weight: 800; text-transform: uppercase;}
.e-ring { position: absolute; border: 1px dashed rgba(0,212,255,0.5); border-radius: 50%; width: 100%; height: 100%; top: -1px; left: -1px; animation: spinRing 10s linear infinite;}
.r2 { width: 120%; height: 120%; top: -10%; left: -10%; border-style: solid; border-color: rgba(123,47,255,0.3); animation: spinRingRev 15s linear infinite;}

@keyframes flowRight { 0% { left: -20px; opacity: 0;} 10% { opacity: 1;} 90% { opacity: 1;} 100% { left: 100%; opacity: 0;} }
@keyframes pulseEngine { 0% { opacity: 0.2; transform: scale(0.9);} 100% { opacity: 0.6; transform: scale(1.1);} }
@keyframes spinRing { 100% { transform: rotate(360deg);} }
@keyframes spinRingRev { 100% { transform: rotate(-360deg);} }

@media (max-width: 900px) {
  .ab-pipeline { flex-direction: column; }
  .pipe-flow { width: 4px; height: 60px; }
  .p-particle { width: 100%; height: 20px; top: -10px; left: 0; animation: flowDown 2s linear infinite;}
  @keyframes flowDown { 0% { top: -20px; opacity: 0;} 10% { opacity: 1;} 90% { opacity: 1;} 100% { top: 100%; opacity: 0;} }
}

/* 3. VIBRANT BENTO CARDS */
.ab-v-bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto;}

.v-card {
  background: rgba(15,15,20,0.8); backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 20px;
  padding: 30px; position: relative; overflow: hidden;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.v-card:hover { transform: translateY(-5px); }

.v-dna { grid-column: span 1; }
.v-impact { grid-column: span 1; border-color: rgba(0,255,136,0.3);}
.v-founders { grid-column: span 1; }

.v-bg-glow { position: absolute; width: 150px; height: 150px; filter: blur(70px); opacity: 0.15; z-index: 0; top: -50px; left: -50px;}
.v-bg-glow.cyan { background: var(--cyan); }
.v-bg-glow.green { background: var(--green); top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.1;}
.v-bg-glow.purple { background: var(--purple); top: auto; bottom: -50px; right: -50px;}
.v-card:hover .v-bg-glow { opacity: 0.3; }

.v-content { position: relative; z-index: 1; height: 100%; display: flex; flex-direction: column;}
.flex-center { justify-content: center; align-items: center;}
.text-center { text-align: center;}

.v-icon { font-size: 2.5rem; margin-bottom: 15px;}
.v-content h3 { font-size: 1.4rem; color: white; margin-bottom: 10px; font-weight: 800;}
.v-content p { font-size: 0.95rem; color: #bbb; line-height: 1.6;}

/* Neon Stats */
.v-stat-wrap { margin-bottom: 20px;}
.v-stat-num { font-size: 3rem; font-weight: 900; line-height: 1;}
.neon-green { color: #00ff88; text-shadow: 0 0 20px rgba(0,255,136,0.6);}
.v-stat-lbl { font-size: 0.8rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;}
.v-stat-row { display: flex; justify-content: center; gap: 20px; width: 100%; font-size: 1rem; color: #ddd; font-weight: 600;}
.neon-cyan { color: var(--cyan); text-shadow: 0 0 10px rgba(0,212,255,0.6); font-size: 1.5rem;}
.neon-purple { color: #b785ff; text-shadow: 0 0 10px rgba(183,133,255,0.6); font-size: 1.5rem;}

/* Founders Duo */
.vf-duo { display: flex; flex-direction: column; gap: 20px; margin-top: 15px;}
.vf-profile { display: flex; align-items: center; gap: 15px;}
.vf-img-wrap { width: 60px; height: 60px; border-radius: 50%; position: relative; background: #222;}
.vf-img-wrap img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover;}
.vf-fallback { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold;}
.vf-badge { position: absolute; background: rgba(0,0,0,0.8); border: 1px solid rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 10px; font-size: 0.5rem; color: white; opacity: 0; transform: scale(0); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);}
.v-founders:hover .vf-badge { opacity: 1; transform: scale(1);}
.b1 { top: -5px; right: -15px; border-color: var(--cyan); color: var(--cyan); transition-delay: 0.1s;}
.b2 { bottom: -5px; left: -10px; border-color: var(--purple); color: #b785ff; transition-delay: 0.2s;}
.b3 { top: -5px; left: -15px; border-color: var(--cyan); color: var(--cyan); transition-delay: 0.1s;}
.b4 { bottom: -5px; right: -10px; border-color: var(--orange); color: var(--orange); transition-delay: 0.2s;}
.vf-info h4 { font-size: 1.1rem; color: white; margin: 0 0 2px 0;}
.vf-info span { font-size: 0.8rem; color: #888;}

@media (max-width: 900px) {
  .ab-v-bento { grid-template-columns: 1fr; }
  .v-dna, .v-impact, .v-founders { grid-column: span 1; }
}
`;

fs.appendFileSync('style.css', css);
console.log("Appended About Vibrant CSS successfully!");
