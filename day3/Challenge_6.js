function verifierMotDePasse(motDePasse)
{
    if(motDePasse.length >= 8 && motDePasse.includes("@") == true)
    {
        return true ;
    }
    else
    {
        return false ;
    }
    

}
console.log(verifierMotDePasse("code@1234"));