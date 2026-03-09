// EXERCÍCIOS

//CRIAR UM VETOR COM NOMES DE SEUS FAMILIARES.
// COM SEIS NOMES.

// USE TODOS OS COMANDOS VISTOS EM VETORES APÓS CRIAR A LISTA.

// CRIANDO O VETOR
const listaDeFamiliares = ["JOSEFA", "JOSÉ", "JOÃO", "ENZO", "ISAAC"]

console.log("EXIBINDO TODOS OS ELEMENTOS: ")
console.log(listaDeFamiliares)

// ADICIONANDO UM ELEMENTO NOVO
console.log("\nADICIONANDO UM ELEMENTO: ")
listaDeFamiliares.push("MARIA")
console.log(listaDeFamiliares)

// REMOVENDO UM ELEMENTO
console.log("\nREMOVENDO UM ELEMENTO: ")
listaDeFamiliares.splice(5,1)
console.log(listaDeFamiliares)

console.log("\nREMOVENDO APENAS O ÚLTIMO ELEMENTO: ")
listaDeFamiliares.pop()
console.log(listaDeFamiliares)

console.log("\nREMOVENDO APENAS O PRIMEIRO ELEMENTO: ")
listaDeFamiliares.shift()
console.log(listaDeFamiliares)