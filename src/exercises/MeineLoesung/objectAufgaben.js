//Aufgabe 1
//Definiere eine Liste von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl.

const user1 = {
   name: "ueli",
   score: 2,
};
const user2 = {
   name: "Cla",
   score: 1,
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


