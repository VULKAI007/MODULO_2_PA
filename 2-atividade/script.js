document.getElementById("btnCalcular").addEventListener('click', function calcular() {


    // 1. Pegamos os valores em texto primeiro e tiramos espaços em branco com .trim()
    let input1 = document.getElementById("num1").value.trim();
    let input2 = document.getElementById("num2").value.trim();

    // 2. Verificamos se algum dos campos está vazio
    if (input1 === "" || input2 === "") {
        alert("Por favor, preencha os dois campos com números!");
        return; // Para a execução da função aqui
    }

    // 3. Agora sim, convertemos para número
    let n1 = Number(input1);
    let n2 = Number(input2);

    // 4. Garantimos que não digitaram letras ou símbolos inválidos
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite apenas números válidos!");
        return;
    }

    // 5. Fazemos os cálculos (sua lógica estava perfeita aqui!)
    let soma = n1 + n2;
    let media = (n1 + n2) / 2;
    let produto = n1 * n2;
    let maior = Math.max(n1, n2);
    let menor = Math.min(n1, n2);

    // 6. Mostramos os resultados na tela
    document.getElementById("soma").textContent = "Soma: " + soma;
    document.getElementById("media").textContent = "Média: " + media;
    document.getElementById("produto").textContent = "Produto: " + produto;
    document.getElementById("maior").textContent = "Maior número: " + maior;
    document.getElementById("menor").textContent = "Menor número: " + menor;
});