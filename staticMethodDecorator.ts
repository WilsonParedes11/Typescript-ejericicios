function StaticMethodDecorator(
    target : Function, // The function itself and not the prototype
    propertyKey: string | symbol, // The name of the static method
    descriptor: TypedPropertyDescriptor<any>
){
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}

class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod() {
    }
}

StaticMethodDecorator called on: function StaticMethodDecoratorExample() {} 