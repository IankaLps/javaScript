//importa biblioteca readline-sync dentro de uma constante = leia
const leia = require('readline-sync') // Sempre usar essa constante

let n1, n2;

n1 = leia.questionInt("\nDigite o primeiro numero: ")//questionInt numero inteiros
n2 = leia.questionInt("\nDigite o segundo numero: ")

/*console.log("\nA Variável N1 possui o valor: ", n1)
console.log("\nA Variável N2 possui o valor: ", n2)*/

//soma = n1 + n2;
console.log("\nA Soma de n1 + n2 é igual a: ", n1 + n2)
console.log("\nA Subtração de n1 - n2 é igual a: ", n1 - n2)
console.log("\nA Multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log("\nA Divisão de n1 / n2 é igual a: ", n1 / n2)
console.log("\nA Potenciação de n1 ^ n2 é igual a: ", Math.pow(n1, n2))
console.log("\nA Raiz Quadrada de n110 é igual a: ", Math.sqrt(n1))

