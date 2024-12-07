//EXECICIO 03 - WHILE
const leia = require('readline-sync');//IMPORTAÇÃO DA BIBLIOTECA

let menores21 = 0; maiores50 = 0;

console.log('\n====== DIGITE UMA IDADE OU UM NÚMERO NEGATIVO PARA FINALIZAR =======\n');
let idade = leia.questionInt('DIGITE UMA IDADE: ');

while (idade >= 0) {
    if (idade < 21) {
        menores21++; 
    } else if (idade > 50) {
        maiores50++;
    }
    idade = leia.questionInt('DIGITE UMA IDADE: ');
}

console.log(`\nTOTAL DE PESSOAS MENORES DE 21 ANOS: ${menores21}`);
console.log(`TOTAL DE PESSOAS MAIORES DE 50 ANOS: ${maiores50}`);
