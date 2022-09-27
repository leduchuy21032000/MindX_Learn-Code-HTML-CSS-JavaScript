// console.log(document)
// document.write("lorem ipsum")
// let select = document.getElementById("select_id")
// console.log(select)
// document.get

// let options = document.getElementsByTagName("option")
// let option_w_query = document.querySelector("option")
// let options_w_query = document.querySelectorAll("option")
// console.log(options)
// console.log(option_w_query)
// console.log(options_w_query)

// Derived -Xpath
// let radios = document.querySelectorAll("input[type=radio]")
// console.log(radios)

// window.addEventListener("click",()=> {
//     console.log("You just cliked!")
// })

let button = document.querySelector("input[type = button]")
let name = document.querySelector("input[type=text]")
let select = document.querySelector("select")
console.log(button)
// button.addEventListener("click", () => {
//     console.log(name.value)
//     console.log(select.value)
// })
button.addEventListener("click",()=>{
    if (name.value != "") {
        output.innerHTML = `Your name is ${name.value}, your favorite pet is ${select.value}`
    }
})