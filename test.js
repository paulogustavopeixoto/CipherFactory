const { vigenere, caesar, atbash } = require('./index');

const message = "This is a secret message.";
const keyVigenere = "Paulo";
const shiftCaesar = 5;

const encodedVigenere = vigenere.encode(message, keyVigenere);
console.log("Encoded:", encodedVigenere);

const decodedVigenere = vigenere.decode(encodedVigenere, keyVigenere);
console.log("Decoded:", decodedVigenere);

const encodedCaesar = caesar.encode(message, shiftCaesar);
console.log("Encoded:", encodedCaesar);

const decodedCaesar = caesar.decode(encodedCaesar, shiftCaesar);
console.log("Decoded:", decodedCaesar);

const encodedAtbash = atbash.encode(message);
console.log("Encoded:", encodedAtbash);

const decodedAtbash = atbash.decode(encodedAtbash);
console.log("Decoded:", decodedAtbash);