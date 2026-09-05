let scan = require("prompt-sync")();


let i = 1 ;
let somme = 0 ;
while(i <= 100)
{
    let n = scan("enter nombre :");
    somme = somme + i ;
    if(n == 0)
    {
        break;
    }
    i++;
}
console.log("Nombre de valeurs : " , i , "Somme : " , somme);



