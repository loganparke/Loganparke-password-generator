// Assignment code here
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSymbols;

var createdPassword = "";

function includePrompts() {
  createdPassword = "";
  confirmLength = window.prompt("How long do you want your password to be? (between 8-128)");
  while (confirmLength < 8 || confirmLength > 128){
    var lengthAgain = window.prompt("Sorry, you must choose a number for your password length between 8 & 128.  Please do so now");
    confirmLength = lengthAgain;
  }
  confirmLength = parseInt(confirmLength);

  confirmLower = window.confirm("Do you want lowercase characters in your password?");
  if(confirmLower) {
    confirmLower = true;
  }
  confirmUpper = window.confirm("Do you want uppercase characters in your password?");
  confirmNumbers = window.confirm("Do you want numbers in your password?");
  confirmSymbols = window.confirm("Do you want symbols in your password?");
  console.log(confirmLower, confirmUpper, confirmNumbers, confirmSymbols);
  
  for (var i = 0; i < confirmLength; i++) {
    generatePassword(confirmLower, confirmUpper, confirmNumbers, confirmSymbols);
  }
}

//generate password function
function generatePassword(confirmLower, confirmUpper, confirmNumbers, confirmSymbols){
  
  switch(confirmLower, confirmUpper, confirmNumbers, confirmSymbols) {
    case (confirmLower && confirmUpper && confirmNumbers && confirmSymbols):
        console.log("all 4");  //  WORKS
      if (Math.random() > .75){
        createdPassword += randomLowerCase();
      } else if (Math.random() > .5){
        createdPassword += randomUpperCase();
      } else if (Math.random() > .25){
        createdPassword += randomNumber();
      }else {
        createdPassword += randomSymbol();
      }
      break;
    case (confirmUpper && confirmNumbers && confirmSymbols):  //  WORKS
      console.log("upper numbers and symbols");
      if (Math.random() > .67){
      createdPassword += randomUpperCase();
      } else if (Math.random() > .34){
      createdPassword += randomNumber();
      }else {
      createdPassword += randomSymbol();
      }
      break;
    case (confirmLower && confirmNumbers && confirmSymbols):   // WORKS
      console.log("Lower numbers and symbols");
      if (Math.random() > .67){
      createdPassword += randomLowerCase();
      } else if (Math.random() > .34){
      createdPassword += randomNumber();
      }else {
      createdPassword += randomSymbol();
      }
      break;
    case (confirmLower && confirmUpper && confirmNumbers):  
      console.log("lower upper and numbers");
      if (Math.random() > .67){
      createdPassword += randomLowerCase();
      } else if (Math.random() > .34){
      createdPassword += randomUpperCase();
      }else {
      createdPassword += randomNumber();
      }
      break;
    case (confirmLower && confirmUpper && confirmSymbols):  //  WORKS
      console.log("lower upper and symbols");
      if (Math.random() > .67){
      createdPassword += randomLowerCase();
      } else if (Math.random() > .34){
      createdPassword += randomUpperCase();
      }else {
      createdPassword += randomNumber();
      }
      break;
    case (confirmLower && confirmUpper):  
      console.log("lower and upper");
      if (Math.random() > .5){
      createdPassword += randomLowerCase();
      } else {
      createdPassword += randomUpperCase();
      }
      break;
    case (confirmLower && confirmSymbols): // WORKS
      console.log("lower and symbols");
      if (Math.random() > .5){
      createdPassword += randomLowerCase();
      } else {
      createdPassword += randomSymbol();
      }
      break;
    case (confirmLower && confirmNumbers):  
      console.log("Lower and numbers");
      if (Math.random() > .5){
      createdPassword += randomLowerCase();
      } else {
      createdPassword += randomNumber();
      }
      break;
    case (confirmUpper && confirmNumbers):
      console.log("Upper and numbers");
      if (Math.random() > .5){
      createdPassword += randomUpperCase();
      } else {
      createdPassword += randomNumber();
      }
      break;
    case (confirmUpper && confirmSymbols):  // WORKS
      console.log("Upper and Symbols");
      if (Math.random() > .5){
      createdPassword += randomUpperCase();
      } else {
      createdPassword += randomSymbol();
      }
      break;
    case (confirmNumbers && confirmSymbols): //  WORKS
      console.log("Numbers & Symbols");
      if (Math.random() > .5){
      createdPassword += randomNumber();
      } else {
      createdPassword += randomSymbol();
      }
      break;
    case confirmLower:
      console.log("lower");
      createdPassword += randomLowerCase();
      break;
    case confirmUpper:
      console.log("upper");
      createdPassword += randomUpperCase();
      break;
    case confirmNumbers:
      console.log("numbers");
      createdPassword += randomNumber();
      break;
    case confirmSymbols:        // WORKS
      console.log("symbols");
      createdPassword += randomSymbol();
      break;
    default:
      console.log("none");
      window.alert("You didn't choose and character types for your password, try again.");
      includePrompts();
  }

}


function randomLowerCase() {
  return String.fromCharCode(Math.floor((Math.random() * 26) + 97));
}

function randomUpperCase() {
  return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}

function randomNumber() {
  return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
}

function randomSymbol() {
  const symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");

// Write password to the #password input  generatePassword()
function writePassword() {
  includePrompts();
  console.log(createdPassword.length);
  var password = createdPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function resetPassword() {
  password = "";
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

resetBtn.addEventListener("click", resetPassword);

