// Needs to be changed, doesnt work like it should.
export function loginValidation(username, password) { 
    if(username == registerUser(username) && password == registerUser(password)) {
        location.href="../index.html";
    }else {
        alert("User does not exist");
    }
} 

export function registerValidation(username, password, email, phone) {

    if(!username || !password || !email || !phone) {
        return("All fields needs to be filled out");
    }else if(username.length < 3 || username.length > 20) {
        return("username needs to contain between 3 and 20 characters");
    }
    
    if(password.length < 8 || password.length > 15) {
        return("Password must be between 8 and 15 characters");
    }else if(password.charAt(0).search(/[A-Z]/) < 0){
        return("password must have first character as uppercase");
    }else if(password.search(/[0-9]/) < 0) {
        return("Password must have numbers");
    }
}