/*
# Objects vs JSON

# 1
Definiere ein Array von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl. \
Sortiere den Array anhand der Punktezahl aufsteigend.

Tip: Dokumentation von Array auf MDN studieren, um herauszufinden wie man sortiert :)
 */
{
    let arrUser = [];

    user1 = { name: "Hans", punkte: 33}
    user2 = { name: "Doris", punkte: 46}
    user3 = { name: "zororo", punkte: 2}
    user4 = { name: "Max", punkte: 64}

    arrUser.push(user1);
    arrUser.push(user2);
    arrUser.push(user3);
    arrUser.push(user4);

    console.log(arrUser);

    arrUser.sort(function(a, b) {
        return a.punkte - b.punkte;
    });
    console.log(arrUser)
    //oder
    console.log(arrUser.sort((a, b) => a.punkte - b.punkte))


    //----------------------------------------------------------
    /*
    # 2
Erstelle einen JSON String der 3 top Scorer. \
Finde mehrere Varianten, um die Top 3 auszulesen
     */

    let lastThreeUserArr = arrUser.slice(-3);
    console.log(lastThreeUserArr);

    JSON.stringify(lastThreeUserArr);
    console.log(lastThreeUserArr)   // [{},{},{}]

/*
# 3
Wandle den Array der User in ein Array von Objekten in der Form: `{ content: String, length: Number }` um. \
Wobei content der Username ist und length die länge des Namens. Sortiere den Array aufsteigend nach length.
 */
//prototype ev länge hinzufügen

    var isArr;
    isArr = Object.prototype.toString.call(arrUser);
    console.log(isArr)  // [object Array]




    var arr = [{
        id: 1,
        name: 'bill'
    }, {
        id: 2,
        name: 'ted'
    }]

    var result = arr.map(person => ({ value: person.id, text: person.name }));
    console.log(result)


    let arrUserNeuStringLength = arrUser.map(user => ({content: typeof user.name, length: user.name.length}));
    console.log(arrUserNeuStringLength)

    //arrUserNeuStringLength.sort((a, b) => {a.length - b.length})
    //arrUserNeuStringLength.sort(user.name.length)
    arrUserNeuStringLength.sort(function(a, b){
        // ASC  -> a.length - b.length  //aufsteigend
        // DESC -> b.length - a.length  //absteigend
        return a.length - b.length;
    });
    console.log(arrUserNeuStringLength)

    /*
    # 4
Erstelle eine tabellarisch korrekt ausgerichtete Rangliste der 3 top Scorer, im ASCII Format :).

Format der Ausgabe:
```
|Name  |Score|
|------|-----|
|User 1|   13|
|Maya  |    9|
```

Eigenschaften der Tabelle:
 - Komplett dynamisch generiert, anhand des users Arrays ;)
 - Spaltenbreite genau nur so breit, dass der längste Text darin Platz.
 - Zeilen absteigend nach Score sortiert
 - Score rechts ausgerichtet, Name links ausgerichtet

     */

    console.log(arrUser);
    arrUser.sort(function(a,b){return b.punkte-a.punkte})

    console.log(arrUser)
    //Person.prototype.nationality = "English";
    //arrUser.prototype.length = user.name.length

    let hilfzahl = 0;
    for(let i = 0; i<arrUser.length; i++){
        if(arrUser[i].name.length>hilfzahl){
            hilfzahl = arrUser[i].name.length;
        }
    }
    console.log(hilfzahl + " längster name")
/*
    |Name  |Score|
    |------|-----|
 */
    console.log("|Name");
    let str = "|Name";
    for(let i = 0; i<hilfzahl-4;i++){
        str = str+"*";
    }
    console.log(str)
    str = str + "|Score|\n|";
    console.log(str)
    for(let i = 0; i<hilfzahl;i++){
        str = str+"*";
    }
    console.log(str)
    str = str + "|-----|\n";
    console.log(str)
    for(let i = 0; i<arrUser.length;i++){
        str= str + "|"+arrUser[i].name;
        if(arrUser[i].name.length<hilfzahl){
            for(let j = arrUser[i].name.length; j<hilfzahl;j++){
                str = str + "X";
            }
        }
        str = str + "|"+arrUser[i].punkte;
       // if(arrUser[i].punkte<10000)
    }
    console.log(str)


    //-*-*-*-*-*-*-*-*-*noch nicht fertig
}