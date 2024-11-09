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
function ParameterDecorator(target, // The prototype of the class
propertyKey, // The name of the method
parameterIndex // The index of parameter in the list of the function's parameters
) {
    console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}
class ParameterDecoratorExample {
    method(param1, param2) {
    }
}
__decorate([
    __param(0, ParameterDecorator),
    __param(1, ParameterDecorator)
], ParameterDecoratorExample.prototype, "method", null);
ParameterDecorator;
called;
on: {
    method: [Function];
}
method;
1;
ParameterDecorator;
called;
on: {
    method: [Function];
}
method;
0;
