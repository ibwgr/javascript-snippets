'use strict'        //seit ECMASript 5
// macht fehler, wenn variable ohne let, oder var angelegt ist
/*
Strict- mode ( nicht sloopy-mode schlampiger Modus)
'use strict';                          als erste anweisung                          seit ECMAScript 5       nicht jeder Browser…  oder "use strict";
+ code kann schneller ausgeführt werden
+ wandelt einige zuvor still akzeptierte Versehen in ausdrückliche Fehler um.
   behandelt diese Versehen als Fehler, so dass sie entdeckt und unverzüglich behoben werden können.
   (zb. versehentlich eine globale Variable zu erstellen)
+ verhindert syntaxfehler, zb               function sum(a, a, c) { // !!! Syntaxfehler weil 2x a…
 */



// singleton
let validator = {
    valid: true,
    validate: function(input){
        this.valid = input.indexOf('test') !== -1
        return this.valid
    }
}
let r = validator.validate('buddha')
validator


// Konstruktor Funktion
function Auto(brand){
    this.distance = 0
    this.brand = brand

    // erstelle für jedes auto ein neues funktionsobjekt
    // => memory leak
    this.drive = function(distance){
        console.log('drive instance', distance)
       this.distance += distance
    }
}

// Besser: erstelle die drive Funktion einmal im Prototyp Objekt,
// alle Instanzen von Auto verwenden dann diese Funktion
// Auto.prototype.drive = function(distance){
//     console.log('drive prototype', distance)
//     this.distance += distance;
// }

let a1 = new Auto('Ford')
let a2 = new Auto('Tesla')
a1.drive(10)
a2.drive(340)


// Auto.prototype.drive = function(distance){
//     console.log('drive prototype overwrite', distance)
// }

let a3 = new Auto('Tesla')
a3.drive(10)
a1.drive(10)

// Die Eigenschaft __proto__ zeigt auf das Prototyp-Objekt.
// Falls es keine prototype Definition gibt (Ctor.prototype.xy = ...),
// dann zeigt es direkt auf eine Instanz von Object (Default Prototype eines Objektes)
console.log(a3.__proto__)

// Erstelle Objekt ohne Prototype
// => Sicherstellen, dass Lookup (z.B. einer Eigenschaft oder Methode) delegiert wird.
//    Nützlich wenn man ein Objekt erstellen will, welches z.B. als Hash-Map dient.
let empty = Object.create(null)
console.log(empty.__proto__)
