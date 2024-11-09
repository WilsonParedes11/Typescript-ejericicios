"use strict";
function getMeAPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 1000);
    });
}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator.throw(value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var val = yield getMeAPromise();
            console.log(val);
        }
        catch (err) {
            console.log('Error: ', err.message);
        }
    });
}
foo();
