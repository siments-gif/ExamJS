import { fetchPokemonDetails } from "./apiFetch.js"; // Importing fetch Function

const pokemonCard = document.getElementById('pokemonDetails');

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
    } catch (error) {
        console.error("Didn't display any pokemon details on page", error);
    }
}
displayPokemonDetails();