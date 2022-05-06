/*
### 1.1
Schreibe eine Funktion die einen Namen entgegen
nimmt und "Hallo \<name\>" zurück gibt.
*/
{
    function bekommeNameGebeNameZurueck(name) {
        return "Hallo " + '\\<' + name + '\\>';
    }

    console.log(bekommeNameGebeNameZurueck("Hans"))
}
//---------------------------------------------------------------------------------------
/*
### 1.2
Verändere die Funktion so,
dass wenn kein Name angegeben wird,
als default Name "Welt" genommen wird.
*/
{
    function bekommeNameGebeNameZurueck(name) {

        if (name == undefined) {
            name = 'Welt'
        }
        return "Hallo " + '\\<' + name + '\\>';
    }

    console.log(bekommeNameGebeNameZurueck('Erika'))
}
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
/*
### 1.3
Verändere die Funktion so,
dass man soviele Namen wie man will mitgeben kann.
Die Ausgabe ist dann "Hallo \<name1>, \<name2>, ...".
Als default Name soll immer noch Welt gelten.
Versuche zwei Lösungsvarianten zu finden (Hint: Rest-Parameter)
*/
{

    function bekommeNameGebeNameZurueck(...name) {


        let ausgabe = '';
        if(name.length==0){
            ausgabe += "Welt";
        }


        for (let i = 0; i < name.length; i++) {
            let x = '';
            if(name[i]===undefined){
                x='Welt';
            }else{
                x = '\\<' + name[i] + '\\>' + ','
            }
            ausgabe = ausgabe + x
            //console.log(ausgabe)
        }

        return "Hallo " + ausgabe;
    }

    console.log(bekommeNameGebeNameZurueck('erika',undefined,'hans','ueli'))

}