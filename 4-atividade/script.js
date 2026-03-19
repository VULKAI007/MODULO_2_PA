document.getElementById("btnCalcular").addEventListener('click', verificarVoto);

function verificarVoto() {
    let inputIdade = document.getElementById("idade").value.trim();

    // 1. Verifica se o campo está vazio
    if (inputIdade === "") {
        alert("Por favor, informe a sua idade.");
        return;
    }

    // 2. Converte para número
    let idade = Number(inputIdade);

    // 3. Verifica se é um número válido e positivo
    if (isNaN(idade) || idade < 0) {
        alert("Digite uma idade válida!");
        return;
    }

    // 4. Prepara para mostrar o resultado
    let painelResultado = document.getElementById("textoResultado");
    let situacao = "";

   
    if (idade < 16) {
        situacao = "NÃO PODE VOTAR";
        painelResultado.style.color = "#d9534f"; // Vermelho
    } else if (idade >= 16 && idade < 18) {
        situacao = "VOTO OPCIONAL";
        painelResultado.style.color = "#f0ad4e"; // Laranja
    } else if (idade >= 18 && idade <= 65) {
        situacao = "VOTO OBRIGATÓRIO";
        painelResultado.style.color = "#5cb85c"; // Verde
    } else {
        situacao = "VOTO OPCIONAL (Maior de 65)";
        painelResultado.style.color = "#f0ad4e"; // Laranja
    }

    painelResultado.textContent = situacao;
    painelResultado.style.fontWeight = "bold";
}