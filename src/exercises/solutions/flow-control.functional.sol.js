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


// 6
const numbers = [1, 34, 78, 4.2, -9]

// 6.1
console.log(numbers.filter(n => n %1 === 0))

// 6.2
console.log(numbers.filter(n => n > 0))


// 6.3
{
  console.log(numbers
    .filter(n => n %1===0)
    .map(Math.abs)
    .map(String)
    .flatMap(s => s.split(''))
    .map(Number)
    .reduce((sum, n) => sum + n, 0)
  )
}

// 6.4
{
  const schnitt = numbers.reduce((sum, n) => sum + n, 0) / numbers.length
}


// 7
const randomString = "4bcd3fg8ijkl  mnoPqRs tuvW"

// 7.1
{
    const result = randomString
    .split('')
    .map((s, i) => (i % 2 === 1) ? s.toUpperCase() : s)
    .join('')
    result
}

// 7.2
// ...

// 7.3
{
    console.log(randomString.split('').reverse().join(''))
}

// 7.4
{
    console.log(randomString.split(' ').reverse().join(' '))
}