//Ejemplo de llamada a then
// const promise = new Promise((resolve, reject)=>{
//     resolve(123);
// });
// promise.then((res)=>{
//     console.log('I get called:', res ===123);
// });

// promise.catch((err)=>{

// })

//Ejemplo de llamada a catch
const promise = new Promise((resolve, reject) => {
    reject(new Error("algo malo a pasado"));
});
promise.then((res) => {

})
promise.catch((err) => {
    console.log('Tengo una llamda:', err.message);
});

