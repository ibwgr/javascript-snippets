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
    new User('Ladina', 22),
    new User('Tino', 21),
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
    // Klone das Array
    let u = [...users]
    function getTopNScorers(scorers, n) {
        scorers.sort((a, b) => (a.punkte < b.punkte) ? 1 : -1)
        return scorers.slice(0, n)
    }
    let top3 = getTopNScorers(u,3)

    // Vorbereitung Tabelle
    let vals = Object.keys(User).map(function (key) {
        return obj[key];
    });

    console.log(vals)

}
