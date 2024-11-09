"use strict";
// Cadenas de promesas o Chain-ability of Promises
// Promise.resolve(123)
//     .then((res) => {
//         console.log(res);
//         return 456;
//     })
//     .then((res) => {
//         console.log(res); //456
//         return Promise.resolve(123);
//     })
//     .then((res) => {
//         console.log(res)//123 
//         return Promise.resolve(123);
//     })
//manejo de rrores agregado el metodo catch a la caneda.
// Promise.reject(new Error('something bad happened'))
//     .then((res) => {
//         console.log(res)//not called
//         return 456;
//     })
//     .then((res) => {
//         console.log(res);//not called
//         return Promise.resolve(123);
//     })
//     .then((res) => {
//         console.log(res); //not called
//         return Promise.resolve(123);
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
//También se puede hacer que un método  catch  continue con la cadena de promesas, de la siguiente manera
// Promise.reject(new Error('something bad happened'))
//     .then((res) => {
//         console.log(res) //not called
//         return 456
//     })
//     .catch((err) => {
//         console.log(err.message);// something bad happened
//         return Promise.resolve(123);
//     })
//     .then((res) => {
//         console.log(res) //123
//     })
//Cualquier error ocurrido en un  then  llamará al método  catch .
// Promise.resolve(123)
//     .then((res) => {
//         throw new Error('something bad happened')
//         return 456;
//     })
//     .then((res) => {
//         console.log(res) //never called
//         return Promise.resolve(789);
//     })
//     .catch((err) => {
//         console.log(err.message); //something bad happened
//     })
//También es posible que algunas funciones puedan devolver promesas como por ejemplo
// function iReturnPromiseAfter1Second():Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(()=>resolve("Hello world!"), 1000);
//     });
// }
// Promise.resolve(123)
//     .then((res) =>{
//         //res is inferred to be of type number
//         return iReturnPromiseAfter1Second();
//     })
//     .then((res) => {
//         //res is inferred to be type `string`
//         console.log(res)
//     })
//En el siguiente ejemplo veremos como se hace la carga de un  JSON  de forma asíncrona
// good json file
loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })
    .catch(function (err) {
    console.log('good.json error', err.message); // never called
})
    // non-existent json file
    .then(function () {
    return loadJSONAsync('absent.json');
})
    .then(function (val) { console.log(val); }) // never called
    .catch(function (err) {
    console.log('absent.json error', err.message);
})
    // invalid json file
    .then(function () {
    return loadJSONAsync('bad.json');
})
    .then(function (val) { console.log(val); }) // never called
    .catch(function (err) {
    console.log('bad.json error', err.message);
});
