import { getCollection } from "./apiFetch.js";
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

const cardInformation = document.createElement("ul")
cardInformation.id = "cardInformation";

const cardButtons = document.createElement("div");
cardButtons.id = "cardBtnContainer";

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

cardStructure.appendChild(cardInformation);
cardStructure.appendChild(cardButtons);

cardButtons.appendChild(addToCollection);
cardButtons.appendChild(changeCollection);
cardButtons.appendChild(deleteFromCollection);

// Styling for page elements created
mainStructure.style.display = "flex";
mainStructure.style.flexDirection = "column";
mainStructure.style.justifyContent = "center";
mainStructure.style.backgroundColor = "#618e97";

mainTitle.style.textAlign = "center";
subTitle.style.textAlign = "center";

cardStructure.style.display = "flex";
cardStructure.style.gap = ".5rem";
cardStructure.style.justifyContent = "end";
cardStructure.style.alignItems = "center";


// Displaying collection from backendAPI
async function displayCollection(){
    try {
        const data = await getCollection();
        console.log(data);
        data.forEach(item => {
            const listElement = document.createElement("li");
            listElement.textContent = item;
            cardInformation.appendChild(listElement);
        });
    } catch (error) {
        throw new Error("Something went wrong while trying to display collection", error)
    }
}
displayCollection(); // Displaying collection and setting arguments for parameters

// Global styling for main elements used on all pages
bodyStyle();
styleButtons();
titleStyles();