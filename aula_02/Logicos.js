const leia = require('readline-sync')

//Dados Usuário
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

let usuarioLogin = leia.question('Digite o seu usuario: ')

let senhaLogin = leia.question('Digite a sua senha: ', {
    hideEchoBack: true, /*hideEchoBack = A senha ficar invisível*/
})

// console.log(senhaLogin)

if(usuarioLogin === usuario && senha === senha) {
 var mensagem = "Seja Bem Vinde! Usuário autenticado com Sucesso!"
} else {
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)

if(!isBlock){
    console.log("Usuário ativo!")
} else{
    console.log("Usuário está inativo! Contate o Administrador!")
    process.exit(0) /* Sair do Programa */
}

if(isAdmin || isGerente){
    console.log("Acesso ao Painel Administrativo Liberado!")
}else{
    console.log("Acesso ao Painel Administrativo Negado!")
}