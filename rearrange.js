const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

function extract(id) {
    const regex = new RegExp('<section [^>]*id="' + id + '"[^>]*>');
    const match = regex.exec(html);
    if (!match) return '';
    let start = match.index;
    
    // Find matching </section> considering nested sections? There shouldn't be nested sections in this layout.
    // I'll just look for the next top-level comment block or next <section id=" to be safe, but actually just </section> is fine if no nested sections.
    // Let's use a simple stack or just find the next <!-- --- to be safer if it has nested sections.
    let end = html.indexOf('</section>', start);
    
    // Wait, the HTML structure might have nested <section>? Let's assume no.
    return html.substring(start, end + 10);
}

const aboutSection = extract('about');
const servicesSection = extract('services');

if (aboutSection && servicesSection) {
    // Remove aboutSection from its original place
    // Note: there are HTML comments before the section, let's just grab from <!-- to </section> if possible.
    const aboutStartComment = html.lastIndexOf('<!-- --------', html.indexOf('<section id="about"'));
    const aboutFull = html.substring(aboutStartComment, html.indexOf('</section>', html.indexOf('<section id="about"')) + 10);
    
    html = html.replace(aboutFull, '');
    
    // Insert after services section
    const servicesEnd = html.indexOf('</section>', html.indexOf('<section id="services"')) + 10;
    
    html = html.substring(0, servicesEnd) + '\n\n' + aboutFull + html.substring(servicesEnd);
    fs.writeFileSync('index.html', html);
    console.log('Successfully rearranged about and services in index.html!');
} else {
    console.log('Could not find sections.');
}

// 2. Add Projects Nav link to all files
const files = ['index.html', 'about.html', 'services.html', 'contact.html'];
for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Replace "Work" with "Projects" in the nav, and make it point to projects.html if not on index.html
    if (file === 'index.html') {
        content = content.replace(/>Work<\/a>/g, '>Projects</a>');
    } else {
        content = content.replace(/href="[^"]*" class="nav-link">Work<\/a>/g, 'href="projects.html" class="nav-link">Projects</a>');
        content = content.replace(/href="[^"]*" class="mbn-item([^>]*)>([\s\S]*?)<span>Work<\/span>/g, 'href="projects.html" class="mbn-item\>\<span>Projects</span>');
    }
    fs.writeFileSync(file, content);
}
console.log('Nav links updated!');
