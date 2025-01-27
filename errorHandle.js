function validateInt(number){
    if(!Number.isInteger(number)){
        throw new Error("Inavalid Integer")
    }
    console.log("valid Number",number)
}
try{
    validateInt(80.3)
    validateInt(30)

}catch (error)
{
  console.log("Error:", error.message)

}