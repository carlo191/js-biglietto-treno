/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.
*/

// # PROCEDURA

// ! RACCOLTA DATI
// chiedere età passegero
const AgePassenger = parseInt(prompt("Quanti anni hai?"));
const IsValidAgePassenger = !isNaN(AgePassenger) && AgePassenger > 0;
if (!IsValidAgePassenger) {
  alert(`il valore non è coretto per favore riprova`);
}
// chiedere quanti km si vuole percorrere
const KmPassenger = parseInt(prompt("Quanti km dovrai percorrere?"));
const IsValidKmPassenger = !isNaN(KmPassenger) && KmPassenger > 0;
if (!IsValidKmPassenger) {
  alert(`il valore non è coretto per favore riprova`);
}

let Finalprice;
let sconto;

// ! ELABORAZIONE
//il prezzo è ogni km 21 centesimi

// se età minore di 18 sconto del 20%
if (AgePassenger < 18) {
  sconto = 0.6;
}
// se età maggiore di 65 sconto del 40%
else if (AgePassenger >= 65) {
  sconto = 0.8;
} else {
  sconto = 1;
}
FinalPrice = KmPassenger * 0.21 * sconto;
FinalPrice = Math.round(FinalPrice * 100) / 100;
// ! OUTPUT
// output prezzo con massimo 2 decimali
alert(FinalPrice);
const IsValidFinalPrice = !isNaN(Finalprice);
if (!IsValidFinalPrice) {
  alert(`hai sbagliato qualcosa nella compilazione riprova `);
}
