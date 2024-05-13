import { fetchPokemonDetails } from "./apiFetch.js"; // Importing fetch Function
import { styleButtons, bodyStyle, titleStyles } from "./globalStyling.js";

const pageTitle = document.createElement("h1")
pageTitle.textContent = "Pokemon Details"
pageTitle.style.textAlign = "center";
document.body.appendChild(pageTitle);

const cardSection = document.createElement("section");
cardSection.id = "cardSection";
document.body.appendChild(cardSection)

const pokemonCard = document.createElement("div")
pokemonCard.id = "pokemonDetails"
cardSection.appendChild(pokemonCard)

const buttons = document.createElement("div");
buttons.id = "buttonDiv"
cardSection.appendChild(buttons);

const saveBtn = document.createElement("button");
saveBtn.id = "saveBtn";
saveBtn.textContent = "Save"
buttons.appendChild(saveBtn)

const collectionBtn = document.createElement("button");
collectionBtn.id = "collectionBtn";
collectionBtn.textContent = "Go to collection";
buttons.appendChild(collectionBtn);

// Basic styling for seperate elements
cardSection.style.backgroundColor = "#618e97"
cardSection.style.paddingBottom = ".5rem"
cardSection.style.width = "40%"
cardSection.style.margin = "0 auto"
cardSection.style.border = "3px solid black"
cardSection.style.borderRadius = "3rem"

const symbols = {
    "light": "🌟",
    "fire": "🔥",
    "water": "💧",
    "Electric": "⚡️",
    "grass": "🌿",
    "poison": "☢"
};
        
async function displayPokemonDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search); // Creates new URL parameters for search window
        const pokemonId = urlParams.get("id"); // Specifies parameters gotten
        
        const pokemon = await fetchPokemonDetails(pokemonId);
        const symbolForTypes = pokemon.types.map(type => symbols[type]); // Maps symbols to match type and symbol

        pokemonCard.innerHTML = `
            <h2>${pokemon.name}</h2>
            <div id="detailImages">
                <img src="${pokemon.frontImage}"></img>
                <img src="${pokemon.backImage}"></img>
            </div>
            <p>Weight: ${pokemon.weight} kg</p>
            <p>Types: ${pokemon.types.join(' , ')} -${symbolForTypes.join(', ')}</p> <!-- Adding and splitting by comma -->
            <p>Abilities: ${pokemon.abilities.join(' , ')}</p>
            `;
        pokemonCard.querySelector("#detailImages").style.display = "flex"; // Styling image div inside of innerhtml
        pokemonCard.style.display = "flex";
        pokemonCard.style.flexDirection = "column";
        pokemonCard.style.alignItems = "center";
        pokemonCard.style.justifyContent = "center";
        
        titleStyles(); // Reference to a global style function
    } catch (error) {
        throw new Error("Didn't display any pokemon details on page", error);
    }
}
displayPokemonDetails(); // Puts the display function on page
styleButtons(); // Reference to a global style function
bodyStyle(); // Reference to a global style function
