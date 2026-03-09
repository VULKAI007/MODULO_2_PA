// NOVOS RECURSOS ES6

// VETOR DE NÚMEROS.
const listaDeNumeros = [1, 2, 3, 4, 5]

console.log("EXIBINHDO NÚMEROS DO VETOR: ")
console.log(listaDeNumeros)

console.log("\nMULTIPLICANDO NÚMEROS NDO VETOR: ")
const dobrados = listaDeNumeros.map(n => n * 2)
console.log(dobrados)

console.log("\nFILTRAR NÚMEROS PARES DO VETOR: ")
const pares = listaDeNumeros.filter( n => n % 2 == 0)
console.log(pares)

console.log("\nSOMANDO TODOS OS NÚMEROS DO VETOR: ")
const soma = listaDeNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)

