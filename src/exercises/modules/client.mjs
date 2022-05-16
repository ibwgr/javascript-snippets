//'use strict';

//import {Person,name,vorname} from "../modules/admin/person";
//import  {Mensch} from "./mensch.js"
import  {Mensch} from "./mensch.mjs"
//import {person} from "./person";
//import {Person} from "./person.js";


//only pro-edition suport quokka ....
/*
"C:\Program Files\nodejs\node.exe" "D:\IBW\Java Intellij 2021\Intellij-Projekte 2021\JavaScriptSnippet24042022\src\exercises\modules\client.mjs"
node:internal/errors:464
    ErrorCaptureStackTrace(err);


 */


console.log(Mensch.zeitBisGeburt());

let mensch33 = new Mensch("22","d");
console.log(mensch33.vollerName + " achsooo");
console.log("heeelllooo");
console.log(mensch33.vorname);

let mensch44 = new Mensch("","ss");
console.log(mensch44.vollerName+"haölllloooo")

// console.log("Hallo");
//
//  let p1 = new Person('Meier', 'Hans');
//  console.log(p1.vorname);
//
//  console.log(p1.name)
//
//  let store1 = new Store();

//export Person p2 = new Person("Muster","Doris");


// Objekterzeugung über die Objekt-literal-Schreibweise
const person33 = {
    firstname: "hsnii",
    lastname: "Mustermann",
    talk: function (){
        console.log("hallo");
    }
}

console.log(person33.firstname);
//console.log(person33[lastname]);//gemäss buch, bibt aber Fehler raus
console.log(person33["lastname"]);
console.log(person33.talk());