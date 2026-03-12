// VETOR DE NOMES
const listaDeNomes = ["ANA", "MARIA", "JOANA"]

// VETOR DE NÚMEROS
const listaDeNumeros = [1, 2, 3, 4, 5]

// EXEMPLO DE OBEJTOS COM DADOS DE NOME E IDADE.
const listaDeUsuarios = [
    {nome: "ANA", idade: 25},
    {nome: "MARIA", idade: 35},
    {nome: "JOANA", idade: 45},
    {nome: "MARTA", idade: 16},
    {nome: "CARLOS", idade: 13},
    {nome: "PEDRO", idade: 11}
]

// PERCORRENDO E EXIBINDO OS ELEMENTOS DO VETOR.
// ForEach É UMA FUNÇÃO COM LAÇO DE REPETIÇÃO
console.log("EXIBINDO TODOS OS USUÁRIOS DO VETOR.")
// USE AS {} CASO PRECISE DE MAIS DE UMA LINHA.
//  NESSE CASO NÃO PRECISA, MAS VAMOS UTILIZAR.
listaDeUsuarios.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos. `)
})

// COMO OS ANTIGOS.
console.log("\nEXIBINDO TODO OS USUÁRIOS")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFILTRANDO MAIORES DE 18 ANOS.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)

// USE AS {} CASO PRECISE DE MAIS DE UMA LINHA.
// NESSE CASO NÃO PRECISA, POR ISSO NÃO UTILIZAREMOS.
maioridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
)

// EXERCÍCIOS
console.log("\nFILTRANDO MENORES DE 18 ANOS.")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18)

menoridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos`) 
)

// EXERCÍCIO 2° 
console.log("\nNA LISTA DE NÚMEROS, FILTRE E MOSTRE APENAS NÚMEROS PARES.")
const pares = listaDeNumeros.filter(n => listaDeNumeros[n] % 2 == 0)

pares.forEach( u => {
    console.log(`${listaDeNumeros[u]} NÚMERO PAR`)
})


// EXERCÍCIO 3° 
console.log("\nNA LISTA DE NOMES, MOSTRE TODOS OS NOMES COM FOREACH.")

listaDeNomes.forEach( nomes => {
    console.log(nomes)
})

const nomes = listaDeUsuarios.map( u => u.nome)
nomes.forEach(nome => console.log(`NOME: ${nome}`))

console.log("\nNA LISTA DE USUÁRIOS, ENCONTRE UM USUÁRIO. ")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "ANA")

console.log(usuarioEncontrado)
console.log(`NOME: ${usuarioEncontrado.nome} \nIDADE: ${usuarioEncontrado.idade}`)

// EXERCÍCIO 4° 
console.log("\nNA LISTA DE USUÁRIOS, ENCONTRE UM USUÁRIO COM IDADE DE 45 ANOS. ")
const usuarioIdade = listaDeUsuarios.find( u => u.idade === 45)

console.log(`NOME: ${usuarioIdade.nome} \nIDADE: ${usuarioIdade.idade}`)

console.log("\nNA LISTA DE USUÁRIOS, SOMANDO TODAS AS IDADES:")
const somaIdades = listaDeUsuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdades)


