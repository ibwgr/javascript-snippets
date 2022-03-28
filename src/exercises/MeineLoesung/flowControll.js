//Aufgabe 1 
//Variante 1
let name = " Claudia"
let alter = 101;
let hiChild = "Hoi " + name;
let hiTeen = "Hallo" + name;
let grüezi = "gruezi"+ name;
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





//Schleifen / Loops

//Aufgabe 2
//Variante 1
let numbers = [1,2,3]
let result = [];

for (let number of numbers){
    if(number %2 === 0){
    result.push(true)

    }else{
        result.push(false);
    }
}

// Variante 2 als Funktion
function numberToBoolean(...numbers){
    let result =[]
    for (let number of numbers){
        result.push(number % 2 === 0)
}
return result;
}
console.log(result)

//Array Spreaden wieder auspacken
const numberArray = [1,2,3,4]
console.log(numberToBoolean(...numberArray));

//rest parameter einzelne zahlen werden zu einem array zusammengefasst
numberToBoolean(1,2,3,4,5,6);
console.log(numberToBoolean(1,2,3,4,5,6))





