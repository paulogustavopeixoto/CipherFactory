
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
        const cycleLen = key * 2 - 2;
        let decoded = new Array(n);

        let index = 0;
        for (let i = 0; i < key; i++) {
            let step = (i === 0 || i === key - 1) ? cycleLen : 2 * (key - i - 1);
            let complementStep = cycleLen - step;
            let pos = i;
            let useStep = true;

            while (pos < n) {
                decoded[pos] = encodedMessage.charAt(index++);
                pos += useStep ? step : complementStep;
                if (step !== complementStep) useStep = !useStep;
            }
        }

        return decoded.join('');
    }
};

module.exports = railFence;
