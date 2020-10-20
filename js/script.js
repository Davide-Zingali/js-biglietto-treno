// calcolo del prezzo del biglietto del treno
// Richiesta per utente: numero di chilometri che vuole percorrere
var numeroKm = prompt("Dove vuoi andare? Dimmi i km");

// Richiesta per utente: età del passeggero.
var etaUtente = prompt("Qual'è la tua età");
console.log(numeroKm, etaUtente);

// Prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoKm = (0.21 * numeroKm);
console.log(prezzoKm);
// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65








// BONUS
// do al mio aoutput un aspetto avanzato con html+css
// NOTE
// come detto: dare un output sensato, cioè con al max 2 decimali (cercare come si fa)
