import { styleButtons, titleStyles, formStyling, bodyStyle } from "./globalStyling.js";

// Creating login elements (HTML structure)
const loginSection = document.createElement("section");
loginSection.id = "loginSection";

const loginForm = document.createElement("form");
loginForm.id = "loginForm";

const formTitle = document.createElement("h1");
formTitle.textContent = "Login Form"

const userNameLabel = document.createElement("label");
userNameLabel.id = "userNameLabel";
userNameLabel.textContent = "Username";

const userNameInput = document.createElement("input");
userNameInput.id = "userNameInput";
userNameInput.type = "text";

const passwordLabel = document.createElement("label");
passwordLabel.id = "passwordLabel";
passwordLabel.textContent = "Password";

const passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
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