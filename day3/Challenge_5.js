function additionnerTout(...arg)
{
    let s = 0 ;

    for(let i = 0 ; i < arg.length ; i++)
    {
        s = s + arg [i] ;
    }
    console.log(s);



}
additionnerTout(10, 20, 30, 40);