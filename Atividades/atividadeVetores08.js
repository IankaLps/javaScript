//EXECICIO 08 - VETORES
const leia = require('readline-sync');  //IMPORTAÇÃO DA BIBLIOTECA

// CRIANDO O VETOR PARA ARMAZENAR O NÚMEROS
let vetorNumeros = new Array(10);

// VARIAVEIS PARA ARMAZENAR OS RESULTADOS
let soma = 0;
let pares = 0;
let indicesImpares = [];
let numerosPares = [];

// PREENCHENDO O VETOR COM OS NÚMEROS DIGITADOS PELO USUÁRIO
for (let numero = 1; numero <= 10; numero++) {
    let num = leia.questionInt(`DIGITE ${numero} NUMERO: `);
    vetorNumeros[numero - 1] = num; // ARMAZENANDO OS NUMEROS NO VETOR

    // VERIFICAR NUMEROS ÍMPARES
    if (numero % 2 !== 0) {
        indicesImpares.push(num);
    }

   // VERIFICAR NUMEROS PARES
    if (num % 2 === 0) {
        numerosPares.push(num);
        pares++;
    }

    // SOMA DE NUMEROS
    soma += num;
}

// CALCULANDO A MÉDIA
let media = soma / 10;

// MOSTRA O RESULTADO NA TELA
console.table([vetorNumeros]); //EXIBE OS NUMEROS NA TABELA COM 1 LINHA E 10 COLUNAS
console.log('ELEMENTOS NOS INDICES IMPARES:', indicesImpares.join(',')); // .join(' ') JUNTAS ELEMENTO D ARRAY O EM UMA STRING, SEPARADOS POR ESPAÇO ou VIRGULA.
console.log('ELEMENTOS PARES: ', numerosPares.join(','));                   //SEPARADOS POR ESPAÇO ou VIRGULA.
console.log('SOMA: ', soma);
console.log('MEDIA: ', media.toFixed(2));