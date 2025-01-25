//"this" keyword in javascript

//without variable
// function showThis(){
//     console.log(this)
// }
// showThis()   //results global object


//this key word in objects
const newObj = {
    name: 'Neelima',
    showThis: function(){
        console.log(this)
    }
}
newObj.showThis() //{ name: 'Neelima', showThis: [Function: showThis] }


//this keyword in nested functions

const newObject = {
    name: 'Cat',
    showMe: function(){
        function InnerFunction (){
            console.log(this)
        }
        InnerFunction()
    }
}
newObject.showMe() //results global object

//this keyword in arrow functions

const newOne = {

    name: "Dog",
    showMe: function(){
        const innerFun = () => {

            console.log(this)
        }
        innerFun()
    }
}
newOne.showMe() //results immediate object "dog"

