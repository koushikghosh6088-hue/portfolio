const fs = require('fs');

const css = `
/* =========================================================================
   CYBER ABOUT: DETAILED INFO SECTION
   ========================================================================= */

.cy-info-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 6rem; background: rgba(5,10,20,0.5); border: 1px solid rgba(0,212,255,0.1); border-radius: 20px; padding: 40px; box-shadow: inset 0 0 40px rgba(0,0,0,0.8);}

.cy-i-title { font-size: 1.2rem; color: var(--cyan); text-transform: uppercase; letter-spacing: 3px; margin-bottom: 2rem; border-bottom: 1px dashed rgba(0,212,255,0.3); padding-bottom: 10px;}

/* What We Do */
.cy-what-we-do { padding-right: 20px;}
.cy-w-content p { color: #ccc; font-size: 1.1rem; line-height: 1.7; margin-bottom: 20px;}
.cy-w-content strong { color: white; font-weight: 800;}
.cy-w-highlight { padding: 20px; background: rgba(0,255,136,0.05); border-left: 3px solid #00ff88; color: #eee !important; font-style: italic;}

/* How We Do It (Timeline) */
.cy-timeline { display: flex; flex-direction: column; gap: 0;}
.cy-step { display: flex; gap: 20px;}

.c-step-marker { display: flex; flex-direction: column; align-items: center;}
.c-s-num { width: 40px; height: 40px; border-radius: 50%; background: #111; border: 2px solid var(--purple); display: flex; justify-content: center; align-items: center; color: white; font-weight: 800; font-family: monospace; z-index: 2; box-shadow: 0 0 10px rgba(183,133,255,0.3);}
.c-s-line { width: 2px; flex-grow: 1; background: linear-gradient(to bottom, var(--purple), transparent); margin-top: 5px; margin-bottom: 5px;}
.last-line { background: transparent; }

.c-step-content { padding-bottom: 30px;}
.c-step-content h4 { color: white; font-size: 1.2rem; margin-bottom: 10px;}
.c-step-content p { color: #999; font-size: 0.95rem; line-height: 1.6;}

@media (max-width: 900px) {
  .cy-info-section { grid-template-columns: 1fr; padding: 20px;}
  .cy-what-we-do { padding-right: 0; margin-bottom: 30px;}
}
`;

fs.appendFileSync('style.css', css);
console.log("Appended Cyber Info CSS successfully!");
