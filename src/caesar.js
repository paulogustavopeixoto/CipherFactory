
const caesar = {
    encode: function(message, shift) {
        let encoded = '';
        for (let i = 0; i < message.length; i++) {
            const c = message.charAt(i);
            if (c.match(/[a-z]/i)) {
                const base = c.match(/[A-Z]/) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                const code = ((c.charCodeAt(0) - base + shift) % 26) + base;
                encoded += String.fromCharCode(code);
            } else {
                encoded += c;
            }
        }
        return encoded;
    },

    decode: function(encodedMessage, shift) {
        return caesar.encode(encodedMessage, -shift);
    }
};

module.exports = caesar;
