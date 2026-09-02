let prompt = require("prompt-sync")();

let nombre_n = prompt("enter un nombre n :");
let nombre_x = prompt("enter un nombre x :");

let i = 1 ;

for(i = 1 ; i <= nombre_n ; i++)
{
    console.log(nombre_x * i);

    if(nombre_n == nombre_x * i )
    {
        break;
    }
}
console.log(" le nombre total de multiples trouvés: " + i);

