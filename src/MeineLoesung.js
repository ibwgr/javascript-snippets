/*

### 2
Schreibe ein Programm, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
Das Programm ermittelt für jede Zahl ob diese gerade ist oder nicht.

z.B. aus `[1,2,3]` wird `[false, true, false]`
 */

let arr = [1,2,3,4]
let arr2 = []

for(let i = 0; i<arr.length;i++){
    if(arr[i]%2==0){
        arr2.push(true)
    }
    else{
        arr2.push(false)
    }
}

console.log(arr2)



