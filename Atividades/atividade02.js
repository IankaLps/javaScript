const leia = require('readline-sync')

let n1, n2, n3, n4;
let media

n1 = leia.questionFloat("\nDigite a Primeira nota: ") //questionFloat números decimais
n2 = leia.questionFloat("\nDigite a Segunda nota: ")
n3 = leia.questionFloat("\nDigite a Terceira nota: ")
n4 = leia.questionFloat("\nDigite a Quarta nota: ")

media = (n1 + n2 + n3 + n4) / 4;

console.log(`Média final: ${media.toFixed(1)}`);