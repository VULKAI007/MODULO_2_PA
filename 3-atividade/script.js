document.getElementById("btnCalcular").addEventListener('click', calcular);

function calcular() {

    // 1. CORREÇÃO: Usar .value em vez de .ariaValueMax
    let input1 = document.getElementById("nota1").value.trim();
    let input2 = document.getElementById("nota2").value.trim();
    let input3 = document.getElementById("nota3").value.trim();

    // VERIFICAR SE OS CAMPOS ESTÃO VAZIOS
    if (input1 === "" || input2 === "" || input3 === "") {
        alert("Por favor, preencha todos os campos com as notas.");
        return;
    }

    // CONVERTER PARA NÚMERO
    let n1 = Number(input1);
    let n2 = Number(input2);
    let n3 = Number(input3);

    // BLOQUEANDO O USO DE LETRAS OU SÍMBOLOS
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Digite apenas números válidos!");
        return;
    }

    // FAZENDO CÁLCULOS
    let media = (n1 + n2 + n3) / 3;
    let situacao = "";
    let cor = ""; // Variável extra para a cor do texto

    // 2. CORREÇÃO: Lógica de aprovação (Menor que 7 = Reprovado)
    if (media < 7) {
        situacao = "REPROVADO";
        cor = "#d9534f"; // Vermelho
    } else {
        situacao = "APROVADO";
        cor = "#5cb85c"; // Verde
    }

    // MOSTRANDO RESULTADOS
    // 3. MELHORIA: .toFixed(1) deixa a nota com 1 casa decimal (Ex: 8.5)
    document.getElementById("media").textContent = "MÉDIA: " + media.toFixed(1);
    
    // 4. CORREÇÃO: ID "situacao" sem acento
    let textoSituacao = document.getElementById("situacao");
    textoSituacao.textContent = "SITUAÇÃO: " + situacao;
    textoSituacao.style.color = cor; // Aplica a cor verde ou vermelha
    textoSituacao.style.fontWeight = "bold"; // Deixa em negrito
}