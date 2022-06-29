let min = 1;
let max = 5;
let message = "";

let userChoice = prompt("Scegli pari o dispari", "pari");

//!Validazione input
while (userChoice != "pari" && userChoice != "dispari") {
  alert("Scrivi 'pari' o ''dispari'");
  userChoice = prompt("Scegli pari o dispari", "pari");
}

let userNumber = parseInt(prompt(`Scegli un numero tra ${min} e ${max}`, "2"));

//!Validazione input
while (isNaN(userNumber) || userNumber < min || userNumber > max) {
  alert(`Inserire un numero tra ${min} e ${max}`);
  userNumber = prompt(`Scegli un numero tra ${min} e ${max}`, "2");
}

//Genera numero casuale tra min e max
function generateRndNumber(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

const CPUNumber = generateRndNumber(min, max);

//Verifica se la somma è pari o dispari
function isEven(a, b) {
  let isEven = false;

  (a + b) % 2 === 0 ? (isEven = true) : (isEven = false);

  return isEven;
}

const result = isEven(userNumber, CPUNumber);

result ? (winner = "pari") : (winner = "dispari");
userChoice === winner ? (message = "Hai vinto!") : (message = "Hai perso!");

console.log(`Hai scelto ${userChoice}`);
console.log("Hai inserito il numero", userNumber);
console.log("numero CPU", CPUNumber);
result ? console.log(`La somma di ${userNumber} e ${CPUNumber} è pari`) : console.log(`La somma di ${userNumber} e ${CPUNumber} è dispari`);
console.log(message);
