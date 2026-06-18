const fs = require('fs');

// 1. Eradicate data-line from HTML
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<div class="data-line dl-\d"><\/div>\n?/g, '');
html = html.replace(/<div class="data-line.*<\/div>/g, '');
fs.writeFileSync('index.html', html);
console.log("Removed data-line from HTML");

// 2. Force dark backgrounds everywhere and wipe out any stray rgba opacity
let css = fs.readFileSync('style.css', 'utf8');

// Ensure root variables are solid darks
css = css.replace(/--o-bg:\s*rgba\(8,\s*11,\s*20,\s*0\.3\);/g, '--o-bg: #080B14;');
css = css.replace(/--o-surf:\s*rgba\(15,\s*21,\s*38,\s*0\.4\);/g, '--o-surf: #0F1526;');

// If body has var(--dark) but it's somehow failing, force it
css = css.replace(/body\s*{[^}]*background:\s*var\(--dark\)[^}]*}/g, (match) => {
  return match.replace(/background:\s*var\(--dark\);/, 'background: #030712 !important;');
});

// The site-bg opacity 0.8 is fine, but make sure it has no background color
css = css.replace(/\.site-bg\s*{([^}]*)}/g, (match, p1) => {
  if (!p1.includes('background-color')) {
    return `.site-bg {${p1} background-color: transparent !important; }`;
  }
  return match;
});

// Since we want the hero background EVERYWHERE, we MUST make the sections transparent.
// But if they are transparent and the body is solid #030712, it will be dark!
// There is absolutely no reason it should be white.
// Let's force transparency on all section classes.
css += `
/* Force transparency on all main sections so site-bg shows through */
.o-section, .services-new-section, .about-section, .technology-section, #portfolio {
  background: transparent !important;
  background-color: transparent !important;
}

/* Force body and html to be solid dark black/navy to prevent white washouts */
html, body {
  background-color: #030712 !important;
  background: #030712 !important;
}
`;

fs.writeFileSync('style.css', css);
console.log("Forced dark backgrounds and transparent sections");
