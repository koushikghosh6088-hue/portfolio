const fs = require('fs');

const original = fs.readFileSync('index_original.html', 'utf-8');
const servicesFile = fs.readFileSync('services.html', 'utf-8');
const contactFile = fs.readFileSync('contact.html', 'utf-8');

function extractSection(content, id) {
    const startRegex = new RegExp('<section [^>]*id="' + id + '"[^>]*>');
    const match = startRegex.exec(content);
    if (!match) return '';
    const startIndex = match.index;
    
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
    return content.substring(startIndex, curr);
}

const newProcess = extractSection(servicesFile, 'process');
const newContact = extractSection(contactFile, 'contact');

let rebuilt = original;

// Replace process
const oldProcess = extractSection(original, 'process');
if (oldProcess) {
    rebuilt = rebuilt.replace(oldProcess, newProcess);
}

// Replace contact
const oldContact = extractSection(original, 'contact');
if (oldContact) {
    rebuilt = rebuilt.replace(oldContact, newContact);
}

fs.writeFileSync('index.html', rebuilt);
console.log('Rebuilt index.html with all sections and new designs!');
