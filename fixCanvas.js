const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// The ultimate fix for "why it goes white"
// Force the root darks back to solid
css = css.replace(/--bg:\s*rgba[^;]+;/g, '--bg: #030712;');
css = css.replace(/--dark:\s*rgba[^;]+;/g, '--dark: #070b14;');

// Re-enforce just in case
css = css.replace(/--bg:\s*#030712;/g, '--bg: #030712;');

// Hide the .data-line permanently in CSS since the user hates them
css += `
/* Hide the vertical line animations globally as requested */
.data-line { display: none !important; }
`;

fs.writeFileSync('style.css', css);
console.log("Fixed white canvas bug and removed data lines");
