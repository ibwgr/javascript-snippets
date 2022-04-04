
/*
# Functions

## Basic

### 1.1
Schreibe eine Funktion die einen Namen entgegen nimmt und "Hallo \<name\>" zurück gibt.
 */

// function gebeHalloNameZurueck(name){
//     return "Hallo \\<"+name+"\\>";
// }
//
// console.log(gebeHalloNameZurueck("Hans"))
//Hallo \<Hans\>

//--------------------------------------------------------------------------------------------
/*
### 1.2
Verändere die Funktion so,
dass wenn kein Name angegeben wird,
als default Name "Welt" genommen wird.
 */


function gebeHalloNameurueck(name){
    if(name === ''){
        return "Welt";
    }
    return "Hallo \\<"+name+"\\>";
}

console.log(gebeHalloNameZurueck(""))
//noch nicht fertig