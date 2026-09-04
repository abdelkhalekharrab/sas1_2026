let scan = require("prompt-sync")();

let nombre  = Number (scan("enter un nombre n :"));


while(nombre >= 0)
{
    console.log(nombre);
    nombre--;
}
console.log("Décollage !");