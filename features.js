let inputForm = document.getElementById("main-form");
let textInput = document.getElementById("textInput");
let answerArea = document.getElementById("answer");

let baseUrl = "https://tone-analyzer-backend-proud-quoll-kh.mybluemix.net/tone";

inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let textToAnalyze = textInput.value;
  getTone(textToAnalyze);
});

async function getTone(textToAnalyze){
  let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
  };
  baseUrl+="?text="+textToAnalyze;

  let response = await fetch(baseUrl, options);

  let data = await response.json();

  if (data.status == 200) {
      result = data.result;
      answerArea.innerText += JSON.stringify(result.document_tone);
      
  } else {
    answerArea.innerText += "\nNo se pudo completar tu solicitud :c\n" + response.status + ": " + response.statusText
  }
}