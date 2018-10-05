const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener("click", function(event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");
    //const nomeAluno = formularioAluno.nome.value; // o .nome pega tanto o valor de ID quanto o de name que está no HTML
    //const notaUmAluno = formularioAluno.notaum.value;
    //const notaDoisAluno = formularioAluno.notadois.value;
    const aluno = obterDadosDoFormulario(formularioAluno);

    //criar elemento linha
    const alunoTr = document.createElement("tr");

    //criar elementos coluna
    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    //acrescentar as informações em cada td
    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    mediaAlunoTd.textContent = aluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
});

function obterDadosDoFormulario (formulario) {

    const objetoAluno = {
        nomeAluno: formulario.nome.value
        ,notaUmAluno: formulario.notaum.value
        ,notaDoisAluno: formulario.notadois.value
        ,media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
};