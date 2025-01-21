//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigo = []
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


        
    console.log("Nome do amigo: " + nome);
    

    LimparCampo();
    mostrarLista();
}



function mostrarLista(){
    ExibirTexto('ul',listaAmigo);
    for (let i = 0; i < listaAmigo.length; i++) {
        console.log(listaAmigo[i]);
    }

}
function LimparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}









//cars.sort()   // Sorts the array


function sortaAmigo() {

}