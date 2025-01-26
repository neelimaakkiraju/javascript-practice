function swapCase(inputStr){
    let splitStr = inputStr.split(" ")
    let result = splitStr.map((elem)=>{
        let outPut = elem[0].toLowerCase()+elem.slice(1,elem.length).toUpperCase()
        return outPut
    })
    return result.join(" ")
}
console.log(swapCase("The Quick Brown Fox"))