function isNarcissistic(n) {
    let a,b,c
    a = parseInt(n/100)
    b = parseInt(n/10)%10
    c = n%10
    if (n == a**3 + b**3 + c**3) return true
    else return false
}

console.log(isNarcissistic(153))