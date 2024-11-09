"use strict";
// Asercion de tipos (Assert)
class Bird {
    fly() {
        console.log("Pajaro");
    }
    layEggs() {
        console.log("Pone huevos");
    }
}
class Fish {
    constructor() {
        //Solo para el ejemplo
    }
    swim() {
        console.log("Pez");
    }
    layEggs() {
        console.log("Pone huevos");
    }
}
function getAnimal() {
    var a = new Fish();
    return a;
}
let pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
//ASERCION
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
