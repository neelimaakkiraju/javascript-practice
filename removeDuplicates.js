// function removeDuplicates(Arr){
//     let result = [...new Set(Arr)]
//     console.log(result)
//     return result.sort()
// }
// console.log(removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
// ))

function removeDupli(myArr){
    const result = myArr.filter((item,index)=>myArr.indexOf(item)===index)
    return result.sort()
}

console.log(removeDupli([2,1,4,2,3,3,4,4,1,7,8,5,5,9]))