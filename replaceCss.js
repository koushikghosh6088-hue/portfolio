const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf-8');

const startIdx = css.indexOf('/* ══════════════════════════════\r\n   PROCESS SECTION');
const startIdxFallback = css.indexOf('/* ══════════════════════════════\n   PROCESS SECTION');
const endIdx = css.indexOf('/* ══════════════════════════════', Math.max(startIdx, startIdxFallback) + 10);

if ((startIdx !== -1 || startIdxFallback !== -1) && endIdx !== -1) {
    const s = startIdx !== -1 ? startIdx : startIdxFallback;
    const newCSS = `/* ══════════════════════════════
   TIMELINE SECTION (Process)
══════════════════════════════ */
.timeline-container { position: relative; max-width: 1000px; margin: 4rem auto; padding: 2rem 0; }
.timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: rgba(255,255,255,0.05); transform: translateX(-50%); border-radius: 2px; }
.timeline-progress { position: absolute; top: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(180deg, var(--cyan), var(--purple)); box-shadow: 0 0 15px var(--cyan); border-radius: 2px; }
.timeline-item { position: relative; width: 50%; padding: 2rem; margin-bottom: 2rem; }
.timeline-item.left { left: 0; padding-right: 4rem; text-align: right; }
.timeline-item.right { left: 50%; padding-left: 4rem; text-align: left; }
.timeline-dot { position: absolute; top: 3rem; width: 24px; height: 24px; background: var(--dark-1); border: 4px solid var(--cyan); border-radius: 50%; z-index: 2; box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); transition: transform 0.3s; }
.timeline-item:hover .timeline-dot { transform: scale(1.3); background: var(--cyan); }
.timeline-item.left .timeline-dot { right: -12px; }
.timeline-item.right .timeline-dot { left: -12px; }
.timeline-content { padding: 2.5rem; position: relative; border-radius: var(--radius-lg); overflow: hidden; }
.step-num-glow { font-family: var(--font-disp); font-size: 5rem; font-weight: 900; position: absolute; top: -10px; opacity: 0.05; background: linear-gradient(to bottom, #fff, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent; pointer-events: none; }
.timeline-item.left .step-num-glow { right: 10px; }
.timeline-item.right .step-num-glow { left: 10px; }
.timeline-content h3 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--cyan); }
.timeline-content p { color: var(--text-2); line-height: 1.7; }
@media (max-width: 768px) {
  .timeline-container { margin: 2rem 0; } .timeline-line { left: 30px; }
  .timeline-item { width: 100%; padding-left: 80px !important; padding-right: 20px !important; text-align: left !important; }
  .timeline-item.left, .timeline-item.right { left: 0; }
  .timeline-item.left .timeline-dot, .timeline-item.right .timeline-dot { left: 18px; right: auto; }
  .timeline-item.left .step-num-glow { right: auto; left: 10px; }
}

`;
    css = css.substring(0, s) + newCSS + css.substring(endIdx);
    fs.writeFileSync('style.css', css);
    console.log("CSS Replaced successfully!");
} else {
    console.log("Section not found!", startIdx, startIdxFallback, endIdx);
}
