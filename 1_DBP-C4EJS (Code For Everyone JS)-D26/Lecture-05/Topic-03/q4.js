function isPerfectNum(n) {
    let sum = 0
    for (let i=1; i<n; i++) {
        if (n%i==0) sum+=i
    }
    if (n==sum) return true
    else return false
}

console.log(isPerfectNum(6))
console.log(isPerfectNum(496))