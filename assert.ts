// Asercion de tipos (Assert)

class Bird {
    fly(){
        console.log("Pajaro")
    }

    layEggs(){
        console.log("Pone huevos")
    }
}

class Fish{

    constructor(){
        //Solo para el ejemplo
    }

    swim(){
        console.log("Pez")
    }

    layEggs(){
        console.log("Pone huevos")
    }
}

function getAnimal() : Fish | Bird{
    var a:Fish = new Fish();

    return a;
}

let pet = getAnimal();

console.log(getAnimal());

pet.layEggs();

//ASERCION

if((<Fish>pet).swim){
    (<Fish>pet).swim();
} else if ((<Bird>pet).fly){
    (<Bird>pet).fly();
}