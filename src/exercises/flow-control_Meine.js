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
// let alter = 10
// let name = 'hans'
//
//  x = (alter >= 101) ? 'Grüess Gott '+name :  (alter >= 19) ? 'Grüezi '+name : (alter >= 11) ? 'Hallo '+name : 'Hoi '+name//(alter < 11) ? 'Hallo '+name : 'nicht geboren'
//
// console.log(x)
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
// let alter = 60
//
// if(alter<5){
//  console.log("Gratis Eintritt")
// }else if (alter >=5 && alter <=15){
//  console.log("Eintritt ist 5 Franken")
// }else if(alter >= 16 && alter <60){
//  console.log("Eintritt ist 15.-")
// }else if(alter >= 60){
//  console.log("10 Franken für Senioren")
// }




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
//-----------------------------------------------------------------------------------

// let alter = 20
// let geschlecht = 'f'

// switch (alter, geschlecht){
//  case alter>=18 && geschlecht='f':
//   console.log("die Frau darf rein")
//         break;
//  case alter>=20 && geschlecht='m':
//   console.log("Männer über 20 dürfen rein")
// }

// Logische Verknüpfungen
// && AND
{
    let age = 18
    let sex = 'f'
    let canEnter = (age >= 18 && sex === 'f') || (age >= 20 && sex === 'm')
    //true

    switch (canEnter) {
        case true:
            console.log("Eintritt ist gut")
            break;
        case false:
            console.log("geht nicht")
    }
}
// var alter = 22
// var geschlecht = 'm'
// switch (alter, geschlecht) {
//  case ((alter>=20 && geschlecht==='m') ):
//   console.log('Männlich ab 20 darf in den Club');
//   break;
//  case ((alter>=18 && geschlecht==='f')):
//   console.log("Frauen ab 18Jahren dürfen in den Club")
//         break;
//   default:
//    console.log('Darf nicht in Cub');
//   //break;
// }


//-------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
/*
### 0
Schreibe ein Programm, welches jedes Zeichen eines Strings einzeln ausgibt, Komma getrennt.
z.B. aus `"Pinguin"` wird `"P,i,n,g,u,i,n"`

Schreibe zwei Varianten:
- eine ohne Schlaufen zu verwenden
- eine mit einer Schlaufe
*/
// let x = 'Pinguin';
// console.log(x.split(''));
// //Array(7) [ "P", "i", "n", "g", "u", "i", "n" ]

// //
// const x = 'Pinguin';
// let str = '';
// for (let i = 0; i < x.length - 1; i++) {
//
//  str = str + x[i] + ',';
//
//  //console.log(str);
// }
// str = str + x.substr(-1); //oder str = str+x.substr(x.length-1);
// console.log(str);
// //P,i,n,g,u,i,n



//------------------------------------------------------------------------------------
/*
### 1
Schreibe ein Programm, das alle Zahlen eines Arrays summiert.

z.B. aus `[1,2,3]` wird `6`

Versuche drei Varianten zu schreiben, welche jeweils unterschiedliche Schlaufentypen verwenden.
*/

// let x = [1, 2, 3];
// let y = 0;
//
// for (let i = 0; i < x.length; i++) {
//  y = y + x[i];
// }
//
// console.log(y);
// //6


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
//---------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
/*
### 3
Schreibe ein Programm, welches jeden ersten Buchstaben aller Wörter eines Strings in einen Grossbuchstaben umwandelt.

z.B. aus `"Ich weiss, dass ich nichts weiss ... !"` wird `"Ich Weiss, Dass Ich Nichts Weiss ... !"`
*/

/*
let str = 'Ich weiss, dass ich nichts weiss ... !';

let strsplit = str.split(" ");

console.log(strsplit);

for(let i = 0; i<str.length;i++){

}
*/
// let str = 'Ich weiss, dass ich nichts weiss ... !';
//
// let str2 = str[0];
//
// for (let i = 1; i < str.length; i++) {
//  if (str[i - 1] === ' ') {
//   str2 = str2 + str[i].toUpperCase();
//  } else {
//   str2 = str2 + str[i];
//  }
// }
//
// console.log(str2);
// //Ich Weiss, Dass Ich Nichts Weiss ... !

//----------------------------------------------------------------------------------------------------
/*
### 4
Schreibe ein Programm, das alle Primzahlen zwischen 0 und 100 ausgibt.
//Primzahlen sind nur durch 1 und durch sich selbst teilbar!
Versuche 2 Varianten zu schreiben, mit jeweils anderen Schlaufentypen.
*/
// let arr = [];
// arr.length = 100;
// //array füllen mit Zahlen
// for (let i = 0; i <= 100; i++) {
//  arr[i] = i;
//  console.log(arr[i]);
// }
//
// for (let j = 0; y < arr.length; j++) {
//  if ((arr[j] / j = 1) || (arr[j] / 1 = 1))
//      } //nicht fertig!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//----------------------------------------------------------------------------------------
/*
### 5
Schreibe ein Program, das einen beliebigen Text mit Cäsar Chiffre verschlüsselt.

z.B. aus `"abcz"` wird `"bcd{"`, sofern die Verschiebung 1 ist.

 */




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


//------------------------------------------------------------------------------------
// /*
// #### 7.3
// Gib die Zeichenkette rückwärts aus. \
// z.B. aus "Hallo du" wird "ud ollaH".
// */
// const x = 'Pinguin';
// let str = '';
// for (let i = x.length - 1; i >= 0; i--) {
//
//  str = str + x[i];
//
//  //console.log(str);
// }
//
// console.log(str);
// //niugniP

//----------------------------------------------------------------------------------
/*
#### 7.4
Gib die Wörter der Zeichenkette rückwärts aus. \
z.B. aus "Hallo du, wie geht es dir?" wird "dir? es geht wie du, Hallo"
*/
// const x = 'Hallo du, wie geht es dir?';
// let str = '';
// let y = x.split(' ');
//
// console.log(y);
//
// str = str + y[y.length - 1] + ' ';
// for (let i = y.length - 2; i >= 1; i--) {
//
//  str = str + y[i] + ' ';
//
//  //console.log(str);
// }
//
// str = str + y[0];
//
// console.log(str);

//Array(6) [ "Hallo", "du,", "wie", "geht", "es", "dir?" ]
//dir? es geht wie du, Hallo
