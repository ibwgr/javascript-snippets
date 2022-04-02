// fibonacci, imperativ

// Berechne die Fibonacci Folge für n Elemente, beginnend bei 0.
// Gib alle berechneten Elemente aus.

function fibonacci(n) {
    let f = [0,1]
    for (let i = 1; i < n ; i++) {
        f.push(f[i] + f[i-1])
    }
    return f
}
console.log(fibonacci(50))