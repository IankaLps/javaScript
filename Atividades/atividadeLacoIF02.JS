const leia = require('readline-sync') //IMPORTAÇÃO DA BIBLIOTECA

//SOLICITAR VALOR NUM
 let num = leia.questionFloat('\nDIGITE UM NUMERO: ');  //questionFloat = ENTRADA DE NÚMEROS DECIMAIS

 //VAI CALCULAR O RESTO DA DIVISÃO POR 2 PARA VERIFICAR SE O NÚMERO É PAR ASO CONTRARIO É IMPAR
if (num % 2 === 0) {
    if (num > 0) {//VAI VERIFICAR SE O NÚMERO É MAIOR QUE 0
    console.log(`\nO NUMERO ${num} É PAR E POSITIVO!`);    //SE FOR PAR e POSITIVO - VAI EXIBIR NUM É PAR E POSITIVO
} else {
    console.log(`\nO NUMERO ${num} É PAR E NEGATIVO!`);    //SE FOR PAR e NEGATIVO - VAI EXIBIR NUM É PAR E NEGATIVO
}} 

//CASO NÚMERO SEJA IMPAR
else{ 
    if (num > 0){ //NOVAMENTE VAI VERIFICAR SE O NÚMERO É MAIOR QUE 0
    console.log(`\nO NUMERO ${num} É IMPAR E POSITIVO!`);     //SE FOR ÍMPAR e POSITIVO - VAI EXIBIR NUM É ÍMPAR E POSITIVO
    } else {
        console.log(`\nO NUMERO ${num} É IMPAR E NEGATIVO!`); //SE FOR ÍMPAR e NEGATIVO - VAI EXIBIR NUM É ÍMPAR E NEGATIVO
    }
}