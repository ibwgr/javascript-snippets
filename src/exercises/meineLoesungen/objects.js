/*
Objects
Aufgabe 1
Definiere eine Liste von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl.
*/
const users = [];
users.push({name: 'urs', score: 5});
users.push({name: 'marco', score: 6});
users.push({name: 'claudia', score: 40});
users.push({name: 'mitja', score: 2});
users.push({name: 'cla', score: 13});
users.push({name: 'ueli', score: 5});

console.log(users)

/*
Objects
Aufgabe 2
Finde den User mit der höchsten Punktezahl
*/
let winner = null
for(let user of users) {
    if(winner===null || user.score>winner.score)
        winner = user
}
console.log(winner)

/*
Objects
Aufgabe 3

Gib eine Liste der User aus, im ASCII Format. \
Das heisst verwende nur einfache Zeichen, um die Liste zu erstellen.
z.B:
```
|Name|Punkte|
|----|------|
|Hans|8|
|Martin|12|
```
*/
function listeAscii3(users) {
    let result = '|Name|Punkte|\n'
    result += '|----|------|\n'
    for (const user of users) {
        result += '|' + user.name + '|' + user.score +'|\n'
    }
    return result
}
console.log(listeAscii3(users))


/*
Objects
Aufgabe 4

Finde die Länge des längsten Namen, sowie die Länge der höchsten Punktezahl.
*/
function maxLengthData(users)  {
    let maxLengthName = null;
    let maxLengthScore = null;
    for (const user of users) {
        if(maxLengthName==null || maxLengthName<user.name.length) {
            maxLengthName = user.name.length
        }
        if(maxLengthScore==null || maxLengthScore<user.score.toString().length) {
            maxLengthScore = user.score.toString().length
        }
    }
    return {name: maxLengthName, score: maxLengthScore}
}
console.log(maxLengthData(users))


/*
Objects
Aufgabe 5

Mache jede Spalte so breit, wie die entsprechende maximale Länge dessen Inhalt. \
_Achtung_: Der Spaltentitel muss ebenfalls berücksichtigt werden.

Hinweis: Suche auf MDN nach padEnd und repeat

z.B:
```
|Name  |Punkte|
|------|------|
|Hans  |8     |
|Martin|12    |
```
*/

let maxLengthName = maxLengthData(users).name
let maxLengthScore = maxLengthData(users).score

/**
 * Berechnet wie viele Stellen ausgefüllt werden müssen
 * anhang der Spaltenbreite max und des aktuellen textlänge actual der zeile
 * @param actual    textlänge des spalteneintrags der zeile
 * @param max       maximal stellen der spalte
 * @returns {number}    anzahl stellen, welche aufgefüllt werden müssen
 */
function spacer(actual, max) {
    if(max>=actual) {
        return max-actual
    }
    return 0;
}

/**
 * Stellt eine "Füllerstring" her mit den Anzahl Zeichen count
 * bestehende aus zeichen des typ letter
 * @param count     gewünschte Länge des "Füllerstrings"
 * @param letter    Zeichen welches genutzt werden soll
 * @returns {string}    Füllerstring
 */
function filler(count, letter) {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += letter
    }
    return result
}
function table(users) {
    let spalte1 = 'Namen';
    let spalte2 = 'Punkte';
    (maxLengthName<spalte1.length) ? maxLengthName = spalte1.length : true;
    (maxLengthScore<spalte2.length) ? maxLengthScore = spalte2.length : true;

    let result = '|' + spalte1 + filler(spacer(spalte1.length, maxLengthName), ' ') +'|' + spalte2 + filler(spacer(spalte2.length, maxLengthScore), ' ') + '|\n'
    result += '|' + filler(spacer(0, maxLengthName), '-') +'|' + filler(spacer(0, maxLengthScore), '-') +'|\n'
    for (const user of users) {
        result += '|' + user.name + filler(spacer(user.name.length, maxLengthName), ' ')
        result += '|' + user.score + filler(spacer(user.score.toString().length, maxLengthScore), ' ') + '|\n'
    }
    return result
}
console.log(table(users))