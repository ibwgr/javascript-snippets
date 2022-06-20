
/*
Aufgabe 1
*/
function begruessung(name, alter) {
    if(alter<=10)
        return `Hoi ${name}`
    else if(alter>10 && alter<=18)
        return `Hallo ${name}`
    else if(alter>18 && alter <= 100)
        return `Grüezi ${name}`
    else
        return `Grüss Gott ${name}`
}

console.log(begruessung('klein fritz', 8))
console.log(begruessung('kind fritz', 11))
console.log(begruessung('alt fritz', 50))
console.log(begruessung('uralt fritz', 108))


/*
Aufgabe 2
*/
function preis(alter) {
    if(alter<5)
        return 0
    else if(alter>=5 && alter<=15)
        return 5
    else if(alter>15 && alter <= 59)
        return 15
    else
        return 10
}
console.log(preis(3))
console.log(preis(7))
console.log(preis(16))
console.log(preis(50))
console.log(preis(60))
console.log(preis(103))

/*
Aufgabe 3
*/
function zugang(alter, maennlich) {
    if((alter>19 && maennlich) || (alter>17 && !maennlich))
        return true
    else 
        return false
}

console.log(zugang(19, true))
console.log(zugang(20, true))
console.log(zugang(17, false))
console.log(zugang(18, false))

function zugang_ternaer(alter, maennlich) {
    return ((alter>19 && maennlich) || (alter>17 && !maennlich)) ? true : false
}

console.log(zugang_ternaer(19, true))
console.log(zugang_ternaer(20, true))
console.log(zugang_ternaer(17, false))
console.log(zugang_ternaer(18, false))


function zugang_switch(alter, maennlich) {
    let result = false;
    switch(maennlich) {
        case true:
            if(alter>19)
                result = true;
                break;
        case false:
            if(alter>17)
                result = true;
                break;
        default:
            result = false;

    }
    return result;
}

console.log(zugang_switch(18, true))
console.log(zugang_switch(20, true))
console.log(zugang_switch(17, false))
console.log(zugang_switch(18, false))

/*
Schleifen / Loops
Aufgabe 0
*/
let s = '';
for(let char of "penguin") {
    s += char + ',';
}
console.log(s.substr(0,s.length-1))


// TODO
/*
Schleifen / Loops
Aufgabe 1
*/
let array = [1,2,3]
let sum = array.reduce((a,b) => a+b, 0);
console.log(sum)
let summe = 0;
for (const number of array) {
    summe += number
}
console.log(summe)


/*
Schleifen / Loops
Aufgabe 2
*/
let result = []
for(let number of [1,2,3]) {
    if(number%2===0) {
        result.push(true);
    } else {
        result.push(false)
    }
}

console.log(result)

let result2 = []
for(let number of [1,2,3]) {
    result2.push(number%2===0)
}
console.log(result2)

function numToBool(...n) {
    let result3 = []
    for(let number of n) {
        result3.push(number%2===0)
    }
    return result3;
}

const numbers = [1,2,3,4,5]
console.log(numToBool(...numbers))

/*
Schleifen / Loops
Aufgabe 3

Schreibe ein Programm, welches jeden ersten Buchstaben aller Wörter eines Strings
in einen Grossbuchstaben umwandelt.
z.B. aus `"Ich weiss, dass ich nichts weiss ... !"` wird
`"Ich Weiss, Dass Ich Nichts Weiss ... !"`
Tip: JavaScript kann einen Kleinbuchstaben automatisch
umwandeln in den entsprechenden Grossbuchstaben.
*/
let resultat = '';
let sentence = "Ich weiss, dass ich nichts weiss ... !";
sentenceArray = sentence.split(' ')
for (let word of sentenceArray) {
    resultat += word.toUpperCase().slice(0,1) + word.slice(1) + ' '
}
console.log(resultat)

/*
Schleifen / Loops
Aufgabe 4

Schreibe ein Programm, das alle Primzahlen zwischen 0 und 100 ausgibt.
Versuche 2 Varianten zu schreiben, mit jeweils anderen Schlaufentypen.
*/
function getPrimzahlen( upperFront ) {
    let primzahlen = []
    let nPrim = [];
    for( x = 0; x <= upperFront; x++ ) {
        nPrim[x] = false;
    }
    x = 2;
    while( ( x * x ) <= upperFront ) {
        if( nPrim[x] == false ) {
            for( y = ( x * x ); y <= upperFront; y += x ) {
                nPrim[y] = true;
            }
        }
        x++;
    }
    for( x = 2; x <= upperFront; x++ ) {
        if( nPrim[x] == false ) {
            // x == Primzahl
            primzahlen.push(x)
        }
    }
    return primzahlen
}
console.log(getPrimzahlen(100))



/*
Schleifen / Loops
Aufgabe 5

Schreibe ein Program, das einen beliebigen Text mit Cäsar Chiffre verschlüsselt.
z.B. aus `"abcz"` wird `"bcd{"`, sofern die Verschiebung 1 ist.
*/
function caesar(text, mvmt) {
    let resultat = '';
    for (let zeichen of text) {
        let ascii = zeichen.charCodeAt(0)
        console.log(String.fromCharCode(ascii + mvmt))
        resultat = resultat + String.fromCharCode(ascii + mvmt);
    }
    return resultat
}
console.log(caesar("abcz", 1))


/*
Schleifen / Loops
Aufgabe 6

Gegegeben ist eine beliebige Menge von Zahlen.
*/
let zahlen = [2,4,456,7,65,4,3,2,3, -5,4,5,654,3,.67,-34,.43,65,-4.8,7,653,856,8765,432,345,786]

/*
6.1 Gebe nur die Ganzzahlen aus.
 */
let gz = [];
for (let zahl of zahlen) {
    (zahl%2==0) ? gz.push(zahl) : false
}
console.log(gz)

/*
6.2 Gebe nur die positiven Zahlen aus.
 */
let pz = [];
for (let zahl of zahlen) {
    (zahl>0) ? pz.push(zahl) : false
}
console.log(pz)

/*
6.3 Berechne die Quersumme aller Zahlen
 */
qs = 0;
zahlen = [2,4,5,6,43,7,6,54,-34,654,32];
for (const number of zahlen) {
    if(number>0) {
        for (const zahl of number.toString()) {
            qs += Number(zahl);
        }
    } else {
        for (const zahl of number.toString()) {
            if(!isNaN(Number(zahl)))
                qs -= Number(zahl);
        }
    }
}
qs
/*
6.4 Berechne den Durchschnitt (arithmetisches Mittel) aller Zahlen
 */
let ds = zahlen.reduce((a,b) => a + b) / zahlen.length
console.log(ds)


/*
Schleifen / Loops
Aufgabe 7

Gegeben ist eine beliebige Zeichenkette.
*/
let zeichenkette = "Mein Essen wurde kalt."

/*
7.1 Konvertiere jedes zweite Zeichen zum entsprechenden Grossbuchstaben.
 */
sentence = '';
for (let i = 0; i < zeichenkette.length; i++) {
    if(i%2 === 0) {
        sentence += zeichenkette[i].toUpperCase()
    } else {
        sentence += zeichenkette[i].toLowerCase()
    }
}
console.log(sentence)

/*
7.2 Ersetze alle Konsonanten durch die entsprechenden Selbstlaute. \
Zum Beispiel aus einem "p" wird "pe", aus "c" wird "ce", aus "k" wird "ka" etc.
 */
// loesung 1:
let search = ['b','c','d','f','g','h','j','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
let replace = ['be','ce','de','äf','ge','ha','jot','äl','äm','än','pe','qu','äs','te','vau','we','ix','ypsilon','zät','BE','CE','DE','ÄF','GE','HA','JOT','ÄL','ÄM','ÄN','PE','QU','ÄS','TE','VAU','WE','IT','YPSILON','ZÄT'];
let res = '';
for (const zeichen of zeichenkette) {
    if(search.includes(zeichen)) {
        res += replace[search.indexOf(zeichen)];
    } else {
        res += zeichen;
    }
}
console.log(res);


// loesung 2:
res = '';
for (const zeichen of zeichenkette) {
    if(search.indexOf(zeichen) >= 0) {
        res += replace[search.indexOf(zeichen)];
    } else {
        res += zeichen;
    }
}
console.log(res);

// loesung 3 (kompliziert):
resultat = ''
let vokale = ['a', 'e', 'i', 'o', 'u']
for (const zeichen of zeichenkette) {
    let charcode = zeichen.charCodeAt(0)
    if((vokale.indexOf(zeichen) === -1) && ((charcode>=65 && charcode<=90) || (charcode>=97 && charcode<=122))) {
        // konsonante
        let codes = [65,66,67,68,71,80,84,97,98,99,100,103,112,116]
        if(codes.indexOf(charcode) !== -1) {
            // b-d, g, p, t,
            resultat += zeichen + 'e'
        }
        codes = [70,76,77,78,82,83,87,102,108,109,110,114,115,119]
        if(codes.indexOf(charcode) !== -1) {
            // f, l-n, r-s, w
            resultat += 'e' + zeichen
        }
        codes = [72,75,104,107]
        if(codes.indexOf(charcode) !== -1) {
            // h, k,
            resultat += zeichen + 'a'
        }
        codes = [81,113]
        if(codes.indexOf(charcode) !== -1) {
            // q
            resultat += zeichen + 'u'
        }
        codes = [86,118]
        if(codes.indexOf(charcode) !== -1) {
            // v
            resultat += zeichen + 'au'
        }
        codes = [88,120]
        if(codes.indexOf(charcode) !== -1) {
            // x
            resultat += 'i' + zeichen
        }
        codes = [89,121]
        if(codes.indexOf(charcode) !== -1) {
            // y
            resultat += zeichen + 'psilon'
        }
        codes = [90,122]
        if(codes.indexOf(charcode) !== -1) {
            // z
            resultat += zeichen + 'ät'
        }
    } else {
        // vokal
        resultat += zeichen
    }
}
console.log(resultat)

/*
7.3
Gib die Zeichenkette rückwärts aus. \
z.B. aus "Hallo du" wird "ud ollaH".
 */
let text = 'Hallo du'
let output = ''
for (let i = text.length-1; i >= 0; i--) {
    output += text[i]
}
console.log(output)

