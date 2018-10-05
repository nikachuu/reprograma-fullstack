const todosOsAlunos = document.querySelectorAll(".aluno");

for (let indice = 0; indice < todosOsAlunos.length; indice++){
  const aluno = todosOsAlunos[indice]; // armazena o array pego em querySelectorAll na variável aluno
  // buscar o valor da primeira nota do primeiro aluno
  const tdPrimeiraNota = aluno.querySelector(".info-notaum");
  const primeiraNota = tdPrimeiraNota.textContent; // pegar o valor em texto
  // buscar o segundo valor, referente a segunda nota
  const tdSegundaNota = aluno.querySelector(".info-notadois");
  const segundaNota = tdSegundaNota.textContent;
  // realizar a média entre as notas
  const mediaFinal = aluno.querySelector(".info-media");
  const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
  mediaFinal.textContent = mediaCalculada.toFixed(2); // ajusta as casas decimais dos numeros que irão aparecer

  if ( mediaCalculada < 5 ){
    // aluno.style.backgroundColor = "red";
    // aluno.classList.add("abaixo-da-media");
    aluno.setAttribute("class", "abaixo-da-media"); // coloca aluno dentro de uma classe determinada pelo nome que esta nas segundas aspas
    // boas praticas de js: melhor atribuir uma classe do que manipular style pelo DOM no JS, que seria:
  }
}

