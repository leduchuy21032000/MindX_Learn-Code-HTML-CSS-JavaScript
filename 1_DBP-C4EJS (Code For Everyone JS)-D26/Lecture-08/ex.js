/* Bai 1 */
function removeDollarSign(text) {
    // let newText = ""
    // for (let i=0; i<text.length; i++) {
    //     if (text[i] != "$") newText += text[i]
    // }
    // return newText
    newText = text.replaceAll('$', '')
    return newText
};

// let result = removeDollarSign('$80% percent of $life is to show $up')
// console.log(result)

/* Bai 2 */
function binaryAgent(str) {
    let str_split, result = ""
    str_split = str.split(" ")
    for (let i=0; i<str_split.length; i++) {
        str_split[i] = parseInt(str_split[i], 2).toString(10)
        str_split[i] = String.fromCharCode(str_split[i])
        result += str_split[i]
    }
    return result
}

// let output
// output = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// // Aren't bonfires fun!?
// console.log(output)

/* Bai 3 */
function countBs(input_as_string){
    return 0
}
countBs("aaaaaaaaaaaaaaa")


function countChar(input_as_string,char){
    return 0
}
countChar("aaaaaaaaaaaaaaa","a")

