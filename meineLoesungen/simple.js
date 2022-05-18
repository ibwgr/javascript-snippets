'use strict'

// Closure
function add(a){
    return function(b){
        return a+b
    }
}
var addTo10 = add(10)(42)
console.log(addTo10)

// Callback
{
    function loooad(imgPath,onloadCallback){
        console.log(`loading ${imgPath} ...`)

        onloadCallback()
    }

    loooad('src/img.jpg', function () {
        console.log('fertig geladen')
    })
}


// Context ( this )
// {
//     let x = 1
//     let y = 2
//
//     function meineFn() {
//         let y = 20
//         console.log(this)
//         console.log(x)
//         console.log(this.x)
//     }
//
//     meineFn()                                    // Aufruf im globalen Kontext
// // new meineFn()                                   // Neue Funktion mit eigenem Scope
// // let obj = { scope: meineFn, x: 2}            // Funktion in Object eingebunden mit eigenem Scope
// // obj.scope()
// }


// Logger - Context ändern

function logIt(...it){
    console.log(this, it)
}

logIt.call(1,'Hello There')
logIt.apply(1, ['General Kenobi'])

let scopeWith1 = logIt.bind(2, 'foo')
scopeWith1('huhu')

console.log
