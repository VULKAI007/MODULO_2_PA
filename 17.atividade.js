const listaDeAlunos = [
    {nome: "ANA", nota: 5.0},
    {nome: "BRUNO", nota: 10.0},
    {nome: "CARLA", nota: 2.0},
    {nome: "ANDREA", nota: 7.0},
    {nome: "MARTA", nota: 6.0}

]


// EXERCÍCIO 5°
console.log("\nEncontre a aluna MARTA E MOSTRE O NOME E A MÉDIA DELA. ")
const buscar = listaDeAlunos.find(b => b.nome === "MARTA")
console.log(`NOME: ${buscar.nome} \nIDADE: ${buscar.nota}`)


// EXERCÍCIO 6°
console.log("\nMOSTRE A MÉDIA GERAL DA TURMA. ")
const somaMedia = listaDeAlunos.reduce((total, aluno) => total + aluno.nota, 0)
console.log(somaMedia)



console.log("=====================================================================")
console.log("\nMOSTRE O NOME E A NOTA DOS ALUNOS COM NOTA ABAIXO DE 7.0. ")
const abaixoDaMedia = listaDeAlunos.filter(aluno => aluno.nota < 7)
abaixoDaMedia.forEach(aluno =>
    console.log(`${aluno.nome} /NOTA: ${aluno.nota}`)
)


console.log("=====================================================================")
console.log("\nMOSTRE APENAS O NOME DOS ALUNOS COM NOTA MAIOR OU IGUAL A 7.0. ")
const acimaDaMedia = listaDeAlunos.filter(aluno => aluno.nota >= 7)
acimaDaMedia.forEach(aluno =>
    console.log(`${aluno.nome} /NOTA: ${aluno.nota}`)
)