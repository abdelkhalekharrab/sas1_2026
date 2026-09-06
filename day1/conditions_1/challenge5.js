let prompt = require('prompt-sync')();
let note = prompt("entrer votre note : ");
let grade = +note;
if(grade<10){
    console.log(`Note : ${grade}\nMention : Echec `)
}
else if(grade<=11.99 && grade >= 10){
    console.log(`Note : ${grade}\nMention : Passable`)
}
else if(grade<=13.99 && grade >= 12){
    console.log(`Note : ${grade}\nMention : Assez bien`)
}
else if(grade<=15.99 && grade >=14){
    console.log(`Note : ${grade}\nMention : Bien`)
}
else if(grade<=17.99 && grade >= 16){
    console.log(`Note : ${grade}\nMention : Tres bien`)
}
else if(grade<=20 && grade >= 18){
    console.log(`Note : ${grade}\nMention : Excellent`)
}
else{
    console.log("Invalid input !")
}