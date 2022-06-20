// 1
// gegeben
// function add(a, b){
//     return a + b
// }
//
// Erstelle eine Funktion namens aPlusb welche einen Parameter p entgegen nimmt,
// und intern immer add mit a=20 aufruft, b soll mit p belegt werden.
// Gib das Ergebnis der Berechnung zurück.
// Versuche zwei Lösungs-Varianten zu finden (Hint: bind).

// Lösung ohne bind
{
    function add(a, b) {
        return a + b;
    }

    function aPlusb1(p) {
        let a = 20;
        let b = p;
        return a + b;
    }
    function aPlusb2(p) {
        return add(20, p);
    }

    console.log(aPlusb1(2));     // 22
    console.log(aPlusb2(2));     // 22

}

{
    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*
    //Lösung mit bind

    function add(a, b) {
        return a + b;
        //return a.bind(null,b)
    }

    function aPlusb(p) {
        //return add.bind(20);
        //return add.bind(20,p)
        return add(20, p);
    }

    console.log(aPlusb(2)); // 22
    //console.log(add.bind(aPlusb(2)))    // bound add
    //console.log(aPlusb().bind(2)) //aplusb is not a function
    // newFn = existingFn.bind(desiredThis)
    console.log()
    //console.log(aPlusb())

    // Variante 1
// let addTo10 = add.bind(null, 10)
// addTo10(20)
}

//----------------------------------------------------------------------
{
    function aPlusb(p) {
    }

    add: function add(a, b){
        return a + b
    }

    console.log(aPlusb(2))  // undefinded
}



/*
var aPlusb = function (a, b) {
    return a + b;
}

var partial = aPlusb.bind(null, 10)
partial(6);//output : 16
 */
{
    var aPlusb = function (a, b) {
        return 20 + b;
    }

    var partial = aPlusb.bind(null, 0)
    console.log(partial(2));
}

{
    let person = {
        name: "John Smith",
        age: 42,
        sayHello: function () {
            console.log("Hello, " + this.name + ". You are " + this.age + " years old.");
        }
    };
    console.log(person.sayHello()); // undefined
    console.log(person.sayHello.bind(person))   //bound sayHello
}

{
    let c1 = {
        x: 5,
        y: 10
    }

    let c2 = {
        x: 20,
        y: 30
    }

    function printCoordinates(){
        console.log(this.x + ' ' + this.y);
        return this.x + ' ' + this.y;
    }

    let c1_func = printCoordinates.bind(c1);    //keine ()
    let c2_func = printCoordinates.bind(c2);

    console.log(c1_func);   // bound printCoordinates  weil hat keine ()
    console.log(c2_func());

}


// 2
// Die gegebene Funktion add aus Aufgabe 1 soll geändert werden.
// Neu möchten wir, dass immer alle Argumente geloggt werden (bevor die Berechnung gemacht wird).
// Der Aufrufer kann selbst entscheiden was für einen Logger er verwenden möchte.
// z.B. console.log oder console.warn wären mögliche Logger.
{
    function add(a, b) {
        return a + b;
    }

    function add2(a, b, logger) {
        console.log(a + b);
        console.warn(a + b)
        logger2();
        return a + b;
    }

    function logger2(x) {
        if (x === 0) {
            console.log();
        } else if (x === 1) {
            console.warn();
        }
    }


    function ablogger(a,b,logger) {
        if (logger === 'log') {
            console.log(a+b);
        } else if (logger === 'warn') {
            console.warn(a+b);
        }
    }
    ablogger(1,2,'log')


}