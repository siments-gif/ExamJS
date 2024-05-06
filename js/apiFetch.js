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
        const res = await fetch(`${baseUrl}/pokemon/${pokemonId}`);
        if (!res.ok) {
            throw new Error('Failed to fetch Pokémon details');
        }
        const data = await res.json();
        // Extract the relevant details from the response
        const pokemon = {
            name: data.name,
            species: data.species.name,
            types: data.types.map(type => type.type.name),
            abilities: data.abilities.map(ability => ability.ability.name)
            // Add more details as needed
        };
        return pokemon;
    } catch (error) {
        throw new Error(`Failed to fetch Pokémon details: ${error.message}`);
    }
}
