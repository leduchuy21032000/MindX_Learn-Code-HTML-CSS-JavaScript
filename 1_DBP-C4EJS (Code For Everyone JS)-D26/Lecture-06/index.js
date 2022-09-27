

let revenue = [1,5,7,8,10,8,6]

// revenue = "abc"
// console.log(revenue)

// access toi tung phan tu
// revenue[2] = "hello my friend"
// console.log(revenue)

// delete, insert
// revenue.unshift("I am head")    // them dau mang
// revenue.push("I am tail")       // them cuoi mang
// console.log(revenue)
// revenue.shift()                 // xoa dau mang
// console.log(revenue)
// revenue.pop()                   // xoa cuoi mang
// console.log(revenue)

// delete revenue[2]                   // [ 1, 5, <1 empty item>, 8, 10, 8, 6 ] => Khong dung vi chi thanh empty
// console.log(revenue)

// console.log(revenue.length)
// Xoa phan tu di thay a[i] = a[i+1], xong pop()
// Them phan tu thi arr.push(null, roi a[i+1] = a[i])

// Chen 2 vao giua 7,8
function insertAt(array, value, index) {
    let head = array.slice(0,index)     // lay tu 0 toi index-1
    let tail = array.slice(index, array.length)
    let full = head.concat([value]).concat(tail)
    console.log(head)
    console.log(tail)
    console.log(full)
}

// insertAt(revenue, 100, 3)

function deleteAt(array, index) {
    let head = array.slice(0,index)
    let tail = array.slice(index+1,array.length)
    let full = head.concat(tail)
    return full
}
console.log(revenue)
array = deleteAt(revenue,0)
console.log(array)

/* --- CHU Y --- */
// Ham giup lap trinh nhanh: foreach, map, reduce, filter (compact)
// console.log(revenue.sort())                 // Neu goi .sort thi se tu dong sort theo chuoi
// console.log(revenue.sort((a,b)=>a-b))     

// console.log("string"[0])    // Ra chu s