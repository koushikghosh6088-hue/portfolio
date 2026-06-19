const fs = require('fs');

let js = fs.readFileSync('main.js', 'utf8');

js = js.replace(/const indBtns = document\.querySelectorAll\('\.p-ind-btn'\);/g, "const indBtns = document.querySelectorAll('#industries .p-ind-btn');");
js = js.replace(/const indPanels = document\.querySelectorAll\('\.p-ind-panel'\);/g, "const indPanels = document.querySelectorAll('#industries .p-ind-panel');");

fs.writeFileSync('main.js', js);
console.log("Fixed main.js industry selectors");
