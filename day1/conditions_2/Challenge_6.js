let scan = require("prompt-sync")();

let n ;

console.log("saisit un numéro de mois :");
n = scan (Number);

switch(Number(n))
{
    case 1 : console.log("Janvier");
    break;
    case 2 : console.log("Février");
    break;
    case 3 : console.log("Mars");
    break;
    default : console.log("er");
    break;
}