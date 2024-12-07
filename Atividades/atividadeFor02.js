//EXECICIO 02 - FOR
const readline = require('readline-sync'); //IMPORTAÇÃO DA BIBLIOTECA

let par = 0, impar = 0; //DECLARAÇÃO DA VARIÁVEIS INICIALIZADA COM VALOR 0

//LAÇO FOR - INICIA UM LOOP 1 a 10 ou seja VAI PEDIR 10 NÚMEROS PARA DIGITAR
    for(let numero = 1; numero <= 10; numero++){
    let num = readline.questionInt(`DIGITE O ${numero} NUMERO: `); 
    //VAI PEDIR UM NÚMERO INTEIRO ONDE VAI SER ARMAZENADO NA VARIÁVEL NUM

        if (num % 2 === 0) { //A CONDIÇÃO VAI VERIFICAR SE O NÚMERO É PAR, ONDE O % OPERADOR DE RESTO RETORNA O RESTO DA DIVISSÃO DE NUM POR 2
            par++;           // SE RESTO FOR IGUAL A 0, SIGNIFICA QUE NÚMERO É PAR
        }                   //ENTÃO A VARIÁVEL PAR É INCREMENTADA EM 1

                            //CASO O RESTO DA DIVISÃO POR 2 NÃO É 0, ENTÃO ELSE É EXECUTADO
        else {               //ENTÃO A VARIÁVEL ÍMPAR É INCREMENTADA EM 1
            impar++;
        }
    }

console.log(`\nTOTAL DE NUMEROS PARES: ${par}`);        // EXIBE O TOTAL DE NÚMEROS PARES E ÍMPARES DIGITADOS
console.log(`\nTOTAL DE NUMEROS IMPARES: ${impar}`);