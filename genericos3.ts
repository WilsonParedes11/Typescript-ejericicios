//Implementar genéricos con tipos y clases personalizadas
class Car {
    make: string = 'Generic Car';
    doors: number = 4;

}

class ElectricCar extends Car {
   make = 'Electric Car';
   doors = 4
}

class Truck extends Car {
    make = 'Truck';
    doors = 2;
}

function accelerate < T extends Car>(car: T ) : T {
    console.log(`All $(card.doors) doors are closed`);
    console.log(`The $(car.make) is now accelerating`);
    return car;
}

let myElectricCar =  new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);
