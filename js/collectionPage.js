import { getCollection, deleteFromCollection } from "./apiFetch.js";
import { titleStyles, styleButtons, bodyStyle } from "./globalStyling.js";

// Creating page elements
const mainTitle = document.createElement("h2")
mainTitle.textContent = "Personal Collection"

const mainStructure = document.createElement("section");
mainStructure.id = "mainStructure"

const subTitle = document.createElement("h3");
subTitle.textContent = "My favorite pokemons"

const cardStructure = document.createElement("div")
cardStructure.className = "cardStructure"

const cardInformation = document.createElement("ul")
cardInformation.id = "cardInformation"

const cardButtons = document.createElement("div");
cardButtons.id = "cardBtnContainer"

const addToCollection = document.createElement("button");
addToCollection.id = "addNewBtn"
addToCollection.textContent = "Add"

const changeCollection = document.createElement("button");
changeCollection.id = "changeNameBtn"
changeCollection.textContent = "Change"

const deleteCollection = document.createElement("button");
deleteCollection.id = "deletePokemonBtn"
deleteCollection.textContent = "Delete"

// Append the elements to right relationships
document.body.appendChild(mainTitle);
document.body.appendChild(mainStructure);

mainStructure.appendChild(subTitle);
mainStructure.appendChild(cardStructure);

cardStructure.appendChild(cardInformation);

// Styling for page elements created
mainStructure.style.display = "flex";
mainStructure.style.flexDirection = "column";
mainStructure.style.justifyContent = "center";
mainStructure.style.backgroundColor = "#618e97";

mainTitle.style.textAlign = "center";
subTitle.style.textAlign = "center";

cardStructure.style.display = "grid";
cardStructure.style.gridTemplateColumns = "1fr, 1fr";
cardStructure.style.justifyContent = "center";

bodyStyle();
titleStyles();

async function displayCollection(){
    try {
        const data = await getCollection();
        console.log(data);
        data.forEach(item => {
            const listElement = document.createElement("li");
            listElement.innerHTML = `
                <h2>${item.name}</h2>
                <p>Weight: ${item.weight}</p>
                <p>Abilities: ${item.abilities.join(" , ")}</p>
                <p>Types: ${item.types.join(" , ")}</p>
            `

            cardStructure.appendChild(listElement);
            listElement.appendChild(addToCollection.cloneNode(true)); // Cloning button to my list element 
            listElement.appendChild(changeCollection.cloneNode(true)); // Cloning button to my list element
            listElement.appendChild(deleteCollection.cloneNode(true)); // Cloning button to my list element
            
            listElement.style.display = "flex"
            listElement.style.gap = "7rem"
            listElement.style.textAlign = "center"
            listElement.style.justifyContent = "center"
            listElement.style.alignItems = "center"
            listElement.style.backgroundColor = "#d4ebf2"
            
            listElement.style.border = "2px solid black"
            listElement.style.borderRadius = "1rem"
            listElement.style.marginBottom = ".5rem"
            listElement.style.padding = "1rem"
            
            deleteCollection.addEventListener("click", deleteItemHandler);

            styleButtons(); // Global styling for buttons
        }); 
    } catch (error) {
        throw new Error("Something went wrong while trying to display collection", error)
    }
}

async function deleteItemHandler(){
    await deleteFromCollection();
}
displayCollection(); // Displaying collection and setting arguments for parameters