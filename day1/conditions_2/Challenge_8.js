let scan = require("prompt-sync")();

let n ;

console.log("1 → Facile 2 → Normal 3 → Difficile 4 → Extrême");

n = scan (Number);

console.log("enter nombre Ennemis :")

let ennmie = scan(Number) ;



switch(Number(n))
{
    case 1 : console.log("Niveau : Facile Ennemis " + "\nnombre ennemie :" + ennmie +  "\nPoints par ennemi : 10" );
    break ;
    case 2 : console.log("Niveau : Normal Ennemis " + "\nnombre ennemie :" + ennmie +  "\nPoints par ennemi : 20");
    break ;
    case 3 : console.log("Niveau : Difficile Ennemis " + "\nnombre ennemie :" + ennmie +  "\nPoints par ennemi : 30");
    break;
    case 4 : console.log("Niveau : Extrême Ennemis " + "\nnombre ennemie :" + ennmie +  "\nPoints par ennemi : 40");
    break ;
    default : console.log("?");
    break;
}