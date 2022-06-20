"use strict"
import {Car} from "./Car.mjs";
//

export class RacingCar extends Car {
    team;
    horsePower;

    constructor(brand, color, fuel, team, horsePower) {
        super(brand,color,fuel);
        this.team = team;
        this.horsePower = horsePower;
    }

    drive(){
        console.log(`Racingcar: Team: ${this.team} with the brand: ${this.brand} drives with ${this.horsePower} `)
    }



}