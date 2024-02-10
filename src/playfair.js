
const playfair = {
    createMatrix: function(key) {
        const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // Note: 'J' is omitted
        let matrix = "";
        let seen = new Set();

        // Add key letters to the matrix
        for (let char of key.toUpperCase()) {
            if (!seen.has(char) && alphabet.includes(char)) {
                matrix += char;
                seen.add(char);
            }
        }

        // Fill the remaining spaces in the matrix with the rest of the alphabet
        for (let char of alphabet) {
            if (!seen.has(char)) {
                matrix += char;
            }
        }

        return matrix;
    },

    findPosition: function(matrix, char) {
        const index = matrix.indexOf(char);
        return { row: Math.floor(index / 5), col: index % 5 };
    },

    processDigraph: function(matrix, digraph, encode = true) {
        let [char1, char2] = digraph.map(char => this.findPosition(matrix, char));
        let result = "";

        // Same row: move right (or left for decoding)
        if (char1.row === char2.row) {
            let col1 = (char1.col + (encode ? 1 : 4)) % 5;
            let col2 = (char2.col + (encode ? 1 : 4)) % 5;
            result += matrix[char1.row * 5 + col1] + matrix[char2.row * 5 + col2];
        }
        // Same column: move down (or up for decoding)
        else if (char1.col === char2.col) {
            let row1 = (char1.row + (encode ? 1 : 4)) % 5;
            let row2 = (char2.row + (encode ? 1 : 4)) % 5;
            result += matrix[row1 * 5 + char1.col] + matrix[row2 * 5 + char2.col];
        }
        // Rectangle: swap columns
        else {
            result += matrix[char1.row * 5 + char2.col] + matrix[char2.row * 5 + char1.col];
        }

        return result;
    },

    encode: function(message, key) {
        message = message.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
        let matrix = this.createMatrix(key);
        let encoded = "";

        // Process message in digraphs
        for (let i = 0; i < message.length; i += 2) {
            let digraph = message.slice(i, i + 2);

            // If only one letter left or letters are the same, add an 'X'
            if (digraph.length < 2 || digraph[0] === digraph[1]) {
                digraph = digraph[0] + "X";
                i--; // Adjust index to account for added 'X'
            }

            encoded += this.processDigraph(matrix, digraph.split(''));
        }

        return encoded;
    },

    decode: function(encodedMessage, key) {
        let matrix = this.createMatrix(key);
        let decoded = "";

        for (let i = 0; i < encodedMessage.length; i += 2) {
            let digraph = encodedMessage.slice(i, i + 2).split('');
            decoded += this.processDigraph(matrix, digraph, false);
        }

        return decoded;
    }
};

module.exports = playfair;

