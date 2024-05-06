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

async function fetchDepthDetails() {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        if (!res.ok) {
            throw new Error ("Response gotten was not ok");
        }
        const data = await res.json();
        return data;
    }catch (error) {
    throw new Error ("Can't get data from pokeAPI")
}
}