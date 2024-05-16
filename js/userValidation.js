export function loginValidation(username, password, existingUser) { 
    
    // Uservalidations for login function
    if(username === "" || password === "") {
        return "You need to fill in login credentials"
    }else if(!existingUser) {
        return "User not found, try again or register new user";
    }
    else {
        return null; // Returns null if none senarios above are valid
    }
}

export function registerValidation(username, password, email, phone) {

    // Main validation with username validation for input
    if(!username || !password || !email || !phone) {
        return("All fields needs to be filled out");
    }else if(username.length < 3 || username.length > 20) {
        return("username needs to contain between 3 and 20 characters");
    }
    
    // Validation for email and checking exsisting users
    if(existingUser(email)){
        return("User with that email is already registered");
    }

    // Validation for password input
    if(password.length < 8 || password.length > 15) {
        return("Password must be between 8 and 15 characters");
    }else if(password.charAt(0).search(/[A-Z]/) < 0){
        return("password must have first character as uppercase");
    }else if(password.search(/[0-9]/) < 0) {
        return("Password must have numbers");
    }
}

function existingUser(email) {
    const existingUsers = JSON.parse(localStorage.getItem("users")); // Defining variable for localStorage
    return existingUsers.some(existingUser => existingUser.email === email); // Validating if email is a part of key users in localStorage
}