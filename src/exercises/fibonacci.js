// fibonacci, imperativ

// Berechne die Fibonacci Folge für n Elemente, beginnend bei 0.
// Gib alle berechneten Elemente aus.
function fibonacci (anzahlElemente){
    let fibonacciArr = [0, 1]

    for (let i = 2; fibonacciArr.length < anzahlElemente; i++) {
        console.log(i)
        fibonacciArr.push(fibonacciArr[i-2] + fibonacciArr[i-1])
    }
    return fibonacciArr
}

let result = fibonacci(10)
console.log(result)


