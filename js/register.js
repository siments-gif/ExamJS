import { bodyStyle, titleStyles, formStyling, styleButtons } from "./globalStyling.js";
import { registerUser } from "./apiFetch.js";

const registerSection = document.createElement("section");
registerSection.id = "registerSection"
document.body.appendChild(registerSection);

const registerForm = document.createElement("form");
registerForm.id = "registerForm";
registerSection.appendChild(registerForm);

bodyStyle();
titleStyles();
formStyling();

const formList = document.getElementById("registerForm");
formList.innerHTML = `
    <h1>Register Here</h1>
    <label name="username">Username:</label>
    <input type="text" name="username" id="usernameInput"></input>
    <label name="password">Password:</label>
    <input type ="text" name="password" id="passwordInput"></input>
    <label name="email">Email:</label>
    <input type="email" name="email" id="emailInput"></input>
    <label name="phone">Phonenumber:</label>
    <input type="phone" name="phone" id="phoneInput"></input>
    <button type="submit" id="registerButton">Register</button>
    <p>Already have an account? <a href="../login.html">Go to login</a></p>
`
styleButtons();

const registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", async function(e){
    e.preventDefault();

    const username = document.querySelector("#usernameInput")
    const password = document.getElementById("passwordInput")
    const email = document.getElementById("emailInput")
    const phone = document.getElementById("phoneInput")

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

