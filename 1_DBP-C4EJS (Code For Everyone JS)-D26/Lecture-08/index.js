// Ham trong JS la 1 kieu du lieu dac biet: typeof func -> function
/*
function f(a,b,c) -> a,b,c: parameter - tham so
f(4,5,6) -> 4,5,6: argument - doi so

JavaScript la ngon ngu event-driven, gom co: event, listener
Khi event duoc trigger/emit thi listener se thuc thi 1 action

callback -> ham bac thap (ham listener)
higher order function -> ham bac cao
*/

/* 
function A() {
    console.log("From A with love")
}
function B(callback) {
    console.log("From B with love")
    callback()
}

// A()
B(A)
// B(B)    // Bao loi
*/



let myArray = []
for (let i=0; i<10; i++) {
    myArray.push(Math.ceil(Math.random()*50))
}

let newArray = []
// for (let i=0; i<myArray.length; i++) {
//     newArray.push(f(myArray[i]))
// }

/*
function f(x) {
    return x*2
}
newArray = myArray.map(f)   // map se lap tung phan tu va ap dung ham f
*/
// const f = (x)=> {
//     return x*2
// }

newArray = myArray.map((element) => {
    return element*2
})

console.log(myArray)
console.log(newArray)

