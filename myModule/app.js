'use strict';

const Enigma = require('./enigma');
const eng = new Enigma('harisbeg-key');

let encodedString = eng.encode("Don't worry, be happy!");
let decodedString = eng.decode(encodedString);

console.log('Encoded version of String = ' + encodedString);
console.log('Decoded version of String = ' + decodedString);
