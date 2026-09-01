let a = require("prompt-sync")();

const pi = 3.14159 ;
let rayon = a("enter Le rayon du réservoir : ");
let hauteur = a("enter La hauteur du réservoir : ");

Volume = pi * (rayon)**2 * hauteur ;

console.log("Volume : " + Volume + " m³");

