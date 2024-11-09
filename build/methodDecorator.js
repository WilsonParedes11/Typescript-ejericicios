"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MethodDecorator(target, //The prototype of the class
propertyKey, //The name of the method
descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
class MethodDecoratorExample {
    method() {
    }
}
__decorate([
    MethodDecorator
], MethodDecoratorExample.prototype, "method", null);
MethodDecorator;
called;
on;
{
    method: [Function];
}
method;
{
    value: [Function],
        writable;
    true,
        enumerable;
    true,
        configurable;
    true;
}
