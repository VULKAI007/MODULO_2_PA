function gerarTabuada() {
    // OBTENDO O NÚMERO DO INPUT NO HTML
    const numeroInput = document.getElementById("numeroInput")
    let numero = parseInt(numeroInput.value);

    // ELEMENTO DO HTML ONDE O RESULTADO SERÁ EXIBIDO.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // VERIFICAR SE A ENTRADA É UM NÚMERO VÁLIDO.
    if (isNaN(numero) || numero === null || numero ===""){
        resultadoDiv.innerHTML = "<p> por favor, digite um número válido. </p>"
        return; // ESTE COMANDO SAI DA FUNÇÃO.
    }

    // ADICIONAR TÍTULO PARA A TABUADA.
    resultadoDiv.innerHTML += `<h2>TABUADA DO NÚMERO ${numero}</h2>`

    // LAÇO DE REPETIÇÃO  PARA GERAR TABUADA.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} X ${i} = ${resultado}</p>` 
    }
}

const botaoGerar = document.getElementById("btnGerar")
botaoGerar.addEventListener("click", gerarTabuada);
