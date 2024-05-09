import { bodyStyle, titleStyles, formStyling, styleButtons } from "./globalStyling.js";
import { registerUser } from "./apiFetch.js";

const formTitle = document.createElement("h1")
formTitle.textContent = "Register Form"

const registerSection = document.createElement("section");
registerSection.id = "registerSection"
const registerForm = document.createElement("form");
registerForm.id = "registerForm";


const usernameLabel = document.createElement("label");
usernameLabel.textContent = "Username:";
const usernameInput = document.createElement("input");
usernameInput.id = "usernameInput";
usernameInput.type = "text";

const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
const passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
passwordInput.type = "text";

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email:"
const emailInput = document.createElement("input");
emailInput.id = "emailInput";
emailInput.type = "email";

const phoneLabel = document.createElement("label");
phoneLabel.textContent = "Phone:"
const phoneInput = document.createElement("input");
phoneInput.id = "phoneInput";
phoneInput.type = "phone";

const registerButton = document.createElement("button")
registerButton.textContent = "Register";
registerButton.id = "registerBtn";
registerButton.type = "submit";

const redirectToLogin = document.createElement("p");
redirectToLogin.textContent = "Already have an account? ";
const redirectToLoginLink = document.createElement("a");
redirectToLoginLink.textContent = "Go to login"
redirectToLoginLink.href = "../login.html";

document.body.appendChild(registerSection);
registerSection.appendChild(registerForm);
registerForm.appendChild(formTitle);

registerForm.appendChild(usernameLabel);
registerForm.appendChild(usernameInput);

registerForm.appendChild(passwordLabel);
registerForm.appendChild(passwordInput);

registerForm.appendChild(emailLabel);
registerForm.appendChild(emailInput);

registerForm.appendChild(phoneLabel);
registerForm.appendChild(phoneInput);
registerForm.appendChild(registerButton);

registerForm.appendChild(redirectToLogin);
redirectToLogin.appendChild(redirectToLoginLink);

bodyStyle();
titleStyles();
formStyling();
styleButtons();

registerButton.addEventListener("click", async function(e){
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    try {
        const users = await registerUser(username, password, email, phone)
        console.log(users)
        if(users === 0) {
            alert("User already registered");
        }
    } catch (error) {
        console.log("Couldn't post user to API", error)
    }
})

