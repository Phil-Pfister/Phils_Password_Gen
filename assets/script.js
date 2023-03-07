// My code below
function generatePassword() {
  var specialCharacters = confirm("Would you like your password to include Special Characters?");
  var capitalLetters = confirm("Would you like your password to contain capital letters?");
  var numbers = confirm("Would you like your password to contain numbers?");
  var sizeOfPassword = prompt("How many characters would you like your password to contain? Enter a number between 8 and 18.");
  var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var charSetArray = charSet.split("");
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
  
  shuffleArray(charSetArray);
  
  var shuffle = charSetArray;
  
  shuffle = charSetArray.slice(0,sizeOfPassword).toString();
  shuffle = shuffle.replaceAll(',', '');
  
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


