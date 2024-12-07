//EXECICIO 05 - DO...WHILE
const leia = require('readline-sync');//IMPORTAÇÃO DA BIBLIOTECA

let soma = 0; let numero; 
console.log('\n====== DIGITE UM NÚMERO OU 0 PARA FINALIZAR =======\n');
do {
    numero = leia.questionInt('DIGITE UM NUMERO: ');

    if (numero > 0) {
        soma += numero;
    }
} 
        while (numero !== 0);

        console.log(`A SOMA DOS NUMEROS POSITIVOS É: ${soma}`);