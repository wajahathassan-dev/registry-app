// Compare password and confirm password
export function comparePassword(password, confirmPassword){
    return password === confirmPassword;
}

// Validate password
export function validatePassword(password){
    // check if password follows the required criteria
    // must have at least 8 characters
    // must have at least 1 upper case and lower case alphabet
    // must have at least 1 digit
    // must have at least 1 special character
    
    let lengthCheck      = password.length >= 8;
    let lowerAlphaCheck  = /[a-z]/.test(password);
    let upperAlphaCheck  = /[A-Z]/.test(password);
    let digitCheck       = /[0-9]/.test(password);
    let specialCharCheck = /[^a-zA-Z0-9 ]/.test(password);
    
    return lengthCheck && lowerAlphaCheck && upperAlphaCheck && digitCheck && specialCharCheck;
}