function removeDuplicates(Arr){
    let result = [...new Set(Arr)]
    return result.sort()
}
console.log(removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
))