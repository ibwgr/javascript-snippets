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

// spread operator
multiply(...[1, 2])
// multiply wird gleich aufgerufen wie in: multiply(1, 2)

// optionale parameter
function sayHello(to = 'World'){
    console.log(`Hello ${to}`)
}

// arguments
function ohneParams(){
    // Zugriff auf alle Argumente die der Aufrufer angegeben hat.
    // Der Aufrufer kann also mehr oder auch weniger Argumente angeben
    // als die Funktionsdefinition "verlangt".
    console.log(arguments)
}

//**************************************************************************************
// scopes & context
let x = 1 // definiert die variable x im aktuellen scope (globaler scope)
let y = 2
function meinefn(){//scope(){
    let y = 20 // shadow global y
    // this.x => sucht die variable x nur im this objekt
    // x sucht die variable x im lokalen scope und im äusseren globalen scope
    console.log(this, this.x, x)//can not read
    //console.log(this);
    //wen funktion aufgerufen, dann ist tis undefined, im strict-mode
}

//new meineFN(){}//{}undefinded, wie in java, neues objekt, leer, this auch leer

//wie meinefunction()... das hier unten mit scope
scope() // undefined undefined 1 (im strict mode ist es undefinded)
new scope() // {} undefined 1
let obj = { scope: meinefn, x: 2 }//scope, x: 2 }
obj.scope() // Object 2 1

// scope ändern
function log(it){
    console.log(this, it)
}

//prüfungsfrage!!!!!!!!!! wie rechtsklick, damit bind erklärt wird??
log.call(1, 'hi')//erstes argument in klammern, ist der kontext, mit this, andere ist das argument
log.apply(1, ['hi'])//macht gleiche, einfach mit array
let scopeWith1 = log.bind(1)//bindet den kontext auf 1, macht eine kopie, this ist dort vorbereitet aud 1
scopeWith1(/* 'welt',*/'hi')



// function log(it){ //(...it) oder (it , welt)
//     console.log(this, it)
// }
// let scopeWith1 = log.bind(1, 'welt')//bindet den kontext auf 1, macht eine kopie, this ist dort vorbereitet aud 1
// scopeWith1('hi')'

// arrow functions
let summ = (a, b) => a + b
let decoratedSumm = (a, b) => {
    log(a, b)
    return summ(a, b)
}
decoratedSumm(1,2)

// hoisting
function hoisting(){
    console.log(a, b, f(), inner()) // undefined
    var a = 1
    let b = 2
    function inner(){}
    var f = inner
}
// wird interpretiert/ausgeführt als
function hoisting(){
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



//meinFN()//undefinded undefinded 1