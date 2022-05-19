class User{
    name; punkte;

    constructor(name, punkte) {
        this.name = name;
        this.punkte = punkte;
    }
}
const users = [
    new User('Marco', 42),
    new User('Nicole', 94),
    new User('Esther', 12),
    new User('Rolf', 34),
    new User('Cornelia', 62),
    new User('Beat', 10),
    new User('Elay', 92),
    new User('Ladina', 2),
    new User('Tino', 1),
]

// 1 Sortiere den Array anhand der Punktezahl aufsteigend.

// {
//     // Array klonen
//     let u = [...users]
//     u.sort((a, b) => (a.punkte > b.punkte) ? 1 : -1)
//     console.log(u)
// }

// 2 Erstelle einen JSON String der 3 top Scorer.

// {
//     // Array klonen
//     let u = [...users]
//
//     function getTopScorerAsJson(scorers) {
//         scorers.sort((a, b) => (a.punkte < b.punkte) ? 1 : -1)
//         let top3 = scorers.slice(0, 3)
//         return JSON.stringify(top3)
//     }
//
//     function getTopNScorers(scorers, n) {
//         scorers.sort((a, b) => (a.punkte < b.punkte) ? 1 : -1)
//         return scorers.slice(0, n)
//     }
//
//     function getNScorersPopped(scorers, n) {
//         if(n>scorers.length) n = scorers.length
//         scorers.sort((a, b) => (a.punkte > b.punkte) ? 1 : -1)
//         let topN = []
//         for (let i = 0; i < n; i++) {
//             topN.push(scorers.pop())
//         }
//         return topN
//     }
//
//     let top3Json = getTopScorerAsJson(u)
//     console.log(top3Json)
//     let topNPopped = getNScorersPopped(u, 22)
//     console.log("getTopNPopped")
//     console.log(topNPopped)
//     // Array klonen
//     u = [...users]
//     console.log("get Top n Scorers")
//     console.log(getTopNScorers(u,12))
// }

// 3 Wandle den Array der User in ein Array von Objekten in der Form: { content: String, length: Number } um.

// {
//     function UserToObj(user){
//         return {content: user.name, length: user.name.length}
//     }
//     let u = [...users]
//     let arrayOfObj = u.map(user => UserToObj(user)).sort((a,b) => (a.length > b.length ? 1 : -1))
//     console.log(arrayOfObj)
// }

// 4 Erstelle eine tabellarisch korrekt ausgerichtete Rangliste der 3 top Scorer, im ASCII Format :).
{
    function getLengthOfLongest(arrayOfUserObj, key, columnHeader, settings){
        let length = 0
        for (let user of arrayOfUserObj){
            length = user[key].toString().length > length ? user[key].toString().length : length;
        }
        length = length < columnHeader.length ? columnHeader.length : length;
        return length + settings.offsetBefore + settings.offsetAfter
    }
    // Klone das Array
    let u = [...users]
    function getTopNScorers(scorers, n) {
        scorers.sort((a, b) => (a.punkte < b.punkte) ? 1 : -1)
        return scorers.slice(0, n)
    }
    let top3 = getTopNScorers(u,12)
    let columns = ["Name","Punkte"]
    let settings = {
        offsetBefore : 0,       // Funktioniert "noch" nicht (ich hasse es wenn die Tabellenrahmen am content kleben)
        offsetAfter: 0          // Funktioniert "noch" nicht (ich hasse es wenn die Tabellenrahmen am content kleben)
    }
    let colLengths = []
    colLengths.push( getLengthOfLongest(top3, "name", columns[0], settings) )
    colLengths.push( getLengthOfLongest(top3, "punkte", columns[1], settings) )

    // überschriften
    let spacers = ""
    let nameSpacers = Math.abs(columns[0].length - colLengths[0]);
    if(nameSpacers){
        for (let i = 0; i < nameSpacers; i++) {
            spacers += " ";
        }
    }
    // Headers:
    let header = "|"
    header += buildColumn(columns[0],colLengths[0],true)
    header += buildColumn(columns[1],colLengths[1],false)
    console.log(header)

    // Trenner
    let divider = "|"
    for (let i = 0; i < colLengths[0]; i++) {
        divider+="-"
    }
    divider += "|"
    for (let i = 0; i < colLengths[1]; i++) {
        divider+="-"
    }
    divider += "|"
    console.log(divider)
    // Rows:
    for (let user of top3){
        let name = buildColumn(user.name, colLengths[0], true)
        let pts = buildColumn(user.punkte, colLengths[1], false)
        console.log(`|${name}${pts}`)
    }
    function buildColumn(colValue, maxLength, append = true){
        let spacers = ""
        let spacerCount = Math.abs(colValue.toString().length - maxLength)
        for (let i = 0; i < spacerCount; i++) {
            spacers += " ";
        }
        return append ? colValue + spacers + "|" : spacers + colValue + "|"
    }
}
