// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseArray = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "\\", "$","@", "#", "*", "?"];
var userChoiceArray = [];

function generatePassword() {
  
  var passwordLength = prompt("Please choose length of password.");
  if (passwordLength < 8 || passwordLength > 128) 
  {alert("Must choose a password greater than 8 and less than 128 characters.")
  return}

  var passwordLowercase = confirm("Would you like lowercase letters in your password?");
  if (passwordLowercase === true){
    userChoiceArray = userChoiceArray.concat(lowercaseArray)
  console.log(userChoiceArray)};

  var passwordUppercase = confirm("Would you like uppercase letters in your password?");
  if (passwordUppercase === true){
    userChoiceArray = userChoiceArray.concat(uppercaseArray)
  console.log(userChoiceArray)};

  var passwordNumbers = confirm("Would you like numbers in your password?");
  if (passwordNumbers === true){
    userChoiceArray = userChoiceArray.concat(numberArray)
  console.log(userChoiceArray)};

  var passwordSpecial = confirm("Would you like special characters in your password?");
  if (passwordSpecial === true){
    userChoiceArray = userChoiceArray.concat(specialArray)
  console.log(userChoiceArray)};

  var randomArray = shuffle(userChoiceArray);
  console.log("randomArray", randomArray);
  if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === false && passwordSpecial === false)
  {alert("Must choose at least one type of character for your password.")
  }
  
  var passwordLengthNumber = Number(passwordLength);

  var result = randomArray.slice(0,passwordLengthNumber).join("");
  console.log("result", result);
  return result;
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
