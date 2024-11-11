//Implementar genéricos con interfaces y clases
interface Identity<T, U> {
    value: T;
    message: U;
}
//Declarar dos variables, utilizando el Identity interfaz como tipo de objeto.
let returnNumber: Identity<number, string>{
    value: 25,
    message: "Hello";
}

let returnString: Indentity<string, number>{
    value: "Hello",
    message: 25;
}

//Declare una interfaz genérica como un tipo de función
interface ProcessIndentity <T, U>{
    (value: T, message: U):T;
}

function processIndentity <T, U>(value: T, message: U): T{
    console.log(message);
    return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error


//Declare una interfaz genérica como un tipo de clase
interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor = new processIdentity<number, string>(100, 'Hello');
processor.process();           // Displays 'Hello'
processor.value = '100';       // Type check error

//Definir una clase genérica
class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity();      // Displays 'Hello'