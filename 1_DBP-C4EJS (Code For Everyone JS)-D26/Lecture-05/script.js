/* Javascript dau ; la optional, co cung duoc, khong co cung khong sao */



// comment 1 line
/* comment n lines */ 
// console.log(1234);   // Ham: giup in 1 gia tri bat ky ra man hinh console
// statements = cau lenh, bieu thuc
// Du lieu, gi tri trong Javascript
// primitive (kieu nguyen thuy): number, string, bool
// non-primitive|reference: array, object, function
// So thuc: 10.0, 2e3 (2000)
// bool: true, false
// string: "chuoi", 'day cung la chuoi', `dau backstick`

// variable: bang tu khoa var, let, constant
// var variable_name;
// let variable_name;
// const variable_name;

// let PI = 3.14159;
// console.log(PI);
// PI= 2.71;
// console.log(PI);

// operands (toan hang, cung nhu so hang trong toan) & operator (toan tu, la phep toan: +,-,*,/,** (dau ^), %, ...)
// thuong: quotient, dư: remainder
// Toan tu so sanh giong C++: ||, &&
// === dung de lam viec voi kieu du lieu reference

// Vong lap: for, while, do while
// If, else, else if, switch case cu phap y nhu C++
// while (condition) {

// }

// let i = 1
// do {

// }
// while(i<10)

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Quy tac coercion (ep kieu)
// console.log(10+10)
// console.log('10'+10)    // concatenate: phep noi chuoi
// console.log(10-'5')     // do khong co phep tru chuoi nen thanh phep tru toan hoc

// let i = true
// console.log(typeof i)

// let a = 10
// let b = '12.5'
// b = parseFloat(b)
// let c = a + b
// console.log(c)

// Ham
function test(a,b,c) {
    return 1
}

// Goi ham, call, invoke
console.log(test(1,2,3))