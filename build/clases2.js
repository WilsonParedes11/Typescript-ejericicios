"use strict";
class Car {
    //Contructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        // if ((doors % 2) === 0) {
        //     this._doors = doors;
        // } else {
        //     throw new Error('Doors must be an even number')
        // }
        Car.numberOfCars++;
    }
    //Accessors
    //_make
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    //color
    get color() {
        return 'The color of the car is' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    //doors
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    //Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    //this function performs work for the other method functions
    worker() {
        return this._make;
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
//Properties
Car.numberOfCars = 0;
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// console.log(myCar1._color)
// console.log(myCar1._color)
let myCar2 = new Car('Galaxy Motors', 'red', 3);
console.log(myCar2);
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
//console.log(myCar1.turn('right'))
console.log(Car.getNumberOfCars());
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.");
    }
    // Overrides the brake method of the Car class
    brake() {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
}
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
