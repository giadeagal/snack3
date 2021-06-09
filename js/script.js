//+++++ snack 3.1 +++++

// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// var wordOne = prompt("inserisci una parola");
// var wordTwo = prompt("inserisci una parola");

// function sameLen(x, y) {
//     var controllo = 0;
//     if (wordOne.length == wordTwo.length) {
//         controllo = 1;
//     }
//     return controllo;
// }

// if (sameLen(wordOne, wordTwo)) {
//     document.getElementById("printer").innerHTML=wordOne + " " + wordTwo;
// } else if(!sameLen(wordOne, wordTwo) && wordOne.length<wordTwo.length) {
//     document.getElementById("printer").innerHTML=wordTwo;
// } else {
//     document.getElementById("printer").innerHTML=wordOne;
// };


//+++++ snack 3.2 +++++

// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function stripElements (x, a, b) {
    var result = [];
    if (a > b) {
        for (var i = b - 1; i < a; i++) {
            result.push(x[i])
        }
    } else {
        for (var i = a - 1; i < b; i++) {
            result.push(x[i])
        }
    }
    return result;
}
document.getElementById("printer").innerHTML = stripElements(list, 5, 10);
document.getElementById("printer").innerHTML += "<br>" + stripElements(list, 10, 5);