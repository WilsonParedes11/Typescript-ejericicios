"use strict";
//Uso de genericos en TypeScript
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Rabbits');
numberArray.push('This is not a number');
stringArray.push(30);
console.log(numberArray);
console.log(stringArray);
// uso de genericos de la siguiente manera <T>
function getArray2(items) {
    return new Array().concat(items);
}
let numberArray1 = getArray2([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push('This is not a number');
let stringArray1 = getArray2(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');
stringArray.push(30);
//Usando múltiples variables de tipo genérico
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100;
returnString = returnString * 100; // Error tipo de dato incorrecto no se puede multiplicar un string por un número
returnBoolean = returnBoolean * 100; // Error tipo de dato incorrecto no se puede multiplicar un boolean por un número
