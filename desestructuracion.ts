//Desestructuracion de objetos
var obj = { x: 1, y: 2, z: 3 };
console.log(obj.x);

var { x, y, z } = obj;
console.log(x);

//Desestructuracion de arrays
var array = [1,2,3];
console.log(array[0])

var[x,y,z]= array;
console.log(x);

//Desestructuracion de arrays con estructuracion
var array = [1,2,3,4];
var [x,y, ...rest] = array;
console.log(x,y, rest);