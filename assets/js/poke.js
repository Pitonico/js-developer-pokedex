const pokemonList = document.getElementById('pokes-list')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokeDetails = document.getElementById('poke-details')
const poke = document.getElementById('poke')
const pokes = document.getElementById('pokes')
const backButton = document.getElementById('btn-back')

const maxRecords = 151
const limit = 10
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokeToLi).join('')
        pokemonList.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

function getId(id) {
    pokeApi.getPokemonById(id)
        .then(pokemon => {
            if(poke.hasAttribute('hidden')) poke.removeAttribute('hidden')
            pokes.setAttribute('hidden', null)
            pokeDetails.innerHTML = convertPokeDetailsToDiv(pokemon)
        })
}

backButton.addEventListener('click', () => {
    pokes.removeAttribute('hidden')
    poke.setAttribute('hidden', null);
})
