"use strict";
//Declarar dos variables, utilizando el Identity interfaz como tipo de objeto.
let returnNumber, { value: , 25: , message: , "Hello":  };
let returnString, { value: , "Hello": , message: , 25:  };
function processIndentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK
let returnString1 = processor('Hello!', 100); // Type check error
class processIdentity {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor = new processIdentity(100, 'Hello');
processor.process(); // Displays 'Hello'
processor.value = '100'; // Type check error
//Definir una clase genérica
class processIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new processIdentity(100, 'Hello');
processor.getIdentity(); // Displays 'Hello'
