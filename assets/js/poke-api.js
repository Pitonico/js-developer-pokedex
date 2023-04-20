
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.id = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

function convertPokeDetailsToModel(pokeDetails){
    const statsName = ['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed']
    const pokemon = new PokemonDetails();
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default
    pokemon.id = pokeDetails.id
    pokemon.name = pokeDetails.name
    pokemon.height = pokeDetails.height
    pokemon.weight = pokeDetails.weight
    pokemon.types = pokeDetails.types.map(typeSlot => typeSlot.type.name)
    statsName.forEach((name, i) => pokemon.stats[name] = pokeDetails.stats[i].base_stat);
    pokeDetails.abilities.map(ability => pokemon.abilities.push(ability.ability.name))
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
}

pokeApi.getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url)
        .then(response => response.json())
        .then(convertPokeDetailsToModel)
}