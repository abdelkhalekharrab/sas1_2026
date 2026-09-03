let scan = require("prompt-sync")();

let montant = scan("enter le montant de la commande :");

if(montant <= 100 )
{
    console.log("livraison 30 DH");
}
else if(montant >= 100 && montant <= 299)
{
    console.log("livraison 20 DH");
}
else if(montant >= 300 && montant <= 499)
{
    console.log("livraison 10 DH");
}
else
{
    console.log("livraison gratuite");
}
