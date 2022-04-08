"use strict"

// Aufgabe 1.1

function returnName (name){
    return "Hallo \<" + name + "\>"
}

console.log(returnName("Claudia"))

//Aufgabe 1.2
function returnNameDefault (name , to = "Welt"){
    if (name === undefined){
        return "Hallo \<" + to +  "\>"
    }else {
        return "Hallo \<" + name+  "\>"
    }

}

console.log(returnNameDefault())
console.log(returnNameDefault("Claudia"))

//Aufgabe 1.3

function  returnMoreNameDefault (...name){
    if (name.length === 0){
        name.push("Welt")
    }else{
        name.push(name)
    }
    let nameOutput = name.join(", ")

    return "Hallo " + nameOutput
}

console.log(returnMoreNameDefault("Claudia", "Simon", "Marco"))
console.log(returnMoreNameDefault())

//"use strict"
function test1 (){
    console.log(this)
}
test1()
let objekt={
    name: "Claudia",
    say: function (){
        console.log(this.name)
    }

};
console.log(objekt.name)
let objektName = objekt.say()
console.log(objektName)
console.log(objekt.__proto__)



