"use strict"

// Aufgabe 0 functional

let word = "Pinguin"


let wordWithKomma = Array.from(word).join(",");
console.log(wordWithKomma)

// Aufgabe 1 functional

let prices = [1.50, 9.90, 10.00]
let total = prices.reduce((sum, price) =>{
    return sum += price
}, 0)
console.log(total)

// Aufgabe 2 functional

let numbers = [20, 10, 33, 53, 22]

let boolNumberEven = numbers.map((number) => {
    return number % 2 === 0
})
console.log(boolNumberEven)

// Aufgabe 3 functional

let sentence = "Ich weiss, dass ich nichts weiss ... !"
let words = sentence.split(" ")
console.log(words)
let capitalSentence = words.map((word) => {
    return word[0].toUpperCase().concat(word.slice(1))
})
let convertedSentence = capitalSentence.join(" ")
console.log(convertedSentence)

// Aufgabe 4 functional


// Aufgabe 5 functional

let normalText = "Claudia Martinez"
let char = Array.from(normalText)
let shift = 1

let caesarText = char.map((char,  index) => {
   return normalText.charCodeAt(index) + shift})
    .map((charCode) => {
    return String.fromCharCode(charCode).toUpperCase()})
    .toString()

console.log(caesarText)

// Aufgabe 6.1 functional

let mixedNumbers = [1, 5, -10, 6.7, 45, 30]
let integers = []

 integers = mixedNumbers.filter((number) => number % 1 === 0)

console.log(integers)

//Aufgabe 6.2 functional

let positivNumbers = []

positivNumbers = mixedNumbers.filter((number) => number > 0)
console.log(positivNumbers)

// Aufgabe 6.3 Quersumme functional
// zuerst alle einstelligen filtern
// dann alle mehrstelligen auseinander nehmen (string)
// mehrstellige wieder in Number umwandeln
// beide Arrays vereinen
// dann Quersumme berechnet werden
let numbersArr = [1, 34, 5, ]
let stringNumbers = []
let oneDigit
let quersum = 0;

stringNumbers = numbersArr.map(String)
oneDigit = stringNumbers.map((string) => {
    return string.split("")
})
console.log(oneDigit)
quersum = oneDigit.reduce((sum, val) => sum += val)
console.log(quersum)

// Aufgabe 6.4 Durchschnitt functional

let average = 0;

average = mixedNumbers.reduce((sum, number) => sum += number) / mixedNumbers.length
console.log(average)



// 7.1 functional

let zeichenKette = "Ich habe keine Ahnung"
let zeichenArr = Array.from(zeichenKette)
console.log(zeichenArr)

let neueZeichenKette = zeichenArr.map((zeichen) => {
    return zeichen.split(" ")
})
    .map((zeichen, index) => {
    return index % 2 === 0? zeichen.toString().toUpperCase():zeichen.toString().toLowerCase()
})
    .join(" ")

console.log(neueZeichenKette)



//7.2 functional



//7.3 functional
let reversedWord = zeichenKette.split('').reverse().join('')
console.log(reversedWord)



//7.4 functional
let reversedZeichenKette = zeichenKette.split(" ").reverse().join(" ")
console.log(reversedZeichenKette)






