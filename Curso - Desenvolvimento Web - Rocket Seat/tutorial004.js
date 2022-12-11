//Voltando ao programa anterior, que calcula a média das notas dos alunos


const aluno01 = 'mayk'
const aluno02 = 'Diego'
const aluno03 = 'Fulano'

const notaAluno01 = 9.8
const notaAluno02 = 10
const notaAluno03 = 4


//Usando variáveis definidas pelo usuário direto na variável
const somasimples = 1 + 512341
    //Exibindo 
console.log(somasimples) //Resultado da operação no terminal
console.log(typeof somasimples) //Exibe o tipo de variável gerado pela operação


//Formula de média simples. Soma-se todas as notas e divide pelo número de alunos
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3
    //Exibe o resultado no terminal
console.log(media)


//Esta é a quarta parte da aula, daqui pra frente vão ser faladas de variáveis condicionais

const alunoa = 'Bobo'
const notaalunoa = 2.0


const alunob = 'Feio'
const notaalunob = 7

const alunoc = 'Chato'
const notaalunoc = 3

const mediaalunos = (notaalunoa + notaalunob + notaalunoc) / 3



//Essa o cara poderia ter explicado na aula, pra você fazer a indexação da variável
//Diretamente na frase que vai ser printada no console log
//Além de explicar como se exibe uma frase dentro do console porque isso não havia sido mencionado antes
//Outra coisa importante, não são as aspas comuns que permitem que você faça a indexação da variável na frase, e sim o acento virado pra esquerda.


if (mediaalunos > 5) {
    console.log(`A média foi de ${mediaalunos}. Parabéns`)

} else {
    console.log('A média é menor que 5')
}