let a = require("prompt-sync")();

let duree = a("enter la durée du film en minutes :");

if(duree <= 60)
{
    console.log("Court métrage");
}
else if(duree <= 120)
{
    console.log("Film standard");
}
else
{
    console.log("Film long");
}