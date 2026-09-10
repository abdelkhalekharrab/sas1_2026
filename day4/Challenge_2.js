function compterLettre(chaine, lettre)
{
    let j = 0 ;

    for(let i of chaine)
    {
        if(i == lettre)
        {
            j++ ;
        }   
    }


    console.log(j);
    

}
compterLettre("javascript", "a");