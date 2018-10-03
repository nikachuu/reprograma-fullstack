var submit = document.querySelector("#botaoEnviar"); // armazena o botão que será pressionado e terá o evento em uma variável 
var user = document.querySelector(".usuario"); // armazena a informação que foi inserida no campo de usuario em uma variável
var password = document.querySelector(".senha"); // armazena a informação que foi inserida no campo de senha em uma variável

var checkBox = document.getElementsByName("animais"); // cria um array

submit.addEventListener("click", function(event){ //adiciona ao botão salvo na variavel submit um evento "onclick" e é atribuido ao evento uma função
    event.preventDefault();
    if (user.value === ""){
        alert("Você precisa inserir um nome de usuário");
    } 

    if (password.value === "" || password.value.length < 6) { // precisou adicionar .value no .length pois o input se trata de uma string, e estamos comparando a length a um number 
        alert("Sua senha tem que ter mais de 6 digitos");
    }

    for ( var i = 0, listaCBox = checkBox.length; i < listaCBox; i++  ){
        if ( checkBox[i].checked ){
            console.log( checkBox[i].value );
        }

    }
// array, let, const, while
});
