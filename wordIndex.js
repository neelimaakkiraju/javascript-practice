function findIndex(inputStr,subStr){
    const result = inputStr.indexOf(subStr)
    return result 
}

console.log(findIndex("The quick brown fox jumps over the lazy dog.", "the"))
console.log(findIndex("the quick brown fox jumps over the lazy dog.", "the"))