// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')

// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */

function displayNewPassword () {
  getCriteria();
  let password = generatePassword();
  let passwordText = document.getElementById('password');
  passwordText.value = password;
}

// Arrays for the character types and one variable that combines all of the char. type arrays

let lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '~'];

let numericCharacters = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

let fromWhereWeGetCharacters = [lowerCaseCharacters,
upperCaseCharacters,
specialCharacters,
numericCharacters];

// Global variables

let passwordLength = 0 ;
let hasLowercase = false;
let hasUpperCase = false ;
let hasSpecialCharacters = false;
let hasNumbers = false;



// Main body of JS


// getCriteria function

function getCriteria() {

    passwordLength = parseInt(prompt('How many characters would you like your password to be? Please select amount between 8-128 characters.'));
 
    hasLowercase = confirm('Would you like your password to have lowercase?')

    hasUpperCase = confirm('Would you like your password to have uppercase?')

    hasSpecialCharacters = confirm('Would you like your password to have special characters?')

    hasNumbers = confirm('Would you like your password to have numbers?')

    if(!Number.isInteger(passwordLength)) {
        passwordLength = 0;
    }
}

// generatePassword function

function generatePassword() { 

    if(passwordLength > 128 || passwordLength < 8) {
        alert('Sorry, please input valid password criteria!');
        return 'Invalid Password Criteria, Try Again' ;
        }

    let password = '' ;

    while (password.length < passwordLength) {
        let fromWhereWeGetCharactersIndex = Math.floor(Math.random() * 4);
 
    if ((fromWhereWeGetCharactersIndex == 0 && hasLowercase) ||
        (fromWhereWeGetCharactersIndex == 1 && hasUpperCase)) {            
        let index = Math.floor(Math.random() * 26);
        let character = fromWhereWeGetCharacters[fromWhereWeGetCharactersIndex][index];   
        password += character;
        }

    else if(fromWhereWeGetCharactersIndex == 2 && hasSpecialCharacters){
        let index = Math.floor(Math.random() * 9);   
        let character = fromWhereWeGetCharacters[fromWhereWeGetCharactersIndex][index];    
        password += character;
        }

    else if(fromWhereWeGetCharactersIndex == 3 && hasNumbers) {
        let index = Math.floor(Math.random() * 10);
        let character = fromWhereWeGetCharacters[fromWhereWeGetCharactersIndex][index];
        password += character;
        }  
    }

    return password;

}  


// End of Main JS