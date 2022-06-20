// 1
// Implementiere einen Array Iterator, der einen Array rückwärts iteriert.
// Versuche zwei Varianten zu finden.

const arr = [2,3,4,5,6,7];
for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

arr.slice().reverse().forEach((item)=>console.log(item));

// 2 
// Schreibe eine Funktion forFun, welche
// - ein Objekt welches Symbol.iterator implementiert
// - und eine callback Funktion
// entgegen nimmt.
// Iteriere über das iterable Objekt und rufe den Callback für jeden Wert auf, 
// solange bis alle Elemente iteriert sind.
const obj = {
    *[Symbol.iterator] () {
        yield 'golf';
        yield 'bike';
        yield 'cart';
        yield 'sail';
    }
}

let cb = function(x) {
    console.log(x);
}

let forFun = function(obj, callback) {
    [...obj].forEach(item => callback(item));
}
forFun(obj, cb);