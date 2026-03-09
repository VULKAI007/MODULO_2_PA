// VETORES 

const listaDeNomes = ["João", "Maria", "Pedro", "Ana"];

console.log("EXIBINDO TODOS OS ELEMENTOS: ");
console.log(listaDeNomes);

console.log("\nEXIBINDO O PRIMEIRO ELEMENTO: ");
console.log(listaDeNomes[0]);

console.log("\nADICIONANDO UM ELEMENTO: ")
listaDeNomes.push("MARÍLIA")
console.log(listaDeNomes)

// SUA VEZ, ADICIONE MAIS UM NOME NA LISTA
console.log("\nADICIONANDO MAIS UM ELEMENTO: ")
listaDeNomes.push("CABRAL")
console.log(listaDeNomes)

// A PARTIR DO ÍNDICE 2, REMOVER APENAS 1 ELEMENTO.
console.log("\nREMOVENDO UM ELEMENTO: ")
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// SUA VEZ, REMOVA APENAS O SEGUNDO ELEMENTO DA LISTA
console.log("\nREMEOVENDO OUTRO (TESTE): ")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nREMOVENDO APENAS O ÚLTIMO ELEMENTO: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nREMOVENDO APENAS O PRIMEIRO ELEMENTO: ")
listaDeNomes.shift()
console.log(listaDeNomes)
