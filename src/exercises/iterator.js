// 1
// Implementiere einen Array Iterator, der einen Array rückwärts interiert.
// Versuche zwei Varianten zu finden.

let arr1 = [1,2,3,4,5]
let arr2 = []

function rueckwaertsArray(arr){
    for(let i = arr.length; i>=0;i--){
        arr2.push(arr1[i])
    }
    return arr2;
}
console.log(rueckwaertsArray(arr1))
//    [ undefined, 5, 4, 3, 2, 1 ]


// 2 
// Schreibe eine Funktion forFun, welche
// - ein Objekt welches Symbol.iterator implementiert
// - und eine callback Funktion
// entgegen nimmt.
// Iteriere über das iterable Objekt und rufe den Callback für jeden Wert auf, 
// solange bis alle Elemente iteriert sind.
