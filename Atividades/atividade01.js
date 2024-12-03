const leia = require('readline-sync')

let salario, abono
let novoSalario

salario = leia.questionFloat("\nDigite Salario: ") //questionFloat números decimais
abono = leia.questionFloat("\nDigite o Abono: ")

novoSalario = salario + abono

console.log('Salário Atualizado: ', new Intl.NumberFormat
    ('pt-BR', {style: 'currency', currency:'BRL',
    }).format(novoSalario));