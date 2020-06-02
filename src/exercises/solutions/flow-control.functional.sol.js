// flow control

/////////////////////////// Schleifen / Loops

// 0
const word = "Pinguin"
const csv = Array.from(word).join(',')
console.log(csv)


// 1
const arr = [1, 2, 3]
const sum = arr.reduce((sum, n) => sum + n, 0)
console.log(sum)


// 2
let result = arr.map(n => n % 2 === 0);
console.log(result)


// 3
const phrase = "Ich weiss, dass ich nichts weiss ... !"
const words = phrase.split(' ');
const capitalizedPhrase = words.map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
console.log(capitalizedPhrase)


// 4
// Diese Berechnung lässt sich Imperativ gut lösen (Gute Performance, gut lesbar).


// 5
const plainText = "abcz"
const shift = 1
let cipherText = Array.from(plainText)
  .map((char, charIdx) => plainText.charCodeAt(charIdx))
  .map(charCode => String.fromCharCode(charCode + shift))
  .join('')
console.log(cipherText)
