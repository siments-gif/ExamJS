import { bodyStyle, titleStyles, formStyling, styleButtons } from "./globalStyling.js";

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
    <input type="text" name="username"></input>
    <label name="password">Password:</label>
    <input type ="text" name="password" id="passwordInput"></input>
    <label name="email">Email:</label>
    <input type="email" name="email"></input>
    <label name="phone">Phonenumber:</label>
    <input type="phone" name="phone"></input>
    <button type="submit">Register</button>
    <p>Already have an account? <a href="../login.html">Go to login</a></p>
`
styleButtons();
registerForm.appendChild(formList);

