![NPM Version](https://img.shields.io/npm/v/cipher-factory) ![NPM Downloads](https://img.shields.io/npm/dy/cipher-factory)

```
________/\\\\\\\\\__/\\\\\\\\\\\__/\\\\\\\\\\\\\____/\\\________/\\\__/\\\\\\\\\\\\\\\____/\\\\\\\\\____________________/\\\\\\\\\\\\\\\_____/\\\\\\\\\___________/\\\\\\\\\__/\\\\\\\\\\\\\\\_______/\\\\\_________/\\\\\\\\\______/\\\________/\\\_        
 _____/\\\////////__\/////\\\///__\/\\\/////////\\\_\/\\\_______\/\\\_\/\\\///////////___/\\\///////\\\_________________\/\\\///////////____/\\\\\\\\\\\\\______/\\\////////__\///////\\\/////______/\\\///\\\_____/\\\///////\\\___\///\\\____/\\\/__       
  ___/\\\/_______________\/\\\_____\/\\\_______\/\\\_\/\\\_______\/\\\_\/\\\_____________\/\\\_____\/\\\_________________\/\\\______________/\\\/////////\\\___/\\\/_________________\/\\\_________/\\\/__\///\\\__\/\\\_____\/\\\_____\///\\\/\\\/____      
   __/\\\_________________\/\\\_____\/\\\\\\\\\\\\\/__\/\\\\\\\\\\\\\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\/_____/\\\\\\\\\\\_\/\\\\\\\\\\\_____\/\\\_______\/\\\__/\\\___________________\/\\\________/\\\______\//\\\_\/\\\\\\\\\\\/________\///\\\/______     
    _\/\\\_________________\/\\\_____\/\\\/////////____\/\\\/////////\\\_\/\\\///////______\/\\\//////\\\____\///////////__\/\\\///////______\/\\\\\\\\\\\\\\\_\/\\\___________________\/\\\_______\/\\\_______\/\\\_\/\\\//////\\\__________\/\\\_______    
     _\//\\\________________\/\\\_____\/\\\_____________\/\\\_______\/\\\_\/\\\_____________\/\\\____\//\\\_________________\/\\\_____________\/\\\/////////\\\_\//\\\__________________\/\\\_______\//\\\______/\\\__\/\\\____\//\\\_________\/\\\_______   
      __\///\\\______________\/\\\_____\/\\\_____________\/\\\_______\/\\\_\/\\\_____________\/\\\_____\//\\\________________\/\\\_____________\/\\\_______\/\\\__\///\\\________________\/\\\________\///\\\__/\\\____\/\\\_____\//\\\________\/\\\_______  
       ____\////\\\\\\\\\__/\\\\\\\\\\\_\/\\\_____________\/\\\_______\/\\\_\/\\\\\\\\\\\\\\\_\/\\\______\//\\\_______________\/\\\_____________\/\\\_______\/\\\____\////\\\\\\\\\_______\/\\\__________\///\\\\\/_____\/\\\______\//\\\_______\/\\\_______ 
        _______\/////////__\///////////__\///______________\///________\///__\///////////////__\///________\///________________\///______________\///________\///________\/////////________\///_____________\/////_______\///________\///________\///________
```

# Cipher Factory

## Overview
Cipher Factory is a comprehensive Node.js package that provides a suite of classical cipher algorithms for encryption and decryption purposes. This package includes support for Vigenère, Caesar, Atbash, Rail Fence, ROT13, and Playfair ciphers. Designed with simplicity in mind, Cipher Factory offers an easy-to-use API that allows developers to integrate classical cryptography methods into their applications.

## Installation
To integrate Cipher Factory into your project, run the following command:

```bash
npm install cipher-factory --save
```

This command will download and install Cipher Factory, making it ready for use in your Node.js applications.

## Usage
After installing Cipher Factory, you can start using the provided ciphers for encoding and decoding messages. Here is a basic example demonstrating how to encode and decode a message using the Vigenère cipher:

```
const { vigenere } = require('cipher-factory');

// Encoding a message
const message = 'Hello World';
const key = 'KEY';
const encodedMessage = vigenere.encode(message, key);
console.log("Encoded Message:", encodedMessage);

// Decoding the message
const decodedMessage = vigenere.decode(encodedMessage, key);
console.log("Decoded Message:", decodedMessage);
```

Replace vigenere with any other cipher you wish to use (e.g., caesar, atbash, etc.) following the same pattern.

## API Reference

Below are the API references for the included ciphers. Each cipher supports encode and decode functions.

**Caesar Cipher**

The Caesar cipher is a type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. For instance, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so forth. It’s a straightforward and easy-to-implement encryption method, but it is also very easy to break due to its limited number of possible shifts (26 in English).

```
// Encrypts a message using the Caesar cipher.
const encodedMessage = caesar.encode(message, shift);

// Decrypts a message encrypted with the Caesar cipher.
const decodedMessage = caesar.decode(encodedMessage, shift);
```

**Vigenère Cipher**

The Vigenère cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. It employs a keyword, where each letter of the keyword shifts the corresponding letter in the plaintext by a number of positions in the alphabet. For example, if the keyword is "KEY," the first letter of the plaintext is shifted by the position of 'K', the second by 'E', and so on. The process repeats for the length of the message. This method is more secure than the Caesar cipher due to its varying shift values.

```
// Encrypts a message using the Vigenère cipher.
const encodedMessage = vigenere.encode(message, key);

// Decrypts a message encrypted with the Vigenère cipher.
const decodedMessage = vigenere.decode(encodedMessage, key);
```

**Atbash Cipher**

The Atbash cipher is a substitution cipher that is a specific form of the monoalphabetic cipher where each letter of the alphabet is mapped to its reverse. For example, 'A' is substituted with 'Z', 'B' with 'Y', 'C' with 'X', and so on. This cipher is simple and symmetrical, meaning the same algorithm is used for both encryption and decryption.

```
// Encrypts a message using the Atbash cipher.
const encodedMessage = atbash.encode(message);

// Decrypts a message encrypted with the Atbash cipher.
const decodedMessage = atbash.decode(encodedMessage);
```

**Rail Fence Cipher**

The Rail Fence cipher is a form of transposition cipher where the plaintext is written in a zigzag pattern on an imaginary fence, and then read off row by row. For example, with a depth of 3, the message "WEAREDISCOVEREDFLEEATONCE" would be written as:
```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . D . L . A . O . C .
. . A . . . I . . . V . . . E . . . F . . . E .
```
Then it is read as "WECRLTEERDSOEEFEAOCAIVDEN". This method makes the plaintext less recognizable.

```
// Encrypts a message using the Rail Fence cipher.
const encodedMessage = railFence.encode(message, key);

// Decrypts a message encrypted with the Rail Fence cipher.
const decodedMessage = railFence.decode(encodedMessage, key);
```

**ROT13 Cipher**

The ROT13 cipher is a special case of the Caesar cipher, where the alphabet is rotated by 13 places. Since 13 is half of 26, applying ROT13 twice returns the original text, making it symmetric. For example, 'A' becomes 'N', 'B' becomes 'O', and so on. It is commonly used in online forums to obscure spoilers, puzzles, or sensitive information.

```
// Encrypts a message using the ROT13 cipher.
const encodedMessage = rot13.encode(message);

// Decrypts a message encrypted with the ROT13 cipher.
const decodedMessage = rot13.decode(encodedMessage);
```
**Playfair Cipher**

The Playfair cipher is a digraph substitution cipher, which means it encrypts pairs of letters (digraphs) instead of single letters. A 5x5 grid is created using a keyword, with 'I' and 'J' typically sharing a space. Each pair of letters in the plaintext is encrypted according to their positions in the grid: if they are in the same row, column, or form a rectangle. This increases the complexity and security over monoalphabetic ciphers by encoding letter pairs instead of individual letters.

```
// Encrypts a message using the Playfair cipher.
const encodedMessage = playfair.encode(message, key);

// Decrypts a message encrypted with the Playfair cipher.
const decodedMessage = playfair.decode(encodedMessage, key);
```

## Contributing
We welcome contributions to the Cipher Factory project! If you have suggestions for improvements or encounter any issues, please feel free to submit issues or pull requests on our GitHub repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
