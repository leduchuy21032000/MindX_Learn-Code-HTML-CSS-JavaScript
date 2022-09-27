// Bai 1
let Pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
  ]

console.log("Pokemon which can fly and use fire:", Pokemon[5])
Pokemon.pop()   // Rattata index o cuoi, nen pop
Pokemon.push("Pikachu") // Them Pikachu vao cuoi mang
Pokemon.unshift("Meow 2")

console.log(Pokemon)