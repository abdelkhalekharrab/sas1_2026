function convertirMontant(montant , taux , DH )
{
    return montant * taux + DH ;   
}


function formatter ()
{
    return " DH" ;
}

console.log(convertirMontant(100, 10.5, formatter()));