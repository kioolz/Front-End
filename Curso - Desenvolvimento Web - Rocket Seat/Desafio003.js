/*

Desafios para fortalecer alguns conceitos, entre eles:

Objetos;
Vetores.
Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260
*/

// Construção e impressão de objetos



const usuariu = {
    nome: 'Fulano',
    empresa: {
        nome: "Tegrity",
        cor: "verde",
        foco: "jogos",
        endereço: {
            rua: "Rua Stardey Valley",
            numero: 260
        }
    }
}


console.log(`A empresa ${usuariu.empresa.nome} está localizada em ${usuariu.empresa.endereço.rua}, ${usuariu.empresa.endereço.numero}`)