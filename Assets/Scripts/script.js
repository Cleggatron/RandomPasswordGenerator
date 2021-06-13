//Variables

//All the possible characters we will allow
var allCharacters = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0],
  symbols: ["!", "#", "$", "%", "£", "&", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "?", "@"]
};

//Where we will store the chose character types for our password
var chosenCharacters = [];
var containsLower;
var containsUpper;
var containsNum;
var containsSymb;


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
  
  //create our character arrays inside an object?
  //prompts for catergories lowercase (default), uppercase, number, symbol.
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
  //prompt for password length. 
  //create a loop that iterates through that many times
  //create an output variable that we'll tack each character onto.

  //guarantee that we have 1 of each character (just do them at the start?)

  //run through randomly for the remainder.
  
  


}
