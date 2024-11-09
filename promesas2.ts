//Promesas en paralelo
// main.ts 
//Una funcion asincronica simulando la peticion desde el servidor
function loadItem(id: number): Promise<{id: number}>{
    return new Promise((resolve)=>{
        console.log('loadign item', id);
        setTimeout(()=>{//simulando un tiempo de respuesta del servidor
            resolve({id:id});
        }, 1000);
    })
}

//Cadena (serie) de promesas
let item1, item2;
loadItem(1)
    .then((res)=>{
        item1 = res;
        return loadItem(2);
    })
    .then((res)=>{
        item2 = res;
        console.log('done');
    }); //overall time will be around 2s

//Promesas en paralelo
Promise.all([loadItem(1),loadItem(2)])
    .then((res)=>{
        [item1, item2] = res;
        console.log('done');
    })