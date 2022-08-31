// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function toDec(array) {
    return array.map((character) => {
      const charCode = character.toLowerCase().charCodeAt();
      return charCode >= 97 && charCode <= 122 ? charCode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // shift constraints 
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // sets decode mode by inverting the shift
    if (encode === false) {
      shift = shift * -1;
    }

    let inputSplit = input.split("");
    let inputShift = toDec(inputSplit);

    // applies shift only to valid characters, equalizes it to a number; if not will return [, {, $ etc
    let shiftedNumbers = inputShift.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // loop correction handles case where the shift goes left of "a" or right of "z"
    // + if over the z will increase, - if the # is over 122 will decrease 
    let loopCorrectedNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      // currently logging all numbers 109, 101, 97
      return number;
    });

    //converts character Code back into a string for the resulting output - to form the word
    let outputWord = loopCorrectedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputWord.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

