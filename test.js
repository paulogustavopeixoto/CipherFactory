const { encodeVigenere, decodeVigenere } = require('./index');

const message = "This is a secret message.";
const key = "KEY";
const encoded = encodeVigenere(message, key);
console.log("Encoded:", encoded);

const decoded = decodeVigenere(encoded, key);
console.log("Decoded:", decoded);
