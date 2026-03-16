document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);

if(isNaN(n1) || isNaN(n2)){
    alert("Digite dois números!");
    return;
}

let soma = n1 + n2;
let media = (n1 + n2) / 2;
let produto = n1 * n2;

let maior = Math.max(n1, n2);
let menor = Math.min(n1, n2);

document.getElementById("soma").textContent = "Soma: " + soma;
document.getElementById("media").textContent = "Média: " + media;
document.getElementById("produto").textContent = "Produto: " + produto;
document.getElementById("maior").textContent = "Maior número: " + maior;
document.getElementById("menor").textContent = "Menor número: " + menor;

}