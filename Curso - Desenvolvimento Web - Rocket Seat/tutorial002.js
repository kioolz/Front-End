// Criar um programa que calcula a média
// das notas entre os alunos e envia 
// mensagem do calculo da média



//Pra isso eu defino algumas variáveis do tipo string
// pelo comando : const + nome da variável = "Nome"
// O comando console.log serve para exibir informações no terminal
const nome = 'Mayk'
const nome2 = "Fulano"
const nome3 = 'Ciclano'

console.log(nome)
console.log(nome2)
console.log(nome3)

// Agora podemos usar uma variável do tipo número

const notaAluno01 = 9.8

//O comando console.log(typeof variavel) me permite ver o tipo de variável 
// Que é criada
console.log(typeof notaAluno01)
console.log(typeof nome)

// O que acontece quando eu crio uma variável que não é um número real
// E sim um número inteiro? Aparentemente o JS não faz uma distinção da variável
// do tipo Number, se ela é um número inteiro (integer) ou um número real (float)

const notaAluno02 = 7
console.log(typeof notaAluno02)

// O console mostrou o resultado "Number", então não há distinção
// Entre variável float e integer dentro da variável armazenada
// Ela é simplesmente uma variável do tipo Number.