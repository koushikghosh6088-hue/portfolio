const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const regex = /<([a-z]+)[^>]*id=\"([^\"]+)\"[^>]*>/ig;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(match[1] + ' id="' + match[2] + '"');
}
