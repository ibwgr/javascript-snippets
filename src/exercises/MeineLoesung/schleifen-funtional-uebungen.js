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
let charCode = char.map((char,  index) => {
   return normalText.charCodeAt(index) + shift
})
console.log(charCode)

let caesarText = charCode.map((charCode) => {
    return String.fromCharCode(charCode).toUpperCase()
}).toString()


console.log(caesarText)

