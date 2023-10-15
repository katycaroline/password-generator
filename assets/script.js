// Declaring various arrays and assigning them values. 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "/", "-", ":", ";", ".", "<", ">", "=", "_", "`", "|", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var password = "";
  var passwordOptions = "";


  // Makes a variable called passwordLength that is a number between 8-128 based on user input. 
  var passwordLength = window.prompt("Please enter a number between 8-128 for the length of your password.");
  passwordLength = parseInt(passwordLength);
  if(passwordLength < 8){
    window.alert("Password must be 8 characters or longer.");
    return; 
  } 
  if(passwordLength > 128){
    window.alert("Password must be 128 characters or shorter");
    return; 
  }

  // Various window confirms asking what the user would like to include in their password. If the user confirms, it concatenates the arrays into the passwordOptions variable. 
  var lowerCaseChoice = window.confirm("Would you like your password to have lowercase characters?");
  if(lowerCaseChoice === true){
    passwordOptions = passwordOptions.concat(lowerCase, passwordOptions);
  }

  var upperCaseChoice = window.confirm("Would you like your password to have uppercase characters?");
  if(upperCaseChoice === true){
    passwordOptions = passwordOptions.concat(upperCase, passwordOptions);
  }

  var numberChoice = window.confirm("Would you like your password to have numbers?");
  if(numberChoice === true){
    passwordOptions = passwordOptions.concat(numbers, passwordOptions);
  }

  var specialChoice = window.confirm("Would you like your password to have special characters?");
  if(specialChoice === true){
    passwordOptions = passwordOptions.concat(special, passwordOptions);
  }

// Takes passwordOptions and randomly selects elements from it, then adds them to the string "password".
  for(var i = 0; i < passwordLength; i++){
    password = password.concat(passwordOptions[Math.floor(Math.random() * (passwordOptions.length))]);
  }
  return password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
