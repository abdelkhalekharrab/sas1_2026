let scan = require("prompt-sync")();


let n ;

console.log("utilise les codes suivants 1 to 4 :");

n = scan (Number);

switch(Number(n))
{
    case 1 : console.log("Compte courant");
             console.log("les frais mensuels : 20 DH");
    break;
    case 2 : console.log("Compte épargne");
             console.log("les frais mensuels : 10 DH");
    break;
    case 3 : console.log("Compte étudiant");
             console.log("les frais mensuels : 0 DH");
    break;
    case 4 : console.log("Compte professionnel");
             console.log("les frais mensuels : 50 DH");
    break;
    default : console.log("er");
    break;
    
}