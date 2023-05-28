//conexão e tratamendo do json

const ctnpai = document.getElementById('ctnGeral');
const lista = conexao();
tela();


async function conexao() {
    const personagens = await fetch ('https://rickandmortyapi.com/api/character');
    let personagensConversao = await personagens.json()
    
    return personagensConversao.results;
}

async function tela (){
    let turma = await lista;

    turma.forEach(element => {
        atualizaCampos(element);
        tratamentoErro(element);   
    });
}


function tratamentoErro(elements){
    if (elements.status === "unknown"){
        elements.status = "";
    }
    if(elements.origin.name === "unknown"){
        elements.origin.name = "";
    }
    if(elements.location.name === "unknown"){
        elements.location.name = "";
    }
}

function atualizaCampos (element) {
    ctnpai.innerHTML += `<div class="container__personagem">
        <img src="${element.image}" width="300px">
        <div class="container__informacoes">
            <h2>${element.name}</h2>
            <h3>${element.status}<h3>
            <h3>${element.species}<h3>
            <h3>${element.type}<h3>
            <h3>${element.gender}<h3>
            <h3>${element.location.name}<h3>
            <h3>${element.origin.name}<h3>
            <h3>${element.created}<h3>

        <div>
        
    </div>`

}









