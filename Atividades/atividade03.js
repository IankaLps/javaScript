const leia = require('readline-sync')
let salarioBruto, adicionalNoturno, horasExtras, descontos;
let salarioLiquido

salarioBruto = leia.questionFloat("\nDigite Salario Bruto: ") //questionFloat números decimais
adicionalNoturno = leia.questionFloat("\nDigite o Adicional Noturno: ")
horasExtras = leia.questionFloat("\nDigite as Horas Extras: ")
descontos = leia.questionFloat("\nDigite os Descontos: ")

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos



console.log('\nSalário Liquido: ', new Intl.NumberFormat
    ('pt-BR', {style: 'currency', currency:'BRL',
    }).format(salarioLiquido));


// console.log(`**Salário Bruto:** ${new Intl.NumberFormat('pt-BR', {
//    style: 'currency',
//    currency: 'BRL'
// }).format(salarioBruto)}`)
// console.log(`**Adicional Noturno:** ${new Intl.NumberFormat('pt-BR', {
//    style: 'currency',
//    currency: 'BRL'
// }).format(adicionalNoturno)}`)
// console.log(`**Horas Extras:** ${new Intl.NumberFormat('pt-BR', {
//    style: 'currency',
//    currency: 'BRL'
// }).format(horasExtras * 5)}`)
// console.log(`**Descontos:** ${new Intl.NumberFormat('pt-BR', {
//    style: 'currency',
//    currency: 'BRL'
// }).format(descontos)}`)

// let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// console.log('**SAÍDA**')
// console.log(`**Salário Líquido:** ${new Intl.NumberFormat('pt-BR', {
//    style: 'currency',
//    currency: 'BRL'
// }).format(salarioLiquido)}`)