var btnTranslate = document.querySelector("#translate-button");
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getUrl(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  alert("Something is wrong! Please try after some time.");
  console.log("Error : " + error);
}

function clickHandler() {
  var inputText = input.value;

  if (inputText === "") alert("Please Enter the text to be translated");

  fetch(getUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
