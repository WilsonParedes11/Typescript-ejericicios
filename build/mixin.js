"use strict";
//Disposable Mixin
class Disposable {
    dispose() {
        this.isDisposed = true;
    }
}
//Activatable Mixin
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactive() {
        this.isActive = false;
    }
}
class SmartObject {
    //Este constructor lo que hara sera que mostrara por pantalla
    //los estados isActive y isDisposed cada  500 ms
    constructor() {
        //Disposable
        this.isDisposed = false;
        //Activatable
        this.isActive = false;
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
    }
}
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObje = new SmartObject();
//esto generara una interaccion cada segundo cmabiando el estado de
// `false - false` a `true - true` la primera vez
// lugo como la variable ya valdria `true - true`
// simplemente se dedicaria a mostrala cada segundo  
setTimeout(() => smartObje.interact(), 1000);
// In your runtime library somewhere
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
