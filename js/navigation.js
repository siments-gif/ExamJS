// Creating structure for navigation on all pages
const headerNav = document.getElementById("navHeader");
headerNav.style.margin = "0"

const navStructure = document.createElement("nav")
navStructure.id = "navStructure";
headerNav.appendChild(navStructure);

const navList = document.createElement("ul");
navList.id = "navList"
navList.innerHTML = `
    <div>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../personalListPage.html">Personal Collection</a></li>
    </div>
    <div>
        <li><a href="../index.html">Login</a></li>
        <li><a href="../personalListPage.html">Register</a></li>
    </div>
`
navList.style.display = "flex";
navList.style.gap = "2rem"
navList.style.listStyle = "none"
navList.style.textDecoration = "none"

navStructure.appendChild(navList);

