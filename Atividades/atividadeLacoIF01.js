const leia = require('readline-sync') //IMPORTAÇÃO DA BIBLIOTECA

//SOLICITAR VALORES A, B e C.
 let A = leia.questionFloat('\nDigite o valor A: '); //questionFloat = ENTRADA DE NÚMEROS DECIMAIS
 let B = leia.questionFloat('\nDigite o valor B: ');
 let C = leia.questionFloat('\nDigite o valor C: ');

 //CÁCULO
let soma = A + B; //SOMA ARMAZENA O RESULTADO

//ESTRUTURA CONDICIONAL IF - AVALIANDO A RELAÇÃO ENTRE A VARIÁVEL SOMA DO VALOR C
      if (soma > C) { //USO DA INTERPOLAÇÃO (${})
        console.log(`\n${A} +  ${B} = ${soma} > ${C} \nA Soma de A + B é Maior do que C`);
}                     //SE SOMA FOR MAIOR QUE C

      else if (soma < C) {
        console.log(`\n${A} +  ${B} = ${soma} < ${C} \nA Soma de A + B é Menor do que C`);
}                    //SE SOMA FOR MENOR QUE C

      else {        
        console.log(`\n${A} +  ${B} = ${soma} = ${C} \nA Soma de A + B é Igual a C`);
}                    //SE SOMA FOR IGUAL a C