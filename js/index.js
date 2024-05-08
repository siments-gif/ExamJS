import { fetchBaseData } from "./apiFetch.js";
import { styleButtons, bodyStyle } from "./globalStyling.js";

// Creating elements for page with DOM-manipulation
const title = document.createElement('h1');
    title.textContent = "Pokemon List";
    title.style.textAlign = "center";
    document.body.appendChild(title); // Making body the parent element

const pokemonListCards = document.createElement("ul");
    pokemonListCards.id = "pokemonList";
    document.body.appendChild(pokemonListCards);

const container = document.createElement("div")
    container.id = "pokemonContainer";
    container.appendChild(pokemonList);
    document.body.appendChild(container);

// Creating styling to elements with DOM-manipulation
let listStyle = document.getElementById("pokemonList");
    listStyle.style.display = "grid";
    listStyle.style.marginRight = "3rem"
    listStyle.style.gap = "2rem"
    listStyle.style.gridTemplateColumns = "repeat(3, 1fr)"
    listStyle.style.listStyle = "none"

// Creates a list with pokemons from API
async function createPokemonList(endpoint, listSize) {

    try {
       for (let id = 1; id <= listSize; id++) {
        const data = await fetchBaseData(`${endpoint}/${id}`);

            const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h2>${data.name}</h2>
                    <div id="images">
                        <img src="${data.sprites.front_default}"></img>
                        <img src="${data.sprites.back_default}"></img>
                    </div>
                    
                `;
            pokemonListCards.appendChild(listItem);     
            
            listItem.style.display = "flex";
            listItem.style.border = "2px solid black"
            listItem.style.borderRadius = "1rem"
            listItem.style.backgroundColor = "red"
            listItem.style.flexDirection = "column";
            listItem.style.alignItems = "center"
            listItem.style.textAlign = "center"
            document.getElementById("images").style.display = "flex"
            
            const button = document.createElement("button");
            button.textContent = "Select Pokemon"
            button.dataset.id = id;
            styleButtons();
            button.addEventListener ("click", (event) => {
                const pokemonId = event.target.dataset.id;
                location.href = `../detailPage.html?id=${pokemonId}`
            });

            listItem.appendChild(button);

        } 
    } catch (error) {
        throw new Error ("Could not display created pokemon list", error)
 }    
}
bodyStyle();
createPokemonList("pokemon", 18);
