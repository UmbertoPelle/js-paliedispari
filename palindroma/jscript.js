// Chiedere all’utente di inserire una parola
var parolaUtente = prompt("inserisci la parola da controllare:");
console.log(checkPalindroma(parolaUtente));


//Creare una funzione per capire se la parola inserita è palindroma
// function
function checkPalindroma (parola) {
  var palindroma = parola.split('').reverse().join('');
  if (palindroma == parola) {
    return true;
  }else {
    return false;
  }
}
