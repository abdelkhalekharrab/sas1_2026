let scan = require("prompt-sync")();


console.log("1 → Standard");
console.log("2 → VIP");
console.log("3 → Premium");
console.log("4 → Enfant");


let n = scan(Number) ;

console.log("enter la quantité :");


let quantité = scan (Number);


switch(Number(n))
{
    case 1 : console.log("80 DH\n");
             console.log("total :" + (quantité * 80));
    break;
    case 2 : console.log("200 DH \n" +(quantité * 200) + " DH");
    break;
    case 3 : console.log("350 DH \n" + (quantité * 350) + " DH");
    break;
    case 4 : console.log("40 Dh \n" + (quantité * 40) + " DH");
    break;
    default : console.log("not");
    break;
}