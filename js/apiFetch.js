const pokemonUrl = "https://pokeapi.co/api/v2"


// Getting every pokemon from pokeAPI
export async function fetchBaseData (endpoint) {
    try {
        const res = await fetch(`${pokemonUrl}/${endpoint}`);
        if (!res.ok) {
            throw new Error ("Response gotten was not ok");
        }
        const data = await res.json();
        return data; // Returning json data of response
    }catch (error) {
        throw new Error ("Can't get data from pokeAPI");
    }
}

// Fetching pokemon detail from pokeAPI
export async function fetchPokemonDetails(pokemonId) {
    try {
        const res = await fetch(`${pokemonUrl}/pokemon/${pokemonId}`); // Fetching new response from API
        if (!res.ok) {
            throw new Error('Network error for fetched data not ok');
        }
        const data = await res.json();  

        // Takes specific details from the response
        const pokemonDetails = {
            name: data.name,
            weight: data.weight,
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

// Function for getting collection from backendAPI
export async function getCollection() {
    const res = await fetch(`https://crudapi.co.uk/api/v1/collection`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A"
        } 
    });
    if(!res.ok) {
        throw new Error(`Something went wrong with fetching. check: ${res.status}`)
    }
    const data = await res.json();
    console.log(data);
    return data.items; // Returning item array from fetch
}

// Function for saving data to backendAPI
export async function saveToCollection(uploadData) {
    try {
        const res = await fetch(`https://crudapi.co.uk/api/v1/collection`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                    Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A",
            },
            body: JSON.stringify([uploadData])
        })
        if(!res.ok) {
            throw new Error(`Something went wrong with ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        throw new Error("Something went wrong with posting details to collection", error);
    }
}

// Function for deleting spesific data from collection
export async function deleteFromCollection(_uuid){
    try {
        const res = await fetch(`https://crudapi.co.uk/api/v1/collection/${data._uuid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
                Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A",
        },
    });
    if(!res.ok){
        throw new Error ("Problem with finding source for deletion", res.statusText);
    }
    const deletedData = await res.json();
    return deletedData;
    } catch (error) {
        throw new Error("Could not connect with API", error);
    }  
};

// Function for registering user to backendAPI
export async function registerUser(username, password, email, phone) {
    try {
        const res = await fetch("https://crudapi.co.uk/api/v1/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
                Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A",
        },
        body: JSON.stringify([{username, password, email, phone}])
    });
        if(!res.ok) {
            throw new Error('Network error for posting user')
        }
        const data = await res.json();
        console.log(data);
    }catch(error) {
        throw new Error("Couldn't connect with api", error);
    }    
}

export async function getUserID() {
    const collection = [];
    const res = await fetch(`https://crudapi.co.uk/api/v1/user`, {
    
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A"
        } 
    });
    if(!res.ok) {
        throw new Error(`Something went wrong with fetching. check: ${res.status}`)
    }
    const data = await res.json();
    const displayData = data.items.map((item) => ({
        id: item._uuid,
        username: item.username,
        password: item.password,
        collection: collection
    }));
    console.log(displayData)
    return displayData; 
}

export async function changeUserCollection(){
    const userID = localStorage.getItem("existingUser");
    const res = await fetch(`https://crudapi.co.uk/api/v1/user/${userID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer U42Uxh60_bv0V7KTbbLFs18ys9Tsu7_N-NS9woLWx41GtGq8-A"
        },
        body: JSON.stringify({
            collection: userID.collection
        })
    });
    const data = res.json();
    console.log(data);
}
