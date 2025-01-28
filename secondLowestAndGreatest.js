function findValues(inputArr){
    
    let LowestValue = inputArr[1]
    let reversedArr = inputArr.reverse()
    let highestValue = reversedArr[1]
    return [highestValue,LowestValue]
}
console.log(findValues( [1,2,3,4,5]))