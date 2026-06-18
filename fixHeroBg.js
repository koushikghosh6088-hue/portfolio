const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Ensure .hero is transparent
css = css.replace(/\.hero\s*{([^}]*?)background-color:\s*var\(--dark\);/g, '.hero {$1background-color: transparent !important;');

// Add .hero to the list of transparent sections
css = css.replace(/\.o-section, \.services-new-section, \.about-section, \.technology-section, #portfolio {/g, '.o-section, .services-new-section, .about-section, .technology-section, #portfolio, .hero {');

fs.writeFileSync('style.css', css);
console.log("Made .hero transparent");
