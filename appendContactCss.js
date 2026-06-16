const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf-8');

const newCSS = `

/* ══════════════════════════════
   FUTURISTIC CONTACT PAGE
══════════════════════════════ */
.contact-container-futuristic {
  position: relative; z-index: 2;
  max-width: 1200px; padding: 4rem 2rem; margin: 0 auto;
}
.contact-grid-futuristic {
  display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; margin-top: 3rem;
}
.console-card {
  background: rgba(3,7,18,0.6); backdrop-filter: blur(20px);
  border: 1px solid rgba(0,212,255,0.15); border-radius: var(--radius-md);
  padding: 2rem; margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}
.console-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,212,255,0.1); border-color: var(--cyan); }
.cc-icon { font-size: 2rem; background: rgba(0,212,255,0.1); padding: 1rem; border-radius: 50%; color: var(--cyan); }
.cc-content span { font-size: 0.8rem; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.05em; }
.cc-content strong { display: block; font-size: 1.2rem; color: white; margin: 0.3rem 0; font-family: var(--font-disp); letter-spacing: 0.05em; }
.cc-content p { font-size: 0.9rem; color: #a1a1aa; margin-bottom: 1rem; }
.cc-btn { background: rgba(255,255,255,0.05); color: white; border: 1px solid rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.3s; text-decoration: none; display: inline-block; }
.cc-btn:hover { background: var(--cyan); color: #000; border-color: var(--cyan); }

.console-promise { background: rgba(0,0,0,0.4); border: 1px dashed rgba(255,255,255,0.1); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 2rem; }
.promise-header { color: var(--cyan); font-family: var(--font-disp); text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.9rem; margin-bottom: 1rem; }
.console-promise ul { list-style: none; padding: 0; }
.console-promise li { display: flex; align-items: center; gap: 10px; color: var(--text-2); font-size: 0.9rem; margin-bottom: 0.8rem; }
.p-dot { width: 8px; height: 8px; border-radius: 50%; background: #00ff88; box-shadow: 0 0 8px #00ff88; }
.p-dot.cyan { background: #00d4ff; box-shadow: 0 0 8px #00d4ff; }
.p-dot.purple { background: #b000ff; box-shadow: 0 0 8px #b000ff; }

.contact-right-glass {
  background: rgba(3,7,18,0.7); backdrop-filter: blur(30px);
  border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-lg);
  padding: 3rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  position: relative; overflow: hidden;
}
.contact-right-glass::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--cyan), transparent); }

.ff-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
.ff-header h3 { font-family: var(--font-disp); color: white; letter-spacing: 0.05em; }
.ff-status { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: #00ff88; text-transform: uppercase; letter-spacing: 0.1em; }
.pulse-dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; animation: pulse 1.5s infinite; }

.ff-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
.ff-group { position: relative; }
.ff-group.full-width { margin-bottom: 2rem; }
.futuristic-form input, .futuristic-form select, .futuristic-form textarea {
  width: 100%; background: rgba(0,0,0,0.3); border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 1.2rem 1rem 0.5rem 1rem; color: white; font-family: var(--font-body); font-size: 1rem;
  transition: all 0.3s;
}
.futuristic-form select { appearance: none; color: #a1a1aa; }
.futuristic-form select option { background: var(--dark-1); color: white; }
.futuristic-form textarea { resize: vertical; min-height: 100px; }
.futuristic-form input:focus, .futuristic-form select:focus, .futuristic-form textarea:focus { outline: none; background: rgba(0,212,255,0.03); }

.futuristic-form label {
  position: absolute; left: 1rem; top: 1rem; font-size: 0.9rem; color: #a1a1aa; transition: all 0.3s; pointer-events: none;
}
.futuristic-form input:focus ~ label, .futuristic-form input:not(:placeholder-shown) ~ label,
.futuristic-form textarea:focus ~ label, .futuristic-form textarea:not(:placeholder-shown) ~ label {
  top: 0.3rem; font-size: 0.7rem; color: var(--cyan);
}
.futuristic-form select ~ label { top: 0.3rem; font-size: 0.7rem; color: var(--cyan); }

.ff-border { position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: var(--cyan); transition: width 0.4s ease; }
.futuristic-form input:focus ~ .ff-border, .futuristic-form select:focus ~ .ff-border, .futuristic-form textarea:focus ~ .ff-border { width: 100%; box-shadow: 0 0 10px var(--cyan); }

.ff-submit { width: 100%; justify-content: center; padding: 1.2rem; font-size: 1.1rem; }

@media (max-width: 900px) {
  .contact-grid-futuristic { grid-template-columns: 1fr; gap: 3rem; }
  .ff-row { grid-template-columns: 1fr; gap: 1.5rem; }
  .contact-right-glass { padding: 2rem 1.5rem; }
}

`;

fs.appendFileSync('style.css', newCSS);
console.log("Appended successfully");
