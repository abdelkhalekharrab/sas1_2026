let scan = require("prompt-sync")();

let montant = scan("enter le montant de d'achat :");


let Réduction ;
let Prix_final ;


if(montant < 500)
{
    console.log("aucune réduction");
}
else if(montant >= 500 && montant <= 999)
{
    console.log("5%");
    Réduction = montant * 0.05 ;
    Prix_final = montant - Réduction ;
    console.log("montant : " + montant);
    console.log("Réduction : " + Réduction );
    console.log("Prix_final : " + Prix_final);
}
else if(montant >= 1000 && montant <= 1999)
{
    console.log("10%");
    Réduction = montant * 0.1 ;
    Prix_final = montant - Réduction ;
    console.log("montant : " + montant);
    console.log("Réduction : " + Réduction );
    console.log("Prix_final : " + Prix_final);
}
else
{
    console.log("15%");
    Réduction = montant * 0.15 ;
    Prix_final = montant - Réduction ;
    console.log("montant : " + montant);
    console.log("Réduction : " + Réduction );
    console.log("Prix_final : " + Prix_final);
}