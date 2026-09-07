let prompt = require('prompt-sync')();
console.log("1-  Ouvrir votre profile  ");
console.log("2 - Ouvrir les parametres ");
console.log("3 - Ouvrir les notifications ");
console.log("4 - Deconnection du compt ");
let choix = prompt("entrer votre choix : ");
let intchoix = +choix;
switch(intchoix){
    case 1:
        console.log("Ouverture du profile ... ");
        break;
    case 2:
        console.log("Ouverture des parametres ...");
        break;
    case 3:
        console.log("Ouverture des notifications ...");
        break;
    case 4:
        console.log("Deconnection ...");
        break;
    default:
        console.log("INVALID INPUT !");
}
