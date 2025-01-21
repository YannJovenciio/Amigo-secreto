//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigo = [];
let amigoSorteado = [];

function ExibirTexto(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function adicionarAmigo() {
    let campoNome = document.getElementById('amigo').value;
    nome = campoNome

    if(nome == ""){
        alert("Insira um nome")
    }
    
    if (nome) {
        listaAmigo.push(nome);
        console.log(listaAmigo)
    }
    
    LimparCampo();
    mostrarL();
}


const listaLI = document.getElementById('listaAmigos')

1

function mostrarL() {
    let listaLI = document.getElementById('listaAmigos')

    listaLI.innerHTML = "";
    listaAmigo.forEach(function(valor) {
        let li = document.createElement('li');
        li.textContent = valor;
        listaLI.appendChild(li);
    })
}



function LimparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}

function Sort(lista){
    let amigoSorteado = Math.floor(Math.random() * lista.length);
    return lista[amigoSorteado];

}


function sortearAmigo() {
    let sorteada = Sort(listaAmigo)
    console.log("Amigo sorteado",sorteada)

    let result = document.getElementById("resultado");
    result.innerHTML = `O amigo sorteado é ${sorteada}!!`;

}


