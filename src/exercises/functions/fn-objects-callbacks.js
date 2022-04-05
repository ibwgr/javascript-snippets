// 1
// gegeben
// function add(a, b){
//     return a + b
// }
//
// Erstelle eine Funktion namens aPlusb welche einen Parameter p entgegen nimmt,
// und intern immer add mit a=20 aufruft, b soll mit p belegt werden.
// Gib das Ergebnis der Berechnung zurück.
// Versuche zwei Lösungs-Varianten zu finden (Hint: bind).

function add(a, b){
    return a + b
}

function aPlusb(p) {
    return add(20,p)
}

console.log(aPlusb(2))
//----------------------------------------------------------------------
// function aPlusb(p) {
//
//
//     add: function add(a, b){
//         return a + b
//     }
// }
//
// console.log(aPlusb(2))


// function aPlusb(p) {
//     let a = 20;
//     let b = p;
//     return a+b;
// }


// 2
// Die gegebene Funktion add aus Aufgabe 1 soll geändert werden.
// Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für einen Logger er verwenden möchte.
// z.B. console.log oder console.warn wären mögliche Logger.
