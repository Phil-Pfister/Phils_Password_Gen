// My code below
function generatePassword() {
  // variables based on answer to prompts
  var specialCharacters = confirm("Would you like your password to include Special Characters?");
  var capitalLetters = confirm("Would you like your password to contain capital letters?");
  var numbers = confirm("Would you like your password to contain numbers?");
  var sizeOfPassword = prompt("How many characters would you like your password to contain? Enter a number between 8 and 128.");
  // variables for password
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var num = "0123456789"
  var symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  // function to weed out variables using string.concat to combine variables
  function charSet1() {
        // all cases are true
    if (specialCharacters && capitalLetters && numbers) {
          return lower.concat(upper, num, symbols);
          
        // no numbers
        } else if (specialCharacters && capitalLetters) {
          return lower.concat(num, symbols);
          
        // no symbols 
        } else if (capitalLetters && numbers) {
          return lower.concat(upper, num);
          
          // no uppercase
        } else if (specialCharacters && numbers) {
          return lower.concat(symbols, num);
          
          // only symbols and lowercase
        } else if (specialCharacters) {
          return lower.concat(symbols);
          
          //only uppercase and lowercase
        } else if (capitalLetters) {
            return lower.concat(upper)
          
            // only lowercase and numbers
        } else if (numbers) {
          return lower.concat(num);

          // only lowercase
        } else {
          return lower;
          
        }
  }

  // defines lengthens and repeats the character set
  var charSetPrime = charSet1();
  var charSet = charSetPrime.repeat(5);
  
  // converts string to an array 
  var charSetArray = charSet.split("");
  
  // randomizes the array - credit to stack overflow for Durstenfeld shuffle algorithm - see README
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
  
  shuffleArray(charSetArray);
  
  var shuffle = charSetArray;

  // reduces the size of the array to the length inputted by user and 
  // converts back to a string
  shuffle = charSetArray.slice(0,sizeOfPassword).toString();
  shuffle = shuffle.replaceAll(',', '');

  // returns the new string to be used as the value of password
  return(shuffle);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


