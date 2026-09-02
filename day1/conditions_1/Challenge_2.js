let prompt = require("prompt-sync")();

let nombre = prompt("enter un nombre entier :");

if(nombre > 0 )
{
    console.log("Le nombre est positif.");
}
else if(nombre < 0)
{
    console.log("Le nombre est négatif.");
}
else
{
    console.log("Le nombre est égal à zéro.");
}