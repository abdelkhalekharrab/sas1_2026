let prompt = require("prompt-sync")();

let nombre = prompt("enter un nombre :");

let i = 2 ;

for(i = 2 ; i <= nombre ; i = i + 2)
{
    console.log(i);
}