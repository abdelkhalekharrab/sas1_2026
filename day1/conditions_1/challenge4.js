let prompt = require('prompt-sync')();
let montant = prompt("entrer le montant de votre commande : ");
let amount = +montant;
let liverable = amount + 40
if(amount<500){
    console.log(`Montant de la commande : ${amount}\n\nLivraison : 40 DH\nTotal à payer : ${liverable}`)
}
else if(amount>=500){
    console.log(`Montant de la commande : ${amount}\n\nLivraison : Gratuit \nTotal à payer : ${amount}`)
}