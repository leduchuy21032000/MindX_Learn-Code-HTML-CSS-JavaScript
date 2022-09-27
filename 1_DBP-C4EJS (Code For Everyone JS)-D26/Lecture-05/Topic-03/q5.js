function isAbundantNum(n) {
    let sum = 0
    for (let i=1; i<n; i++) {
        if (n%i==0) sum+=i
    }
    if (sum > n) return true
    else return false
}

console.log(isAbundantNum(27))
console.log(isAbundantNum(24))
console.log(isAbundantNum(97))
console.log(isAbundantNum(100))