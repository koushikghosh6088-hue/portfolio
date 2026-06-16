const fs = require('fs');

const subpages = ['services.html', 'projects.html', 'about.html', 'contact.html'];

subpages.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf-8');
    
    // In subpages, change #about, #services, etc. to index.html#about, etc.
    // Except for the ones that we want to go to dedicated pages? 
    // Actually, index.html#... is perfectly fine for everything.
    html = html.replace(/href="#about"/g, 'href="index.html#about"');
    html = html.replace(/href="#services"/g, 'href="index.html#services"');
    html = html.replace(/href="#showcase"/g, 'href="index.html#showcase"');
    html = html.replace(/href="#portfolio"/g, 'href="index.html#portfolio"');
    html = html.replace(/href="#how-it-works"/g, 'href="index.html#how-it-works"');
    html = html.replace(/href="#pricing"/g, 'href="index.html#pricing"');
    html = html.replace(/href="#contact"/g, 'href="index.html#contact"');
    
    fs.writeFileSync(file, html);
});

// Also, wait, what does index.html link to for Projects?
let indexHtml = fs.readFileSync('index.html', 'utf-8');
// Make sure "Projects" points to #portfolio in index.html to maintain smooth scroll
indexHtml = indexHtml.replace(/href="projects.html" class="nav-link">Projects<\/a>/g, 'href="#portfolio" class="nav-link">Projects</a>');
indexHtml = indexHtml.replace(/href="projects.html" class="mbn-item(.*?)>([\s\S]*?)<span>Projects<\/span>/g, 'href="#portfolio" class="mbn-item\>\<span>Projects</span>');
fs.writeFileSync('index.html', indexHtml);

console.log('Fixed navigation in all subpages!');
