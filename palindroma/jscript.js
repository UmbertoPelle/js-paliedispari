var parolaUtente = prompt("inserisci la parola da controllare:");
console.log(checkPalindroma(parolaUtente));

// function
function checkPalindroma (parola) {
  var palindroma = parola.split('').reverse().join('');
  if (palindroma == parola) {
    return true;
  }else {
    return false;
  }
}
