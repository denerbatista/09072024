// Tipos de variaveis:
const variavel1 //Variável constante
let variavel2 //Variavel mutável
var variavel3 //Variavel global obs: pouco utilizada

// Conceito de local e Global

const nome0 = 'João' //Variável constante não permite trocar valor
let nome1 = 'Batista' //Variável mutável permite trocar valor
var nome2 = 'Silva' //Variável global permite trocar valor
nome0 = 'Pedro'
nome1 = 'João'

var test1 = 'teste1' // Variavel global local.

function funcao0 () {
  const test0 = 'teste0' // Variavel constante local.
  return {test0, test1}
}

function funcao1 (){
  const test0 = 'teste0' // Variavel constante local.
  return {test0, test1}
}

// Condicionais

if(0 < 2){
  console.log('0 é menor que 2')
}

if(0 < -2){
  console.log('0 é menor que -2')
} else {
  console.log('0 não é menor que -2')
}

if(0 < -2){
  console.log('False')
} else if(0 < 2){
  console.log('verdadeiro')
} else {
  console.log('Else verdadeiro')
}
