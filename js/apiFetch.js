const baseUrl = "https://pokeapi.co/api/v1"

export async function fetchBaseData (endpoint) {
    try {
        const res = await fetch(`${baseUrl}/${endpoint}`);
        if (!res.ok) {
            throw new Error ("Response gotten was not ok");
        }
        const data = await res.json();
        return data; // Returning json data of response
    }catch (error) {
        throw new Error ("Can't get data from pokeAPI");
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
            frontImage: data.sprites.front_default,
            backImage: data.sprites.back_default,
            types: data.types.map(type => type.type.name), // Maps pokemon types
            abilities: data.abilities.map(ability => ability.ability.name) // Maps pokemon abilities
            // Add more specific i want from response
        };
        return pokemonDetails;
    } catch (error) {
        throw new Error("Failed to fetch Pokémon details", error);
    }
}

// Problem with fetchCall gives error code 400 (Bad request to server)
export async function loginUser(username) {
    try {
        const res = await fetch(`https://crudapi.co.uk/api/v1/user/uuid/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A" 
            }
        })
        if(!res.ok) {
            throw new Error("Network issue with fetching user")
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Something went wrong fetching user data from api", error)
    }
}

export async function registerUser(username, password, email, phone) {
    try {
        const res = await fetch("https://crudapi.co.uk/api/v1/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
                Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A",
        },
        body: JSON.stringify([{username, password, email, phone}])
    })
        if(!res.ok) {
            throw new Error('Network error for posting user')
        }
        const data = await res.json();
        console.log(data);
    }catch(error) {
        throw new Error("Couldn't connect with api", error)
    }    
}
