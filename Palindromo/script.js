//Chiede input
let word = prompt("Inserisci una parola");

//!Validazione
while (!isNaN(word) || word.length < 2) {
  alert("Devi inserire una parola di almeno due lettere");
  word = prompt("Inserisci una parola").trim();
}

//Variabili
let flippedWord = "";
let isPalindrome = false;

//Invoca funzione
findPalindrome();

//Funzione
function findPalindrome() {
  //Inverte la parola
  for (let i = word.length - 1; i >= 0; i--) {
    flippedWord += word[i];
  }
  //Verifica se è palindroma
  if (flippedWord === word) isPalindrome = true;
  //Restituisci valore isPalindrome
  return isPalindrome;
}

let message = `La parola '${word}' al contrario è '${flippedWord}', '${word}' NON è palindroma.`;

if (isPalindrome)
  message = `La parola '${word}' al contrario è '${flippedWord}', '${word}' è una parola palindroma.`;

console.log(message);
