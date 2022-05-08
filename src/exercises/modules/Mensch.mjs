export class Mensch{
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }

    sagHallo(){
        console.log("Hallo, mein name ist " + this.vorname);
        console.log(`Hallo, mein Name ist  ${this.vorname}`);
    }
    //get Methode
    get vollerName(){
        return `${this.vorname} ${this.nachname}`;
    }
    //setter Methode
    set vollerName(name){
        let werte = name.split(" ", 2);
        this.vorname = werte[0];
        this.nachname = werte[1];
    }

    static zeitBisGeburt(){
        return "5 Monate";
    }
}

// console.log(Mensch.zeitBisGeburt());//geht nur solange kein objekt gemacht wurde
//
// let mensch1 = new Mensch("Max","Mustermann");
// mensch1.sagHallo();
//
// mensch1.vollerName = "Martin Mustermann";
// console.log(mensch1.vollerName)


class Held extends Mensch{

    constructor(vorname, nachname, heroname) {
        super(vorname, nachname);
        this.heroname = heroname;
    }

    sagHallo() {
        console.log(`Hallo, mein Name ist  ${this.vorname} ${this.nachname} 
        und ich bin ${this.heroname}`);
    }
}

let held1 = new Held("Peter","Parker","Spiderman");
console.log(held1.sagHallo());
console.log(held1.vollerName);
