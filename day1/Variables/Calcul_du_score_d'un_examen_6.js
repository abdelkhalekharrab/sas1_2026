let a = require("prompt-sync")();

let Score_1 = a("enter Score partie 1 :");
let Score_2 = a("enter Score partie 2 :");
let Score_3 = a("enter Score partie 3 :");
let Score_4 = a("enter Score partie 4 :");

score_total = (+Score_1) + (+Score_2) + (+Score_3) + (+Score_4) ;

Moyenne = score_total / 4 ;

console.log("Score total : " + score_total);

console.log("Moyenne : " + Moyenne);

