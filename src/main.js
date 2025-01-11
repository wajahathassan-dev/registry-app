// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// import utility functions
import { comparePassword, validatePassword } from './utility';

// Set the theme to light
document.documentElement.setAttribute('data-bs-theme', 'light')

// Select the form elements
let form            = document.querySelector('#register-form');
let firstName       = document.querySelector('#firstName');
let lastName        = document.querySelector('#lastName');
let email           = document.querySelector('#email');
let password        = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let resultContainer = document.querySelector('#result-container');

// Add event listener to the form

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(firstName.value)
    // console.log(lastName.value)
    // console.log(email.value)
    // console.log(password.value)
    // console.log(confirmPassword.value)
    
    let compareCheck = comparePassword(password.value, confirmPassword.value);
    if (compareCheck){
        console.log("Password & Compare Password are same");
        let validationStatus = validatePassword(password.value);
        if (validationStatus){
            console.log("Validation Successful! Account registered!")
            resultContainer.innerHTML = "Account registered! :("
        } else {
            console.log("Validation failed! :(")
            resultContainer.innerHTML = "Password Validation Failed :("
        }
    } else {
        console.log("Password & Compare Password are different :(");
        resultContainer.innerHTML = "Password & Compare Password are different :("
    }

    resultContainer.className += resultContainer + " d-block"

    setTimeout(() => {
        resultContainer.className += resultContainer + " d-none"
    }, 2000)
})