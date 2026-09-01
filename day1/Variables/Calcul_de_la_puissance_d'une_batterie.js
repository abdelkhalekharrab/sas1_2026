let a = require("prompt-sync")();

let La_tension = a("enter La tension : ");
let intensité  = a("enter La intensité : ");
let temps = a("enter La temps : ");

energie = (La_tension * intensité * temps);

console.log("Énergie : " + energie + " wh");
