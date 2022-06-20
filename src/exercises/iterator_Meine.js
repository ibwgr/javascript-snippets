// 1
// Implementiere einen Array Iterator, der einen Array rückwärts iteriert.
// Versuche zwei Varianten zu finden.

{
    let arr1 = [1, 2, 3];
    for (let i = arr1.length - 1; i >= 0; i--) {
        console.log(arr1[i]);   // 3,2,1
    }

}

{
    let arr1 = [1, 2, 3, 4];
    console.log(arr1.reverse());    // [4,3,2,1]
}

//-------------------------------------------------------------
// 2
// Schreibe eine Funktion forFun, welche
// - ein Objekt welches Symbol.iterator implementiert
// - und eine callback Funktion
// entgegennimmt.
//
// Iteriere über das iterable Objekt und rufe den Callback für jeden Wert auf,
// solange bis alle Elemente iteriert sind.
{
    /*
    for --of(Schlaufe) --> iterator methode --> symbol.iterator
     */

    let str = "Hello";
    let arr = [1, 2, 3];
    let num = 5;
    let obj = {name: "Hans"};

    console.log("For String - " + typeof str[Symbol.iterator]); // For String - function
    console.log("For Array - " + typeof arr[Symbol.iterator]);  // for Array - function
    console.log("For num - " + typeof num[Symbol.iterator]);    //for num - undefinded
    console.log("For obj - " + typeof obj[Symbol.iterator]);    // For obj - undefinded

    //--> forOf Schlaufe geht also scheinbar nicht mit obj und num

    const a = {};
    console.log(a)          // {}
    // for(let item of a){     // a ist not iterable
    // console.log(item)
    // }
    // let b = {...a}   // undefinded
    // console.log(b + " kk")

    const c = {
        [Symbol.iterator]() {
            let value = 1
            return {
                next() {
                    return {
                        value,
                        done: value++ > 3
                    }
                }
            }
        }
    }

    for (let item of c) {
        console.log(item)   // 1,2,3
    }

    const d = [...c]
    console.log(d)      // [1,2,3]
}
//-----------------------------------------------------------------------------------
//callback = wie threads, wenn eine funktion ganz lange dauert, wird eine andere ausgeführt (ev mit promises)
//funktion an eine andere funktion übergeben (wenn eine funktion auf einen callback wartet....)
// zb funktion übersetzt was, resumetext...
{
    const obj2 = {
        [Symbol.iterator]() {
            let value = 1
            return {
                next() {
                    return {
                        value,
                        done: value++ > 3
                    }
                }
            }
        }
    }

    function forFun(obj2, funktionalsErsteStarteAberLangeBrauch) {

    }

    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
}