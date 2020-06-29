document.getElementById("btn").addEventListener("click", function (){
  //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
  var numUtente=parseInt(document.getElementById("numUtente").value);
  var scomessaUtente=document.getElementById("parioDispari").value;
  var numPC= randomNum(1,5);
  var somma=numUtente + numPC;
  //Dichiariamo chi ha vinto.
  // var ris=checkParioDispari(numUtente , numPC)
  // console.log(numPC,ris);

  console.log("Numero random pc",numPC);
  if (checkParioDispari(somma) == scomessaUtente) {
    console.log("hai vinto");
  }else {
    console.log("hai perso");
  }

  // functions
  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  function checkParioDispari(num) {
    if (num % 2 == 0) {
      return 0;
    }else {
      return 1;
    }
  }

});
