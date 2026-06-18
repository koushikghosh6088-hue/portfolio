const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const oldFooterCSS = `.new-footer { border-top: 1px solid rgba(255,255,255,0.05); padding: 40px 0; margin-top: 40px; }
.foot-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 0 20px; }
.foot-logo { font-size: 20px; font-weight: 800; color: white; }
.foot-links { display: flex; gap: 24px; flex-wrap: wrap;}
.foot-links a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: color 0.3s; }
.foot-links a:hover { color: white; }
.foot-copy { color: rgba(255,255,255,0.4); font-size: 13px; }
@media (max-width: 600px) { .foot-inner { flex-direction: column; text-align: center; justify-content: center; } }`;

const newFooterCSS = `/* Premium Footer Design */
.new-footer { 
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  border-top: 1px solid rgba(255,255,255,0.05); 
  padding: 60px 0 40px; 
  margin-top: 60px; 
  position: relative;
  overflow: hidden;
}
.new-footer::before {
  content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 50%; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent);
}
.foot-inner { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  flex-wrap: wrap; 
  gap: 30px; 
  padding: 0 40px; 
  max-width: 1200px;
  margin: 0 auto;
}
.foot-logo { 
  font-size: 24px; 
  font-weight: 900; 
  background: linear-gradient(to right, #fff, #aaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}
.foot-links { 
  display: flex; 
  gap: 32px; 
  flex-wrap: wrap;
  background: rgba(255,255,255,0.03);
  padding: 12px 32px;
  border-radius: 40px;
  border: 1px solid rgba(255,255,255,0.05);
}
.foot-links a { 
  color: rgba(255,255,255,0.7); 
  text-decoration: none; 
  font-size: 14px; 
  font-weight: 500;
  transition: all 0.3s; 
}
.foot-links a:hover { 
  color: var(--cyan); 
  text-shadow: 0 0 10px rgba(0,212,255,0.5);
}
.foot-copy { 
  color: rgba(255,255,255,0.4); 
  font-size: 14px; 
}

@media (max-width: 900px) {
  .foot-inner { flex-direction: column; text-align: center; justify-content: center; padding: 0 20px;}
  .foot-links { padding: 12px 20px; gap: 20px;}
}`;

if (css.includes('.new-footer { border-top: 1px solid rgba(255,255,255,0.05);')) {
    // try direct replacement
    css = css.replace(oldFooterCSS, newFooterCSS);
    fs.writeFileSync('style.css', css);
    console.log("Replaced using exact match.");
} else {
    // If exact string match fails, use regex or append it after clearing old
    let lines = css.split('\n');
    let out = [];
    let skipping = false;
    for (let line of lines) {
        if (line.includes('.new-footer {') || line.includes('.foot-inner {') || line.includes('.foot-logo {') || line.includes('.foot-links {') || line.includes('.foot-copy {') || line.includes('.foot-links a {') || line.includes('.foot-links a:hover {') ) {
            skipping = true;
        }
        
        if (line.includes('@media (max-width: 600px) { .foot-inner { flex-direction: column;')) {
            skipping = false;
            continue;
        }

        if (!skipping) {
            out.push(line);
        } else {
            // if we hit an empty line or something else, keep skipping until we clear the block. Actually it's safer to just append the !important to new CSS.
            // Let's just append at the end and override.
        }
    }
    
    // Safer approach: just append to the bottom to override.
    let appendCSS = css + "\n\n/* OVERRIDE FOOTER */\n" + newFooterCSS;
    fs.writeFileSync('style.css', appendCSS);
    console.log("Appended new footer CSS to override old one.");
}
