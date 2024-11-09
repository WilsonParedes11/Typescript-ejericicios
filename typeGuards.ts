interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}
function getAnimal() : Fish | Bird {
    var a : Fish;
    return a;
}
function isFish(pet: Fish |Bird): pet is Fish {
    return (<Fish>pet).swim != undefined;
}
let pet = getAnimal();
if(isFish(pet)) {
    (<Fish>pet).swim();
    console.log('glup');
} else {
    console.log('believe i can fly');
    pet.fly();
}
