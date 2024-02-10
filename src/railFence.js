
const railFence = {
    encode: function(message, key) {
        if (key < 2) return message;

        let encoded = '';
        const n = message.length;
        const cycleLen = key * 2 - 2;

        for (let i = 0; i < key; i++) {
            for (let j = 0; j + i < n; j += cycleLen) {
                encoded += message.charAt(j + i);
                if (i !== 0 && i !== key - 1 && j + cycleLen - i < n) {
                    encoded += message.charAt(j + cycleLen - i);
                }
            }
        }

        return encoded;
    },

    decode: function(encodedMessage, key) {
        if (key < 2) return encodedMessage;

        const n = encodedMessage.length;
        let decoded = Array(n).fill('');
        let k = 0;

        for (let r = 0; r < key; r++) {
            let index = r;
            let down = true; // Direction flag
            while (index < n) {
                decoded[index] = encodedMessage[k++];
                if (r === 0 || r === key - 1) { // Edges move straight down/up
                    index += 2 * (key - 1);
                } else { // Zigzag pattern
                    index += down ? 2 * (key - 1 - r) : 2 * r;
                    down = !down; // Change direction
                }
            }
        }

        return decoded.join('');
    }
};

module.exports = railFence;
