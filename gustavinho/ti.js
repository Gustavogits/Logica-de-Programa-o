import leia, { questionInt } from "readline-sync"

var senhaPadrao = "1234";
var senha = leia.question("DIGITE SUA SENHA: ");

if(senha === senhaPadrao){
    console.log("ACESSO PERMITIDO")
} else {
    console.log("ACESSO NEGADO")
}