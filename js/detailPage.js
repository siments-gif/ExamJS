import { fetchPokemonDetails } from "./apiFetch.js";

async function displayPokemonDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search)
        const pokemonId = urlParams.get("id");
        
        const pokemon = await fetchPokemonDetails(pokemonId);

        const symbols = {
            "light": "🌟",
            "fire": "🔥",
            "water": "💧",
            "Electric": "⚡️",
            "grass": "🌿",
            "poison": "☢"
        };

        const symbolForTypes = pokemon.types.map(type => symbols[type] || type);
        const combinedTypes = symbolForTypes + pokemon.types;

        const specificPokemonContainer = document.getElementById('pokemonDetails');
        specificPokemonContainer.innerHTML = `
            <h2>Name: ${pokemon.name}</h2>
            <p>Species: ${pokemon.species}</p>
            <p>Types: ${combinedTypes}</p>
            <p>Abilities: ${pokemon.abilities.join(', ')}</p>
            `;
    } catch (error) {
        console.error("Didn't display any pokemon details on page", error);
    }
}
displayPokemonDetails();