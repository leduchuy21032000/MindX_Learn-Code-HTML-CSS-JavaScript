// Bai 2
function outlierNumber(arr) {
    let count_even = 0, count_odd = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) count_even += 1
        else count_odd +=1
    }
    if (count_even == 1) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i]%2 == 0) return arr[i]
        }
    }
    else if (count_odd == 1) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i]%2 != 0) return arr[i]
        }
    }
}
console.log(outlierNumber([2, 3, 4]))
console.log(outlierNumber([4, 1, 3, 5, 9]))
