let a = require("prompt-sync")();

let cc = a("enter note CC : ");
let projet  = a("enter note projet  : ");
let Examen = a("enter note Examen : ");

Note_finale = (cc * 2 + projet * 3 + Examen * 5) / 10 ;

console.log("Note finale : " + Note_finale );