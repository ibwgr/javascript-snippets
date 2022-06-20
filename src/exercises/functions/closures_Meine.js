
// 1
// a. Was gibt folgender Code aus?

for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i)
    }, 2000) //wartet mit ausführung des callback, mit 2 sekunden
}
//ausgabe ist 4x eine vier raus
// 4
// 4
// 4
// 4
// nicht in der zeit


//erstes passiert das:
//var i
//for (i = 0; i < 4; i++) {
//  setTimeout(() => {
//    console.log(i)
//  }, 2000)//wartet mit ausführung des callback, mit 2 sekunden
//}

//


// b. Wie kann ich das Programm ändern, damit es tut was es tun sollte.
for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i)
    }, 2000)
}

//var mit let ersetzen




//----------------------------------------------------------------------------
// 1
// a. Was gibt folgender Code aus?
//
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 2000)
// }
// 4
// 4
// 4
// 4
// nicht in der zeit


// b. Wie kann ich das Programm ändern, damit es tut was es tun sollte.

{
    setTimeout(() => {
        for (var i = 0; i < 4; i++) {
            console.log(i)
        }
    }, 2000)
}
// 0
// 1
// 2
// 3
// aber gibt alles aufeinmal raus, anstatt wahrscheinlich all zwei sekunden
