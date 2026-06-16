const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Function to reliably extract a section and its preceding comment block
function extractSection(id) {
    const sectionTag = `<section id="${id}"`;
    const sectionIndex = html.indexOf(sectionTag);
    if (sectionIndex === -1) return '';

    // Find the comment block right before this section
    const commentStart = html.lastIndexOf('<!-- ════════', sectionIndex);
    
    // Find the closing tag of this section
    // We assume sections are not deeply nested with other <section> tags that have id attributes
    // To be safe, we'll find the next '<!-- ════════' block or '</main>' or '<footer'
    let endBoundary = html.length;
    
    const nextComment = html.indexOf('<!-- ════════', sectionIndex + 10);
    if (nextComment !== -1) endBoundary = Math.min(endBoundary, nextComment);
    
    const footer = html.indexOf('<footer', sectionIndex);
    if (footer !== -1) endBoundary = Math.min(endBoundary, footer);
    
    return html.substring(commentStart, endBoundary).trim();
}

// Extract base layout parts
const navEnd = html.indexOf('</nav>') + 6;
const headerPart = html.substring(0, navEnd);

const footerStart = html.lastIndexOf('<!-- ════════', html.indexOf('<footer'));
const footerPart = html.substring(footerStart);

// Build Pages
function createPage(filename, sectionsHTML) {
    const pageHTML = headerPart + '\n<main>\n' + sectionsHTML + '\n</main>\n' + footerPart;
    fs.writeFileSync(filename, pageHTML);
    console.log(`Created ${filename}`);
}

// 1. services.html
const servicesSec = extractSection('services');
createPage('services.html', servicesSec);

// 2. projects.html (Should contain portfolio)
const portfolioSec = extractSection('portfolio');
createPage('projects.html', portfolioSec);

// 3. about.html
const aboutSec = extractSection('about');
createPage('about.html', aboutSec);

console.log('Successfully rebuilt dedicated pages!');
