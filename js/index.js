import {fetchData} from "./apiFetch.js";

// Creating elements for page with DOM-manipulation
const title = document.createElement('h1');
    title.textContent = "Pokemon List";
    title.style.textAlign = "center";
    document.body.appendChild(title); 

const pokemonList = document.createElement("ul");
    pokemonList.id = "pokemonList";
    document.body.appendChild(pokemonList);

const container = document.createElement("div")
    container.id = "pokemonContainer";
    container.appendChild(pokemonList);
    document.body.appendChild(container);

// Creating styling to elements with DOM-manipulation
let listStyle = document.getElementById("pokemonList");
    listStyle.style.display = "grid";
    listStyle.style.gap = "2rem"
    listStyle.style.gridTemplateColumns = "repeat(3, 1fr)"
    listStyle.style.listStyle = "none"

// Creates a list with pokemons from API
async function createPokemonList(endpoint, listSize) {

    for (let id = 1; id <= listSize; id++) {
        const data = await fetchData(`${endpoint}/${id}`);
        if (data) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${data.name}`;

            const button = document.createElement("button");
            button.textContent = "Select Pokemon"
            button.dataset.id = id;

            button.addEventListener ("click", async () => {
                location.href = "../detailPage.html"
            })
            pokemonList.appendChild(listItem);
        } else {
            console.log(`Failed to fetch details about pokemon ${id}`)
        }
    }
}

createPokemonList("pokemon", 12);