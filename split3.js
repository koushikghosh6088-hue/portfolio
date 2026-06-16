const fs = require('fs');

const content = fs.readFileSync('index_original.html', 'utf-8');

const sAbout = content.indexOf('       ABOUT SECTION');
const sServices = content.indexOf('       SERVICES SECTION');
const sShowcase = content.indexOf('       SHOWCASE / PORTFOLIO SECTION');
const sProcess = content.indexOf('       HOW WE WORK (PROCESS) SECTION');
const sPricing = content.indexOf('       PRICING SECTION');
const sContact = content.indexOf('       CONTACT & CTA SECTION');
const sFooter = content.indexOf('       FOOTER');

const iAbout = content.lastIndexOf('<!--', sAbout);
const iServices = content.lastIndexOf('<!--', sServices);
const iShowcase = content.lastIndexOf('<!--', sShowcase);
const iProcess = content.lastIndexOf('<!--', sProcess);
const iPricing = content.lastIndexOf('<!--', sPricing);
const iContact = content.lastIndexOf('<!--', sContact);
const iFooter = content.lastIndexOf('<!--', sFooter);

const header = content.substring(0, iAbout);
const about_section = content.substring(iAbout, iServices);
const services_section = content.substring(iServices, iShowcase);
const showcase_section = content.substring(iShowcase, iProcess);
const process_section = content.substring(iProcess, iPricing);
const pricing_section = content.substring(iPricing, iContact);
const contact_section = content.substring(iContact, iFooter);
const footer = content.substring(iFooter);

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

const sHome = newHeader.indexOf('       HERO SECTION');
let subHeader = newHeader;
if (sHome !== -1) {
    const iHome = newHeader.lastIndexOf('<!--', sHome);
    const eHome = newHeader.indexOf('</section>', iHome) + 10;
    subHeader = newHeader.substring(0, iHome) + newHeader.substring(eHome);
}

const finalSubHeader = subHeader.replace('<body>', '<body class="subpage">');

fs.writeFileSync('index.html', newHeader + newFooter);
fs.writeFileSync('about.html', finalSubHeader + about_section + newFooter);
fs.writeFileSync('services.html', finalSubHeader + services_section + showcase_section + process_section + pricing_section + newFooter);
fs.writeFileSync('contact.html', finalSubHeader + contact_section + newFooter);

console.log("Split 3 successfully!");
