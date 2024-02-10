const vigenere = require('./src/vigenereCipher');
const caesar = require('./src/vigenereCipher');

module.exports = {
    encodeVigenere: vigenere.encode,
    decodeVigenere: vigenere.decode,
    encodeCaesar: caesar.encode,
    decodeCaesar: caesar.decode,
  };