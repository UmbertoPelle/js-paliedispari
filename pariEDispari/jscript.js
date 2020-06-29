document.getElementById("btn").addEventListener("click", function (){
  //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
  var numUtente=document.getElementById("numUtente").value;
  var scomessaUtente=document.getElementById("parioDispari").value;
  var numPC= randomNum(1,5);
  //Dichiariamo chi ha vinto.
  var ris=checkParioDispari(numUtente , numPC)
  console.log(numPC,ris);

  // function
  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  function checkParioDispari(num1, num2) {
    var temp = num1 + num2;
    if (temp % 2 == 0) {
      return true;
    }else {
      return false;
    }
  }

});
