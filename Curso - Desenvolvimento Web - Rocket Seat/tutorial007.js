// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média 
// Usando arrays e vetores
// Agora usando funções e métodos
// Eu posso criar um objeto chamado alunos, onde posso colocar os valores dentro 
// das propriedades nome e nota
const alunosdaturmaA = [{
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 7

    },
    {
        nome: "Fulano",
        nota: 4
    }
]

const alunosdaturmaB = [{
        nome: "Feio",
        nota: 5.8
    },
    {
        nome: "Chato",
        nota: 1

    },
    {
        nome: "Boboo",
        nota: 2

    }
]

// Operações usando funções
function calculaMedia(alunos) {
    return media = ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3)
}

const media1 = calculaMedia(alunosdaturmaA)
const media2 = calculaMedia(alunosdaturmaB)


function enviaMensagem(media, turma) {
    //Se a média for maior que 5, parabenizar os alunos
    if (media > 5) {
        console.log(`A media  da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}


enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')