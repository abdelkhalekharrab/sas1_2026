let t = [1, 2, 3, 4, 5, 6] ;

let s = [];

for(let i = 0 , j = 0 ; i < 6 ; i++)
{
    if(t[i] % 2 == 0)
    {
        s[j] = t[i] ;
        j++ ;
    }
}
console.log(t);
console.log(s);
