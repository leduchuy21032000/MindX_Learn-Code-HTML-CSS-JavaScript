// function isTriplet(a,b,c) {
//     let max, min, remainder

//     if (a>=b && a>=c) max = a
//     else if (b>=a && b>=c) max = b
//     else max = c

//     if (a<=b && a<=c) min = a
//     else if (b<=a && b<=c) min = b
//     else min = c

//     remainder = a+b+c-max-min

//     if (min**2 + remainder**2 == max**2) return console.log(true)
//     else return console.log(false)
// }

function isTriplet(a,b,c) {
    console.log(Boolean(a**2 + b**2 == c**2) || Boolean(a**2 + c**2 == b**2) || Boolean(b**2 + c**2 == a**2))
}

isTriplet(13,5,12)

