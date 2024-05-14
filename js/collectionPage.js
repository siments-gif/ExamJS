// Creating page elements
const mainStructure = document.createElement("section");
mainStructure.id = "mainStructure";

const mainTitle = document.createElement("h2")
mainTitle.textContent = "Personal Collection";

const cardStructure = document.createElement("div")
cardStructure.id = "cardList"

const subTitle = document.createElement("h3");
subTitle.textContent = "My favorite pokemons";

const addToCollection = document.createElement("button");
addToCollection.id = "addNewBtn"

const changeCollection = document.createElement("button");
changeCollection.id = "changeNameBtn"

const deleteFromCollection = document.createElement("button");
deleteFromCollection.id = "deletePokemonBtn"

// Append the elements to right relationships
document.body.appendChild(mainStructure);

mainStructure.appendChild(mainTitle);
mainStructure.appendChild(cardStructure);

cardStructure.appendChild(subTitle);
cardStructure.appendChild(addToCollection);
cardStructure.appendChild(changeCollection);
cardStructure.appendChild(deleteFromCollection);

// Styling for page elements created