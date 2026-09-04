let scan = require("prompt-sync")();

let score = scan("enter you score :");

if(score < 1000)
{
    console.log("Bronze");
}
else if(score >= 1000 && score <= 1999)
{
    console.log("Argent");
}
else if(score >= 2000 && score <= 2999)
{
    console.log("Or");
}
else if(score >= 3000 && score <= 4999)
{
    console.log("Diamant");
}
else
{
    console.log("5000");
}