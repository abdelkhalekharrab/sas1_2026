const t = ["pomme", "banane","apple","khokh"] ;

for(let i = 0 ; i < 4 ; i++)
{
    if(t[i] == "pomme" || t[i] == "banane")
    {
         console.log(t[i] , true);
    }
    if(t[i] !== "pomme" && t[i] !== "banane")
    {
        console.log(t[i] , false);
    }
}