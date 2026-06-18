const fs = require('fs');

const css = `
/* =========================================================================
   CYBER-INTERACTIVE ABOUT US
   ========================================================================= */

.cyber-about-section { padding: 6rem 0; position: relative; background: #02050a; overflow: hidden; }

.cy-header { text-align: center; margin-bottom: 4rem;}
.cy-badge { display: inline-block; padding: 4px 12px; border: 1px solid var(--cyan); border-radius: 20px; color: var(--cyan); font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; margin-bottom: 1rem; box-shadow: 0 0 10px rgba(0,212,255,0.2);}
.cy-header h2 { font-size: 3rem; color: white; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 2px;}
.cy-header p { color: #888; max-width: 600px; margin: 0 auto; font-size: 1.1rem; line-height: 1.6;}

.cy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-bottom: 5rem;}

/* 1. Neural Network Animation */
.cy-network { position: relative; width: 100%; height: 350px; background: rgba(0,212,255,0.02); border: 1px solid rgba(0,212,255,0.1); border-radius: 20px; overflow: hidden;}
.nn-core { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100px; height: 100px; border-radius: 50%; background: #000; border: 2px solid var(--cyan); display: flex; justify-content: center; align-items: center; z-index: 10; box-shadow: 0 0 30px rgba(0,212,255,0.4);}
.nn-core span { color: white; font-size: 0.7rem; font-weight: 800; text-align: center; letter-spacing: 1px;}
.nn-pulse { position: absolute; inset: -20px; border-radius: 50%; border: 1px solid var(--cyan); animation: cyPulse 2s linear infinite;}

.nn-node { position: absolute; width: 15px; height: 15px; background: var(--purple); border-radius: 50%; box-shadow: 0 0 15px var(--purple); z-index: 5; animation: nodeFloat 4s infinite alternate ease-in-out;}
.n1 { top: 20%; left: 20%; }
.n2 { top: 80%; left: 30%; animation-delay: 1s;}
.n3 { top: 30%; right: 20%; animation-delay: 2s;}
.n4 { top: 70%; right: 25%; animation-delay: 1.5s;}
.n5 { top: 50%; left: 10%; animation-delay: 0.5s;}

.nn-beam { position: absolute; background: linear-gradient(90deg, transparent, var(--cyan), transparent); height: 2px; transform-origin: left center; opacity: 0.5; z-index: 1; animation: beamFlash 3s infinite;}
/* Hardcoded beam positions for effect */
.b1 { top: 50%; left: 50%; width: 150px; transform: rotate(-145deg); }
.b2 { top: 50%; left: 50%; width: 120px; transform: rotate(120deg); animation-delay: 1s;}
.b3 { top: 50%; left: 50%; width: 160px; transform: rotate(-30deg); animation-delay: 0.5s;}
.b4 { top: 50%; left: 50%; width: 140px; transform: rotate(40deg); animation-delay: 1.5s;}

@keyframes cyPulse { 0% { transform: scale(1); opacity: 1;} 100% { transform: scale(2); opacity: 0;} }
@keyframes nodeFloat { 0% { transform: translateY(-10px);} 100% { transform: translateY(10px);} }
@keyframes beamFlash { 0%, 100% { opacity: 0.2;} 50% { opacity: 0.8; box-shadow: 0 0 10px var(--cyan);} }

/* 2. Holographic Panels */
.cy-panels { display: flex; flex-direction: column; gap: 20px;}
.cy-panel { position: relative; background: rgba(10,15,30,0.8); border-radius: 12px; overflow: hidden; padding: 2px; /* for laser border */ transition: transform 0.3s;}
.cy-panel:hover { transform: translateX(10px); }
.laser-border { position: absolute; top: 0; left: 0; width: 200%; height: 200%; background: conic-gradient(from 0deg, transparent 70%, var(--cyan) 100%); animation: laserSpin 4s linear infinite; transform-origin: center; opacity: 0; transition: opacity 0.3s; z-index: 0; top: -50%; left: -50%;}
.cy-panel:hover .laser-border { opacity: 1; }
.cy-p-content { position: relative; background: #080b12; border-radius: 10px; padding: 25px; z-index: 1; height: 100%; display: flex; flex-direction: column; justify-content: center;}
.cy-icon { font-size: 2rem; margin-bottom: 10px;}
.cy-p-content h3 { color: white; font-size: 1.3rem; margin-bottom: 8px;}
.cy-p-content p { color: #aaa; font-size: 0.9rem; line-height: 1.5;}

@keyframes laserSpin { 100% { transform: rotate(360deg); } }

@media (max-width: 900px) {
  .cy-grid { grid-template-columns: 1fr; }
}

/* 3. Founder ID Cards */
.cy-founders-wrapper { margin-top: 2rem; }
.cy-f-title { text-align: center; color: white; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 3rem; font-size: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;}

.cy-founders-flex { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;}

.cy-id-card { position: relative; width: 350px; background: rgba(5,10,20,0.9); border: 1px solid rgba(0,212,255,0.2); border-radius: 15px; overflow: hidden; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);}
.cy-scanner-line { position: absolute; left: 0; top: -10px; width: 100%; height: 2px; background: var(--cyan); box-shadow: 0 0 15px var(--cyan), 0 0 30px var(--cyan); opacity: 0.8; z-index: 10; animation: scanUpDn 3s ease-in-out infinite;}
.delay-scan { animation-delay: 1.5s; }

.cy-id-top { display: flex; align-items: center; gap: 20px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 20px;}
.cy-profile-pic { width: 70px; height: 70px; border-radius: 50%; overflow: hidden; border: 2px solid var(--cyan); position: relative; flex-shrink: 0;}
.cy-profile-pic img { width: 100%; height: 100%; object-fit: cover;}
.cy-fallback { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; background: #222; color: white; font-weight: bold; font-size: 1.2rem;}

.cy-id-headers { display: flex; flex-direction: column;}
.cy-id-tag { font-size: 0.6rem; color: #00ff88; letter-spacing: 1px; margin-bottom: 4px;}
.cy-id-headers h4 { color: white; font-size: 1.4rem; margin: 0 0 2px 0;}
.cy-role { color: #888; font-size: 0.8rem; text-transform: uppercase;}

.cy-id-data { display: flex; flex-direction: column; gap: 10px; font-family: monospace; font-size: 0.85rem;}
.cy-data-row { display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 5px;}
.cy-data-row span:first-child { color: #666; }
.cy-data-row span:last-child { color: white; }
.c-green { color: #00ff88 !important; text-shadow: 0 0 5px rgba(0,255,136,0.5);}

@keyframes scanUpDn { 
  0% { top: -10px; opacity: 0;} 
  10% { opacity: 1;} 
  90% { opacity: 1;} 
  100% { top: 100%; opacity: 0;} 
}
`;

fs.appendFileSync('style.css', css);
console.log("Appended Cyber CSS successfully!");
