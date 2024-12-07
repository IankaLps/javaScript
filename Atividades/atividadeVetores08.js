//EXECICIO 08 - VETORES
const leia = require('readline-sync');  //IMPORTAÇÃO DA BIBLIOTECA

// CRIANDO O VETOR PARA ARMAZENAR O 10 NÚMEROS
let vetorNumeros = new Array(10);

// VARIAVEIS PARA ARMAZENAR OS RESULTADOS
let soma = 0;
let pares = 0;
let numerosImpares = [];
let numerosPares = [];

// PREENCHENDO O VETOR COM OS NÚMEROS DIGITADOS PELO USUÁRIO
// INICIA UM LAÇO `FOR` PARA REPETIR 10 VEZES (DE 1 A 10).
for (let numero = 1; numero <= 10; numero++) {  
    let num = leia.questionInt(`DIGITE ${numero} NUMERO: `);  // LÊ UM NÚMERO INTEIRO, O VALOR LIDO É ARMAZENADO NA VARIÁVEL `num`.
    vetorNumeros[numero - 1] = num;   // A SUBTRAÇÃO `numero - 1` GARANTE QUE O ÍNDICE DO VETOR COMEÇARÁ EM ZERO 

    // VERIFICAR NUMEROS ÍMPARES
    if (num % 2 !== 0) {  // TESTA SE O NÚMERO É ÍMPAR USANDO O OPERADOR RESTO DA DIVISÃO POR 2).
        numerosImpares.push(num); // SE O RESTO FOR DIFERENTE DE ZERO, O NÚMERO É ÍMPAR.
    }                               // ADICIONA O NÚMERO ÍMPAR AO ARRAY `numerosImpares`.

   // VERIFICAR NUMEROS PARES
    if (num % 2 === 0) {   // TESTA SE O NÚMERO É PAR (RESTO DA DIVISÃO POR 2 IGUAL A ZERO).
        numerosPares.push(num);   // ADICIONA O NÚMERO PAR AO ARRAY `numerosPares`.
        pares++;   // INCREMENTA A CONTAGEM DE NÚMEROS PARES (VARIÁVEL `pares`).
    }

    // SOMA DE NÚMEROS 
    soma += num;     // ACUMULA O VALOR DO NÚMERO DIGITADO NA VARIÁVEL `soma`.
                   // ESSA VARIÁVEL ARMAZARÁ A SOMA TOTAL DOS 10 NÚMEROS.
}
// CALCULANDO A MÉDIA
    let media = soma / 10;

// MOSTRA O RESULTADO NA TELA
console.table([vetorNumeros]); //EXIBE OS NUMEROS NA TABELA COM 1 LINHA E 10 COLUNAS
console.log('ELEMENTOS NOS numeros IMPARES:', numerosImpares.join(',')); // .join(' ') JUNTAS ELEMENTO D ARRAY O EM UMA STRING, SEPARADOS POR ESPAÇO ou VIRGULA.
console.log('ELEMENTOS PARES: ', numerosPares.join(','));                   //SEPARADOS POR ESPAÇO ou VIRGULA.
console.log('SOMA: ', soma);                //EXIBE A SOMA
console.log('MEDIA: ', media.toFixed(2));  //EXIBE A MEDIA