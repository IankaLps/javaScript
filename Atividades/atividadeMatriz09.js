//EXECICIO 09 - MATRIZ
const leia = require('readline-sync')

//CRIAÇÃO DA MATRIZ 3 X 3
//INICIALIZANDO MATRIZ 3 X 3 PREENCHIDA COM ZEROS
let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

//ENTRADA DE DADOS NA MATRIZ
//DOIS LOOPS "for" PARA PERCORRER CADA LINHA (indiceLinha) E CADA COLUNA (indiceColuna)
for (let indiceLinha = 0; indiceLinha < 3; indiceLinha++) {
for (let indiceColuna = 0; indiceColuna < 3; indiceColuna++) {
    matriz[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ") //LÊ UM NÚMERO INTEIRO DO USUÁRIO E ARMAZENA NA POSIÇÃO CORRESPONDENTE DA MATRIZ
    }
}   //VISUALIZA OS DADOS INSERIDOS NA MATRIZ
    console.table(matriz);

    //ELEMENTOS DA DIAGONAL PRINCIPAL
console.log("\nDIAGONAL PRINCIPAL:")
let diagonalPrincipal = [];
for (let Principal = 0; Principal < 3; Principal++){
    diagonalPrincipal.push(matriz[Principal][Principal]) //ADICIONA OS ELEMENTOS DA DIAGONAL PRINCIPAL (ONDE LINHA == COLUNA) NO ARRAY

}
console.log(diagonalPrincipal.join(" ")); //EXIBE OS ELEMENTOS DA DIAGONAL PRINCIPAL, SEPARADOS POR ESPAÇO

    //ELEMENTOS DA DIAGONAL SECUNDÁRIA
console.log("\nDIAGONAL SECUNDÁRIA:")
let diagonalSecundaria = [];
for (let Secundaria = 0; Secundaria < 3; Secundaria++){
    diagonalSecundaria.push(matriz[Secundaria][2-Secundaria]) //ADICIONA OS ELEMENTOS DA DIAGONAL SECUNDÁRIA (ONDE COLUNA = 2 - LINHA) NO ARRAY
}
console.log(diagonalSecundaria.join(" ")); //EXIBE OS ELEMENTOS DA DIAGONAL SECUNDÁRIA, SEPARADOS POR ESPAÇO

    //SOMA DIAGONAL PRINCIPAL
console.log("\nSOMA DIAGONAL PRINCIPAL:")
let somaDiagonalPrincipal = 0;
for (let soma = 0; soma < diagonalPrincipal.length; soma++) { //SOMA OS ELEMENTOS DO ARRAY DA DIAGONAL PRINCIPAL
    somaDiagonalPrincipal += diagonalPrincipal[soma]; //SOMANDO OS ELEMENTOS
}
console.log(somaDiagonalPrincipal); //EXIBE A SOMA DA DIAGONAL PRINCIPAL


//SOMA DIAGONAL SEGUNDARIA
console.log("\nSOMA DIAGONAL SEGUNDARIA:")
let somaDiagonalSecundaria = 0;
for (let soma = 0; soma < diagonalSecundaria.length; soma++) { //SOMA OS ELEMENTOS DO ARRAY DA DIAGONAL SECUNDÁRIA
    somaDiagonalSecundaria += diagonalSecundaria[soma]; //SOMANDO OS ELEMENTOS
}
console.log(somaDiagonalSecundaria);  //EXIBE A SOMA DA DIAGONAL SECUNDÁRIA