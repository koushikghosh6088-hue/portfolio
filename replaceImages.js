const fs = require('fs');

const img1 = `<img src="website_mockup.png" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; opacity: 0.9; transition: transform 0.4s ease;" class="hover-zoom">`;
const img4 = `<img src="mobile_app_mockup.png" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; opacity: 0.9; transition: transform 0.4s ease;" class="hover-zoom">`;
const img5 = `<img src="dashboard_mockup.png" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; opacity: 0.9; transition: transform 0.4s ease;" class="hover-zoom">`;
const img6 = `<img src="ai_pipeline_mockup.png" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; opacity: 0.9; transition: transform 0.4s ease;" class="hover-zoom">`;

function processFile(file) {
    let text = fs.readFileSync(file, 'utf8');
    
    // Website Design
    text = text.replace(/<div class="mock-browser advanced redesigned">[\s\S]*?<div class="mock-glow-orb/g, `${img1}\n            <div class="mock-glow-orb`);
    // Mobile App
    text = text.replace(/<div class="mock-iphone">[\s\S]*?<div class="mock-glow-orb/g, `${img4}\n            <div class="mock-glow-orb`);
    // Dashboard
    text = text.replace(/<div class="mock-dash advanced">[\s\S]*?<div class="mock-glow-orb/g, `${img5}\n            <div class="mock-glow-orb`);
    // Pipeline
    text = text.replace(/<div class="mock-pipe advanced">[\s\S]*?<div class="mock-glow-orb/g, `${img6}\n            <div class="mock-glow-orb`);

    fs.writeFileSync(file, text);
    console.log('Updated ' + file);
}

['index.html', 'services.html', 'replaceHTML.js'].forEach(processFile);
