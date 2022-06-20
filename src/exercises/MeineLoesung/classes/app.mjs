import {Car} from "./Car.mjs";
import {RacingCar} from "./RacingCar.mjs";

let car1 = new Car("VW", "White", "Gas");
let raceCar = new RacingCar("BMW", "Black", "Diesel", "Sauber", 450)

car1.drive()
raceCar.drive()

// Use getter
console.log(car1.brand)
console.log(raceCar.brand)
//use setter
car1.brand = "Smart"
console.log(car1.brand)

