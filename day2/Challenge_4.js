let prompt = require("prompt-sync")();

let nombre = prompt("enter un nombre :");

let i = 1 ;
let m ;

for(i = 1 ; i <= 10 ; i++)
{
    m = nombre * i ;
    console.log(nombre + " x " + i + " = " + m);
}