
/*
# Funktional vs Imperativ

## Summe
Schreibe eine Funktion `sum(in: Array<Number>): Number`, welche alle Zahlen von `in` summiert und das Ergebnis retourniert. \
Schreibe eine funktionale und eine imperative Variante.
 */
function summierenimperative(numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}
console.log(summierenimperative([1,2,3,4,5]));

function summierenfunctional(numbers) {
    return numbers.reduce((a,b)=>(a+b));
}
console.log(summierenfunctional([1,2,3,4,5]));

/*
    ## Gerade Zahlen
Schreibe eine Funktion `even(in: Array[Number]): Array<Number>`, welche nur die geraden Zahlen aus `in` retourniert. \
Schreibe eine funktionale und eine imperative Variante.
*/
const evenImperative = function(numbers) {
    const even = [];
    for (const number of numbers) {
        if(number%2==0) {
            even.push(number);
        }
    }
    return even;
}
console.log(evenImperative([1,2,3.4,5,6,7,8,9,10,11,12]));
const evenFunctional = function(numbers) {
    return numbers.filter(number=>number%2==0);
}
console.log(evenFunctional([1,2,3,4,5,6,7,8,9]));
