let scan = require('prompt-sync')();



let n = Number (scan("entrer le nombre n : "));


let r = 1;

for(let i = 1 ; i <= n ; i++)
{
    r = r * i;
}
console.log(r);