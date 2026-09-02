let prompt = require("prompt-sync")();

let nombre = prompt("enter un nombre :");

let i = 1 ;
let s = 0 ;

for(i = 1 ; i <= nombre ; i++)
{
    s = s + i ;
}
console.log("la somme et :" + s);