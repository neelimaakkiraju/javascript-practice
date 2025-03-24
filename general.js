console.log(NaN == NaN)

console.log(NaN === NaN)




function getLongest(str){
    const result = str.split(" ")
    const output = result.sort((b,a)=>b-a)
    const finalResult =  output.reverse()
    return finalResult[0]
}

console.log(getLongest("wewe ereuee rueyhwurye eruyeuryueweeee"))