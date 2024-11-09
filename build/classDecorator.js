"use strict";
function ClassDecoratorParams(param1, param2) {
    return function (target // the class decorator is declared on
    ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
;
;
class ClassDecoratorParamsExample {
}
ClassDecoratorParams(2, 'b');
called;
on: function ClassDecoratorParamsExample() { }
ClassDecoratorParams(1, 'a');
called;
on: function ClassDecoratorParamsExample() { }
