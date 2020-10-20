// calcolo del prezzo del biglietto del treno
// Richiesta per utente: numero di chilometri che vuole percorrere
var numeroKm = prompt("Dove vuoi andare? Indicami quanti km percorrerai:");
// 100km
// Richiesta per utente: età del passeggero.
var etaUtente = prompt("Qual'è la tua età?");
// 33 anni
// prezzo del biglietto definito in base ai km (0.21 € al km)
var prezzoKm = (0.21 * numeroKm).toFixed(2);

// variabili sconti
  var sconto20minorenni = ((20 * prezzoKm) / 100).toFixed(2);
  var sconto40Over65 = ((40 * prezzoKm) / 100).toFixed(2);

// condizioni in base all'età
if (etaUtente < 18) {
  var prezzoTotale = prezzoKm - sconto20minorenni;
} else if (etaUtente > 65) {
  var prezzoTotale = prezzoKm - sconto40Over65;
} else {
  var prezzoTotale = prezzoKm
};

// visualizzazione
document.getElementById('risultato').innerHTML="Il prezzo del tuo biglietto per i km stabiliti è: " + prezzoTotale + "€";
