
var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translator");
var outputDiv = document.querySelector("#txt-output");

var serverURL="https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(input){
return (serverURL+"?"+"text="+input)
}

function errorHandler(error){
console.log("error occured "+error);
alert("something went wrong, try after sometime")
}

function clickHandler(){
  
    var inputText=txtInput.value; 

    fetch(getTranslationURL(inputText)) 
    .then(response=>response.json())
    .then(json=>{
        outputDiv.innerHTML=json.contents.translated
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
