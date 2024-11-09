//Disposable Mixin

class Disposable{
    isDisposed: boolean;
    dispose(){
        this.isDisposed = true;
    }
}

//Activatable Mixin
class Activatable{
    isActive: boolean;
    activate(){
        this.isActive = true;
    }

    deactive(){
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable{
    //Este constructor lo que hara sera que mostrara por pantalla
    //los estados isActive y isDisposed cada  500 ms
    constructor(){
        setInterval(()=> console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact(){
        this.activate();
    }

    //Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    //Activatable
    isActive: boolean = false;
    activate: () => void;
    deactive: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

let smartObje = new SmartObject();
//esto generara una interaccion cada segundo cmabiando el estado de
// `false - false` a `true - true` la primera vez
// lugo como la variable ya valdria `true - true`
// simplemente se dedicaria a mostrala cada segundo  
setTimeout(()=> smartObje.interact(), 1000);

// In your runtime library somewhere

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}