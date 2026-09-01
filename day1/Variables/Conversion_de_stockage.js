let a = require("prompt-sync")();


let gb = a("enter capacité exprimée en Gigaoctets :");

mb = gb * 1024 ;

console.log(mb + " mb");