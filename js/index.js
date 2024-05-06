import {fetchData} from "./apiFetch.js";

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    title.id = "title";
    return title;
}

async function createPokemonList(endpoint, listSize) {
    const title = createTitle('Pokemon List')
    document.body.appendChild(title);

    const pokemonList = document.createElement("ul");
    pokemonList.id = "pokemonList";
    document.body.appendChild(pokemonList);

    const container = document.createElement("div")
    container.appendChild(pokemonList);
    document.body.appendChild(container);

    for (let id = 1; id <= listSize; id++) {
        const data = await fetchData(`${endpoint}/${id}`);
        if (data) {
            const listItem = document.createElement("li");
            listItem.textContent = `Pokemon ${id}: ${data.name}`;
            pokemonList.appendChild(listItem);
        } else {
            console.log(`Failed to fetch details about pokemon ${id}`)
        }
    }
}

createPokemonList("pokemon", 7);