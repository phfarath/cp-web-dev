let numero = prompt("digite um numero: ")
console.log(parseInt(numero))
let resto= numero % 2
document.write("<br>O resto da divisao entre seu numero e 2: ", resto)
if (resto==1){
    document.write("<br>Ou seja, o numero que voce escolheu é impar")
}else{
    document.write("<br>Ou seja, o numero que voce escolheu é par")
}
let idade = prompt("Quantos anos voce tem: ")
document.write("<br>A sua idade é: ", idade)
if(idade <=12){
    document.write("<br>Voce é uma crianca")
}else if(idade >=13 && idade <18){
    document.write("<br>Voce é um adolescente")
}else if( idade >=18 && idade <60){
    document.write("<br>Voce é um adulto")
}else{
    document.write("<br>Voce é um idoso")
}
let usuario="admin"
let senha=1234
let enter_user = prompt("Qual o seu usuario? ")
let enter_senha = prompt("Qual sua senha? ")
if (enter_user == usuario && enter_senha == senha){
    document.write("<br>Login realizado com sucesso!")
}else{
    document.write("<br>Falha na tentativa de login")
}
