function findLoop(inputArr){
    for(let i of inputArr){
        if(i%2===0){
            return i+"even number"
        }else if(i%2===1){
            return i+"odd number"
        }
    }
}
console.log(findLoop([2,5,4,7,8,6,9]))