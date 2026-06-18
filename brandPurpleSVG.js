const fs = require('fs');
let htmlText = fs.readFileSync('index.html', 'utf8');

// Replace url-encoded teal
htmlText = htmlText.replace(/%2300F5C4/gi, '%238B5CF6');

// Wait, what about inline teal backgrounds inside p-msg-left etc.? 
// e.g., style="background:#d1fae5; border:1px solid #10b981;" 
// That's light green for WhatsApp, which is fine to keep green since WhatsApp is green.
// Same with #DCF8C6. 

fs.writeFileSync('index.html', htmlText);
console.log("Updated URL encoded colors in index.html");
