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

let arr1 = [0,1]

let arr2 = arr1
for(let i = 1; i<11;i++){
    arr2.push(arr1[i]+arr1[i-1])
}
console.log(arr2)
/*
[
   0,  1,  1,  2,  3,
   5,  8, 13, 21, 34,
  55, 89
]
 */