"use strict"

export class Car {
    // private #brand
    #brand;
    color;
    fuel;

    constructor(brand, color, fuel) {
        this.#brand = brand;
        this.color = color;
        this.fuel = fuel;
        this._brand = brand;
    }

    drive(){
        console.log(`Car: ${this.brand} with the color: ${this.color} drives with ${this.fuel} `)
    }


    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }


}

