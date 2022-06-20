// 1
// gegeben
function add(a, b){
    return a + b
}
//
// Erstelle eine Funktion namens aPlusb welche einen Parameter p entgegen nimmt,
// und intern immer add mit a=20 aufruft, b soll mit p belegt werden.
// Gib das Ergebnis der Berechnung zurück.
// Versuche zwei Lösungs-Varianten zu finden (Hint: bind).

function aPlusb(p) {
    return add(20, p);
}
console.log(aPlusb(2));


add.bind(20);
console.log(aPlusb(2));



// 2
// Die gegebene Funktion add aus Aufgabe 1 soll geändert werden.
// Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für einen Logger er verwenden möchte.
// z.B. console.log oder console.warn wären mögliche Logger.

function add2(a, b, logger){
    logger(`${logger.name} => Parameter: a: ${a}, b: ${b}`);
    return a + b
}

add2(9, 32, console.warn);
add2(7, 4, console.log);
