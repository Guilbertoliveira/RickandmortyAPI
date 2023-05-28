const btnvoice = document.getElementById('btnVoice');
const onda = document.getElementsByClassName('ondaInferior')[0];

let resultadoVoice;

//configuração padrão
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
// fim da configuração


btnvoice.addEventListener('click', ()=>{
    recognition.start();
    recognition.addEventListener('result', async (e)=>{
        resultadoVoice = e.results[0][0].transcript;
        ctnpai.innerHTML = "";

        let personagens = await lista;
        personagens.forEach((element)=>{
            if(resultadoVoice === element.name){
                atualizaCampos(element);
                ctnpai.innerHTML += "<div class='btnVoltar'><a href='/'><button>Voltar</button></a></div>";
                onda.style.display = "none";
    
            } 
           

            
        })


    })
           

})

    