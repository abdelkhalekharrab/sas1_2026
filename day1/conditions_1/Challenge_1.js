let prompt = require("prompt-sync")();

let age = prompt("quelle votre age :");

if(age >= 18)
{
    console.log("Accès autorisé");
}
else
{
    console.log("Accès refusé");
}