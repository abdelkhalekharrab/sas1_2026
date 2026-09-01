let a = require("prompt-sync")();

let x1 = a("enter position x1 :");
let y1 = a("enter position y1 :");
let z1 = a("enter position z1 :");

let x2 = a("enter position x1 :");
let y2 = a("enter position y2 :");
let z2 = a("enter position z3 :");

Distance = ((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2 ) ** 0.5 ;

console.log("Distance : " + Distance);