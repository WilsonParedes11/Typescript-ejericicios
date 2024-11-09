function ClassDecoratorParams(param1: number, param2: string){
    return function(
        target: Function // the class decorator is declared on
    ){
        console.log("ClassDecoratorParams(" + param1 + ", '"+ param2 + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a");
@ClassDecoratorParams(2, "b");

class ClassDecoratorParamsExample {
}

ClassDecoratorParams(2, 'b') called on: function ClassDecoratorParamsExample() {}
ClassDecoratorParams(1, 'a') called on: function ClassDecoratorParamsExample() {}