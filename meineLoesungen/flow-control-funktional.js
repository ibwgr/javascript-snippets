// Soll die Quersumme 13 ergeben
const a = [1,34,5, 0, -4]
// let b = a.reduce((a,sum) => sum + a)
// console.log(b) // 40 => Falsch


// https://bobbyhadz.com/blog/javascript-split-number-into-array
let b = a.reduce((sum,a) => {
    if(a > 0 && a < 10){
        return sum + a
    }
    if(a >= 10){
        let digits = Array.from(String(a), Number)
        return sum + digits.reduce((d,s) => d+s)
    }
    return sum
})
console.log(b)

// Funktional:
function quersumme(arrayOfDigits){
    console.log(arrayOfDigits)
    return arrayOfDigits.reduce((sum, n)=>{
        if(n > 0 && n < 10){
            return sum + n
        }
        if(n >= 10){
            return sum + Array.from(String(n), Number).reduce((s,d) => d+s)
        }
        return sum
    })
}
console.log(quersumme(a))

