// Creating structure for navigation on all pages
const headerNav = document.getElementById("navHeader");
headerNav.style.margin = "0"

const navStructure = document.createElement("nav");
navStructure.id = "navStructure"

const navList = document.createElement("ul");
navList.id = "navList"
navList.innerHTML = `
    <li><a href="../index.html">Home</a></li>
    <li><a href="../login.html">Login</a></li>
    <li><a href="../registerPage.html">Register</a></li>
`
headerNav.appendChild(navStructure);
navStructure.appendChild(navList);

navList.style.display = "flex"
navList.style.gap = "3rem"
navList.style.listStyle = "none"
navList.style.textDecoration = "none"
navList.style.marginLeft = "2vw"
navList.style.marginTop = "2vh"