function MethodDecorator(
    target: Object, //The prototype of the class
    propertyKey: string | symbol, //The name of the method
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @MethodDecorator
    method() {
    }
}

MethodDecorator called on { method: [Function] } method {
    value: [Function],
        writable: true,
            enumerable: true,
                configurable: true
}
