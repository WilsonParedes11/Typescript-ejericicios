"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function log(constructor) {
    console.log("Registered Class: " + constructor['name'] + " at " + Date.now());
}
 > ;
void {
    console, : .log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now())
};
function logparam(target, propertyKey, parameterIndex) {
    console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterIndex + ' at ' + Date.now());
}
//Asi se ustilaz el decorador de clase
let MyClass = class MyClass {
    constructor() {
        this.name = 'name';
        console.log('constructor');
    }
    myMethod(param1, param2) {
        console.log('method2');
    }
};
__decorate([
    logm,
    __param(1, logparam)
], MyClass.prototype, "myMethod", null);
MyClass = __decorate([
    log
], MyClass);
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
