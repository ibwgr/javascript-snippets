// 1 a
// Nach 2 Sekunden erscheinen 5 alerts nacheinander, in jeder steht 4 drin.
// 1 b

// Variante 1
for(let i=0;i<4;i++){
    window.setTimeout(()=>{
        window.alert(i)
    }, 2000)
}
// let erstellt eine Variable (Binding-Context) pro Block (for definiert einen Block).

// Variante 2
[0,1,2,3,4].forEach(i => {
    window.setTimeout(() => {
        window.alert(i)
    }, 2000)
})
// i wird jeweils an das argument des callbacks gebunden. Pro callback entsteht ein neues Binding.

// Variante 3
for(var i=0;i<4;i++){
    window.setTimeout(function(idx){
        window.alert(idx)
    }.bind(null, i), 2000)
}
// i wird als argument gebunden zum erstellungszeitpunk der funktion. Es werden im ganzen 5 funktionsobjekte erstellt.
