const buttonElement = document.createElement("button")
buttonElement.textContent="Click me"
document.body.appendChild(buttonElement)
buttonElement.addEventListener("click",function(){
    buttonElement.textContent="Button clicked"
})

const paragraphElement = document.createElement("p")
paragraphElement.textContent="This is paragraph element"
document.body.appendChild(paragraphElement)