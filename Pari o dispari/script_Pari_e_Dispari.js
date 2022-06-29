let min = 1;
let max = 5;
let message = "";

//*******FUNZIONI********
//Genera numero casuale tra min e max
function generateRndNumber(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

//Verifica se la somma è pari o dispari
function isEven(a, b) {
  let isEven = true;
  //se il risultato della (somma modulo 2) è 1(true) allora isEven è false cioè è dispari
  if ((a + b) % 2) isEven = false;
  //restituisci valore di isEven
  return isEven;
}

//Chiede input all'utente
let userChoice = prompt("Scegli pari o dispari", "pari").toLowerCase();
let userNumber = parseInt(prompt(`Scegli un numero tra ${min} e ${max}`, "2"));

//!Validazione input testuale
//Finchè l'utente non scrive "pari" o "dispari"
while (userChoice != "pari" && userChoice != "dispari") {
  //Mostra alert
  alert("Scrivi 'pari' o ''dispari'");
  //Richiede input
  userChoice = prompt("Scegli pari o dispari", "pari");
}
//!Validazione input numerico
//Finchè l'utente non inserisce un numero compreso tra min e max
while (isNaN(userNumber) || userNumber < min || userNumber > max) {
  //Mostra alert
  alert(`Inserire un numero tra ${min} e ${max}`);
  //Richiede input
  userNumber = prompt(`Scegli un numero tra ${min} e ${max}`, "2");
}

//Numero random CPU
const CPUNumber = generateRndNumber(min, max);

//Se il risultato della funzione isEven è true allora

isEven(userNumber, CPUNumber) ? (winner = "pari") : (winner = "dispari");
userChoice === winner ? (message = "Hai vinto!") : (message = "Hai perso!");

//Mostra messaggio all'utente
console.log(`Hai scelto ${userChoice}`);
console.log("Hai inserito il numero: ", userNumber);
console.log("CPU ha inserito il numero: ", CPUNumber);

isEven(userNumber, CPUNumber)
  ? console.log(`La somma di ${userNumber} + ${CPUNumber} è pari`)
  : console.log(`La somma di ${userNumber} + ${CPUNumber} è dispari`);

console.log(message);
