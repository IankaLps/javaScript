const leia = require('readline-sync') // Importação da Biblioteca

let salario, abono
let novoSalario

salario = leia.questionFloat("\nDigite Salario: ") //questionFloat números decimais
abono = leia.questionFloat("\nDigite o Abono: ")

novoSalario = salario + abono

// novoSalario é exibido como moeda em reais.
console.log('Salário Atualizado: ', new Intl.NumberFormat //Intl.NumberFormat usado para formatar números.
    ('pt-BR', {style: 'currency', currency:'BRL',
    }).format(novoSalario));