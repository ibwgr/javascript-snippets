// 1
// a. Was gibt folgender Code aus?
//var wird in den global Scope gehoistet und die letzte zugewiesene variable wird 4x ausgegeben
for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i)
  }, 2000)
}

// b. Wie kann ich das Programm ändern, damit es tut was es tun sollte.
for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i)
  }, 2000)
}