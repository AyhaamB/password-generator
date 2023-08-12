//generating the password using the prompt entries gathered by the main function
function generatePassword(length, useLowercase, useUppercase, useNumeric, useSpecial) {
// empty string placeholder for characters
  let characters = '';

// if any of the use conditions are true than the string following the characters will be appended to it
  if (useLowercase) characters = characters + 'abcdefghijklmnopqrstuvwxyz';
  if (useUppercase) characters = characters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useNumeric) characters = characters + '0123456789';
  if (useSpecial) characters = characters + '!@#$%^&*()_+-=[]{}|;:,.<>?';

// characters is an empty string, if none of the character types are selected, it will alert the user
  if (!characters.length) {
      alert("You must select at least one character type.");
      return;
  }
// creates an empty string for password within it a random character is drawn using a for loop, there is a random index created that selects a random character from the character list selected
  let password = '';
  for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password = password + characters.charAt(randomIndex);
  }
// returns the completed password
  return password;
}

function gather() {
  alert("Welcome to the Password Generator!");
// parse will pull the first interger from the text field, prompt will prompt the user to input their desired password legnth
  let length = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

// if the legnth is not a number, less than 8 or greater than 128 alert the user with the string and stop the function
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Password length must be between 8 and 128.");
      return;
  }

// confirmation prompts for the user to select lowercase, uppercase, numbers and symbols to be included in the password
  let useLowercase = confirm("Use lowercase characters?");
  let useUppercase = confirm("Use uppercase characters?");
  let useNumeric = confirm("Use numeric characters?");
  let useSpecial = confirm("Use special characters?");

// the password variable will be the combination of the selected length and character preferences
  let password = generatePassword(length, useLowercase, useUppercase, useNumeric, useSpecial);

// if password is true and contains a legnth and at least one of the character preferences the function will return the password
  if (password) {
      alert("Generated Password: " + password);
  }
}

// calling the gather function to run
gather();
