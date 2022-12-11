/*
Desafios para fortalecer alguns conceitos, entre eles:

Variáveis;
Condicionais;
Operadores.

Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo
 
*/
const nome = "Fulano"
console.log(`Olá ${nome}, este é o programa de calcular IMC, bem-vindo`)
const peso = "84"
console.log(`Seu peso atual é ${peso} kg, iremos calcular seu IMC com base no seu peso e altura`)
const altura = "1.88"
console.log(`E sua altura é ${altura}`)


const imc = peso / (altura * altura)
console.log(`Este é o valor do seu IMC, ${imc}`)

if (imc > 30) {
    console.log(`Carlos, seu IMC é ${imc} e por tanto você está acima do peso`)

} else {
    console.log(`Meus parabéns, você não está acima do peso, este é seu IMC : ${imc}`)
}