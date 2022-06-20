"use strict"

/*  1. Schreibe eine Funktion sum(in: Array<Number>): Number, welche alle Zahlen von in summiert und das Ergebnis retourniert.
Schreibe eine funktionale und eine imperative Variante.
 */

let arrNumbers = [20, 30, 40, 50]

//Funktional
console.log(arrNumbers.reduce((sum, numb) => {
    sum += numb
    return sum
}))

// Imperativ
function summiere (arr){
    let sum = 0;

    for (const number of arr) {
        sum += number
    }
    return sum
}
let sum = summiere(arrNumbers)
console.log(sum)



/* 2. Schreibe eine Funktion even(in: Array[Number]): Array<Number>, welche nur die geraden Zahlen aus in retourniert.
Schreibe eine funktionale und eine imperative Variante.

 */
//Funktional
let numbers = [3, 10, 45, 90, 32]

let even = numbers.filter((number) => {
    return number % 2 === 0
})
console.log(even)


//Imperativ
function filterEvenNumbers (arr){
    let evenNumbers = []

    for (const number of arr) {
        number % 2 === 0? evenNumbers.push(number): evenNumbers
    }
    return evenNumbers
}

let evenNumbers = filterEvenNumbers(numbers)
console.log(evenNumbers)

