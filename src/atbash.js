
const atbash = {
    encode: function(message) {
        let encoded = '';
        for (let i = 0; i < message.length; i++) {
            const c = message[i];
            if (c.match(/[a-z]/i)) {
                const isUpperCase = c === c.toUpperCase();
                const baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                const code = c.charCodeAt(0);
                const shifted = baseCode + (25 - (code - baseCode));
                encoded += String.fromCharCode(shifted);
            } else {
                encoded += c;
            }
        }
        return encoded;
    },

    decode: function(encodedMessage) {
        // The Atbash cipher is symmetric, so decoding is the same as encoding
        return this.encode(encodedMessage);
    }
};

module.exports = atbash;
