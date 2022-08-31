// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const { use } = require("chai");

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // Error Handling: if no alphabet or not equal to 26 return false
    // .set does not allow duplicates in what your parameter is (alphabet)
    if (!alphabet || alphabet.length !== 26) return false;
    if (Array.from(new Set(alphabet)).length != 26) return false;
       // Substitution Alphabet can not have any repeated characters
    /* [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]*/ 
    let myABC = "abcdefghijklmnopqrstuvwxyz".split('');
    alphabet = alphabet.split('');
    input = input.toLowerCase();
    
    // The Setup ....
    let findNumbers = {};  
    let decode = {};
    let result = '';

    // do work 
    //Step 1: Get ALL letters in input, & index on the myABC
    myABC.forEach((letter, index) => {
      findNumbers[letter] = alphabet[index] // A = X
      decode[alphabet[index]] = letter      
    })
    if (!encode) // ex: ysiipik
    // now that we are decoding we are letting findNumbers be decode
    findNumbers = decode
    console.log(input)
    input.split('').forEach((input) => {
      // empty str. if input is equal to spaces, leave space if not use the letter 
      // object {} using the input letter to retrieve the actual letter
      result += input === ' ' ? ' ' : findNumbers[input]
    })
    return result
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
