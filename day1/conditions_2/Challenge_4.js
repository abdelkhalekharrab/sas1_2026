let scan = require("prompt-sync")();

console.log("enter trois longueurs :");

let a = scan(Number);
let b = scan(Number);
let c = scan(Number);

if((a + b) > c && (a + c) > b && (b + c ) > a)
{
    console.log("Triangle valide");
    if(a == b &&  b == c && c == a )

    {
        console.log("Équilatéral")
    }
    
}
else
{
    console.log("Triangle invalide");
}    