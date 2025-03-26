// Remove duplicates in an array without using set

let myArr =  [1,2,3,4,3,2,6,5,4,7,7,3,3,2,1,8,9,9,0,0]

let result = myArr.filter((elem,index)=>  myArr.indexOf(elem)== index)

console.log(result.sort())


//remove duplicates using set

let output = [...new Set(myArr)]

console.log(output.sort())