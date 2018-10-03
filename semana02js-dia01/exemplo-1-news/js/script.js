const inputEmail = document.querySelector(".news__input");
const botaoEnviar = document.querySelector(".news__button");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();
    const elementoMensagem = document.createElement("span");
    const elementoPai = inputEmail.parentNode;
   
    if (inputEmail.value === "") {
        const mensagemErro = document.createTextNode("Você precisa inserir um endereço de e-mail!")
        elementoMensagem.appendChild(mensagemErro);
        elementoPai.insertBefore(elementoMensagem, inputEmail);
    } else {
        const mensagemSucesso = document.createTextNode("E-mail registrado com sucesso!")
        elementoMensagem.appendChild(mensagemSucesso);
        elementoPai.insertBefore(elementoMensagem, inputEmail);
    }



});
