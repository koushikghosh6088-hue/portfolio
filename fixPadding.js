const fs = require('fs');

function fixPadding() {
    ['index.html', 'services.html', 'replaceHTML.js'].forEach(file => {
        if (!fs.existsSync(file)) return;
        let text = fs.readFileSync(file, 'utf8');
        
        // Replace "padding: 40px 0" with "padding: 0"
        text = text.replace(/padding:\s*40px\s+0;/g, 'padding: 0;');
        
        fs.writeFileSync(file, text);
        console.log('Fixed padding in', file);
    });
}

fixPadding();
