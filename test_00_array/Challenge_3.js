let t = [12, 45, 7, 89, 23] ;

let max ;
max = t[0];

for(let i = 1 ; i < 5 ; i++)
{
    if(t[i] > max)
    {
        max = t[i];
    }
}
console.log(max);