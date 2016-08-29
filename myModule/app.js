'use strict';

const Enigma = require('./enigma');
const eng = new Enigma('harisbeg-key');

let encodedString = eng.encode("Don't worry, be happy!");
let decodedString = eng.decode(encodedString);
let qr = eng.qrgen("http://www.npmjs.com", "outImage.png");
qr ? console.log("Success: QR Code Image created!") : console.log("Error: QR Code failed");

console.log('Encoded version of String = ' + encodedString);
console.log('Decoded version of String = ' + decodedString);
