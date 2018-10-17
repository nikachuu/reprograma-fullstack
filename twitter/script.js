const botaoReclamar = document.querySelector("#btnEnviar");

botaoReclamar.addEventListener("click", function(event){
    event.preventDefault();

    const reclamacao = document.querySelector("#exampleFormControlTextarea1").value;
    // console.log(reclamacao);

    const spanReclamacao = document.createElement("DIV");
    const reclamacaoTextNode = document.createTextNode(reclamacao);

    spanReclamacao.appendChild(reclamacaoTextNode);

    const postagens = document.querySelector("#posts");
    postagens.appendChild(spanReclamacao);

});

$("#btnEnviar").click(function(e){
    e.preventDefault();
})

function inserirTweet(){
    
}