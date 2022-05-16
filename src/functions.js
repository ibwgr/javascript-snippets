'use strict'
// Functions in JavaScript
let a = 1, b = 2

// function declaration
function sum(a, b){
    return a + b
}
sum(1, 2)


// function expression
let multiply = function dkd(a, b){
    return a * b
}
multiply(a, b)
// dkd(a, b) geht nicht




// rest parameter
function sum(...b){
    // b ist ein array
    // ...
}
sum(1, 2, 3, 4, 5)

// Rest-parameter aus Buch
function addAllNew(...numbers){
    let result = 0;
    for(let i=0;i<numbers.length;i++){
        result += numbers[i];
    }
    return result;
}

//rest operator
// Define a destructuring array with two regular variables and one rest variable:
const [firstName, lastName, ...otherInfo] = [
    "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"
];
// Invoke the otherInfo variable:
console.log(otherInfo);
// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"]





// spread operator
multiply(...[1, 2])
// multiply wird gleich aufgerufen wie in: multiply(1, 2)


// spread operator
const numbers = [1, 3, 5, 7];
function addNumbers(a, b, c, d) {
    return a + b + c + d;
}
console.log(addNumbers(...numbers));



// The invocation above will return:
16




// optionale parameter
function sayHello(to = 'World'){
    console.log(`Hello ${to}`)
}



// objects and functions / methods
const user = {
    name: 'Tim',
    sayHi: function() {
        // this == user
        return `Hi there, my name is ${this.name}`;
    }
}
console.log(user.sayHi())



// scopes
let x = 1 // definiert die variable x im aktuellen scope (globaler scope)
let y = 2
function meineFn(){
    let y = 20 // shadow global y
    // this.x => sucht die variable x nur im this objekt
    // x sucht die variable x im lokalen scope und im äusseren globalen scope
    console.log(this, this.x, x)
}
meineFn() // undefined undefined 1
new meineFn() // {} undefined 1
let obj = { scope: meineFn, x: 2 }
obj.scope() // Object 2 1






// context ändern
function log(it){
    console.log(this, it)
}
log.call(1, 'hi')
log.apply(1, ['hi'])
let scopeWith1 = log.bind(1)
scopeWith1('hi')



//arrow function aus Buch
let add = (x) => { return x +x };       //this-binding

// arrow functions
let summ = (a, b) => a + b
let decoratedSumm = (a, b) => {
    log(a, b)
    return summ(a, b)
}
decoratedSumm(1,2)





// hoisting
function hoistingDemo(){
    console.log(a, b, f(), inner()) // undefined
    var a = 1
    let b = 2
    function inner(){}
    var f = inner
}
// wird interpretiert/ausgeführt als
function hoistingDemo(){
    function inner(){}
    var a
    var f
    console.log(a, b, f(), inner())
    // fehler1: b nicht definiert
    // fehler2: f ist keine funktion
    a = 1
    let b = 2
    f = inner
}



//function mit nur zahlen als Typ
function add(number1,number2){
    if( (typeof  number1 !== 'number') || (typeof number2 !== 'number') ){
        throw new TypeError('Parameter müssen Zahlen sein');
    }
    return number1 + number2;
}



//while
let i = 10;
while (i>0) {
    console.log(i);
    i--;
}

//do-while
let i = 10;
do {
    console.log(i);
    i--;
} while (i>0);




