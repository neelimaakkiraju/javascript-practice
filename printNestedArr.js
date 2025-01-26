function nestedArr(inputArr){

   for(let i in inputArr){
    console.log("row"+i)
    for(let j in inputArr[i]){
        console.log(inputArr[i][j])
    }
   }
//    let output = result.map((elem)=>{
//     return elem
//    })
//    return output
}
console.log(nestedArr( [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]))