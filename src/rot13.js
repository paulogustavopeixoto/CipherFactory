
const rot13 = {
    encode: function(message) {
        return message.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const charCode = char.charCodeAt(0);
                // Uppercase letters
                if (charCode >= 65 && charCode <= 90) {
                    return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
                }
                // Lowercase letters
                else if (charCode >= 97 && charCode <= 122) {
                    return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
                }
            }
            return char;
        }).join('');
    },

    decode: function(encodedMessage) {
        // ROT13 encoding and decoding are the same operation.
        return this.encode(encodedMessage);
    }
};

module.exports = rot13;

