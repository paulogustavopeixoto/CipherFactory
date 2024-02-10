const { vigenere, caesar, atbash, railFence, rot13, playfair } = require('./index');

const message = "This is a secret message.";
const keyVigenere = "Paulo";
const shiftCaesar = 5;
const keyRailFence = 6;

// Vigenere Test
const encodedVigenere = vigenere.encode(message, keyVigenere);
console.log("Encoded Vigenere:", encodedVigenere);

const decodedVigenere = vigenere.decode(encodedVigenere, keyVigenere);
console.log("Decoded Vigenere:", decodedVigenere);

// Caesar Test
const encodedCaesar = caesar.encode(message, shiftCaesar);
console.log("Encoded Caesar:", encodedCaesar);

const decodedCaesar = caesar.decode(encodedCaesar, shiftCaesar);
console.log("Decoded Caesar:", decodedCaesar);

// Atbash Test
const encodedAtbash = atbash.encode(message);
console.log("Encoded Atbash:", encodedAtbash);

const decodedAtbash = atbash.decode(encodedAtbash);
console.log("Decoded Atbash:", decodedAtbash);

// RailFence Test
const encodedRailFence = railFence.encode(message, keyRailFence);
console.log("Encoded RailFence:", encodedRailFence);

const decodedRailFence = railFence.decode(encodedRailFence, keyRailFence);
console.log("Decoded RailFence:", decodedRailFence);

// Rot13 Test
const encodedRot13 = rot13.encode(message);
console.log("Encoded Rot13:", encodedRot13);

const decodedRot13 = rot13.decode(encodedRot13);
console.log("Decoded Rot13:", decodedRot13);

// Playfair Test
const encodedPlayfair = playfair.encode(message, keyVigenere);
console.log("Encoded Playfair:", encodedPlayfair);

const decodedPlayfair = playfair.decode(encodedPlayfair, keyVigenere);
console.log("Decoded Playfair:", decodedPlayfair);

