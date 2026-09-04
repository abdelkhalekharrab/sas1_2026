let scan = require("prompt-sync")();


let jour = Number (scan("enter jour :"));
let mois = Number (scan("enter mois :"));
let annee = Number (scan("enter annee :"));

if(jour >= 1 && jour <= 31 && mois >= 1 && mois <= 12 && annee >= 2000 && annee <= 2050 )
{
    console.log(jour + "/" + mois + "/" + annee  + " → Date valide");
}
else
{
    console.log(" → Date invalide");
}