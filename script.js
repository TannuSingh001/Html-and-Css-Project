const speakBtn = document.getElementById("speakBtn");
const mantraBtn = document.getElementById("mantraBtn");
const message = document.getElementById("message");


// Mahadev Speaking

speakBtn.addEventListener("click", function () {

    const speech = new SpeechSynthesisUtterance();

    speech.text =
        "हर हर महादेव। " +
        "महादेव हमें सत्य, शांति और साहस के मार्ग पर चलने की प्रेरणा दें। " +
        "ॐ नमः शिवाय।";

    speech.lang = "hi-IN";

    speech.rate = 0.75;

    speech.pitch = 0.8;

    speech.volume = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

    message.innerText =
        "🔱 महादेव का संदेश सुन रहे हैं...";

});


// Mantra Speaking

mantraBtn.addEventListener("click", function () {

    const speech = new SpeechSynthesisUtterance();

    speech.text =
        "ॐ नमः शिवाय। ॐ नमः शिवाय। ॐ नमः शिवाय।";

    speech.lang = "hi-IN";

    speech.rate = 0.6;

    speech.pitch = 0.7;

    speech.volume = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

    message.innerText =
        "🕉️ ॐ नमः शिवाय 🕉️";

});


// Stop Speech when page is closed

window.addEventListener("beforeunload", function () {

    window.speechSynthesis.cancel();

});