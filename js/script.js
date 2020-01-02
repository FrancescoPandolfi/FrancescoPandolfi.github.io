
// Al click sul pulsante appaiono le regole del gioco
document.getElementById('btn_regole').addEventListener('click',
  function() {
    document.getElementById('bg_regole').classList.add("display_block");
    document.getElementById('bg_regole').classList.remove("display_none");
});

document.getElementById('bg_regole').addEventListener('click',
  function() {
    document.getElementById('bg_regole').classList.add("display_none");
    document.getElementById('bg_regole').classList.remove("display_block");
});

// VARIABILI
var sceltaGiocatore;
var sceltaComputer;
var faseUno = document.getElementById('fase1');
var faseDue = document.getElementById('fase2');

var imgSassoUtente = document.getElementById('sasso_utente');
var imgCartaUtente = document.getElementById('carta_utente');
var imgForbiciUtente = document.getElementById('forbici_utente');

var imgSassoRobot = document.getElementById('sasso_bot');
var imgCartaRobot = document.getElementById('carta_bot');
var imgForbiciRobot = document.getElementById('forbici_bot');

var esito = document.getElementById('esito');

var imgScegliendo = document.getElementById('scegliendo');
var numDelComputer;
var punteggio = 00;

document.getElementById('score_number').innerHTML = punteggio;

// Azioni click su sasso
document.getElementById('sasso').addEventListener('click',
  function() {
    numDelComputer = Math.floor(Math.random() * 3 + 1);
    sceltaGiocatore = "sasso";
    faseUno.classList.add("display_none");
    faseDue.classList.remove("display_none");
    imgSassoUtente.classList.remove("display_none");
    setTimeout(function(){
      imgScegliendo.classList.add("display_none");

      // Scelta del computer
      if (numDelComputer == 1) {
          imgSassoRobot.classList.remove("display_none");
          sceltaComputer = "sasso";
      } else if (numDelComputer == 2) {
          imgCartaRobot.classList.remove("display_none");
          sceltaComputer = "carta";
      } else {
          imgForbiciRobot.classList.remove("display_none");
          sceltaComputer = "forbici";
      }
      document.getElementById('rigioca').classList.remove("display_none");

      // Aumenta il punteggio di 1 se l'utente vince
      if (sceltaComputer == "forbici") {
        punteggio++;
        esito.innerHTML = "HAI VINTO";
        // aggiungi box shadow
        imgSassoUtente.classList.add("box-shadow1");

      } else if (sceltaComputer == "carta") {
        punteggio--;
        if (punteggio < 0) {
          punteggio = 0;
        }
        esito.innerHTML = "HAI PERSO";
        // Aggiungi box shadow
        imgCartaRobot.classList.add("box-shadow2");

      } else {
        document.getElementById('rigioca').classList.remove("display_none");
        esito.innerHTML = "PARI";
      }
      // stampa il punteggio
      document.getElementById('score_number').innerHTML = punteggio;
    }, 2000);
});

// Azioni click su carta
document.getElementById('carta').addEventListener('click',
  function() {
    sceltaGiocatore = "carta";
    numDelComputer = Math.floor(Math.random() * 3 + 1);
    faseUno.classList.add("display_none");
    faseDue.classList.remove("display_none");
    imgCartaUtente.classList.remove("display_none");
    setTimeout(function(){
      imgScegliendo.classList.add("display_none");

      // Scelta del computer
      if (numDelComputer == 1) {
          imgSassoRobot.classList.remove("display_none");
          sceltaComputer = "sasso";
      } else if (numDelComputer == 2) {
          imgCartaRobot.classList.remove("display_none");
          sceltaComputer = "carta";
      } else {
          imgForbiciRobot.classList.remove("display_none");
          sceltaComputer = "forbici";
      }
      document.getElementById('rigioca').classList.remove("display_none");

      // Aumenta il punteggio di 1 se l'utente vince
      if (sceltaComputer == "sasso") {
        punteggio++;
        esito.innerHTML = "HAI VINTO";
        // Aggiungi box shadow
        imgCartaUtente.classList.add("box-shadow2");

      } else if (sceltaComputer == "forbici") {
        punteggio--;
        if (punteggio < 0) {
          punteggio = 0;
        }
        esito.innerHTML = "HAI PERSO";
        // Aggiungi box shadow
        imgForbiciRobot.classList.add("box-shadow3");

      } else {
        document.getElementById('rigioca').classList.remove("display_none");
        esito.innerHTML = "PARI";
      }
      // stampa il punteggio
      document.getElementById('score_number').innerHTML = punteggio;
    }, 2000);

});

// Azioni click su forbici
document.getElementById('forbici').addEventListener('click',
  function() {
    sceltaGiocatore = "forbici";
    numDelComputer = Math.floor(Math.random() * 3 + 1);
    faseUno.classList.add("display_none");
    faseDue.classList.remove("display_none");
    imgForbiciUtente.classList.remove("display_none");

    setTimeout(function(){
      imgScegliendo.classList.add("display_none");

      // Scelta del computer
      if (numDelComputer == 1) {
          imgSassoRobot.classList.remove("display_none");
          sceltaComputer = "sasso";
      } else if (numDelComputer == 2) {
          imgCartaRobot.classList.remove("display_none");
          sceltaComputer = "carta";
      } else {
          imgForbiciRobot.classList.remove("display_none");
          sceltaComputer = "forbici";
      }
      document.getElementById('rigioca').classList.remove("display_none");

      // Aumenta il punteggio di 1 se l'utente vince
      if (sceltaComputer == "carta") {
        punteggio++;
        esito.innerHTML = "HAI VINTO";
        imgForbiciUtente.classList.add("box-shadow3");
      } else if (sceltaComputer == "sasso") {
        punteggio--;
        if (punteggio < 0) {
          punteggio = 0;
        }
        esito.innerHTML = "HAI PERSO";
        imgSassoRobot.classList.add("box-shadow1");

      } else {
        document.getElementById('rigioca').classList.remove("display_none");
        esito.innerHTML = "PARI";
      }
      // stampa il punteggio
      document.getElementById('score_number').innerHTML = punteggio;
    }, 2000);
});

// Pulsante gioca ancora
document.getElementById('btn_rigioca').addEventListener('click',
  function() {
    faseUno.classList.remove("display_none");
    faseDue.classList.add("display_none");
    imgScegliendo.classList.remove("display_none");
    document.getElementById('rigioca').classList.add("display_none");

    // Togli scelta dell'utente
    imgCartaUtente.classList.add("display_none");
    imgForbiciUtente.classList.add("display_none");
    imgSassoUtente.classList.add("display_none");

    // Togli scelta del computer
    imgSassoRobot.classList.add("display_none");
    imgCartaRobot.classList.add("display_none");
    imgForbiciRobot.classList.add("display_none");

    // Togli box shadow su tutto
    imgSassoUtente.classList.remove("box-shadow1");
    imgCartaUtente.classList.remove("box-shadow2");
    imgForbiciUtente.classList.remove("box-shadow3");

    imgSassoRobot.classList.remove("box-shadow1");
    imgCartaRobot.classList.remove("box-shadow2");
    imgForbiciRobot.classList.remove("box-shadow3");


});
