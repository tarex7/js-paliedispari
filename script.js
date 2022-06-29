const word = prompt("Inserisci una parola");
let result = "";
let message = `La parola ${word} NON è palindroma.`;
let isPalindrome = false;

findPalindrome();

function findPalindrome() {
  //Inverte la parola
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }

  if (result === word) isPalindrome = true;

  return isPalindrome;
}

if (isPalindrome) message = `La parola ${word} è palindroma.`;

console.log(message);
