const baseUrl = "https://pokeapi.co/api/v2"

export async function fetchBaseData (endpoint) {
    try {
        const res = await fetch(`${baseUrl}/${endpoint}`);
        if (!res.ok) {
            throw new Error ("Response gotten was not ok");
        }
        const data = await res.json();
        return data;
    }catch (error) {
        throw new Error ("Can't get data from pokeAPI")
    }
}

export async function fetchPokemonDetails(pokemonId) {
    try {
        const res = await fetch(`${baseUrl}/pokemon/${pokemonId}`); // Fetching new response from API
        if (!res.ok) {
            throw new Error('Network error for fetched data not ok');
        }
        const data = await res.json();
        // Takes specific details from the response
        const pokemonDetails = {
            name: data.name,
            species: data.species.name,
            types: data.types.map(type => type.type.name), // Maps pokemon types
            abilities: data.abilities.map(ability => ability.ability.name) // Maps pokemon abilities
            // Add more specific i want from response
        };
        return pokemonDetails;
    } catch (error) {
        throw new Error(`Failed to fetch Pokémon details: ${error}`);
    }
}
