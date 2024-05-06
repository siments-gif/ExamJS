const baseUrl = "https://pokeapi.co/api/v2"

export async function fetchData (endpoint) {
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