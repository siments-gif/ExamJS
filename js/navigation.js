// Creating structure for navigation on all pages
const headerNav = document.getElementById("navHeader");
headerNav.style.margin = "0"

const navStructure = document.createElement("nav")
navStructure.id = "navStructure";
headerNav.appendChild(navStructure);

const navList = document.createElement("ul");
navList.id = "navList"
navList.innerHTML = `
    <li><a href="../index.html">Login</a></li>
    <li><a href="../personalListPage.html">Register</a></li>
`
navList.style.display = "flex";
navList.style.gap = "3rem";
navList.style.listStyle = "none";
navList.style.textDecoration = "none";
navList.style.marginLeft = "2vw";
navList.style.marginTop = "2vh"

navStructure.appendChild(navList);
