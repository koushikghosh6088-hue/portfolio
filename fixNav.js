const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Replace top navigation links
html = html.replace(/<a href="about.html" class="nav-link">About<\/a>/g, '<a href="#about" class="nav-link">About</a>');
html = html.replace(/<a href="services.html" class="nav-link">Services<\/a>/g, '<a href="#services" class="nav-link">Services</a>');
html = html.replace(/<a href="services.html#showcase" class="nav-link">Demos<\/a>/g, '<a href="#showcase" class="nav-link">Demos</a>');
html = html.replace(/<a href="services.html#showcase" class="nav-link">Work<\/a>/g, '<a href="#portfolio" class="nav-link">Work</a>');
html = html.replace(/<a href="services.html#pricing" class="nav-link">Pricing<\/a>/g, '<a href="#pricing" class="nav-link">Pricing</a>');
html = html.replace(/<a href="contact.html" class="nav-link">Contact<\/a>/g, '<a href="#contact" class="nav-link">Contact</a>');

// Replace mobile bottom nav links
html = html.replace(/<a href="about.html" class="mbn-item(.*?)">/g, '<a href="#about" class="mbn-item\">');
html = html.replace(/<a href="services.html" class="mbn-item(.*?)">/g, '<a href="#services" class="mbn-item\">');
html = html.replace(/<a href="contact.html" class="mbn-item(.*?)">/g, '<a href="#contact" class="mbn-item\">');

fs.writeFileSync('index.html', html);
console.log('Fixed nav links!');
