//Aufgabe 1
//Definiere eine Liste von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl.

const user1 = {
    name: "Ueli",
    score: 25453534535345,
};
const user2 = {
    name: "Claudia",
    score: 300,
};

let userList = [user1, user2];

//Aufgabe2
//Finde den User mit der höchsten Punktezahl
//Variante 1
let winner = null;

for (const user of userList) {
    if (winner === null || winner.score < user.score) {
        winner = user;
    }
}
console.log(winner);

//Variante 2
for (const user of userList) {
    if (winner === null) {
        winner = user;
    } else if (winner.score < user.score) {
        winner = user;
        console.log(winner);
    }
}
console.log(winner);

//Aufgabe 3

let row1 = "|Name|Punkte|"
let row2 = "|----|-----|"
let row3 = "|" + user1.name + "| " + user1.score + "|"
let row4 = "|" + user2.name + "| " + user2.score + "|"

let rowArr = [row1, row2, row3, row4]

list = rowArr.join("\n")
console.log(list)
//Aufgabe 4
//längster name
//Länge der höchsten Punktezahl.??? was ist damit gemeint?
function longestName (){
    let winner2 = null;

    for (const user of userList) {
        if (winner2 === null || winner2.name.length < user.name.length) {
            winner2 = user;
        }
    }
    return winner2.name.length
}

console.log(longestName())

function longestScore(){
    let winnerScoreLength = null;

    for (const user of userList) {
        if (winnerScoreLength === null || winnerScoreLength.score.toString().length < user.score.toString().length) {
            winnerScoreLength = user;
        }
    }
    return winnerScoreLength.score.toString().length
}

console.log(longestScore());



// Augabe 5
let rows = []
let longestUsername =  longestName()
let longestUserScore = longestScore()

// Check if HeaderName/Punkte length is longer than de longest Username or longest Score length
function lengthCheck(value1, value2){
    if (value1 > value2){
        return value1
    }else{
        return value2
    }
}

let longestInNameRow = lengthCheck(longestUsername, "name".length)
let longestInPunkteRow = lengthCheck(longestUserScore, "Punkte".length)

let headerRowName = "Name".padEnd(longestInNameRow)
let headerRowPunkte = "Punkte".padEnd(longestInPunkteRow)

let nameBorder = "-".repeat(longestInNameRow)
let punkteBorder = "-".repeat(longestInPunkteRow)

let headerCells = ['', headerRowName, headerRowPunkte, ''];
let borderCells = ['', nameBorder,       punkteBorder,       ''];

let headerRow = headerCells.join('|');
let borderRow = borderCells.join('|');

rows.push(headerRow)
rows.push(borderRow)

for(const user of userList){
    const paddedName = user.name.padEnd(longestInNameRow)
    const paddedScore = user.score.toString().padEnd(longestInPunkteRow)
    const userCells = ['', paddedName, paddedScore, '']
    const userRow = userCells.join('|')

    rows.push(userRow)
}
list = rows.join('\n')
console.log(list)


