function promptUser() {
  var charCountChoice = prompt("How many characters would you like your password to have (must be between 8 and 128)?");
    if (charCountChoice < 8 || charCountChoice > 128 || isNaN(charCountChoice)) {
      alert("Entry must be an integer between 8 and 128.");
      promptUser();
    } else {
      var includeSpecial = confirm("Click OK to include special characters in your password.");
      var includeNumeric = confirm("Click OK to include numeric characters in your password.");
      var includeUpperCase = confirm("Click OK to include upper case characters in your password.");
      var includeLowerCase = confirm("Click OK to include lower case characters in your password.");
          } if (includeSpecial === false && includeNumeric === false && includeLowerCase === false && includeUpperCase === false) {
      alert("You must click OK for at least 1 password parameter. Click OK to start over.");
      promptUser();
    }
      

  showPassword();
  document.getElementById("textarea").innerHTML = showPassword();
}

var passwordPieces = {
  specialChar: ["!", "#", "$", "%", "^", "&", "*", "-", "+"],
  numericChar: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  upperChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
}

var password = passwordPieces.specialChar[Math.floor(Math.random() * passwordPieces.specialChar.length)];

function showPassword() {
  return password;
}

function copyFunction() {
  var copyText = document.getElementById("textarea");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  
  document.execCommand("copy");

  alert("Password copied to clipboard");
}
