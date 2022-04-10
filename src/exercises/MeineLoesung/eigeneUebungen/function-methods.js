// übung für call(), apply() bind()


let bob = function (num, str,x){
    console.log('bob', num, str, this, x)

    return true
}

let bill = {
    name:'Bill Murray',
    movie: 'Lost in translation',
    myMethod: function (fn){


    }
}

//bob(1, 'hi') // bob, 1, hi, this => global Object ( use strict: this => undefined)

//bill.myMethod(bob) // auch wenn myMethod instanz methode ist => ruft inner funktion auf, bei der this => global
//bill.myMethod(bob.call(bill, 10, 'Welt'))// call(thisArgument, parameter1, parameter2 ) output => bob, 10, Welt, {bill}
//bill.myMethod(bob.apply(bill,[20, 'Planet']))// apply(thisArgument, [parameter1, parameter2] output => bob, 20, Planet, {bill}


//bill.myMethod(bob(2, 'blödian')) // nicht gebunden müssen parameter zur laufzeit übergeben werden
let gebundeneFunktion = bob.bind(bill, 30, 'Universum'); // thisContext + Parameter können vor der Ausführung gespeichert werden ( Bind() macht nur KOPIE von Funktion)
gebundeneFunktion("3. parameter x: nachträglich eingefügt => nach bind()")// Muss separat ausgeführt werden
