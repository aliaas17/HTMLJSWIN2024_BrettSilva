var firstNamr="BRett"
var lastName="Silva"
var message="yo"

//alert(firstNamr+" "+lastName)

console.log(`Hello ${firstNamr} ${lastName}!`)
var para="lorem ipsum"

function outputToPage(tag,msg, color){
    document.querySelector(tag).innerHTML=msg
    document.querySelector(tag).innerHTML=color
}

outputToPage("h1", message, "blue")

var dataPromptButton=document.querySelector("Button")
dataPromptButton.addEventListener('click', dataPrompt)

function dataPrompt(){
    alert("My name is ${firstNamr} welcome")
    var yourName= prompt("PLease tell me your name")
    alert("Hello ${yourName}!")
}