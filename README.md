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

**Vigenère Cipher**

- **encode(message, key):** Encrypts a message using the Vigenère cipher.
- **decode(encodedMessage, key):** Decrypts a message encrypted with the Vigenère cipher.

(Add similar sections for Caesar, Atbash, Rail Fence, ROT13, and Playfair ciphers, detailing their specific usage and parameters.)

## Contributing
We welcome contributions to the Cipher Factory project! If you have suggestions for improvements or encounter any issues, please feel free to submit issues or pull requests on our GitHub repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
