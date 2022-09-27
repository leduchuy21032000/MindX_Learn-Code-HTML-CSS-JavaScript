function render(pokemon) {
    let out = document.querySelector("#output")
    let stats = ""
    for (let stat of pokemon.stats) {
        stats = stats + `<li>${pokemon.stats[i]}</li>`
    }
    out.innerHTML = ""
    out.insertAdjacentHTML("beforeend",`
    <p>${pokemon.name}</p>
    <img src=${pokemon.image}/>
    <ul>
    
    </ul>
    `)
}

btn.addEventListener("click", async ()=> {
    let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random)*800)}`
    let response = await fetch(url)
    let body = await response.json()
    console.log(body)
    let pokemon = {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
        name: "name",
        stats: []
    }
    pokemon.image = body["sprites"]["other"]["official-artwork"]["front_default"]
    pokemon.name = body.name.toUpperCase()
    for (let stat of body["stats"]) {
        pokemon.stats.push(stat.base_stat)
    }
    render(pokemon)
})






