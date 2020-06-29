// Chiedere all’utente di inserire una parola
var parolaUtente = prompt("inserisci la parola da controllare:");
if (checkPalindroma(parolaUtente) == false) {
  console.log("la parola non è palindroma");
} else {
  console.log("la parola è palindroma");
}

//Creare una funzione per capire se la parola inserita è palindroma
// function
function checkPalindroma (parola) {
  // var palindroma = parola.split('').reverse().join('');

  var palindroma ="" ;
  for (var i = parola.length - 1; i >= 0 ; i--) {
    palindroma += parola[i] ;
  }
  if (palindroma == parola) {
    return true;
  }else {
    return false;
  }
}
