let a = require("prompt-sync")();


let km = a("enter distance parcourue en kilomètres :");
let l  = a("enter quantité de carburant consommée en litres :");

Consommation = (l / km) * 100 ;

console.log("Consommation et : " + Consommation + " L/100 km");