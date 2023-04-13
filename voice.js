const btnvoice = document.getElementById('btnVoice');
let resultadoVoice;

//configuração padrão
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
// fim da configuração


btnvoice.addEventListener('click', ()=>{
    recognition.start();
    recognition.addEventListener('result', (e)=>{
        resultadoVoice = e.results[0][0].transcript;
    })
})
    