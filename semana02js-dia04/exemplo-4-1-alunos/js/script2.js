const todosOsAlunos = document.querySelectorAll(".aluno");

for (let indice = 0; indice < todosOsAlunos.length; indice++){
  const aluno = todosOsAlunos[indice]; // ?
  // buscar o valor da primeira nota do primeiro aluno
  const tdPrimeiraNota = aluno.querySelector(".info-notaum");
  const primeiraNota = tdPrimeiraNota.textContent; // pegar o valor em texto
  // buscar o segundo valor, referente a segunda nota
  const tdSegundaNota = aluno.querySelector(".info-notadois");
  const segundaNota = tdSegundaNota.textContent;
  // realizar a média entre as notas
  const mediaFinal = aluno.querySelector(".info-media");
  const mediaCalculada = calculaMedia(primeiraNota, segundaNota);
  mediaFinal.textContent = mediaCalculada.toFixed(2); // ajusta as casas decimais dos numeros que irão aparecer

  abaixoDaMedia(mediaCalculada, aluno);
  //if (mediaCalculada < 5){
  //aluno.setAttribute("class", "abaixo-da-media"); // coloca aluno dentro de uma classe determinada pelo nome que esta nas segundas aspas
  //}
}

function calculaMedia(primeiroValorRecebido, segundoValorRecebido) {
  let mediaCalculadaDentroDaFuncao = 0;
  mediaCalculadaDentroDaFuncao =
    (parseFloat(primeiroValorRecebido) + parseFloat(segundoValorRecebido)) / 2;
  return mediaCalculadaDentroDaFuncao;
}

function abaixoDaMedia (notaDaMedia, elementoTr) {
  if (notaDaMedia < 5) {
    elementoTr.setAttribute("class", "abaixo-da-media");
  }
}
