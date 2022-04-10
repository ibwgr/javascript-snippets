// 1
// gegeben
function add(a, b){
    return a + b
}

function aPlusb (p){
   return  add(20, p)
}

console.log(aPlusb(40))

 let abx = add.bind(null,40 ) // erstes argmument von add(40, p)
console.log(abx(20))// aufruf abx(20) => add(40, p=20)


//
// Erstelle eine Funktion namens aPlusb welche einen Parameter p entgegen nimmt,
// und intern immer add mit a=20 aufruft, b soll mit p belegt werden.
// Gib das Ergebnis der Berechnung zurück.
// Versuche zwei Lösungs-Varianten zu finden (Hint: bind).






// 2
// Die gegebene Funktion add aus Aufgabe 1 soll geändert werden.
// Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für einen Logger er verwenden möchte.
// z.B. console.log oder console.warn wären mögliche Logger.

/*
function add2(a, b, logger){
    logger(`add(${a}, ${b})`)
    return a + b
}
*/
// via ...arguments array holen
function add2(a, b, logger){
    logger(`add(${[...arguments].slice(0, -1).join(', ')})`)
    return a + b
}


function bPlusa (p){
    return  add2(20, p, console.log)
}

console.log(bPlusa(20))