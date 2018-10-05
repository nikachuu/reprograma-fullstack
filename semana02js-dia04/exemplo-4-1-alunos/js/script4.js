const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener("click", function(event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");
    const novoAluno = obterOsDadosDoFormulario(formularioAluno);

    // criado array com todas os possíveis erros que podem ocorrer na inserção dos dados
    let dadosInvalidos = [novoAluno.nomeAluno == "", novoAluno.notaUmAluno < 0, novoAluno.notaUmAluno > 10, novoAluno.notaUmAluno == "", novoAluno.notaDoisAluno < 0, novoAluno.notaDoisAluno > 10, novoAluno.notaDoisAluno == ""];
    console.log(dadosInvalidos);

    // se houver pelo menos um true no array de dadosInvalidos, as notas não serão adicionadas
    if ( dadosInvalidos.includes(true) ) {
        alert("Os dados inseridos são inválidos, tente novamente.");
    } else {

    const alunoTr = document.createElement("tr");

    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = novoAluno.nomeAluno;
    notaUmAlunoTd.textContent = novoAluno.notaUmAluno;
    notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno;
    mediaAlunoTd.textContent = novoAluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    abaixoDaMedia(novoAluno.media, alunoTr);
    }
});

function obterOsDadosDoFormulario(formulario){
    let objetoAluno = {
        nomeAluno: formulario.nome.value,
        notaUmAluno: formulario.notaum.value,
        notaDoisAluno: formulario.notadois.value,
        media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}

