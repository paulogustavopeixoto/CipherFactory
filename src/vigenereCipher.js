
const vigenere = {
    encode: function(message, key) {
        let encoded = '';
        for (let i = 0, j = 0; i < message.length; i++) {
            const c = message.charAt(i);
            if (c.match(/[a-z]/i)) {
                const code = message.toUpperCase().charCodeAt(i) - 'A'.charCodeAt(0);
                const shift = key.toUpperCase().charCodeAt(j % key.length) - 'A'.charCodeAt(0);
                encoded += String.fromCharCode(((code + shift) % 26) + 'A'.charCodeAt(0));
                j++;
            } else {
                encoded += c;
            }
        }
        return encoded;
    },

    decode: function(encodedMessage, key) {
        let decoded = '';
        for (let i = 0, j = 0; i < encodedMessage.length; i++) {
            const c = encodedMessage.charAt(i);
            if (c.match(/[a-z]/i)) {
                const code = encodedMessage.charCodeAt(i) - 'A'.charCodeAt(0);
                const shift = key.toUpperCase().charCodeAt(j % key.length) - 'A'.charCodeAt(0);
                decoded += String.fromCharCode(((code - shift + 26) % 26) + 'A'.charCodeAt(0));
                j++;
            } else {
                decoded += c;
            }
        }
        return decoded;
    }
};

module.exports = vigenere;

