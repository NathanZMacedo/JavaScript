// dois tipos de funções

function a (){
    // tarefaque a função vai fazer
}
// arrow function porque tem uma seta
const b =()=>{
    // tarefa que a função vai fazer
}
// parametros da função
function Somar(num1,num2){
    let soma = num1+num2;
    console.log(`o resultado é ${soma} !`)
}
// função sem parametro
const DiaDeHoje=()=>{
    data = new Date()
    let dia =getDate()
    let mes = getMonth()
    console.log( `dia ${dia} do mes ${mes}`)
}
// chamando as funções
Somar(12,13)
DiaDeHoje()
