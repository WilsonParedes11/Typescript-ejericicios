"use strict";
//Herencia
//Es el mecanismo por el cual una clase adquiere las propiedades y metodos de otra clase.
//La clase que hereda se le conoce como subclase y la clase que es heredada se conoce como superclase.
//Una clase puede heredar de otra clase usando la palabra clave extends.
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Rhino extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Elephent extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 20) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
//Para poder crear un arrray con este tipo de objetos que utilizara la clase Padre
let ar = [new Rhino("Rinocerator"), new Snake("Serpentina"), new Elephent("Elefanton")];
//El acceso a este ejemplo seria muchisimo mas sencillo
let ej2 = { Rhino: new Rhino("Rinocerator"), Snake: new Snake("Serpentina"), Elephent: new Elephent("Elefanton") };
console.log(ar);
