const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {

    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {


    const div = document.createElement("div");
    div.classList.add("pokemon");

    let tipos = poke.types.map((type => `<p class="${type.type.name}" tipo">${type.type.name}"</p>`))
    div.innerHTML = `
    
    <div class="pokemon-carta">
        <div class="pokemon-info-top">
            <p>${poke.name}</p>
        </div>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
        <div class = info>
            <div class="nombre-contenedor">
                <p>${poke.id}</p>
                <p>${poke.height}</p>
                <p>${poke.weight}</p>
                <p> types:${tipos}</p>
            </div>  
       </div>   
    </div>  
    `;

    listaPokemon.append(div);
}


/*

<div id="todos">
        <div class="pokemon-todos" id="listaPokemon">
           <div class="pokemon">
                <p class="pokemon-id-back">#025</p>
                <div class="pokemon-imagen">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu">
                </div>
                <div class="pokemon-info">
                    <div class="nombre-contenedor">
                        <p class="pokemon-id">#025</p>
                        <h2 class="pokemon-nombre">Pikachu</h2>
                    </div>
                    <div class="pokemon-tipos">
                        <p class="electric tipo">ELECTRIC</p>
                        <p class="fighting tipo">FIGHTING</p>
                    </div>
                    <div class="pokemon-stats">
                        <p class="stat">4m</p>
                        <p class="stat">60kg</p>
                    </div>
*/