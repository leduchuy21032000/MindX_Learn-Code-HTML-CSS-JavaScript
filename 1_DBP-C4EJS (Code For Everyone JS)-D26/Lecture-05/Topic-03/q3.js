function fizzBuzz(n) {
    process.stdout.write("//")
    process.stdout.write("1")
    for (let i=2; i<=n; i++) {
        if (i%3==0 && i%5!=0) process.stdout.write(" Fizz")
        else if (i%5==0 && i%3!=0) process.stdout.write(" Buzz")
        else if (i%5==0 && i%3==0) process.stdout.write(" FizzBuzz")
        else process.stdout.write(" " + i)
    }
}

fizzBuzz(10);
console.log()
fizzBuzz(15);