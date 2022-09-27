function special2digits(n) {
    let a,b
    a = parseInt(n / 10)
    b = n % 10
    if (a + b + a*b == n) return true
    else return false
}

console.log(special2digits(29))