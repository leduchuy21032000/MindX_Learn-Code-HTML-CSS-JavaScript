/* TOPIC 1 */

// Bai 1
function convert(minutes) {
    console.log(minutes*60)
}

convert(10)

// Bai 2
function radiansToDegrees(n) {
    console.log(n*180/Math.PI)
}

radiansToDegrees(1)

// Bai 3
function celsiusToFahrenheit(n) {
    console.log(n*9/5+32)
}

celsiusToFahrenheit(10)

// Bai 4
function PoundToKilogram(n) {
    console.log(n*0.45359237)
}

PoundToKilogram(20)

// Bai 5
function matchHouses(n) {
    console.log(6+5*(n-1))
}

matchHouses(87)

// Bai 6
function sumOfCubes(a,b,c) {
    console.log(a**3 + b**3 + c**3)
}

sumOfCubes(1,5,9)

// Bai 7
function points(x,y) {  // x: 2 points, y: 3 points
    console.log(x*2 + y*3)
}

points(1,1)

// Bai 8
function getArea(height, width) {
    console.log(height*width)
}

getArea(5,20)

// Bai 9
function getPerimeter(height, width) {
    console.log((height+width)*2)
}

getPerimeter(100,200)

// Bai 10
function isTriplet(a,b,c) {
    console.log(Boolean(a**2 + b**2 == c**2) || Boolean(a**2 + c**2 == b**2) || Boolean(b**2 + c**2 == a**2))
}

isTriplet(13,5,12)

/* TOPIC 2 */
// Bai 1
function special2digits(n) {
    let a,b
    a = parseInt(n / 10)
    b = n % 10
    if (a + b + a*b == n) return true
    else return false
}

console.log(special2digits(29))

// Bai 2
function isNarcissistic(n) {
    let a,b,c
    a = parseInt(n/100)
    b = parseInt(n/10)%10
    c = n%10
    if (n == a**3 + b**3 + c**3) return true
    else return false
}

console.log(isNarcissistic(153))

// Bai 3
function areaPerimetter(width, height, choice) {
    if (choice == "area") return width*height
    else if (choice == "perimetter") return (width+height)*2
}

console.log(areaPerimetter(2, 3, "area"))
console.log(areaPerimetter(8, 6, "perimetter"))
console.log(areaPerimetter(2.9, 3.1, "perimetter"))

// Bai 4
function areaShape(base,height,shape) {
    if (shape=="triangle") return 0.5 * base * height
    else if (shape=="parallelogram") return base * height
}

console.log(areaShape(2, 3, "triangle"))
console.log(areaShape(8, 6, "parallelogram"))
console.log(areaShape(2.9, 1.3, "parallelogram"))

// Bai 5
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

/* TOPIC 3 */
// Bai 1
function rightAngledTriangle(n) {
    for (let i=1; i<=n; i++) {
        process.stdout.write("// ")
        for (let j=1; j<=i; j++) {
            process.stdout.write("#")
        }
        if (i!=n) console.log()
    }
}

rightAngledTriangle(4);
console.log("\n")
rightAngledTriangle(6);
console.log("\n")

// Bai 2
function leftAngledTriangle(n) {
    for (let i=1; i<=n; i++) {
        process.stdout.write("// ")
        for (let j=1; j<=n-i; j++) {
            process.stdout.write(" ")
        }
        for (let k=1; k<=i; k++) {
            process.stdout.write("#")
        }
        if (i!=n) console.log()
    }
}

leftAngledTriangle(4);
console.log("\n")
leftAngledTriangle(6);
console.log("\n")

// Bai 3
function fizzBuzz(n) {
    process.stdout.write("//")
    process.stdout.write("1")
    for (let i=2; i<=n; i++) {
        // if (i%3==0 && i%5!=0) process.stdout.write(" Fizz")
        // else if (i%5==0 && i%3!=0) process.stdout.write(" Buzz")
        // else if (i%5==0 && i%3==0) process.stdout.write(" FizzBuzz")
        // else process.stdout.write(" " + i)
        if (i%5==0 && i%3==0) process.stdout.write(" FizzBuzz")
        else if (i%3==0) process.stdout.write(" Fizz")
        else if (i%5==0) process.stdout.write(" Buzz")
        
        else process.stdout.write(" " + i)
    }
}

fizzBuzz(10);
console.log()
fizzBuzz(15);
console.log()

// Bai 4
function isPerfectNum(n) {
    let sum = 0
    for (let i=1; i<n; i++) {
        if (n%i==0) sum+=i
    }
    if (n==sum) return true
    return false
}

console.log(isPerfectNum(6))
console.log(isPerfectNum(496))
console.log()

// Bai 5
function isAbundantNum(n) {
    let sum = 0
    for (let i=1; i<n; i++) {
        if (n%i==0) sum+=i
    }
    if (sum > n) return true
    return false
}

console.log(isAbundantNum(27))
console.log(isAbundantNum(24))
console.log(isAbundantNum(97))
console.log(isAbundantNum(100))
console.log()
