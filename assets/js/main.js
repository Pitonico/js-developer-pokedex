function convertPokeToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="getId(${pokemon.id})">
            <span class="id">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function convertPokeDetailsToDiv(pokemon) {


    return `
        <div class="poke-img">
            <img src=${pokemon.photo} alt="">
        </div>
        <div class="poke-base">
            <div class="poke-info">
            <h2>Info</h2>
            <p><span>No.</span> ${pokemon.id}</p>
            <p class="name"><span>Name</span>: ${pokemon.name}</p>
            <p><span>Height</span>: ${pokemon.height}</p>
            <p><span>Weight</span>: ${pokemon.weight}</p>
            <div>
                <ul class="types-list">
                    <span>Types:</span>${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                </ul>
            </div>
            </div>
            <ul class="poke-stats">
                <h2>Stats</h2>
                <li><span>HP</span>: ${pokemon.stats.hp}</li>
                <li><span>Attack</span>: ${pokemon.stats.attack}</li>
                <li><span>Defense</span>: ${pokemon.stats.defense}</li>
                <li><span>Special attack</span>: ${pokemon.stats.specialAttack}</li>
                <li><span>Special defense</span>: ${pokemon.stats.specialDefense}</li>
                <li><span>Speed</span>: ${pokemon.stats.speed}</li>
            </ul>
            <ul class="poke-abilities">
                <h2>Abilities</h2>
                ${pokemon.abilities.map(ability => `<li class="ability">${ability}</li>`).join('')}
            </ul>
        </div>
        
    `
}