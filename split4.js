const fs = require('fs');
const content = fs.readFileSync('index_original.html', 'utf-8');

function getSection(id) {
    const startRegex = new RegExp('<section [^>]*id="' + id + '"[^>]*>');
    const match = startRegex.exec(content);
    if (!match) return '';
    const startIndex = match.index;
    
    // Find matching </section>
    let depth = 1;
    let curr = startIndex + match[0].length;
    while(depth > 0 && curr < content.length) {
        const nextStart = content.indexOf('<section', curr);
        const nextEnd = content.indexOf('</section>', curr);
        
        if (nextEnd === -1) break;
        
        if (nextStart !== -1 && nextStart < nextEnd) {
            depth++;
            curr = nextStart + 8;
        } else {
            depth--;
            curr = nextEnd + 10;
        }
    }
    
    // Get preceding comment if exists
    let commentStart = content.lastIndexOf('<!-- --------', startIndex);
    if (commentStart !== -1 && startIndex - commentStart < 200) {
        return content.substring(commentStart, curr) + '\n\n';
    }
    return content.substring(startIndex, curr) + '\n\n';
}

const headerEnd = content.indexOf('<section id="about"');
const commentStart = content.lastIndexOf('<!-- --------', headerEnd);
const header = content.substring(0, commentStart !== -1 ? commentStart : headerEnd);

const footerStart = content.indexOf('<!-- --------', content.indexOf('<footer'));
const footer = content.substring(footerStart !== -1 ? footerStart : content.indexOf('<footer'));

const aboutHtml = getSection('about');
const servicesHtml = getSection('services');
const showcaseHtml = getSection('showcase');
const statsHtml = content.substring(content.lastIndexOf('<!-- --------', content.indexOf('<section class="stats-section"')), content.indexOf('</section>', content.indexOf('<section class="stats-section"')) + 10) + '\n\n';
const processHtml = getSection('process');
const portfolioHtml = getSection('portfolio');
const testimonialsHtml = getSection('testimonials');
const pricingHtml = getSection('pricing');
const contactHtml = getSection('contact');

function updateNav(htmlStr) {
    let s = htmlStr;
    s = s.replace(/<a href="#home" class="nav-link" data-section="home">Home<\/a>/g, '<a href="index.html" class="nav-link">Home</a>');
    s = s.replace(/<a href="#about" class="nav-link" data-section="about">About<\/a>/g, '<a href="about.html" class="nav-link">About</a>');
    s = s.replace(/<a href="#services" class="nav-link" data-section="services">Services<\/a>/g, '<a href="services.html" class="nav-link">Services</a>');
    s = s.replace(/<a href="#showcase" class="nav-link" data-section="showcase">Demos<\/a>/g, '<a href="services.html#showcase" class="nav-link">Demos</a>');
    s = s.replace(/<a href="#portfolio" class="nav-link" data-section="portfolio">Work<\/a>/g, '<a href="services.html#showcase" class="nav-link">Work</a>');
    s = s.replace(/<a href="#pricing" class="nav-link" data-section="pricing">Pricing<\/a>/g, '<a href="services.html#pricing" class="nav-link">Pricing</a>');
    s = s.replace(/<a href="#contact" class="nav-link" data-section="contact">Contact<\/a>/g, '<a href="contact.html" class="nav-link">Contact</a>');
    
    s = s.replace(/<a href="#home" class="mbn-item(.*?)" data-section="home">/g, '<a href="index.html" class="mbn-item$1">');
    s = s.replace(/<a href="#services" class="mbn-item(.*?)" data-section="services">/g, '<a href="services.html" class="mbn-item$1">');
    s = s.replace(/<a href="#about" class="mbn-item(.*?)" data-section="about">/g, '<a href="about.html" class="mbn-item$1">');
    s = s.replace(/<a href="#contact" class="mbn-item(.*?)" data-section="contact">/g, '<a href="contact.html" class="mbn-item$1">');
    return s;
}

const newHeader = updateNav(header);
const newFooter = updateNav(footer);

const sHome = newHeader.indexOf('<!-- ---------------------------------------\r\n       HERO SECTION');
const sHomeFallback = newHeader.indexOf('       HERO SECTION');
let iHome = -1;
if (sHome !== -1) iHome = sHome;
else if (sHomeFallback !== -1) iHome = newHeader.lastIndexOf('<!--', sHomeFallback);

let subHeader = newHeader;
if (iHome !== -1) {
    const eHome = newHeader.indexOf('</section>', iHome) + 10;
    subHeader = newHeader.substring(0, iHome) + newHeader.substring(eHome);
}

const finalSubHeader = subHeader.replace('<body>', '<body class="subpage">');

fs.writeFileSync('index.html', newHeader + newFooter);
fs.writeFileSync('about.html', finalSubHeader + aboutHtml + newFooter);
fs.writeFileSync('services.html', finalSubHeader + servicesHtml + showcaseHtml + statsHtml + processHtml + portfolioHtml + testimonialsHtml + pricingHtml + newFooter);
fs.writeFileSync('contact.html', finalSubHeader + contactHtml + newFooter);

console.log("Split 4 successfully!");
