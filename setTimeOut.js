function invokeAfeterDelay(callback){
     setTimeout(callback,1000)
}

function displayValue(){
    console.log("Hello World")
}

invokeAfeterDelay(displayValue)