// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// parola utente
var wordUser = prompt("Inserisci una parola");

// funzione su parola utente
reverse(wordUser);

// funzione
function reverse(word) {
  var wordReverse = '';
  word = word.toUpperCase();
// ciclo per invertire parola
  for (var i = word.length - 1 ; i >= 0; i--) {
    wordReverse += word[i];
  }
// controllo della parola
  if (word == wordReverse) {
    alert("Congratulazioni! La tua mente brillante ha partorito un palindromo!");
    console.log("Palindromo");
  } else {
    alert("Bella parola! Ma non è quella che cerchiamo!");
    console.log("Non è un palindromo");
  }
}
