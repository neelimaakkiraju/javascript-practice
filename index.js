// how can you call a function in different ways?????????

function greetings(functionCall){
   const result = "Method called : " + functionCall
   console.log(result)}
//common method
greetings("common")

//call method
greetings.call(this,"call")

//aply method
greetings.apply(this, ['apply'])

//bind method
var wish = greetings.bind(this,"bind")
wish()

//string literals
greetings`String Literal`
