import { registerUser } from "./apiFetch.js";

export function loginValidation(username, password) { 
    if(username == registerUser(username) && password == registerUser(password)) {
        location.href="../index.html";
    }else {
        alert("User does not exist");
    }
}