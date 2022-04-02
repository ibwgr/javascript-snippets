//Schleifen / Loops
//Aufgabe 0
string = "Pinguin"
console.log(string[0] + ", ", string[1] + ", ", string[2] + ", ", string[3] + ", ", string[4] + ", ", string[5] + ", ", string[6])

let stringKomma = ""

for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
        stringKomma += string[i] + ""
    } else {
        stringKomma += string[i] + ", "
    }
}
console.log(stringKomma)

// Aufgabe 1
//Variante 1
let sum = 0
let prices = [1, 2, 3]

for (const price of prices) {
    sum += price
    console.log(sum)
}
console.log(" Total sum of = " + sum)

//Variante 2
let sum1 = 0
for (let i = 0; i < prices.length; i++) {
    sum1 += prices[i]
    console.log(sum1)
}
console.log(" Total sum of = " + sum1)

//Variante 3
let sum2 = 0;
let i = 0;

while (i < prices.length){
    sum2 += prices[i]
    i++
    console.log(sum2)
}
console.log(" Total sum of = " + sum2)

//Aufgabe 2
//Variante 1
let numbers = [1,2,3]
let result = [];

for (let number of numbers){
    if(number %2 === 0){
        result.push(true)

    }else{
        result.push(false);
    }
}

// Variante 2 als Funktion
function numberToBoolean(...numbers){
    let result =[]
    for (let number of numbers){
        result.push(number % 2 === 0)
    }
    return result;
}
console.log(result)

//Array Spreaden wieder auspacken
const numberArray = [1,2,3,4]
console.log(numberToBoolean(...numberArray));

//rest parameter einzelne zahlen werden zu einem array zusammengefasst
numberToBoolean(1,2,3,4,5,6);
console.log(numberToBoolean(1,2,3,4,5,6))

//Aufgabe 3
let sentence = "Ich weiss, dass ich nichts weiss ... !"
let capitalSentence = ""

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]
    if (i === 0){
        char = char.toUpperCase()
        console.log(char)
    }
    if (char === " "){
        capitalSentence += " " + sentence[++i].toUpperCase()
        console.log(capitalSentence)
    }else {
        capitalSentence += char
    }
}
console.log(capitalSentence)

//Aufgabe 4
//
/*Eine Primzahl ist eine Zahl, die nur durch sich selbst und durch 1 ohne Rest teilbar ist.
    Eine Primzahl ist immer eine natürliche Zahl.
    Die 0 und die 1 sind jedoch keine Primzahlen.*/

let number = 2;
let isPrime = true

    for (let i = 2; i < number; i++) {
        if (number === 0 || number === 1 ){
            isPrime = false
        }
        if (number % i === 0){
            isPrime = false
        }
        if (number <= 100){
            number++
        }else {
            break
        }

}
if (isPrime)console.log(number)




let n = 0
while (n++ < 100) {
    let isPrime = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) console.log(n)
}

//Aufgabe 5
let normalText = "Claudia Martinez"
let caesarText = ""
let shift = 1

for (let j = 0; j < normalText.length; j++) {
    if (normalText[j] === " "){
        caesarText += " "
    }
    let charCode =  normalText.charCodeAt(j) + shift
    caesarText += String.fromCharCode(charCode).toUpperCase()
    console.log(caesarText)
}
console.log(caesarText)

//Aufgabe 6.1
let mixedNumbers = [1, 5, -10, 6.7, 45]
let integers = []

for (const integer of mixedNumbers) {
    if (integer % 1 === 0){
        integers.push(integer)
    }
}
console.log(integers)

//6.2
let positivNumbers = []

for (const positivNumber of mixedNumbers) {
    if (positivNumber > 0){
        positivNumbers.push(positivNumber)
    }
}
console.log(positivNumbers)

//6.3

/****************************************/
//???? Fehler
let querSumme = 0;
for (let i = 0; i < mixedNumbers.length; i++){
    if (mixedNumbers[i] <= 9){
        querSumme += mixedNumbers[i]
    }
    /*while (mixedNumbers[i]) {
        querSumme += mixedNumbers[i] % 10;
        mixedNumbers[i] = Math.floor(mixedNumbers[i] / 10);
    }*/
}
console.log(querSumme)

//6.4
let zwischenSum = 0;
let durchschnitt = 0;
for (let j = 0; j < mixedNumbers.length; j++) {
    zwischenSum += mixedNumbers[j]

}
durchschnitt = zwischenSum / mixedNumbers.length
console.log(durchschnitt)

//7.1
let zeichenKette = "Ich habe keine Ahnung"
let neueZeichenKette = ""

for (let i = 0; i < zeichenKette.length; i++) {
    if (i % 2 === 0){
        neueZeichenKette += zeichenKette[i].toLowerCase()
    }else {
        neueZeichenKette += zeichenKette[i].toUpperCase()
    }
}
console.log(neueZeichenKette)


// 7.2
let konstanten = ["b","c","d","g","h","k","m","n","p","r","s","t","w"]
let selbstlaute = ["be", "ce", "de", "ge", "ha", "ka", "äm", "än", "pe", "är", "äs", "te", "we"]
let tauschString = ""
for (let i = 0; i < zeichenKette.length; i++) {
    if (konstanten.includes(zeichenKette[i].toLowerCase())){
       let tausch =  konstanten.indexOf(zeichenKette[i].toLowerCase())
        tauschString += selbstlaute[tausch]
    }else{
        tauschString += zeichenKette[i]
    }
}
console.log(tauschString)

// 7.3
//Variante 1
let reverseZeichenKette = ""

for (let i = zeichenKette.length -1; i >= 0 ; i--) {
    reverseZeichenKette += zeichenKette[i]
}
console.log(reverseZeichenKette)

//Variante 2
let stringArr1 = zeichenKette.split('')
let reversed1 = stringArr1.reverse().join('')
console.log(reversed1)


// 7.4

let stringArr2 = zeichenKette.split(' ')
let reversed2 = stringArr2.reverse().join(' ')
console.log(reversed2)