interface Bird {
    fly();
    layEggs();
}

interface Fish{
    swim();
    layEggs();
}

function getAnimal() : Fish | Bird {
    var a: Fish;
    return a;
}

let pet = getAnimal();
pet.layEggs()
pet.swim()