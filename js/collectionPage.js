import { titleStyles, styleButtons, bodyStyle } from "./globalStyling.js";

// Creating page elements
const mainTitle = document.createElement("h2")
mainTitle.textContent = "Personal Collection";

const mainStructure = document.createElement("section");
mainStructure.id = "mainStructure";

const subTitle = document.createElement("h3");
subTitle.textContent = "My favorite pokemons";

const cardStructure = document.createElement("div")
cardStructure.className = "cardStructure"

const cardList = document.createElement("ul")
cardList.id = "cardList";

const addToCollection = document.createElement("button");
addToCollection.id = "addNewBtn"
addToCollection.textContent = "Add"

const changeCollection = document.createElement("button");
changeCollection.id = "changeNameBtn"
changeCollection.textContent = "Change"

const deleteFromCollection = document.createElement("button");
deleteFromCollection.id = "deletePokemonBtn"
deleteFromCollection.textContent = "Delete"

// Append the elements to right relationships
document.body.appendChild(mainTitle);
document.body.appendChild(mainStructure);

mainStructure.appendChild(subTitle);
mainStructure.appendChild(cardStructure);

cardStructure.appendChild(cardList);

cardList.appendChild(addToCollection);
cardList.appendChild(changeCollection);
cardList.appendChild(deleteFromCollection);

// Styling for page elements created
mainStructure.style.display = "flex";
mainStructure.style.flexDirection = "column";
mainStructure.style.justifyContent = "center";
mainStructure.style.backgroundColor = "#618e97";

mainTitle.style.textAlign = "center";
subTitle.style.textAlign = "center";

cardList.style.display = "flex";
cardList.style.gap = "1.5rem";
cardList.style.marginRight = "2%";

cardStructure.style.display = "flex";
cardStructure.style.gap = ".5rem";
cardStructure.style.justifyContent = "end";
cardStructure.style.alignItems = "center";

const collectionData = localStorage.getItem("pokemonCollection");


// Global styling for main elements used on all pages
bodyStyle();
styleButtons();
titleStyles();