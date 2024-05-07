import { fetchBaseData } from "./apiFetch.js";

// Creating elements for page with DOM-manipulation
const title = document.createElement('h1');
    title.textContent = "Pokemon List";
    title.style.textAlign = "center";
    document.body.appendChild(title); // Making body the parent element

const pokemonList = document.createElement("ul");
    pokemonList.id = "pokemonList";
    document.body.appendChild(pokemonList);

const container = document.createElement("div")
    container.id = "pokemonContainer";
    container.appendChild(pokemonList);
    document.body.appendChild(container);

// Creating styling to elements with DOM-manipulation
document.body.style.margin = "3rem"

let listStyle = document.getElementById("pokemonList");
    listStyle.style.display = "grid";
    listStyle.style.gap = "5rem"
    listStyle.style.gridTemplateColumns = "repeat(3, 1fr)"
    listStyle.style.listStyle = "none"
        
// Creates a list with pokemons from API
async function createPokemonList(endpoint, listSize) {

    for (let id = 1; id <= listSize; id++) {
        const data = await fetchBaseData(`${endpoint}/${id}`);
        if (data) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}"></img>
            `;


            listItem.style.display = "flex";
            listItem.style.gap = "1rem"
            listItem.style.flexDirection = "column";
            listItem.style.textAlign = "center"

            const button = document.createElement("button");
            button.textContent = "Select Pokemon"
            button.dataset.id = id;

            button.addEventListener ("click", (event) => {
                const pokemonId = event.target.dataset.id;
                location.href = `../detailPage.html?id=${pokemonId}`
            });

            listItem.appendChild(button);

            pokemonList.appendChild(listItem);

        } else {
            console.log(`Failed to display fetch details about pokemon ${id}`)
        }
    }
}

createPokemonList("pokemon", 12);