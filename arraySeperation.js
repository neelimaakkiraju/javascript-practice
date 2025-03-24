let Arr = [1,2,3,"four",5,"6",7]


let num = []
let str = []
Arr.forEach(elem=>{
    if(typeof elem === "string"){
       str.push(elem)
    }
    else{
        num.push(elem)
    }
})

console.log(num)
console.log(str)