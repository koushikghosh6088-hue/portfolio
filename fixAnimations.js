const fs = require('fs');

function processFile(file) {
    let text = fs.readFileSync(file, 'utf8');
    
    // FIX CLIPPING FOR WHATSAPP & AI CHATBOT
    // Replace transform: scale with zoom to fix layout bounds!
    text = text.replace(/transform: scale\(0\.7\); transform-origin: center;/g, 'zoom: 0.75;');

    // CARD 1: WEBSITE DESIGN
    // We put the website mockup image inside the browser body, scrolling!
    let browserRegex = /<div class="mb-body">([\s\S]*?)<div class="mb-cursor">/g;
    text = text.replace(browserRegex, `<div class="mb-body" style="overflow: hidden; position: relative; padding: 0;">\n                <img src="website_mockup.png" style="width: 100%; object-fit: cover; animation: slideUpAnim 15s infinite alternate ease-in-out;">\n                <div class="mb-cursor">`);

    // CARD 4: MOBILE APP
    // We put the mobile app mockup inside the iphone screen, scrolling!
    let iphoneRegex = /<div class="mi-scroll">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
    text = text.replace(iphoneRegex, `<div class="mi-scroll" style="padding: 0;">\n          <img src="mobile_app_mockup.png" style="width: 100%; object-fit: cover; animation: slideUpAnim 15s infinite alternate ease-in-out;">\n        </div>\n      </div>\n    </div>`);

    // CARD 5: DASHBOARD
    // Replace dashboard contents with zooming dashboard graphic
    let dashRegex = /<div class="mock-dash advanced">([\s\S]*?)<div class="mock-glow-orb/g;
    text = text.replace(dashRegex, `<div class="mock-dash advanced" style="overflow: hidden; padding: 0; position: relative;">\n            <img src="dashboard_mockup.png" style="position: absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover; opacity: 0.9; animation: slowZoomAnim 10s infinite alternate ease-in-out;">\n            <div class="mock-glow-orb`);

    // CARD 6: AI PIPELINE
    // Replace pipeline contents with zooming pipeline graphic + extra glow orbs
    let pipeRegex = /<div class="mock-pipe advanced">([\s\S]*?)<div class="mock-glow-orb/g;
    text = text.replace(pipeRegex, `<div class="mock-pipe advanced" style="overflow: hidden; padding: 0; position: relative; display: flex; justify-content: center; align-items: center;">\n            <img src="ai_pipeline_mockup.png" style="position: absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover; opacity: 0.9; animation: slowZoomAnim 12s infinite alternate ease-in-out;">\n            <div class="mock-glow-orb orb-purple" style="animation: floatAnim 4s infinite ease-in-out;"></div>\n            <div class="mock-glow-orb orb-cyan" style="animation: floatAnim 6s infinite ease-in-out reverse;"></div>\n            <div class="mock-glow-orb`);

    fs.writeFileSync(file, text);
    console.log('Fixed ' + file);
}

['index.html', 'services.html', 'replaceHTML.js'].forEach(processFile);
