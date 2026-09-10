let t = [1, 2, 2, 3, 4, 4, 1] ;

let s = [] ;

let d ;
d = t[0];


for(let i = 0 , j = 0  ; i < 7 ; i++)
{
    if(t[i] !== d)
    {
        d = t[i] ;
        s[j] = d ;
        j++;
        
    }
    
}
console.log(t);
console.log(s);

