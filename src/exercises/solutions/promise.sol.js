'use strict'
// 1a
function calcX(z){
    return new Promise((res, rej)=>{
        if(z < 0.8){
            res(z)
        }else{
            rej(new Error(`Base ${z} ist zu gross`))
        }
    })
}

//calcX(0.8).then(console.log).catch(console.log)
//calcX(0.3).then(console.log).catch(console.log)
// let i = 0
// while(++i <= 10){
//     calcX(i/10).then(console.log).catch(_=>_)
// }

// 1b
// Variante mit Promises
// function calcX(base){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             if(base < 0.8){
//                 res(base)
//             }else{
//                 rej(new Error(`Base ${base} ist zu klein`))
//             }
//         }, Math.random()*100)
//     })
// }
// let i = 0
// while(++i <= 10){
//     calcX(i/10).then(console.log).catch(_=>_)
// }
// Die Reihenfolge der Ergebnisse ist nicht mehr gleich, wie die der Aufrufe.

// 1b
// Variante mit async/await (calcX ist gleich wie bei Lösung 1b mit Promises)
/**
 console.log("before");
 (async function(){
    for (let i = 0; i < 10; i++) {
        console.log("Erstelle Berechnung " + i)
        try{
            const meineZahl = await calcX(Math.random())
            console.log(meineZahl)
        }catch (e) {
        }
    }
    console.log("Aufträge erstellt. Warten angesagt ...")
 })()
 console.log("after")
 */

// 1c
// Variante ohne Promise.all
let i = 0
let sum = 0
let resultCount = 0
while(++i <= 10){
    calcX(i/10)
        .then(res => {
            sum += res
        })
        .catch(err => {
            console.log(err)
        })
        .then(() => {
            resultCount++
            if(resultCount === i-1){
                console.log(sum)
            }
    })
}


// Variante mit Promise.all
// let i = 0
// let promises = []
// while(++i <= 10){
//     promises.push(
//         calcX(i/10)
//         .catch((e)=>{
//             console.error(e)
//             return 0
//         }))
// }
//
// Promise.all(promises)
// .then((values)=>{
//     return values.reduce((sum, value)=>sum+=value, 0)
// })
// .then(console.log)