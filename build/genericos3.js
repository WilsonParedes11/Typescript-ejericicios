"use strict";
//Implementar genéricos con tipos y clases personalizadas
class Car {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All $(card.doors) doors are closed`);
    console.log(`The $(car.make) is now accelerating`);
    return car;
}
let myElectricCar = new ElectricCar();
accelerate(myElectricCar);
let myTruck = new Truck();
accelerate(myTruck);
