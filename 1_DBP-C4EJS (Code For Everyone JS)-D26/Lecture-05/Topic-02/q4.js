function areaShape(base,height,shape) {
    if (shape=="triangle") return 0.5 * base * height
    else if (shape=="parallelogram") return base * height
}

console.log(areaShape(2, 3, "triangle"))
console.log(areaShape(8, 6, "parallelogram"))
console.log(areaShape(2.9, 1.3, "parallelogram"))
