import { styleButtons, titleStyles, formStyling, bodyStyle } from "./globalStyling.js";
import { loginValidation } from "./userValidation.js";

// Creating login elements (HTML structure)
const loginSection = document.createElement("section");
loginSection.id = "loginSection";

const loginForm = document.createElement("form");
loginForm.id = "loginForm";

const formTitle = document.createElement("h1");
formTitle.textContent = "Login Form"

const userNameLabel = document.createElement("label");
userNameLabel.className = "userNameLabel";
userNameLabel.textContent = "Username";

const userNameInput = document.createElement("input");
userNameInput.className = "userNameInput";
userNameInput.type = "text";

const passwordLabel = document.createElement("label");
passwordLabel.className = "passwordLabel";
passwordLabel.textContent = "Password";

const passwordInput = document.createElement("input");
passwordInput.className = "passwordInput";
passwordInput.type = "password";

const loginButton = document.createElement("button");
loginButton.id = "loginBtn";
loginButton.textContent = "Login";

const register = document.getElementById("goToRegister")
register.innerHTML = `
    <p>Already have an account? <a href="../registerPage.html">Register here</a></p>
`

// Appending elements to DOM with right parent/child relationship
document.body.appendChild(loginSection);
loginSection.appendChild(loginForm);
loginForm.appendChild(formTitle);

loginForm.appendChild(userNameLabel);
loginForm.appendChild(userNameInput);

loginForm.appendChild(passwordLabel);
loginForm.appendChild(passwordInput);

loginForm.appendChild(loginButton);
loginForm.appendChild(register);

// Global Style functions
formStyling();
styleButtons();
titleStyles();
bodyStyle();

loginButton.addEventListener("click", async function(e) {
    e.preventDefault();

    const username = userNameInput.value.trim();
    const password = passwordInput.value.trim();

    try {
        const users = JSON.parse(localStorage.getItem("users")) || []; // Getting users key from localStorage
        const existingUser = users.find(user => user.username === username && user.password === password); // Finding similarity to validate
        
        const validation = loginValidation(username, password, existingUser); // Refrencing function in validation file
        if (validation) {
            alert (validation); // Using validation file
            return;
        }
        location.href = "../index.html"
        localStorage.setItem("loggedIn", JSON.stringify(users))      
    } catch (error) {
        console.log("Could not find userData", error)
    }
})