//Variables

//All the possible characters we will allow
var allCharacters = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0],
  symbol: ["!", "#", "$", "%", "£", "&", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "?", "@"]
};

//Where we will store the chose character types for our password
var chosenCharacters = [];
var containsLower;
var containsUpper;
var containsNum;
var containsSymb;
var passwordLen = 0;
var output = "";
var randomArray;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

function generatePassword(){
  //prompt for password length. force loop if outside min/max length
  while(passwordLen < 8 || passwordLen > 128){
    passwordLen = prompt("Please enter your password length between 8 - 128.")
  }
  //prompts for catergories lowercase, uppercase, number, symbol.
  while(chosenCharacters.length === 0){
    containsLower = confirm("Do you want the password to contain lowercase letters (a, b, c, etc)?");
    if (containsLower){
      chosenCharacters[chosenCharacters.length] = "lowerCase";
    }
    containsUpper = confirm("Do you want the password to contain uppercase letters (A, B, C, etc)?");
    if (containsUpper){
      chosenCharacters[chosenCharacters.length] = "upperCase";
    }
    containsNum = confirm("Do you want the password to contain numbers (1, 2, 3, etc)?");
    if (containsNum){
      chosenCharacters[chosenCharacters.length] = "number";
    }
    containsSymb = confirm("Do you want the password to contain symbols (!, ?, %, etc)?");
    if (containsSymb){
      chosenCharacters[chosenCharacters.length] = "symbol";
    }
    //check to make sure we have some symbols selected and prompt user
    if(chosenCharacters.length === 0){
      confirm("You have not selected any options.")
    }
  }
  
  //create a loop that iterates through that many times, generating password characters.
  for(i = 0; i < passwordLen; i++){

    //pick which character array we are selecting from
    randomArray = chosenCharacters[Math.floor(Math.random() * (chosenCharacters.length))];
    //pick the random character and tack it onto the string
    output += allCharacters[randomArray][Math.floor(Math.random() * allCharacters[randomArray].length)];
  }

  console.log(output);
  
  //STILL TO DO
  //guarantee that we have 1 of each character (just do them at the start?)
  //run through randomly for the remainder.
  //Work out how to input to box
  //REFACTOR
  //README

}
