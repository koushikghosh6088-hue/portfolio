const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const navEnd = html.indexOf('</nav>') + 6;
const nav = html.substring(0, navEnd);

const portStartComment = html.lastIndexOf('<!-- --------', html.indexOf('<section id="portfolio"'));
const portEnd = html.indexOf('</section>', html.indexOf('<section id="portfolio"')) + 10;
const port = html.substring(portStartComment, portEnd);

const testStartComment = html.lastIndexOf('<!-- --------', html.indexOf('<section id="testimonials"'));
const testEnd = html.indexOf('</section>', html.indexOf('<section id="testimonials"')) + 10;
const test = html.substring(testStartComment, testEnd);

const footerStartComment = html.lastIndexOf('<!-- --------', html.indexOf('<footer'));
const footer = html.substring(footerStartComment);

const page = html.substring(0, html.indexOf('</head>')+7) + 
    '\n<body class="subpage">\n' + 
    nav + '\n<main>\n' + port + '\n' + test + '\n</main>\n' + footer;

fs.writeFileSync('projects.html', page);
console.log('projects.html successfully created!');
