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