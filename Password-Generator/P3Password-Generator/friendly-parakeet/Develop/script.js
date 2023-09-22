var charLength = 128;
var choiceArr=[];

var Symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = [0,1,2,3,4,5,6,7,8,9];

// Assignment code here
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Get references to the #generate element
// Write password to the #password input
function writePassword() {
  var TFPrompt = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (TFPrompt){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }
}

function generatePassword() {
    var password = "";
    for(var i = 0; i < charLength; i++) {
        var Random = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[Random];
    }
    return password;
}

function getPrompts(){
  choiceArr = [];

  charLength = parseInt(prompt("Character Limit 128"));
  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Try again. 8-128 Characters Please");
    return false;
  }

  if (confirm("Lowercase?")) {
    choiceArr = choiceArr.concat(Lower);
  }
  if (confirm("Uppercase?")) {
    choiceArr= choiceArr.concat(Upper);
  }
  if (confirm("Numbers?")) {
    choiceArr= choiceArr.concat(Numbers);
  }
  if (confirm("Special Characters?")) {
    choiceArr= choiceArr.concat(Symbol);
  }
  return true;

}
