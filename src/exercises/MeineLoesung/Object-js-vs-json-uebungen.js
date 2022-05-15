"use strict"


//1

const users = [
    {
        name: "Martin",
        score: 100
    },
    {
        name: "Sven",
        score: 20
    },
    {
        name: "Eva",
        score: 33
    },
    {
        name: "Heike",
        score: 40
    }
]

// sortiert aufsteigend a.score - b.score **** b.score -a.score sortiert absteigend
users.sort((a, b) => {
    return a.score - b.score
}).forEach((e) => {
    console.log(e)
})

//2
let topScorer = users.sort((a, b) => {
    return b.score -a.score
})

let topThree1 = [topScorer[0], topScorer[1], topScorer[2]]
console.log(topThree1)

let topThree2 = topScorer.slice(0, 3)
console.log(topThree2)

//
let topThree3 = topScorer.filter((value,index) => {
    return index <= 2
})
console.log(topThree3)


 const jsonUsers = JSON.stringify(topThree3)
console.log(jsonUsers)