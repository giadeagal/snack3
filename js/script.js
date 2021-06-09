// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

var wordOne = prompt("inserisci una parola");
var wordTwo = prompt("inserisci una parola");

function sameLen(x, y) {
    var controllo = 0;
    if (wordOne.length == wordTwo.length) {
        controllo = 1;
    }
    return controllo;
}

if (sameLen(wordOne, wordTwo)) {
    document.getElementById("printer").innerHTML=wordOne + " " + wordTwo;
} else if(!sameLen(wordOne, wordTwo) && wordOne.length<wordTwo.length) {
    document.getElementById("printer").innerHTML=wordTwo;
} else {
    document.getElementById("printer").innerHTML=wordOne;
};