let scan = require("prompt-sync")();

let base = scan("enter base :");
let exposant = scan("enter exposant :");

let i = 1 ;
let Résultat = 1 ;

while(i <= exposant)
{
    Résultat = Résultat * base ;
    i++;

}
console.log(Résultat);
