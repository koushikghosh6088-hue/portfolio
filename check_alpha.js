const fs = require('fs');

const buffer = fs.readFileSync('new_logo.png');
// PNG signature is 8 bytes, then IHDR chunk
// IHDR data starts at byte 16
// Color type is at byte 25
const colorType = buffer[25];

console.log('Color Type:', colorType);
if (colorType === 6 || colorType === 4 || colorType === 3) {
  console.log('Image likely has transparency (Alpha channel or palette).');
} else {
  console.log('Image does NOT have transparency (Color type: ' + colorType + ').');
}
