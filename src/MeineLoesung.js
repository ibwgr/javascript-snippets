/*
### 1
Schreibe ein Programm, welches eine Person altersgerecht begrüsst.
Die Begrüssung soll auf der Console ausgegeben werden.

- Kinder, d.h. bis und mit 10 Jahren: Hoi <name>
- Jugendliche, d.h. ab 11 Jahren bis und mit 18 Jahren: Hallo <name>
- Erwachsene, d.h. ab 19 Jahren bis und mit 100 Jahren: Grüezi <name>
- Alle anderen, d.h. ab 101 Jahren: Grüss Gott <name>

Schreibe zwei Varianten,
- eine Variante mit "else if",
- eine Variante ohne Verwendung von "else if"

Tip: &&
 */
// let alter = 10
// let name = 'hans'
// if(alter<=10){
//     console.log("Hoi "+name)
// }else if(alter>=11 && alter<=18){
//     console.log("Hallo "+name)
// }else if(alter>=19 && alter<=100){
//     console.log("Grüezi "+name)
// }else if(alter>=101){
//     console.log("Grüss Gott "+name)
// }
//-----------------------------------------------------------------------------------
let alter = 10
let name = 'hans'

 x = (alter >= 101) ? 'Grüess Gott '+name :  (alter >= 19) ? 'Grüezi '+name : (alter >= 11) ? 'Hallo '+name : 'Hoi '+name//(alter < 11) ? 'Hallo '+name : 'nicht geboren'

console.log(x)
//----------------------------------------------------------------------------
/*
### 2
Schreibe ein Programm, welches den Eintrittspreis abhängig vom Alter bestimmt.
Es gelten folgende Regeln:
- Wer jünger als 5 ist, bekommt Gratiseintritt
- Ab 5 bis 15 Jahren zahlt man 5 Franken
- Ab 16 zahlt man denn Vollpreis von 15 Franken
- Senioren ab 60 bezahlen 10 Franken

Gib den Betrag in Franken auf die Console aus.

Schreibe zwei Varianten,
- eine Variante mit "else if",
- eine Variante ohne Verwendung von "else if"

Tip: &&
 */





//----------------------------------------------------------------------------------------------------
/*### 3
Schreibe ein Programm, welches entscheidet, wer in den Club darf und wer nicht
- Männer dürfen ab 20 rein, Frauen bereits ab 18.
Gib die Entscheidung auf der Console aus.

Schreibe zwei Varianten,
- eine Variante mit switch case
- eine Variante mit && und || (ohne ganz ausgeschriebene if)
*/
// let ausgabe = ''
// function tuerSteher(alter, geschlecht){
//     if((alter>=20&&geschlecht=='m')||(alter>=18&&geschlecht=='f')){
//         ausgabe='Dürfen rein'
//     }else{
//         ausgabe = 'Dürfen nicht rein'
//     }
// }
//
// tuerSteher(17,'f')
// console.log(ausgabe)
//-------------------------------------------------------------------------------------------
/*
### 0
Schreibe ein Programm, welches jedes Zeichen eines Strings einzeln ausgibt, Komma getrennt.
z.B. aus `"Pinguin"` wird `"P,i,n,g,u,i,n"`

Schreibe zwei Varianten:
- eine ohne Schlaufen zu verwenden
- eine mit einer Schlaufe
 */

//let str = 'Pinguin';







//------------------------------------------------------------------------------------
/*
### 2
Schreibe ein Programm, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
Das Programm ermittelt für jede Zahl ob diese gerade ist oder nicht.

z.B. aus `[1,2,3]` wird `[false, true, false]`
 */

// let arr = [1,2,3,4]
// let arr2 = []
//
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr2.push(true)
//     }
//     else{
//         arr2.push(false)
//     }
// }
//
// console.log(arr2)


//-----------------------------------------------------------------------------------------
/*
#### 6.1
Gegegeben ist eine beliebige Menge von Zahlen.
Gebe nur die Ganzzahlen aus.
 */


// let arr1 = [0,1.3,5,6.7879,10,-2.3]
// //let arr2 = ''
// let arr2 = []
// //arr2 = arr1.length
// //console.log(arr1)
//
// // for(let i = 0; i<arr1;i++){
// //     //arr2 = arr2.push(Math.floor(arr1[i]))
// //     //arr2[i] = Math.floor(arr1[i])
// //     //arr2.push(Math.floor(arr1[i]))
// //     //arr2.push(arr[i])
// //     //arr2[i] = arr1[i]
// //     console.log(arr1[i])
// // }
//
// //console.log("arr2: "+arr2)
//
// for (let i in arr1) {
//     console.log(i); // logs "0", "1", "2", "foo"
// }
//
// var myStringArray = [0,1.3,5,6.7879,10,-2.3];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(Math.floor(myStringArray[i]));
//     //Do something
// }
//---------------------------------------------------------------------------------------
/*
#### 6.2
Gebe nur die positiven Zahlen aus.
nicht negative
 */
//
// let arr1 = [0,-1,2,3.5,16.445,4500,-66]
// for(let i = 0; i<arr1.length;i++){
//     if(arr1[i]>=0){
//         console.log(arr1[i])
//     }
// }
//------------------------------------------------------------------------------------------
/*#### 6.3
Berechne die Quersumme aller Zahlen.
 */

// let arr1 = [1,2,3,4,5]
//
// let x = 0;
// for (let i = 0; i<arr1.length;i++){
//     x = x + arr1[i]
// }
// console.log("x: "+x)
//
// //quersumme
// let sum = 0;
// let rest = x;
// while (rest > 0) {
//     let einer = rest % 10;
//     sum = sum + einer;
//     rest = (rest - einer)/10;
// }
//
// console.log(sum)

//---------------------------------------------------------------------------------------------
/*
#### 6.4
Berechne den Durchschnitt (arithmetisches Mittel) aller Zahlen.
 */
//
// let arr1 = [1,2,3,4,5]
// let summerArr = 0;
// for (let i = 0; i<arr1.length;i++){
//     summerArr = summerArr + arr1[i]
// }
// console.log("summerArr : "+summerArr)
//
// let x = arr1.length
// let ausgabe = summerArr/x
//
// console.log("ausgabe: "+ausgabe)

//-------------------------------------------------------------------------------------------
//fibonacci
//Eine unendliche Zahlenreihe, die mit 0 und 1 beginnt. Jede weitere Zahl entspricht dabei der Summe der beiden vorangegangenen Zahlen. Damit lautet der Anfang der Zahlenreihe 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 usw.

// let arr1 = [0,1]
//
// let arr2 = arr1
// for(let i = 1; i<11;i++){
//     arr2.push(arr1[i]+arr1[i-1])
// }
// console.log(arr2)
// /*
// [
//    0,  1,  1,  2,  3,
//    5,  8, 13, 21, 34,
//   55, 89
// ]
//  */

//-------------------------------------------------------------------------------------

/*
Gegeben ist eine beliebige Zeichenkette.
#### 7.2
Ersetze alle Konsonanten durch die entsprechenden Selbstlaute. \
Zum Beispiel aus einem "p" wird "pe", aus "c" wird "ce", aus "k" wird "ka" etc.
 */
// let strNormal = 'Gegeben ist eine beliebige Zeichenkette'
// let arr1 = ['be','ce','de','äf','ge','ha','jot','äl','äm','an','pe','qu','är','äs','te','vau','we','ix','ypsilo','zät']
// let arr2 = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
// let arr3 = ['a','e','i','o','u']
// let str2 = '';
// console.log(arr1)
// console.log(strNormal)
//
// let strKlein = strNormal.toLowerCase();
// console.log("str3: "+strKlein)
//
// for(let i = 0; i<strKlein.length;i++){
//     for(let j = 0; j<arr2.length; j++){
//         if(strKlein[i]===arr2[j]){
//             str2 = str2+arr2[j]
//         }
//         else{
//
//         }
//     }
//
// //noch nicht fertig.....................
//
// }
// console.log("str2: "+str2)