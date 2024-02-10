
const rot13 = {
    encode: function(message) {
        // ROT13 doesn't use a key. The implementation can directly encode and decode.
    },

    decode: function(encodedMessage) {
        // ROT13 encoding and decoding are the same operation.
        return this.encode(encodedMessage);
    }
};

module.exports = rot13;
