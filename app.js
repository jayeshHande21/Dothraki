var textinput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/"

function getServerURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {

    var inputText = textinput.value;

    fetch(getServerURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = (json.contents.translated)
            outputdiv.innerText = translatedText;
        })


}

btnTranslate.addEventListener("click", clickHandler);