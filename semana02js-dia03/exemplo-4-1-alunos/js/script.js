// buscar aluno pelo id
const aluno = document.querySelector("#primeiro-da-lista");
// buscar o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent; // pegar o valor em texto
// buscar o segundo valor, referente a segunda nota
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;
// realizar a média entre as notas
const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;