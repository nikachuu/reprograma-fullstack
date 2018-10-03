// salvar o botão em uma variável
const transBtn = document.querySelector(".transacao__button");

//criar uma função para ocorrer ao click do botão
transBtn.addEventListener("click", function(event){
    event.preventDefault();

    //salvar o local onde serão inseridas as informações dos inputs
    const form = document.querySelector(".extrato__table");

    //salvar as informações que foram inseridas nos inputs
    const inputNome = document.querySelector("#transacaoInputName");
    const inputValor = document.querySelector("#transacaoInputMoney");
    const inputData = document.querySelector("#transacaoInputDate");

    // cria um elemento linha de tabela, denominado tr
    const linha = document.createElement("tr");

    // como a tabela possui tres colunas, cria-se uma td para cada input especificamente e, posteriormente, faz-se o appendChild do valor do input na coluna
    const colunaNome = document.createElement("td");
    const inputNomeMsg = document.createTextNode(inputNome.value);
    colunaNome.appendChild(inputNomeMsg);

    const colunaValor = document.createElement("td");
    const inputValorMsg = document.createTextNode(inputValor.value);
    colunaValor.appendChild(inputValorMsg);

    const colunaData = document.createElement("td");
    const inputDataMsg = document.createTextNode(inputData.value);
    colunaData.appendChild(inputDataMsg);

    //inserir as tres colunas na linha que foi criada anteriormente
    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    //criar a linha com as três colunas e as informações desejadas
    form.appendChild(linha);

});
