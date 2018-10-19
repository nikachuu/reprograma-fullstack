const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest(); //"método XHR"; javascript faz uma requisição para algum lugar que se quer pegar informações.
  respostaDaBusca.open("GET", 
  `http://api.giphy.com/v1/gifs/search?q=${buscaGif()}&api_key=V3E4MFZW3US7ufOwLoRuv6JudIA3lo12` // esse caso de API search só aceita GET, normalmente listado na documentação da API
  )
  respostaDaBusca.onload = carregaPostsComGifs; // quando acontecer o carregameento, chamar essa função
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send(); //empacotar as informações e enviar
}

function carregaPostsComGifs(){ // função foi feita para que o onload da busca fique mais organizado
  listaGifs = JSON.parse(this.responseText)["data"]; // converte string para json; responseText: RAW DATA, aquele arquivo horroroso cheio de arrays e objetos; o data pega a array principal desse responseText
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(gif => `
        <div class="gif">
          <img src="${gif.images.fixed_height.url}"></img>
        </div>
        `).join("")}
      </div>`;
}
  

