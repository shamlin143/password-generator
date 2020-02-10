function promptForNumber() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  checkNumber(passwordLength);
  return passwordLength;
}

function checkNumber(passwordLength) {
  if (passwordLength <= 128 && passwordLength >= 8) {
    alert("Your number (" + passwordLength + ") matches password length requirements", "");
  } else if (isNaN(passwordLength)) {
    nonNumber(passwordLength);
  } else {
    numberOutOfRange(passwordLength);
  }
}

function nonNumber() {
  var passwordLength = parseInt(prompt("Your input is not a number. Please enter a number between 8 - 128"));
  checkNumber(passwordLength)
}

function numberOutOfRange() {
  var passwordLength = parseInt(prompt("Please enter a valid number between 8 - 128"));
  checkNumber(passwordLength)
}

function passwordCriteriaQuestions() {
  var lowerCase       = confirm("Would you like your password to include lowercase letters?");
  var upperCase       = confirm("Would you like your password to include uppercase letters?");
  var includeNumbers  = confirm("Would you like your password to include numbers?");
  var specialChars    = confirm("Would you like your password to include special characters?");

  var criterias = [lowerCase, upperCase, includeNumbers, specialChars];
  return criterias;
}

function generatePassword() {
  var numbers           = "0123456789";
  var lowerCaseLetters  = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols           = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var password          = "";
  var character         = "";
  var length            = promptForNumber();
  var criteria          = passwordCriteriaQuestions();

  while(password.length < length) {
    lowers = (criteria[0] === true) ? Math.ceil(lowerCaseLetters.length * Math.random()*Math.random()) : null;
    uppers = (criteria[1] === true) ? Math.ceil(upperCaseLetters.length * Math.random()*Math.random()) : null;
    numerics = (criteria[2] === true) ? Math.ceil(numbers.length * Math.random()*Math.random()) : null;
    syms = (criteria[3] === true) ? Math.ceil(symbols.length * Math.random()*Math.random()) : null;

    if(lowers != null) { hold = lowerCaseLetters.charAt(lowers); }
    hold = (password.length < length) ? (hold) : (hold);
    character += hold;
    if(uppers != null) { character += upperCaseLetters.charAt(uppers); }
    if(numerics != null) { character += numbers.charAt(numerics); }
    if(syms != null) { character += symbols.charAt(syms); }

    password = character;
  }
  document.getElementById("password").innerHTML = password;
}
