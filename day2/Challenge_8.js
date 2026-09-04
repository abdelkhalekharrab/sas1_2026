let scan = require("prompt-sync")();

let mission = scan("enter un nombre mission :");

let i = 1 ;

let score = 0 ;

while(i <= mission)
{
    score = i * 100 ;
    console.log("Mission " + i + " → Score " + score) ;
    i++;
}


