//If und switch case
"use strict"
//Aufgabe 1
//Variante 1
let name = " Claudia"
let alter = 100;
let hiChild = "Hoi " + name;
let hiTeen = "Hallo" + name;
let grüezi = "Gruezi"+ name;
let alte = "Grüss Gott" + name;

if(alter <= 10 ){
    console.log(hiChild);
}
else if(alter <= 18 ){
    console.log(hiTeen);
}
else if( alter <= 100){
    console.log(grüezi);
}else {
    console.log(alte);
}

//Variante 2
if(alter <= 10){
    console.log(hiChild);
}
if (alter > 10 && alter <= 18){
    console.log(hiTeen);
}
if (alter > 18 && alter <=100){
    console.log(grüezi);
}
if (alter > 100){
    console.log(alte);
}

//Aufgabe 2
//Varainte 1
let age = 61
let betrag = 0;

if(age < 5){
    betrag;
}
else if(age <= 15){
    betrag = 5;
}
else if(age <= 60){
    betrag = 15;
}
else {
    betrag =  10;
}

console.log(betrag + "fr.-")

//Variante 2

if(age < 5){
    betrag;
}
if(age >= 5 && age <= 15){
    betrag= 5;
}
if(age > 15 && age <= 60){
    betrag = 15;
}
if(age > 60){
    betrag = 10;
}
console.log(betrag + "fr.-")

//Aufgabe 3
//Variante 1
let geschlecht = "w";
let age1 = 18
let enter = false;

switch (geschlecht){
    case "w":
        enter = age1 >= 18;
        break;
    case "m":
        enter = age1 >= 20;
        break;
    default:
        enter = false;
}

console.log(`Darf die Person des Geschlechts ${geschlecht} hinein? --> ${enter}`);
//Variante 2 + 3 Ternäre schreibweise

let enter1 = (age1 >= 18 && geschlecht === "w") || (age1 >= 20 && geschlecht === "m")
let enter2 = (age1 >= 18 && geschlecht === "w") || (age1 >= 20 && geschlecht === "m")? "Darf hinein":"Darf nicht hinein"
console.log(enter1)
console.log(enter2)











