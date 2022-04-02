// Flow Control

// Begrüssung (1)
{
    let alter = 15
    let begruessung = ""
    if(alter <= 11){
        begruessung = "Hoi"
    }else if(alter <= 18){
        begruessung = "Hallo"
    }else if( alter <= 100){
        begruessung = "Grüezi"
    }else if( alter > 100 ){
        begruessung = "Grüss Gott"
    }
    console.log(begruessung + " Marco")
}

{
    let alter = 101
    let begruessung = ""

    if( alter > 100 ){
        begruessung = "Grüss Gott"
    }

    if( alter <= 100){
        begruessung = "Grüezi"
    }

    if(alter <= 18){
        begruessung = "Hallo"
    }

    if(alter <= 11){
        begruessung = "Hoi"
    }



    console.log(begruessung + " Marco")
}

// Eintrittspreis (2)
{
    let alter = 22
    let preis = 0
    if(alter < 5){
        preis = 0
    }else if(alter <= 15){
        preis = 5
    }else if( alter > 15 && alter < 60 ){
        preis = 15
    }else{
        preis = 10
    }
    console.log(preis + ".- CHF")
}

{
    let alter = 1
    let preis = 0
    if(alter < 5){
        preis = 0
    }if(alter <= 15){
        preis = 5
    }if( alter > 15 && alter < 60 ){
        preis = 15
    }if(alter > 59){
        preis = 10
    }
    console.log(preis + ".- CHF")
}

// Welcome to the Club (3)
{
    let age = 19
    let gender = "m"

    let minAge = (gender==="m") ? 20 : 18;

    switch( age >= minAge ){
        case true:
            console.log(`Willkommen ${age}-jährige(r) ${gender}`)
            break;
        case false:
            console.log(`Du kommst hier ned rein ${age}-jährige(r) ${gender}`)
    }

    // Alternative:
    console.log(age >= minAge ? "Ja" : "Nein")
}

/**
 *      SCHLEIFEN UND LOOPS
 */

// Pinguin Schleifen
{
    let string = "Pinguin"
    for (const char of string) {
        console.log(char)
    }
    let res = ""
    for (let i = 0; i < string.length; i++) {
        if (i > 0 && i < string.length) {
            res += ","
        }
        res += string[i];
    }
    console.log(res)

    let obA = {foo: 'bar'}
    let obB = {foo: 'bar'}

    let aA = [1, 2, 3, 4]
    let aB = [1, 2, 3, 4]

    console.log(aA === aB)
    console.log(null === null)

    function b() {
        console.log("b")
        return true
    }

    function a() {
        console.log("a")
        return true
    }

    if (a() && b()) {
        console.log('done')
    }

    let arr = [1, 2, 3]
    arr.forEach((el, i) => {
        arr[i] = (el % 2 === 0)
        arr[i]
    })
    arr
}

/*  1
    Schreibe ein Programm, das alle Zahlen eines Arrays summiert.
    z.B. aus `[1,2,3]` wird `6`
 */
{
    const array = [1,2,3,4,5,6,7,8,9];
    let res = 0;
    //For of schleife
    for (const number of array) {
        res += number
    }
    res
    res = 0;

    // fori schleife
    for (let i = 0; i < array.length; i++) {
        res += array[i]
    }
    res

    // while schleife
    res = 0
    i=0;
    while(i < array.length){
        res += array[i]
        i++
    }
    res
}

/*
    2
    Schreibe ein Programm, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
    Das Programm ermittelt für jede Zahl ob diese gerade ist oder nicht.
 */
{
    const array = [1,2,3,4,5,6,7,8,9];
    array.forEach((el, i) => {
        array[i] = (el % 2 === 0)
        array[i]
    })
    array
}

/*
    3
    Schreibe ein Programm, welches jeden ersten Buchstaben aller Wörter eines Strings in einen Grossbuchstaben umwandelt.
    z.B. aus `"Ich weiss, dass ich nichts weiss ... !"` wird `"Ich Weiss, Dass Ich Nichts Weiss ... !"`
    Tip: JavaScript kann einen Kleinbuchstaben automatisch umwandeln in den entsprechenden Grossbuchstaben.
 */
{
    let String = "Ich weiss, dass ich nichts weiss ... !"
    const words = String.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    String = words.join(" ");
    String
}

/*
    4
    Schreibe ein Programm, das alle Primzahlen zwischen 0 und 100 ausgibt.
    Versuche 2 Varianten zu schreiben, mit jeweils anderen Schlaufentypen.
 */
{
    let primes = []
    for (let n = 1; n <= 100 ; n++) {
        // looping through 2 to number-1
        let isPrime = true
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) primes.push(n)
    }
    primes
}

/*
    5
    Schreibe ein Program, das einen beliebigen Text mit Cäsar Chiffre verschlüsselt.
    z.B. aus `"abcz"` wird `"bcd{"`, sofern die Verschiebung 1 ist.
 */
{
    let string = "Ich werde verschlüsselt"
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        newString += String.fromCharCode(string.charCodeAt(i)+1)
    }
    newString
}

/*
### 6
Gegegeben ist eine beliebige Menge von Zahlen.

#### 6.1
Gebe nur die Ganzzahlen aus.

#### 6.2
Gebe nur die positiven Zahlen aus.

#### 6.3
Berechne die Quersumme aller Zahlen.

#### 6.4
Berechne den Durchschnitt (arithmetisches Mittel) aller Zahlen.
 */
{
    let zahlen = [12,34,-2,2.45,1,4,4.5,-2.3,-4]
    let ganzzahlen = []
    let positive = []
    let sum = 0
    for (const number of zahlen) {
        if(number % 1 === 0){
            ganzzahlen.push(number)
        }
        if(number >= 0){
            positive.push(number)
        }
        sum += number
    }
    let durchschnitt = sum / zahlen.length;
    ganzzahlen
    positive
    sum
    let sum2 = zahlen.reduce((a,b) => a+b);
    sum2
    durchschnitt

}

/*
### 7
Gegeben ist eine beliebige Zeichenkette.

#### 7.1
Konvertiere jedes zweite Zeichen zum entsprechenden Grossbuchstaben.

#### 7.2
Ersetze alle Konsonanten durch die entsprechenden Selbstlaute. \
Zum Beispiel aus einem "p" wird "pe", aus "c" wird "ce", aus "k" wird "ka" etc.

#### 7.3
Gib die Zeichenkette rückwärts aus. \
z.B. aus "Hallo du" wird "ud ollaH".

#### 7.4
Gib die Wörter der Zeichenkette rückwärts aus. \
z.B. aus "Hallo du, wie geht es dir?" wird "dir? es geht wie du, Hallo"
 */
{
    let zeichenkette = "Ich bin eine Zeichenkette"
    {
        // Neu:
        let alternative = zeichenkette => zeichenkette.split('').map((c,i) => i & 1 ? c.toUpperCase() : c.toLowerCase()).join('');

        let planA = alternative(zeichenkette)
        planA

        // alt:
        function alt (zeichenkette) {
            return zeichenkette.split('').map(function (c, i) {
                return i & 1 ? c.toUpperCase() : c.toLowerCase()
            }).join('')
        }

        let planB = alt(zeichenkette)
        planB
    }
    // 7.2
    {
        let newString = '';
        let konsonanten = ['b','c','d','g','h','k','m','n','p','r','s','t','w']
        let ersatz = ['be','ce','de','ge','ha','ka','äm','än','pe','är','äs','te','we']
        for (let i = 0; i < zeichenkette.length; i++) {
            if(konsonanten.includes(zeichenkette[i].toLowerCase())){
                let smallLetter = zeichenkette[i].toLowerCase() === zeichenkette[i];
                let replace = ersatz[konsonanten.indexOf(zeichenkette[i].toLowerCase())]
                newString += smallLetter ? replace : replace.toUpperCase();
            }else{
                newString += zeichenkette[i]
            }
        }
        // zeichenkette = newString
        newString
    }
    // 7.3
    {
        let stringArr = zeichenkette.split('')
        let reversed = stringArr.reverse().join('')
        reversed

    }
    // 7.4
    {
        let stringArr = zeichenkette.split(' ')
        let reversed = stringArr.reverse().join(' ')
        reversed
    }
}

// Objects 1 & 2
{
    const userList = []
    userList.push({name: "Esther", pts: 2})
    userList.push({name: "Marco", pts: 8})
    userList.push({name: "Nicole", pts: 9})
    userList.push({name: "Elay", pts: 1})

    let winner = null;

    for (const user of userList) {
        if (winner === null || winner.pts < user.pts) {
            maxScore = user.pts;
            winner = user;
        }
    }
    let n = 0
    let u = {pts: 4}

    console.log(typeof (n.pts) === typeof (u.pts))

    console.log(winner)

    userList.sort((a, b) => (a.pts < b.pts) ? 1 : -1)

    userList
}
