let scan = require("prompt-sync")();

console.log("1 → Km vers mètres");
console.log("2 → Mètres vers cm");
console.log("3 → Kg vers grammes");
console.log("4 →Litres vers millilitres");


let n = scan(Number);

console.log("enter Valeur :");

let v = scan(Number);

switch(Number(n))
{
    case 1 : console.log("Résultat " + (v * 1000) + " mètres");
    break;
    case 2 : console.log("Résultat " + (v * 100) + " cm");
    break;
    case 3 : console.log("Résultat " + (v * 1000) + " grammes");
    break;
    case 4 : console.log("Résultat " + (v * 1000) + " millilitres");
    break;
    default : console.log("err");
    break;
    
}  



