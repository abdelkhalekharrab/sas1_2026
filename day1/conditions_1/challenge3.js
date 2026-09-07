let prompt = require('prompt-sync')();
let noteq = prompt("qu'elle est votre note : ");
let note = +noteq;
if (note<10){
    console.log(`Note : ${note} \nResultat : Non Admis`);
}
else if (note>=10){
    console.log(`Note : ${note} \nResultat : Admis`);
}
else{
    console.log(`Invalide note ! `);
}
