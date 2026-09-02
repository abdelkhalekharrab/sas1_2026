let prompt = require("prompt-sync")();

let nombre = prompt("enter un nombre :");

let i = 1 ;

for(i = 1 ; i <= nombre ; i++)
{
    console.log("participants " + i);
}
