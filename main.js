//anni: chiedi eta utente e di anno di nascita

/* 
strumenti:
-prompt
-let userAge
-consolelog
-document.getElementById
 */

//chiedi eta utente

/* let userAge= prompt('type your age');

//recupero anno correntecon una const

const currentYear= 2023;

//sottraggo all anno eta utente

const birthYear= currentYear - Number(userAge)

//stampo in log risultato

console.log('you were born in ' + birthYear); */


//Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

/* 
strumenti

-prompt
-document.getElementById
console.log
*/

//chiedi nome utente

const userName= prompt('typer your name');

//seleziona tag tramite id in cui inserire nome

const greetingsElement= document.getElementById('greetings');

//stampo in console risultato

console.log('ciao ' + userName);
//lo inserisco in pagina

greetingsElement.innerHTML= 'Ciao '+ userName