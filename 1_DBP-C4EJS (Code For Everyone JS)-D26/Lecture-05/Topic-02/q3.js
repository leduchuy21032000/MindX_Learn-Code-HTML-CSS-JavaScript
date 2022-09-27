function areaPerimetter(width, height, choice) {
    if (choice == "area") return width*height
    else if (choice == "perimetter") return (width+height)*2
}

console.log(areaPerimetter(2, 3, "area"))
console.log(areaPerimetter(8, 6, "perimetter"))
console.log(areaPerimetter(2.9, 3.1, "perimetter"))