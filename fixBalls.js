const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// The issue is that radial gradients were using 100% opacity hex colors
// which looked fine with filter: blur(100px), but look like solid "balls" without it.
// We replace them with rgba() equivalents at 40% opacity.

const replacements = [
  { old: 'radial-gradient(circle, #8B5CF6, transparent 70%)', new: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)' },
  { old: 'radial-gradient(circle, #25D366, transparent 70%)', new: 'radial-gradient(circle, rgba(37, 211, 102, 0.4), transparent 70%)' },
  { old: 'radial-gradient(circle, #f97316, transparent 70%)', new: 'radial-gradient(circle, rgba(249, 115, 22, 0.4), transparent 70%)' },
  { old: 'radial-gradient(circle, #06b6d4, transparent 70%)', new: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)' },
  { old: 'radial-gradient(circle, #ec4899, transparent 70%)', new: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent 70%)' },
  { old: 'radial-gradient(circle, #eab308, transparent 70%)', new: 'radial-gradient(circle, rgba(234, 179, 8, 0.4), transparent 70%)' }
];

let replaced = 0;
replacements.forEach(rep => {
  // Use regex with global flag to replace all instances
  // Because the string contains parentheses and hash, we should construct a safe regex
  const safeOld = rep.old.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
  const regex = new RegExp(safeOld, 'g');
  
  // also do string replace just in case
  const count = (css.match(regex) || []).length;
  if(count > 0) {
    css = css.replace(regex, rep.new);
    replaced += count;
  }
});

// Since the user pointed out the services section specifically, there might be other balls.
// Look at the screenshot: The "balls" are in the Services section behind the dashboard/mobile mockups.
// In rebuildOverhaul.js, those might have been inline styles or other specific classes.
// Wait, the services section has:
// .ind-glow-purple, etc. which we just fixed.
// What about .s-mockup-wrap::before in services?
// Let's add a global fix for any massive pseudo-element that has a solid background.
// Actually, the replacements above cover `#8B5CF6` which is the exact purple ball shown in the screenshots!
// The screenshots show a solid purple circle, a solid blue circle, etc.
// The blue circle is probably `#06b6d4` or `rgba(0,102,255,1)`.
// Let's also check for `#0066ff` or similar.

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Fixed ' + replaced + ' hard glowing balls.');
