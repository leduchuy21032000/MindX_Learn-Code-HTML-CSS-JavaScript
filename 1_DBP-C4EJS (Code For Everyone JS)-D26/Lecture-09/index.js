/* Bai 1 */
function reverse(str_inp) {
    let str_result = ""
    for (let i = str_inp.length - 1; i >= 0; i--) {
        str_result += str_inp[i]
    }
    return str_result
}

// console.log(reverse("program"))
// console.log(reverse("data"))

/* Bai 2 */
function capitalize(str_inp) {
    let str_result = ""
    for (let i=0; i<str_inp.length; i++) {
        if ((i==0 || str_inp[i - 1] == " ") && str_inp.charCodeAt(i) >= 97 && str_inp.charCodeAt(i) <= 122) str_result += String.fromCharCode(str_inp.charCodeAt(i) - 32)
        else str_result += str_inp[i]
    }
    return str_result
}

// console.log(capitalize("program developer"))
// console.log(capitalize("Computer science"))
// console.log(capitalize("this is Test"))
// console.log(capitalize("hello a"))

/* Bai 3 */
function unique(str_arr){
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
      
    let result = str_arr.filter(unique)
    return result
}

// console.log(unique(["one","two","three","one","one","four","five","four","five","five"]))
// console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))

/* Bai 4 */
function allEven(inp_arr){
    let result = [], idx = 0
    for (let i=0; i<inp_arr.length; i++) {
        n = inp_arr[i].toString()
        let odd = 0
        for (let j=0; j<n.length; j++) {
            if (parseInt(n[j]) % 2 != 0) {
                odd += 1
            }
        }
        if (odd == 0) {
            result[idx] = inp_arr[i]
            idx++
        }
    }
    return result
}
// console.log(allEven([2, 4 , 6, 642, 13, 6, 863, 92]))
// console.log(allEven([12, 234, 8, 20, 7896]))

/* Bai 5 */
function isValidDate(date_str){
    let date, month, year
    date = parseInt(date_str[0])*10 + parseInt(date_str[1])
    month = parseInt(date_str[3])*10 + parseInt(date_str[4])
    year = parseInt(date_str[6])*1000 + parseInt(date_str[7])*100 + parseInt(date_str[8])*10 + parseInt(date_str[9]) 
    
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (date >=1 && date <= 31) return true
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (date >=1 && date <= 30) return true
    }
    if (month == 2) {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            if (date >= 1 && date <= 29) return true
        }
        if (date >= 1 && date <= 28) return true
    }
    return false
}

// console.log(isValidDate('30/04/2021'))
// console.log(isValidDate('29/02/2021'))

function getNextDate(date_str){
    let result = ""
    if (!isValidDate(date_str)) {
        return "00/00/0000"
    }

    let date, month, year
    date = parseInt(date_str[0])*10 + parseInt(date_str[1])
    month = parseInt(date_str[3])*10 + parseInt(date_str[4])
    year = parseInt(date_str[6])*1000 + parseInt(date_str[7])*100 + parseInt(date_str[8])*10 + parseInt(date_str[9]) 

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (date >=1 && date <= 30) {
            date += 1
        }
        else if (date == 31) {
            date = 1
            if (month != 12) month += 1
            else {
                month = 1
                year += 1
            }
        }
    }

    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (date >=1 && date <= 29) {
            date += 1
        }
        else if (date = 30) {
            date = 1
            month += 1
        }
    }

    else if (month == 2) {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            if (date >= 1 && date <= 28) date += 1
            else if (date == 29) {
                date = 1
                month += 1
            }
        }
        else if (date >= 1 && date <= 27) date += 1
        else if (date == 28) {
            date = 1
            month += 1
        }
    }
    result = date.toString() + "/" + month.toString() + "/" + year.toString()
    return result
}

// console.log(getNextDate('30/04/2021'))
// console.log(getNextDate('29/02/2021'))

// console.log(getNextDate('28/02/2020'))
// console.log(getNextDate('29/02/2020'))
// console.log(getNextDate('31/12/2020'))
// console.log(getNextDate('01/01/2021'))
// console.log(getNextDate('30/01/2021'))
// console.log(getNextDate('31/01/2021'))

/* Bai 6 */
let emps = [
    {   // emps[0]
        name: "An",
        age: 20,
        salary: 1000,
        position: "IT",  
    },
    {   // emps[0]
        name: "Binh",
        age: 25,
        salary: 800,
        position: "accountant",  
    },
    {   // emps[0]
        name: "Chuong",
        age: 50,
        salary: 5000,
        position: "Manager",  
    },
    ]

function Read(name) {
    for (let i=0; i < emps.length; i++) {
        if (name == emps[i].name) {
            console.log(emps[i])
        }
    }
}

function Create(new_name, new_age, new_salary, new_position) {
    emps.push({
        name: new_name,
        age: new_age,
        salary: new_salary,
        position: new_position,  
    })
}

function Update(name, new_age, new_salary, new_position) {
    for (let i=0; i < emps.length; i++) {
        if (name == emps[i].name) {
            emps[i].age = new_age
            emps[i].salary = new_salary
            emps[i].position = new_position
        }
    }
}

function Delete(array, index) {
    let head = array.slice(0,index)
    let tail = array.slice(index+1,array.length)
    let full = head.concat(tail)
    return full
}

// Read("An")  // Read

// console.log(emps)
// emps = Delete(emps, 0)  // Delete
// console.log(emps)

// Create("Duy", 30, 1500, "QC")   // Create
// console.log(emps)

// Update("Duy", 31, 10000, "Director")  // Update
// console.log(emps)

