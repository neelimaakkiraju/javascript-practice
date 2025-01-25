function reverseNum(inputArr){
    inputArr += " "
    let result = inputArr.split("").reverse().join("")
    return result
}
console.log(reverseNum(12345))