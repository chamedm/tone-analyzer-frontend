let inputForm = document.getElementById("main-form");
let answerArea = document.getElementById("answer");

const baseUrl = "https://tone-analyzer-backend-grateful-jackal-ar.mybluemix.net/tone";

inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getTone();
});

async function getTone(){
  let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        texto: inputForm.textInput.value
    })
  };

  let response = await fetch(baseUrl, options);
  let data = await response.json();
  if (data.status == 200) {
      result = data.result;
      answerArea.innerText = JSON.stringify(result.document_tone);
      
  } else {
    answerArea.innerText = "No se pudo completar tu solicitud :c\n" + response.status + ": " + response.statusText
  }
}