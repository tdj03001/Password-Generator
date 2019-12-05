
function promptUser() {
  var charCountChoice = prompt("How many characters would you like your password to have (must be between 8 and 128)?");
    if (charCountChoice < 8 || charCountChoice > 128 || isNaN(charCountChoice)) {
      alert("Entry must be an integer between 8 and 128.");
      promptUser();
    } else {
      var includeSpecial = confirm("Click OK to confirm including special characters in your password.");
      var includeNumeric = confirm("Click OK to confirm including numeric characters in your password.");
      var includeLowerCase = confirm("Click OK to confirm including lower case characters in your password.");
      var includeUpperCase = confirm("Click OK to confirm including upper case characters in your password.");
    }
    
  console.log(charCountChoice);
  console.log(includeSpecial);
  console.log(includeNumeric);
  console.log(includeLowerCase);
  console.log(includeUpperCase);  

  showPassword();
  document.getElementById("textarea").innerHTML = showPassword();
}
  
var specialChar = ["!", "#", "$", "%", "^", "&", "*", "-", "+"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  

var password = undefined;

function showPassword() {
  return password;
}
