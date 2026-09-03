let scan = require("prompt-sync")();

console.log("enter le couleur :");
console.log("a = rouge");
console.log("b = orange");
console.log("c = vert");

let couleur = scan("enter le couleur :");


switch(couleur)
{

case 'a' : console.log("Arrêtez-vous");
break;
case 'b' : console.log("Ralentissez");
break;
case 'c' : console.log("Vous pouvez passer");
break;
default : console.log("Couleur invalide");
break;

}
