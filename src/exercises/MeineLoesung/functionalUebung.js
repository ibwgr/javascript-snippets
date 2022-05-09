/*1
Schreibe eine Funktion die alle Zahlen eines Arrays summiert.
z.B. sum([1,2,3]) => 6
Schreibe eine funktionale und eine imperative Variante.
Schreibe die Signatur als Deklaration.

2
Schreibe eine Funktion die einen Array von Zahlen entgegennimmt und einen Array mit Booleans zurückgibt.
Die Funktion ermittelt für jede Zahl ob diese gerade ist oder nicht.
z.B. even([1,2,3]) => [false, true, false] \

Schreibe eine funktionale und imperative Variante.
Schreibe die Signatur als Deklaration.

3.1
Implementiere eine Funktion filter(in: Array<A>, predicate: (value: A) => Boolean): Array<A>.
Teste ob diese funktioniert :).

3.2
Implementiere eine Funktion map(in: Array<A>, mapper: (value: A) => B): Array<B>.
Teste ob diese funktioniert :).

 */

//1

let arr = [0,1, 2, 3, 4, 5]
let stringArr = ["Wasser", "Brot", "wein"]
// Imperative Variante
let sum = 0;
for (const number of arr) {
   sum += number
}
console.log(sum)

//Funtionale Variante
console.log(arr.reduce((sum, val ) => {
    return sum + val
}),0)
//Signatur: reduce(in: Array<Number>, predicate: sum:Number, val:Number : Array<Number>)

//2
// Imperative Variante
let boolArr =[];
for (const number of arr) {
    console.log(number)
    if (number % 2 === 0){
        console.log(number)
        boolArr.push(true)
    }else {
        console.log(number)
        boolArr.push(false)
    }
}
console.log(boolArr)

// Funktionale Variante
console.log(arr.map((val => val % 2 === 0)))
// Signatur map(Array<Number> predicate: val:Number => Boolean): Array<Boolean>

//3.1
// eigene Filter Funktion
 function filter (arr, number)  {
    let foundNumbers = []
    for (const ele of arr) {
        ele === number ? foundNumbers.push(ele): foundNumbers
        }
     return foundNumbers
    }

let result = filter(arr, )
console.log(result)



//3.2
//eigene Map funktion
function mapper (arr){
    let resultMapper = []
    for (const number of arr) {
        number % 2 === 0? resultMapper.push(true): resultMapper.push(false)
    }
    return resultMapper
}

console.log(mapper(arr))





