const leia = require('readline-sync') //IMPORTAÇÃO DA BIBLIOTECA

//DECLARAÇÃO DA VARIÁVEIS
let valorTotal         //ARMAZENAR O RESULTADO DA OPERAÇÃO
let operacaoTexto     //ARMAZENAR O NOME DE CADA OPERAÇÃO SELECIONADA

//CREI AS OPERAÇÕES DISPONÍVEIS
console.log('\n======  CALCULADORA   =======\n');
console.log('1 - SOMA');
console.log('2 - SUBTRAÇÃO');
console.log('3 - MULTIPLICAÇÃO');
console.log('4 - DIVISÃO\n');

let operacao = leia.questionFloat('\nDIGITE A OPERACAO: '); //VAI LÊ A OPERAÇÃO ESCOLHIDA
let n1 = leia.questionFloat('DIGITE O PRIMEIRO NUMERO: '); //SOLICITAÇÃO DOS DADOS DE ENTRADA
let n2 = leia.questionFloat('\nDIGITE O SEGUNDO NUMERO: ');

// ESTRUTURA SWITCH PARA DECIDIR QUAL OPERAÇÃO VAI SER ESCOLHIDA
switch(operacao){
    case 1:
        operacaoTexto = 'SOMA'; //ATRIBUI OPERAÇÃO SOMA
        valorTotal = n1 + n2   //REALIZA A SOMA DOS NÚMEROS
        break;
    case 2:
        operacaoTexto = 'SUBTRAÇÃO'
        valorTotal = n1 - n2
        break;
    case 3:
        operacaoTexto = 'MULTIPLICAÇÃO';
        valorTotal = n1 * n2
        break;
    case 4:
        operacaoTexto = 'DIVISÃO';
        valorTotal = n1 / n2
        break;
    default: //CASO DIGITE UM NÚMERO FORA DAS OPÇÕES DISPONIVEIS
        console.log('OPERACAO INVALIDA!') //VAI INFORMA OPERAÇÃO INVÁLIDA
}
// EXIBE A OPERAÇÃO REALIZADA E O RESULTADO DA OPERAÇÃO
console.log(`\nOPERACAO: ${operacaoTexto}`);
console.log(`\nVALOR TOTAL: ${valorTotal.toFixed(2)}`);