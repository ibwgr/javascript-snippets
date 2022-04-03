/*
# Objects

## 1
Definiere eine Liste von mehreren User Objekten.
Jeder User hat einen Namen und eine Punktezahl.
 */

//
// const user1 = { name: 'ueli', score: 2 }
//
// const user2 = {
//     name: 'cla',
//     score: 1
// }
//
// const userList = {
//     user1,
//     user2
// }


//------------------------------------------------------------------------------------------
//## 2
// Finde den User mit der höchsten Punktezahl

// let hoechsteZahl = 0
// let highestScore = 0
// let winner = null
// for (const user of userList){//TypeError: userList is not iterable
//     if(highestScore<user1.score){
//    highestScore = user.score
//  winner = user
// }
// }
// console.log(winner)  //{ name: 'ueli', score:2 }

// let winner = null //darf nicht 0 sein
// for (const user of userList) {
//     if (winner === null || winner.score < user1.score) { //wenn es einen schon gibt, dann der erste, sonst durchgehen
//         winner = user//TypeError: userList is not iterable
//     }
// }
// console.log(winner) //{ name: 'ueli', score:2 }

//------------------------------------------------------------------------------------------
/*
## 3
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
//
// let user1 = { name: 'ueli', score: 2  }
//
// let user2 = {
//     name: 'cla',
//     score: 1
// }
//
// // let userList = [{
// //     user1,
// //     user2
// // }]
// const userList = [
//     user1,
//     user2
// ]
// console.log("userList-Länge: "+userList.length)
// console.log(user2.name)
//
//
// let str = '|Name|Punkte|';
// str +=  '\n|----|------|\n';
//
//  for(let i = 0;i<userList.length;i++){
//      str = str + '|' + userList[i].name + '|' + userList[i].score +'|\n'
//  }
//
// console.log(str)

//---------------------------------------------------------------------------------------
/*
## 4
Finde die Länge des längsten Namen, sowie die Länge der höchsten Punktezahl.
*/

let user1 = {
    name: 'Hans',
    score: 2
}
let user2 = {
    name: 'enoiönöionöin',
    score: 45
}

let userList=[user1,user2]

let grössteZahlScore = 0;
let hilfszahlScore = 0;
for(let i = 0; i<userList.length;i++){
    hilfszahlScore = userList[i].score;
    console.log("Zwischenergebniss: "+hilfszahlScore)
    if(hilfszahlScore>grössteZahlScore){
        grössteZahlScore+=hilfszahlScore;
    }
}

console.log("grösster Score-Punkte: "+grössteZahlScore)

let grössteZahlName = 0;
let hilfszahlName = 0;
for(let i = 0; i<userList.length;i++){
    hilfszahlName = userList[i].name.length;
    console.log("Zwischenergebniss: "+hilfszahlName)
    if(hilfszahlName>grössteZahlName){
        grössteZahlName=hilfszahlName;
    }
}

console.log("grösste Länge-Name: "+grössteZahlName)


//--------------------------------------------------------------
/*
    ## 5
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