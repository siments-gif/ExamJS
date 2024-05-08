import { fetchPokemonDetails } from "./apiFetch.js"; // Importing fetch Function
import { styleButtons, bodyStyle, titleStyles } from "./globalStyling.js";

const pageTitle = document.createElement("h1")
pageTitle.textContent = "Pokemon Details"
pageTitle.style.textAlign = "center";
document.body.appendChild(pageTitle)

const pokemonCard = document.createElement("div")
pokemonCard.id = "pokemonDetails"
document.body.appendChild(pokemonCard)

const saveBtn = document.createElement("button");
saveBtn.id = "saveBtn";
saveBtn.textContent = "Save"
document.body.appendChild(saveBtn)

const collectionBtn = document.createElement("button");
collectionBtn.id = "collectionBtn";
collectionBtn.textContent = "Go to collection";
document.body.appendChild(collectionBtn);

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
        const urlParams = new URLSearchParams(window.location.search)
        const pokemonId = urlParams.get("id");
        
        const pokemon = await fetchPokemonDetails(pokemonId);
        const symbolForTypes = pokemon.types.map(type => symbols[type]);

        pokemonCard.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.image}"></img>
            <p>Species: ${pokemon.species}</p>
            <p>Types: ${pokemon.types.join(', ')} -${symbolForTypes.join(', ')}</p>
            <p>Abilities: ${pokemon.abilities.join(', ')}</p>
            `;
        pokemonCard.style.display = "flex";
        pokemonCard.style.flexDirection = "column"
        pokemonCard.style.alignItems = "center"
        pokemonCard.style.justifyContent = "center"
        
        titleStyles();
    } catch (error) {
        console.error("Didn't display any pokemon details on page", error);
    }
}
displayPokemonDetails();
styleButtons();
bodyStyle();
