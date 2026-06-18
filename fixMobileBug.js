const fs = require('fs');

const newMobileHTML = `
<div class="mock-iphone">
  <div class="mi-island"></div>
  <div class="mi-screen" style="background: #000; padding: 0;">
    <img src="mobile_app_mockup.png" style="width: 100%; animation: appScrollImage 12s infinite linear;" alt="App Mockup" onerror="this.src='https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'" />
  </div>
</div>
`;

function fixMobileBug() {
    ['index.html', 'services.html', 'replaceHTML.js'].forEach(file => {
        if (!fs.existsSync(file)) return;
        let text = fs.readFileSync(file, 'utf8');

        // We need to match the entire corrupted block from <div class="mock-iphone"> to the last </div> of the mi-scroll part.
        // It currently looks like:
        // <div class="mock-iphone">
        // ... new img stuff ...
        // </div>
        //      <div class="mi-search">Search...</div>
        // ...
        // </div>
        // </div>
        // </div>
        
        let brokenRegex = /<div class="mock-iphone">[\s\S]*?<div class="mi-search">Search\.\.\.<\/div>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
        
        // Let's use a simpler, more robust way:
        // Find the index of '<div class="mock-iphone">'
        let idx1 = text.indexOf('<div class="mock-iphone">');
        if (idx1 !== -1) {
            // Find the index of the glow orb which comes after the iphone container
            let idx2 = text.indexOf('<div class="mock-glow-orb', idx1);
            if (idx2 !== -1) {
                // We want to replace everything from idx1 up to idx2 (exclusive)
                let before = text.substring(0, idx1);
                let after = text.substring(idx2);
                text = before + newMobileHTML + '\n            ' + after;
                
                fs.writeFileSync(file, text);
                console.log('Fixed', file);
            }
        }
    });
}

fixMobileBug();
