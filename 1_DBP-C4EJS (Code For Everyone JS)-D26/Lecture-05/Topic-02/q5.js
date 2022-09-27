function pHName(n) {
    if (7<n && n<=14) return "\"alkaline\""
    else if (n==7) return "\"neutral\""
    else if (0<=n && n<7) return "\"acidic\""
    else if (n<0 || n>14) return "\"invalid\""
}

console.log(pHName(5))
console.log(pHName(8.7))
console.log(pHName(7))
console.log(pHName(6.9999))
console.log(pHName(8.0001))
console.log(pHName(-1))
console.log(pHName(14.1))