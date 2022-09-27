/* Bai 1 */
let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"]

pokemon.stats.speed = 60
pokemon["skill"] = pikachuSkill
delete pokemon.stats.belongTo

// console.log(pokemon)

/* Bai 2 */
let inventory = {
    gold: 500,
    pouch: ["flint", "twine", "gemstone"],
    backpack: ["xylophone", "dagger", "bedroll", "bread loaf"]
}

inventory["pocket"] = ["seashell", "strange berry", "lint"]

// Delete dagger
delete inventory.backpack[1]
for (let i = 1; i < inventory.backpack.length; i++) {
    inventory.backpack[i] = inventory.backpack[i + 1]
}
inventory.backpack.length -= 1

inventory.gold += 50
delete inventory.pouch

// console.log(inventory)

/* Bai 3 */
let contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
},
{
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
}
];

function lookUpProfile(name, prop) {
    let checkName = false, checkProp = false, result = ""
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) checkName = true
        for (let key in contacts[i])
            if (prop == key) checkProp = true
    }
    if (checkName == true && checkProp == true) return contacts[i][prop]
    if (!checkName) result += "No such contact \n"
    if (!checkProp) result += "No such property \n"
    return result

    // 
}

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Akiraa", "likess"));

/* Bai 4 */
function getBudgets(people) {
    let sum = 0
    for (let i=0; i<people.length; i++) {
        sum += people[i].budget
    }
    console.log(sum)
    // return sum
}

// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 }
// ])

// getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
//   ])

/* Bai 5 */
function getDistance(pointA, pointB) {
    return ((pointA.x - pointB.x)**2 + (pointA.y - pointB.y)**2)**0.5
}
// let result = getDistance({x: -2, y: 1}, {x: 4, y: 3})
// console.log(result)

/* Bai 6 */
function inkLevels(inks) {
    min = Number.MAX_VALUE;     // So maximum
    // for (let key in inks) if (inks[key] != null) min = inks[key]   // De gan duoc min la 1 gia tri trong object
    for (let key in inks) {
        if (inks[key] < min) {
            min = inks[key]
        }
    }
    return min
}

let result
result = inkLevels({
    "cyan": 1,
    "magenta": 1,
    "yellow": 1
})
console.log(result)
  
// result = inkLevels({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// })
// console.log(result)
  
// result = inkLevels({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })
// console.log(result)

/* Bai 7 */
const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    if (GUEST_LIST.hasOwnProperty(name)) {
        return "Hi! I'm " + name + ", and I'm from " + GUEST_LIST[name] + "."
    }
    else return "Hi! I'm a guest."
}

// console.log(greeting("Randy"))
// console.log(greeting("Sam"))
// console.log(greeting("Monti"))

/* Bai 8 */
function keysAndValues(obj) {
    let keys_arr = [], values_arr = [], result = [], i = 0
    for (let key in obj) {
        keys_arr[i] = key
        values_arr[i] = obj[key]
        i++
    }
    result[0] = keys_arr
    result[1] = values_arr
    return result
}

// result = keysAndValues({ a: 1, b: 2, c: 3 })
// console.log(result)

// result = keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// console.log(result)

// result = keysAndValues({ key1: true, key2: false, key3: undefined })
// console.log(result)

/* Bai 9 */
function freeShipping(obj) {
    let total = 0
    for(let key in obj) {
        total += obj[key]
    }
    if (total >= 50) return true
    else return false
}
// let result
// result = freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })
// console.log(result)

// result = freeShipping({ "Flatscreen TV": 399.99 })
// console.log(result)

// result = freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })
// console.log(result)

/* Bai 10 */

// It takes 63 minutes for 4 people to paint 9 walls. -> 4 people take 7 mins for a wall
// one wall take 28 person minutes to complete( one by one) -> 28*4/7 
// How many minutes does it take 14 people to paint 14 walls?
const rate = {  
    // peple: 4, walls: 9, minutes: 63
    // peple: 4, walls: 1, minutes: 63/9=7
    // peple: 1, walls: 1, minutes: 7*4=28
    // // peple: , walls: , minutes: 28 / people * wall
	people: 4,
	walls: 9,
	minutes: 63 
}

function time(rate, people, wall) {
    return 28 / people * wall
}

// time(rate,people,walls) ➞ 16
// let result
// result = time(rate,7,4)
// console.log(result)