let scan = require('prompt-sync')();



let n = Number (scan("entrer le nombre n : "));


let s1 = 0 ;
let s2 = 0 ;

for(let i = 1 ; i <= n ; i++)
{
    if(i % 2 == 1)
    {
        s1 = s1 + i ;
    }
    if(i % 2 == 0)
    {
        s2 = s2 + i ;
    }
}
console.log("Somme des impairs :" , s1 , "Somme des pairs : ", s2);