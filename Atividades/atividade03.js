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