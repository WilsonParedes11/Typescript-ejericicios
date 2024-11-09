function log(constructor: Function): void {
    console.log("Registered Class: " + constructor['name'] + " at " + Date.now());
}

function logm<T>(target: Object, propertyKey: string | symbol, descriptor: TypedProper
    tyDescriptor<T>): void {
    console.log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now());
}

function logparam(target: Object, propertyKey: string | symbol, parameterIndex: number
): void {
    console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterIndex + ' at ' + Date.now());
}
//Asi se ustilaz el decorador de clase
@log
class MyClass {

    public name: string = 'name';

    constructor() {
        console.log('constructor');
    }

    @logm
    public myMethod(param1: number, @logparam param2: boolean) {
        console.log('method2');
    }
}

var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);

// ---------- COMO SE USAN LOS DECORADORES
// type ClassDecorator = <TFunction extends Function>(target: TFunction): TFunction | 
//void;
// type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor
//: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
// type PropertyDecorator = (target: Object, propertyKey: string | symbol): void;
// type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterI
//ndex: number): void;
//Decorators
//75
