const leia = require('readline-sync') //IMPORTAÇÃO DA BIBLIOTECA
let preco, valorTotal //DECLARAÇÃO DA VARIÁVEIS

//CREI O CARDÁPIO DAS OPÇÕES DISPONÍVEIS
console.log('\n======  CARDÁPIO   =======\n');
console.log('1 - CACHORRO QUENTE - R$ 10.00');
console.log('2 - X-SALADA      - R$ 15.00');
console.log('3 - X-BACON      - R$ 18.00');
console.log('4 - BAURU         - R$ 12.00');
console.log('5 - REFRIGERANTE    - R$  8.00');
console.log('6 - SUCO DE LARANJA - R$ 13.00\n');

//SOLICITAÇÃO DOS DADOS DE ENTRADA
let produto = leia.questionFloat('CODIGO DO PRODUTO: ');
let quantidade = leia.questionFloat('QUANTIDADE: ');

// ESTRUTURA SWITCH PARA ATRIBUIR O NOME E PREÇO DO PRODUTO BASEADO NO CÓDIGO INFORMADO
switch(produto){
    case 1:
        produto = 'CACHORRO QUENTE'; //ATRIBUI NOME DO PRODUTO
        preco = 10.00;              //ATRIBUI O PREÇO DO PRODUTO
        break;
    case 2:
        produto = 'X-SALADA'
        preco = 15.00;
        break;
    case 3:
        produto = 'X-BACON';
        preco = 18.00;
        break;
    case 4:
        produto = 'BAURU';
        preco = 12.00;
        break;
    case 5:
        produto = 'REFRIGERANTE';
        preco = 8.00;
        break;
    case 6:
        produto = 'SUCO DE LARANJA';
        preco = 13.00;
        break;
    default: 
        console.log('CODIGO DO PRODUTO INVALIDO!') //CASO O CÓDIGO SEJA INVÁLIDO
}
//CALCULAR VALOR TOTAL DA COMPRA
valorTotal = quantidade * preco

//EXIBE O RESULTADO FINAL DA COMPRA
console.log(`PRODUTO: ${produto} \nVALOR TOTAL: R$${valorTotal.toFixed(2)} `);