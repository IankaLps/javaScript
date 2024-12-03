const leia = require('readline-sync')

let n1, n2, n3, n4;
let diferenca

n1 = leia.questionFloat("\nDigite o Primeiro valor: ") //questionFloat números decimais
n2 = leia.questionFloat("\nDigite o Segundo valor: ")
n3 = leia.questionFloat("\nDigite a Terceiro valor: ")
n4 = leia.questionFloat("\nDigite a Quarto valor: ")

diferenca = (n1 * n2) - (n3 * n4);

console.log(`\nDiferença é: ${diferenca.toFixed(1)}`);