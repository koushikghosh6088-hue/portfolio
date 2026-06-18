const fs = require('fs');

const css = `
/* =========================================================================
   CINEMATIC EDITORIAL ABOUT US
   ========================================================================= */

.about-cinematic-section { padding: 0 0 6rem; position: relative; overflow: hidden; background: #050810;}

/* 1. CORE ETHOS (CINEMATIC HERO) */
.ac-ethos-container { position: relative; min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden; margin-bottom: 5rem;}
.ac-fluid-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, rgba(0,212,255,0.05) 0%, rgba(0,0,0,0) 70%); z-index: 0; animation: breathe 10s infinite alternate ease-in-out;}
.ac-ethos-content { position: relative; z-index: 1; max-width: 1000px;}
.ac-tag { display: inline-block; font-size: 0.75rem; letter-spacing: 4px; color: rgba(255,255,255,0.4); text-transform: uppercase; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 5px;}
.ac-ethos-heading { font-size: 5rem; font-weight: 300; line-height: 1.1; color: rgba(255,255,255,0.6); letter-spacing: -2px; margin-bottom: 2.5rem;}
.ac-text-glow { color: white; text-shadow: 0 0 40px rgba(255,255,255,0.3), 0 0 100px rgba(0,212,255,0.2); font-weight: 400;}
.ac-text-solid { color: white; font-weight: 800;}
.ac-ethos-sub { font-size: 1.25rem; font-weight: 300; color: rgba(255,255,255,0.5); max-width: 600px; margin: 0 auto; line-height: 1.6;}

@keyframes breathe { 0% { transform: scale(1); opacity: 0.8;} 100% { transform: scale(1.5); opacity: 0.3;} }

@media (max-width: 900px) {
  .ac-ethos-container { min-height: 60vh; padding: 4rem 20px;}
  .ac-ethos-heading { font-size: 3rem; }
}
@media (max-width: 600px) {
  .ac-ethos-heading { font-size: 2.2rem; }
}

/* 2. THE 3 PILLARS OF CRAFTSMANSHIP */
.ac-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-bottom: 8rem; padding: 0 20px;}
.ac-pillar { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; transition: border-color 0.4s;}
.ac-pillar:hover { border-color: var(--cyan); }
.ac-p-icon { width: 32px; height: 32px; color: var(--cyan); margin-bottom: 20px; opacity: 0.8;}
.ac-p-title { font-size: 1.5rem; font-weight: 500; color: white; margin-bottom: 15px; letter-spacing: -0.5px;}
.ac-p-desc { font-size: 0.95rem; color: rgba(255,255,255,0.5); line-height: 1.7; font-weight: 300;}

@media (max-width: 900px) {
  .ac-pillars-grid { grid-template-columns: 1fr; gap: 30px; margin-bottom: 5rem;}
}

/* 3. THE ARCHITECTS (FOUNDERS) */
.ac-architects-header { display: flex; align-items: center; gap: 20px; margin-bottom: 4rem; padding: 0 20px;}
.ac-arch-title { font-size: 2rem; font-weight: 300; color: white;}
.ac-arch-line { flex-grow: 1; height: 1px; background: rgba(255,255,255,0.1);}

.ac-founders-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; padding: 0 20px;}

.ac-founder-card { position: relative; group; display: flex; flex-direction: column;}
.ac-f-image-wrap { width: 100%; aspect-ratio: 4/5; background: #111; overflow: hidden; border-radius: 4px; margin-bottom: 25px; position: relative;}
.ac-f-image-wrap img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2); transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); transform: scale(1.05);}
.ac-founder-card:hover .ac-f-image-wrap img { filter: grayscale(0%) contrast(1); transform: scale(1);}

.ac-f-fallback { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; font-size: 4rem; color: rgba(255,255,255,0.1); font-weight: 800;}

.ac-f-details { padding-right: 20px;}
.ac-f-role { font-size: 0.75rem; color: var(--cyan); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; font-weight: 600;}
.ac-f-name { font-size: 2.5rem; font-weight: 400; color: white; margin-bottom: 15px; letter-spacing: -1px;}
.ac-f-bio { font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 20px; font-weight: 300;}
.ac-f-stack { font-family: monospace; font-size: 0.85rem; color: rgba(255,255,255,0.3); letter-spacing: 1px;}

@media (max-width: 900px) {
  .ac-founders-grid { grid-template-columns: 1fr; gap: 60px;}
}
`;

fs.appendFileSync('style.css', css);
console.log("Appended Cinematic About CSS successfully!");
