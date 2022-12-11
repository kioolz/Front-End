const nome = "Fulana"
const sexo = "F";
const idade = 48;
const contribuicao = 23;


const tempotrabalho = idade + contribuicao

const Hpodeseaposentar = sexo == 'M' && contribuicao >= 35 && tempotrabalho >= 95
const Mpodeseaposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if (Hpodeseaposentar || Mpodeseaposentar) {
    console.log(`${nome}, você pode se aposentar`)

} else {
    console.log(`${nome}, você não pode se aposentar`)
}