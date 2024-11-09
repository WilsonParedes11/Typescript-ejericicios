function PropertyDecorator(
    target: Object, // The prototype of the class
    propertyKey: string | symbol // The name of the property
) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}

class PropertyDecoratorExample{
    @PropertyDecorator
    name: string;
}

PropertyDecorator called on: {} name

