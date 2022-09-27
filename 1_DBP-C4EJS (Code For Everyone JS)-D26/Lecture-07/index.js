// array cho phep chung ta truy cap toi gia tri bang index
// object cho phep chung ta truy cap toi gia tri bang name cua property

let employee = {
    name: "Huy",
    salary: 1000,
    faculty: "CS",
    family: {
        dad: "Huy's dad",
        mom: "Huy's mom",
        sister: "Huy's sister",
    },
    sport: ["football", "baseball", "swimming"],
}
// console.log(employee)

// employee.salary = 2000
// console.log(employee.salary)

// console.log(employee.family.dad)
// console.log(employee.sport[0])

let emps = [
{   // emps[0]
    name: "Huy",
    salary: 1000,
    faculty: "CS",
    "the-legend-of-zelda":["this-is-zelda"],    
},
    {},
    {},
    {},
]

// console.log(employees[0].faculty)

/* dynamic key */ 
// let key = "the-legend-of-zelda"
// console.log(emps[0][key])

for (let key in employee) {
    console.log(employee[key])
}

// employee["role"] = "boss"
// employee["ID"] = "1"
// console.log("check1", employee)
// // a=employee
// // console.log("check 1:",a.role)

// delete employee["role"]
// console.log("check2",employee)

