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
